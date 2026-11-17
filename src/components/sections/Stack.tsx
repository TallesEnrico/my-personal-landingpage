import { Box, Code2, Layers, LayoutTemplate, Sparkles, Waves } from "lucide-react"
import { stackIntro, stackItems } from "@/data/stack"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"

const icons = {
  layers: Layers,
  motion: Waves,
  box: Box,
  layout: LayoutTemplate,
  sparkles: Sparkles,
  code: Code2,
} as const

export function Stack() {
  return (
    <section id="stack" className="relative py-24 sm:py-32">
      <div className="stack-ground pointer-events-none" aria-hidden />
      <div className="container relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow={stackIntro.eyebrow}
            title={stackIntro.title}
            description="Ferramentas escolhidas para precisão visual, movimento e acabamento de produto."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stackItems.map((item, index) => {
            const Icon = icons[item.icon]
            return (
              <article
                key={item.title}
                className="glass-card reveal-in group flex h-full flex-col p-7 sm:p-8"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--glass-border)] text-[var(--gold)]">
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-[1.35rem] font-medium tracking-[-0.03em] text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.72rem] uppercase tracking-[0.16em] text-[var(--gold)]">
                  {item.label}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
