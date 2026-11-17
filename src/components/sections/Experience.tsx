import { experience } from "@/data/experience"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { cn } from "@/lib/cn"

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Experience" title="Trajetória." />
        </Reveal>

        <ol className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute bottom-0 left-3 top-0 w-px bg-white/12 md:left-1/2 md:-translate-x-1/2" />

          {experience.map((item, index) => {
            const onLeft = index % 2 === 0
            return (
              <li
                key={`${item.organization}-${item.role}`}
                className="relative pb-12 last:pb-0 md:grid md:grid-cols-2 md:gap-16"
              >
                <span className="absolute left-3 top-1.5 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-[var(--gold)] bg-[#0c0c0c] md:left-1/2" />
                <Reveal
                  delay={0.04 * index}
                  className={cn(onLeft ? "" : "md:col-start-2")}
                >
                  <article
                    className={cn(
                      "pl-10 md:pl-0",
                      onLeft ? "md:pr-2 md:text-right" : "md:pl-2",
                    )}
                  >
                    <p className="text-[0.72rem] uppercase tracking-[0.16em] text-[var(--muted)]">
                      {item.period}
                    </p>
                    <h3 className="mt-2 text-[1.35rem] font-medium tracking-[-0.03em] text-[var(--ink)]">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-[0.95rem] text-[var(--gold)]">
                      {item.organization}
                    </p>
                    <p className="mt-3 text-[0.98rem] leading-[1.7] text-[var(--ink)]/72">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
