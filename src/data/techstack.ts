export interface TechItem {
  name: string
  iconDark: string
  iconLight: string
  category:
    | "language"
    | "frontend"
    | "backend"
    | "database"
    | "tools"
    | "ai"
  singleVariant?: boolean
}

const techStack: TechItem[] = [
  {
    name: "HTML",
    iconDark: "/icons/tech/html5.svg",
    iconLight: "/icons/tech/html5.svg",
    category: "language",
    singleVariant: true,
  },
  {
    name: "CSS",
    iconDark: "/icons/tech/css3.svg",
    iconLight: "/icons/tech/css3.svg",
    category: "language",
    singleVariant: true,
  },
  {
    name: "JavaScript",
    iconDark: "/icons/tech/javascript.svg",
    iconLight: "/icons/tech/javascript.svg",
    category: "language",
    singleVariant: true,
  },
  {
    name: "TypeScript",
    iconDark: "/icons/tech/typescript.svg",
    iconLight: "/icons/tech/typescript.svg",
    category: "language",
    singleVariant: true,
  },
  {
    name: "Python",
    iconDark: "/icons/tech/python.svg",
    iconLight: "/icons/tech/python.svg",
    category: "language",
    singleVariant: true,
  },
  {
    name: "Java",
    iconDark: "/icons/tech/java.svg",
    iconLight: "/icons/tech/java.svg",
    category: "language",
    singleVariant: true,
  },
  {
    name: "React",
    iconDark: "/icons/tech/react.svg",
    iconLight: "/icons/tech/react.svg",
    category: "frontend",
    singleVariant: true,
  },
  {
    name: "Next.js",
    iconDark: "/icons/tech/nextjs-dark.svg",
    iconLight: "/icons/tech/nextjs-light.svg",
    category: "frontend",
    singleVariant: false,
  },
  {
    name: "Tailwind CSS",
    iconDark: "/icons/tech/tailwindcss.svg",
    iconLight: "/icons/tech/tailwindcss.svg",
    category: "frontend",
    singleVariant: true,
  },
  {
    name: "Node.js",
    iconDark: "/icons/tech/nodejs.svg",
    iconLight: "/icons/tech/nodejs.svg",
    category: "backend",
    singleVariant: true,
  },
  {
    name: "Express",
    iconDark: "/icons/tech/express-dark.svg",
    iconLight: "/icons/tech/express-light.svg",
    category: "backend",
    singleVariant: false,
  },
  {
    name: "Bun",
    iconDark: "/icons/tech/bun.svg",
    iconLight: "/icons/tech/bun.svg",
    category: "backend",
    singleVariant: true,
  },
  {
    name: "PostgreSQL",
    iconDark: "/icons/tech/postgresql.svg",
    iconLight: "/icons/tech/postgresql.svg",
    category: "database",
    singleVariant: true,
  },
  {
    name: "MySQL",
    iconDark: "/icons/tech/mysql.svg",
    iconLight: "/icons/tech/mysql.svg",
    category: "database",
    singleVariant: true,
  },
  {
    name: "MongoDB",
    iconDark: "/icons/tech/mongodb.svg",
    iconLight: "/icons/tech/mongodb.svg",
    category: "database",
    singleVariant: true,
  },
  {
    name: "LangChain",
    iconDark: "/icons/tech/langchain.svg",
    iconLight: "/icons/tech/langchain.svg",
    category: "ai",
    singleVariant: true,
  },
  {
    name: "Pinecone",
    iconDark: "/icons/tech/pinecone.svg",
    iconLight: "/icons/tech/pinecone.svg",
    category: "ai",
    singleVariant: true,
  },
  {
    name: "Git",
    iconDark: "/icons/tech/git.svg",
    iconLight: "/icons/tech/git.svg",
    category: "tools",
    singleVariant: true,
  },
  {
    name: "GitHub",
    iconDark: "/icons/tech/github-dark.svg",
    iconLight: "/icons/tech/github-light.svg",
    category: "tools",
    singleVariant: false,
  },
  {
    name: "Docker",
    iconDark: "/icons/tech/docker.svg",
    iconLight: "/icons/tech/docker.svg",
    category: "tools",
    singleVariant: true,
  },
  {
    name: "Vercel",
    iconDark: "/icons/tech/vercel-dark.svg",
    iconLight: "/icons/tech/vercel-light.svg",
    category: "tools",
    singleVariant: false,
  },
  {
    name: "VS Code",
    iconDark: "/icons/tech/vscode-dark.svg",
    iconLight: "/icons/tech/vscode-light.svg",
    category: "tools",
    singleVariant: false,
  },
  {
    name: "Linux",
    iconDark: "/icons/tech/linux.svg",
    iconLight: "/icons/tech/linux.svg",
    category: "tools",
    singleVariant: true,
  },
]

export default techStack
