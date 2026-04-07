export interface Experience {
  company: string
  role: string
  duration: string
  location: string
  description: string[]
  tech: string[]
  type?: "full-time" | "part-time" | "internship" | "freelance"
  url?: string
  logo?: string
  current?: boolean
}

export const experiences: Experience[] = [
]