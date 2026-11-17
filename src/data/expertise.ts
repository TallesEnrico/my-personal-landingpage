export type ExpertiseItem = {
  title: string
  description: string
  items: string[]
}

export const expertise: ExpertiseItem[] = [
  {
    title: "Frontend Engineering",
    description:
      "Interfaces precisas, performáticas e com acabamento de produto.",
    items: ["React", "Next.js", "TypeScript", "Vue.js", "React Native"],
  },
  {
    title: "Product & Interaction",
    description:
      "Motion, hierarquia visual e experiências digitais memoráveis.",
    items: ["Framer Motion", "Design Systems", "Acessibilidade", "UX Writing"],
  },
  {
    title: "Architecture",
    description:
      "Estruturas sólidas para produtos que precisam escalar com elegância.",
    items: ["Node.js", "APIs", "Cloudflare", "Golang", "Supabase", "MySQL"],
  },
  {
    title: "Craft & Delivery",
    description:
      "Do conceito ao deploy — qualidade técnica com direção criativa.",
    items: ["CI/CD", "Performance", "SEO", "Code Review"],
  },
]
