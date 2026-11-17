import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { expertise } from "@/data/expertise"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { cn } from "@/lib/cn"

export function Expertise() {
  const section = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-120, 140])

  return (
    <section id="expertise" ref={section} className="relative py-24 sm:py-32">
      <div className="expertise-ground pointer-events-none" aria-hidden>
        <motion.div className="expertise-glow" style={{ y }} />
      </div>
      <div className="container relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Expertise"
            title="Competências com intenção."
            description="Interface, produto, arquitetura e entrega tratados com o mesmo rigor."
          />
        </Reveal>

        <article className="glass-card reveal-in mt-14">
          <div className="grid md:grid-cols-2">
            {expertise.map((item, index) => {
              const isLeft = index % 2 === 0
              const isTop = index < 2
              const isLast = index === expertise.length - 1

              return (
                <div
                  key={item.title}
                  className={cn(
                    "flex h-full flex-col px-7 py-8 sm:px-9 sm:py-10",
                    !isLast && "max-md:border-b max-md:border-white/[0.08]",
                    isTop && "md:border-b md:border-white/[0.08]",
                    isLeft && "md:border-r md:border-white/[0.08]",
                  )}
                >
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="text-[1.45rem] font-medium tracking-[-0.03em] text-[var(--ink)]">
                      {item.title}
                    </h3>
                    <span className="pt-2 text-[0.68rem] tracking-[0.22em] text-[var(--gold)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-3 max-w-sm text-[0.98rem] leading-[1.7] text-[var(--ink)]/72">
                    {item.description}
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                    {item.items.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-white/10 px-3 py-1 text-[0.72rem] text-[var(--ink)]/78"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </article>
      </div>
    </section>
  )
}
