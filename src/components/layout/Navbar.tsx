import { useEffect, useState } from "react"
import { Github, Linkedin, Menu, X } from "lucide-react"
import { siteConfig } from "@/data/site"
import { cn } from "@/lib/cn"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled || open
          ? "border-b border-white/[0.06] bg-[#08090B]/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto grid h-[4.5rem] max-w-[1440px] grid-cols-[auto_1fr_auto] items-center gap-6 px-6 sm:h-20 sm:px-10 lg:grid-cols-[1fr_auto_1fr] lg:px-14 xl:px-20">
        <a
          href="#top"
          className="text-[1.05rem] font-medium tracking-[-0.03em] text-[var(--ink)] transition-colors duration-300 hover:text-[var(--gold)]"
        >
          {siteConfig.name}
        </a>

        <nav className="hidden items-center justify-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#858585] transition-colors duration-300 hover:text-[#E8E3D9]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-5 lg:flex">
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#858585] transition-colors duration-300 hover:text-[#C5A46D]"
          >
            <Linkedin size={15} strokeWidth={1.6} />
          </a>
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#858585] transition-colors duration-300 hover:text-[#C5A46D]"
          >
            <Github size={15} strokeWidth={1.6} />
          </a>
          <span className="hidden items-center gap-2 text-[0.62rem] uppercase tracking-[0.16em] text-[#858585] xl:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C5A46D]" />
            {siteConfig.availability}
          </span>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="col-start-3 inline-flex h-10 w-10 items-center justify-center justify-self-end text-[#E8E3D9] lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/[0.06] bg-[#08090B] lg:hidden">
          <nav className="mx-auto flex max-w-[1440px] flex-col px-6 py-4 sm:px-10">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/[0.06] py-4 text-[0.75rem] uppercase tracking-[0.2em] text-[#E8E3D9]"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-5 py-4">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.72rem] uppercase tracking-[0.16em] text-[#858585]"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.72rem] uppercase tracking-[0.16em] text-[#858585]"
              >
                GitHub
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
