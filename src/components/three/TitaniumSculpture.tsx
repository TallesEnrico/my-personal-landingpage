import { useMemo, useRef, type MutableRefObject } from "react"
import { useFrame } from "@react-three/fiber"
import {
  BufferGeometry,
  Float32BufferAttribute,
  Vector3,
  type Group,
} from "three"

type TitaniumSculptureProps = {
  mouse: MutableRefObject<{ x: number; y: number }>
  reduced: boolean
}

function knotPoint(phi: number) {
  const p = 2
  const q = 3
  const radius = 1.05
  const tube = 0.46
  const radial = radius + tube * Math.cos(q * phi)
  return new Vector3(
    radial * Math.cos(p * phi),
    tube * Math.sin(q * phi) * 1.08,
    radial * Math.sin(p * phi),
  )
}

function createClosedRibbon(steps: number, radial: number) {
  const points: Vector3[] = []
  const tangents: Vector3[] = []

  for (let i = 0; i < steps; i += 1) {
    points.push(knotPoint((i / steps) * Math.PI * 2))
  }

  for (let i = 0; i < steps; i += 1) {
    const prev = points[(i - 1 + steps) % steps]
    const next = points[(i + 1) % steps]
    tangents.push(next.clone().sub(prev).normalize())
  }

  const normals: Vector3[] = []
  let normal = new Vector3()
  const seed = Math.abs(tangents[0].y) < 0.9 ? new Vector3(0, 1, 0) : new Vector3(1, 0, 0)
  normal.crossVectors(seed, tangents[0]).normalize()

  for (let i = 0; i < steps; i += 1) {
    normals.push(normal.clone())
    const current = tangents[i]
    const upcoming = tangents[(i + 1) % steps]
    const axis = new Vector3().crossVectors(current, upcoming)
    const sine = axis.length()
    const cosine = Math.max(-1, Math.min(1, current.dot(upcoming)))
    if (sine > 1e-8) {
      axis.divideScalar(sine)
      normal.applyAxisAngle(axis, Math.atan2(sine, cosine))
    }
    normal.addScaledVector(upcoming, -normal.dot(upcoming)).normalize()
  }

  const start = normals[0]
  const closure = new Vector3().crossVectors(start, normal)
  const holonomy = Math.atan2(
    tangents[0].dot(closure),
    Math.max(-1, Math.min(1, start.dot(normal))),
  )

  for (let i = 0; i < steps; i += 1) {
    normals[i].applyAxisAngle(tangents[i], -holonomy * (i / steps))
  }

  const halfWidth = 0.34
  const halfHeight = 0.042
  const positions: number[] = []

  for (let i = 0; i < steps; i += 1) {
    const binormal = new Vector3().crossVectors(tangents[i], normals[i]).normalize()
    for (let j = 0; j < radial; j += 1) {
      const angle = (j / radial) * Math.PI * 2
      const vertex = points[i]
        .clone()
        .addScaledVector(normals[i], Math.cos(angle) * halfWidth)
        .addScaledVector(binormal, Math.sin(angle) * halfHeight)
      positions.push(vertex.x, vertex.y, vertex.z)
    }
  }

  const indices: number[] = []
  for (let i = 0; i < steps; i += 1) {
    const next = (i + 1) % steps
    for (let j = 0; j < radial; j += 1) {
      const around = (j + 1) % radial
      const a = i * radial + j
      const b = next * radial + j
      const c = next * radial + around
      const d = i * radial + around
      indices.push(a, b, d, b, c, d)
    }
  }

  const geometry = new BufferGeometry()
  geometry.setAttribute("position", new Float32BufferAttribute(positions, 3))
  geometry.setIndex(indices)
  geometry.computeVertexNormals()
  geometry.center()
  return geometry
}

export function TitaniumSculpture({ mouse, reduced }: TitaniumSculptureProps) {
  const group = useRef<Group>(null)
  const steps = reduced ? 220 : 420
  const radial = reduced ? 24 : 40

  const geometry = useMemo(
    () => createClosedRibbon(steps, radial),
    [radial, steps],
  )

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.elapsedTime
    group.current.rotation.y = 0.85 + t * 0.04 + mouse.current.x * 0.16
    group.current.rotation.x = 0.72 + mouse.current.y * 0.08
    group.current.rotation.z = 0.28
  })

  return (
    <group ref={group} scale={reduced ? 0.82 : 0.92}>
      <mesh geometry={geometry} castShadow>
        <meshPhysicalMaterial
          color="#12110f"
          metalness={1}
          roughness={0.32}
          clearcoat={0.45}
          clearcoatRoughness={0.22}
          envMapIntensity={1.05}
          sheen={0.4}
          sheenRoughness={0.35}
          sheenColor="#C5A46D"
          anisotropy={0.9}
          anisotropyRotation={1.2}
          flatShading={false}
        />
      </mesh>
    </group>
  )
}
