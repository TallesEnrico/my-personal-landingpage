export type Project = {
  id: string
  title: string
  description: string
  category: string
  technologies: string[]
  href: string
  featured?: boolean
  accent: string
  demo: boolean
}

export const projects: Project[] = [
  {
    id: "aurora-commerce",
    title: "Aurora Commerce",
    description:
      "Plataforma de e-commerce premium com jornada de compra cinematográfica, checkout otimizado e design system próprio.",
    category: "Product Design · Frontend",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    href: "#",
    featured: true,
    accent: "#C6A66B",
    demo: true,
  },
  {
    id: "nova-studio",
    title: "Nova Studio OS",
    description:
      "Interface operacional para um estúdio criativo digital — dashboards, pipelines e colaboração em tempo real.",
    category: "SaaS · UI Engineering",
    technologies: ["React", "Node.js", "WebSocket", "Three.js"],
    href: "#",
    featured: true,
    accent: "#9D8055",
    demo: true,
  },
  {
    id: "lumen-brand",
    title: "Lumen Brand System",
    description:
      "Experiência editorial para um sistema de marca de luxo, com tipografia expressiva e microinterações precisas.",
    category: "Branding · Web Experience",
    technologies: ["Next.js", "GSAP", "Tailwind"],
    href: "#",
    accent: "#C6A66B",
    demo: true,
  },
  {
    id: "orbit-analytics",
    title: "Orbit Analytics",
    description:
      "Painel analítico com visualizações densas, hierarquia tipográfica clara e performance em grandes volumes de dados.",
    category: "Data UI · Frontend",
    technologies: ["React", "D3", "TypeScript"],
    href: "#",
    accent: "#929292",
    demo: true,
  },
]
