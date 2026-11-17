export type TimelineItem = {
  period: string
  role: string
  organization: string
  description: string
  type: "work" | "education"
}

export const experience: TimelineItem[] = [
  {
    period: "Jul 2022 — Presente",
    role: "Engenheiro de Software",
    organization: "Grupo Pereira",
    description:
      "Desenvolvimento de software com HTML, CSS, JavaScript, Vue.js, React.js e React Native.",
    type: "work",
  },
  {
    period: "Set 2024 — Jan 2026",
    role: "Engenheiro de Software Sênior",
    organization: "Footbao",
    description:
      "Atuação sênior em engenharia de software, com foco em qualidade, entrega e evolução de produto.",
    type: "work",
  },
  {
    period: "Nov 2020 — Jul 2023",
    role: "Programador Full Stack Pleno",
    organization: "Vonix Tecnologia",
    description:
      "Desenvolvimento com HTML, CSS, JavaScript, Vue.js, Node.js, Go e MySQL.",
    type: "work",
  },
  {
    period: "Mai 2018 — Nov 2020",
    role: "Programador Frontend Junior",
    organization: "Centro Universitário Unigran Capital",
    description:
      "Desenvolvimento com HTML, CSS, JavaScript, Vue.js, React Native e PHP.",
    type: "work",
  },
  {
    period: "Formação",
    role: "Análise e Desenvolvimento de Sistemas",
    organization: "Universidade Cruzeiro do Sul / Instituto Federal MS",
    description:
      "Base técnica em programação e desenvolvimento de software.",
    type: "education",
  },
]
