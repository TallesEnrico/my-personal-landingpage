import { siteConfig } from "@/data/site"

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container">
        <article className="profile-card reveal-in mx-auto max-w-3xl px-8 py-12 text-center sm:px-12 sm:py-16">
          <p className="pill mx-auto">
            <span className="pill-dot" />
            Contact
          </p>
          <h2 className="mt-6 text-[clamp(2rem,4.5vw,3rem)] font-medium leading-[1.08] tracking-[-0.035em] text-[var(--ink)]">
            Vamos construir algo extraordinário?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[1.02rem] leading-[1.75] text-[var(--ink)]/72">
            Aberto a colaborações e desafios que pedem engenharia com identidade.
          </p>
          <a href={siteConfig.socials.email} className="btn-solid mt-8">
            {siteConfig.email}
          </a>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.72rem] uppercase tracking-[0.16em] text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.72rem] uppercase tracking-[0.16em] text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
            >
              GitHub
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
