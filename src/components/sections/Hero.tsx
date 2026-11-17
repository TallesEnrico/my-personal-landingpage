import { useRef, type ReactNode } from "react"
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion"
import { siteConfig } from "@/data/site"

function ParallaxLayer({
  distance,
  progress,
  className,
  children,
}: {
  distance: number
  progress: MotionValue<number>
  className?: string
  children: ReactNode
}) {
  const reduce = useReducedMotion()
  const y = useTransform(progress, [0, 1], reduce ? [0, 0] : [0, distance])

  return (
    <motion.div className={className} style={{ y }}>
      {children}
    </motion.div>
  )
}

export function Hero() {
  const section = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start start", "end start"],
  })

  return (
    <section
      id="top"
      ref={section}
      className="hero-open relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <img
        src="/hero-office.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[72%_center]"
      />
      <div className="hero-open-shade" />

      <div className="container relative z-10 py-32">
        <div className="max-w-xl">
          <ParallaxLayer distance={40} progress={scrollYProgress}>
            <p className="pill">
              <span className="pill-dot" />
              {siteConfig.availability}
            </p>
          </ParallaxLayer>
          <ParallaxLayer distance={110} progress={scrollYProgress}>
            <h1 className="mt-7 text-[clamp(3.4rem,7.4vw,6rem)] font-medium leading-[0.94] tracking-[-0.045em] text-[var(--ink)]">
              {siteConfig.name}
            </h1>
          </ParallaxLayer>
          <ParallaxLayer distance={80} progress={scrollYProgress}>
            <p className="mt-5 text-[0.75rem] font-medium uppercase tracking-[0.28em] text-[var(--gold)]">
              Software Engineer
            </p>
          </ParallaxLayer>
          <ParallaxLayer distance={60} progress={scrollYProgress}>
            <p className="mt-5 max-w-md text-[1.05rem] leading-[1.7] text-[var(--ink)]/82">
              {siteConfig.subheadline}
            </p>
          </ParallaxLayer>
          <ParallaxLayer distance={36} progress={scrollYProgress}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#about" className="btn-solid">
                Sobre mim
              </a>
              <a href="#contact" className="btn-ghost">
                Entrar em contato
              </a>
            </div>
          </ParallaxLayer>
        </div>
      </div>

      <a
        href="#about"
        className="scroll-cue absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <span className="scroll-mouse" aria-hidden>
          <span />
        </span>
        Rolar
      </a>
    </section>
  )
}
