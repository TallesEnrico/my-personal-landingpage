import { ContactShadows, Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useState, type MutableRefObject } from "react"
import { ACESFilmicToneMapping } from "three"
import { TitaniumSculpture } from "@/components/three/TitaniumSculpture"

function Scene({
  mouse,
  reduced,
}: {
  mouse: MutableRefObject<{ x: number; y: number }>
  reduced: boolean
}) {
  return (
    <>
      <ambientLight intensity={0.07} />
      <hemisphereLight args={["#3a3226", "#050505", 0.18]} />
      <directionalLight position={[5, 4.5, 3]} intensity={2.6} color="#ffe4bc" />
      <directionalLight position={[-3, 1, -2]} intensity={0.35} color="#8d7348" />
      <spotLight
        position={[1.5, 2.2, 4]}
        angle={0.42}
        penumbra={0.7}
        intensity={16}
        color="#C5A46D"
      />
      <spotLight
        position={[0, -1.2, 2]}
        angle={0.8}
        penumbra={1}
        intensity={6}
        color="#e6c98a"
      />
      <TitaniumSculpture mouse={mouse} reduced={reduced} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0.2, -1.45, 0]}>
        <planeGeometry args={[14, 14]} />
        <meshStandardMaterial color="#070708" metalness={0.92} roughness={0.22} />
      </mesh>
      {!reduced ? (
        <ContactShadows
          position={[0, -1.55, 0]}
          opacity={0.45}
          scale={8}
          blur={2.6}
          far={4}
          color="#000000"
        />
      ) : null}
      <Environment preset="studio" environmentIntensity={0.62} />
    </>
  )
}

function SculptureFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="h-[58%] w-[58%] rounded-full"
        style={{
          background:
            "conic-gradient(from 210deg, transparent 0 18%, rgba(197,164,109,0.55) 28%, rgba(22,24,28,0.2) 40%, transparent 52%, rgba(197,164,109,0.35) 68%, transparent 82%)",
          WebkitMask:
            "radial-gradient(circle, transparent 46%, #000 47% 62%, transparent 63%)",
          mask: "radial-gradient(circle, transparent 46%, #000 47% 62%, transparent 63%)",
          filter: "blur(0.2px)",
        }}
      />
    </div>
  )
}

export function HeroScene({
  mouse,
}: {
  mouse: MutableRefObject<{ x: number; y: number }>
}) {
  const [ready, setReady] = useState(false)
  const [webgl, setWebgl] = useState(true)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const narrow = window.matchMedia("(max-width: 1023px)")
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReduced(narrow.matches || motion.matches)
    update()
    narrow.addEventListener("change", update)
    motion.addEventListener("change", update)

    try {
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      setWebgl(Boolean(gl))
    } catch {
      setWebgl(false)
    }
    setReady(true)

    return () => {
      narrow.removeEventListener("change", update)
      motion.removeEventListener("change", update)
    }
  }, [])

  if (!ready || !webgl) return <SculptureFallback />

  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={reduced ? [1, 1.15] : [1, 1.6]}
        camera={{ position: [0.05, 0.12, 7.4], fov: 30 }}
        gl={{
          antialias: !reduced,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: ACESFilmicToneMapping,
          toneMappingExposure: 1.05,
        }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <Suspense fallback={null}>
          <Scene mouse={mouse} reduced={reduced} />
        </Suspense>
      </Canvas>
    </div>
  )
}
