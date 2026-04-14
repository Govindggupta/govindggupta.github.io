import type { ReactNode } from "react"

type SocialIconComponent = (props: {
  size?: number
  strokeWidth?: number
  className?: string
}) => ReactNode

export interface SocialLink {
  label: string
  href: string
  icon: SocialIconComponent
}

export interface Project {
  name: string
  description: string
  tags: string[]
  githubUrl: string
  liveUrl: string
}

export interface BlogPostFrontmatter {
  title: string
  date: string
  description: string
  tags: string[]
  cover?: string
}

export interface BlogPostSummary extends BlogPostFrontmatter {
  slug: string
  readTimeMinutes: number
  readTimeText: string
}

export interface BlogPost extends BlogPostSummary {
  content: ReactNode
}

export interface PageMetadataInput {
  title?: string
  description?: string
  path?: string
  type?: "website" | "article"
  publishedTime?: string
  tags?: string[]
}
