export type StackItem = {
  title: string
  label: string
  icon: "layers" | "motion" | "box" | "layout" | "sparkles" | "code"
}

export const stackIntro = {
  eyebrow: "Luxury Technology",
  title: "Stack criativa do projeto",
} as const

export const stackItems: StackItem[] = [
  {
    title: "Frontend Design",
    label: "Essencial",
    icon: "layers",
  },
  {
    title: "Framer Motion",
    label: "Movimento",
    icon: "motion",
  },
  {
    title: "React Three Fiber",
    label: "3D",
    icon: "box",
  },
  {
    title: "Tailwind CSS",
    label: "Interface",
    icon: "layout",
  },
  {
    title: "Lucide Icons",
    label: "Detalhes",
    icon: "sparkles",
  },
  {
    title: "TypeScript",
    label: "Precisão",
    icon: "code",
  },
]
