import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { siteConfig } from "@/data/site"

export function About() {
  const section = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-12%", "12%"])

  return (
    <section
      id="about"
      ref={section}
      className="relative isolate overflow-hidden py-36 sm:py-44"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src="/about-bg.jpg"
          alt=""
          style={{ y }}
          className="absolute left-0 top-[-12%] h-[124%] w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/50" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34%] bg-gradient-to-b from-[#0c0c0c] via-[#0c0c0c]/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/70 to-transparent" />

      <div className="container relative z-10">
        <article className="profile-card reveal-in mx-auto grid max-w-4xl items-center gap-8 p-6 sm:p-8 md:grid-cols-[11.5rem_1fr] md:gap-10 md:p-10">
          <img
            src="/portrait.jpg"
            alt={siteConfig.name}
            className="aspect-square w-full max-w-[11.5rem] rounded-2xl object-cover object-[center_18%]"
          />
          <div>
            <p className="pill">
              <span className="pill-dot" />
              Software Engineer
            </p>
            <h2 className="mt-4 text-[2rem] font-medium tracking-[-0.035em] text-[var(--ink)] sm:text-[2.4rem]">
              {siteConfig.name}
            </h2>
            <p className="mt-4 text-[0.98rem] leading-[1.75] text-[var(--ink)]/78">
              Sou engenheiro de software com quase uma década de trajetória em
              produtos digitais. Atuo na interseção entre engenharia, design e
              produto — criando interfaces que transmitem autoridade sem perder
              fluidez. Tecnologia de alto nível deve parecer inevitável: cada
              decisão de arquitetura e cada detalhe visual existem para servir
              uma experiência clara, memorável e bem construída.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
