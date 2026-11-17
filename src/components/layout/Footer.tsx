import { siteConfig } from "@/data/site"

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="container flex flex-col gap-3 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[1.05rem] font-medium tracking-[-0.03em] text-[var(--ink)]">
          {siteConfig.name}
        </p>
        <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[var(--muted)]">
          © {siteConfig.year}
        </p>
      </div>
    </footer>
  )
}
