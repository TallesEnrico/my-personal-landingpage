import type { ReactNode } from "react"
import { cn } from "@/lib/cn"

type MagneticButtonProps = {
  children: ReactNode
  href: string
  variant?: "primary" | "ghost"
  className?: string
  external?: boolean
}

export function MagneticButton({
  children,
  href,
  variant = "primary",
  className,
  external,
}: MagneticButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex items-center justify-center px-8 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] transition-colors duration-300",
        variant === "primary" &&
          "bg-[var(--gold)] text-[#111] hover:opacity-90",
        variant === "ghost" &&
          "border border-[var(--glass-border)] text-[var(--ink)] hover:border-[var(--gold)] hover:text-[var(--gold)]",
        className,
      )}
    >
      {children}
    </a>
  )
}
