import { useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion()
  const classes = [reduce ? null : "reveal-in", className].filter(Boolean).join(" ")

  return (
    <div
      className={classes}
      style={reduce ? undefined : { animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
