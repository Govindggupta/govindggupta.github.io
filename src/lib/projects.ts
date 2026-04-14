import "server-only"

import { readFile, readdir } from "node:fs/promises"
import path from "node:path"
import {
  createElement,
  type ComponentPropsWithoutRef,
  type HTMLAttributes,
  type ReactNode,
} from "react"

import matter from "gray-matter"
import type { MDXComponents } from "mdx/types"
import { compileMDX } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"

const PROJECT_DIRECTORY = path.join(process.cwd(), "src", "content", "projects")

export type ProjectStatus = "completed" | "in-progress" | "archived"

export interface ProjectFrontmatter {
  title: string
  date: string
  description: string
  status: ProjectStatus
  github: string
  live?: string
  tech: string[]
  image: string
}

export interface ProjectSummary extends ProjectFrontmatter {
  slug: string
}

export interface Project extends ProjectSummary {
  content: ReactNode
}

function mergeClassName(
  propsClassName: string | undefined,
  defaultClassName: string
) {
  return [defaultClassName, propsClassName].filter(Boolean).join(" ")
}

function withClassName<T extends HTMLAttributes<HTMLElement>>(
  props: T,
  className: string
) {
  return {
    ...props,
    className: mergeClassName(props.className, className),
  }
}

const mdxComponents: MDXComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) =>
    createElement(
      "h2",
      withClassName(props, "mt-8 mb-3 text-lg font-semibold text-foreground")
    ),
  h3: (props: ComponentPropsWithoutRef<"h3">) =>
    createElement(
      "h3",
      withClassName(props, "mt-6 mb-2 text-base font-semibold text-foreground")
    ),
  p: (props: ComponentPropsWithoutRef<"p">) =>
    createElement(
      "p",
      withClassName(props, "mb-4 text-sm leading-relaxed text-muted")
    ),
  a: (props: ComponentPropsWithoutRef<"a">) =>
    createElement("a", {
      ...withClassName(
        props,
        "text-foreground underline underline-offset-2 transition-colors hover:text-muted"
      ),
      target:
        typeof props.href === "string" && props.href.startsWith("http")
          ? "_blank"
          : props.target,
      rel:
        typeof props.href === "string" && props.href.startsWith("http")
          ? "noreferrer"
          : props.rel,
    }),
  code: (props: ComponentPropsWithoutRef<"code">) => {
    if (props.className?.startsWith("language-")) {
      return createElement("code", props)
    }

    return createElement(
      "code",
      withClassName(
        props,
        "rounded border border-border bg-neutral-100 px-1.5 py-0.5 font-mono text-xs dark:bg-neutral-900"
      )
    )
  },
  pre: (props: ComponentPropsWithoutRef<"pre">) =>
    createElement(
      "pre",
      withClassName(
        props,
        "mb-4 overflow-x-auto rounded-xl border border-border bg-neutral-100 p-4 text-sm text-foreground dark:bg-neutral-900"
      )
    ),
  strong: (props: ComponentPropsWithoutRef<"strong">) =>
    createElement(
      "strong",
      withClassName(props, "font-semibold text-foreground")
    ),
}

function toProjectFileSlug(fileName: string) {
  return fileName.replace(/\.mdx$/, "")
}

function isProjectFile(fileName: string) {
  return /^[a-z0-9-]+\.mdx$/.test(fileName)
}

function isProjectStatus(value: unknown): value is ProjectStatus {
  return (
    value === "completed" || value === "in-progress" || value === "archived"
  )
}

function parseFrontmatter(data: Record<string, unknown>, slug: string) {
  const { title, date, description, status, github, live, tech, image } = data

  if (
    typeof title !== "string" ||
    typeof date !== "string" ||
    typeof description !== "string" ||
    !isProjectStatus(status) ||
    typeof github !== "string" ||
    (live !== undefined && typeof live !== "string") ||
    !Array.isArray(tech) ||
    !tech.every((item) => typeof item === "string") ||
    typeof image !== "string"
  ) {
    throw new Error(`Invalid frontmatter for project "${slug}".`)
  }

  const frontmatter: ProjectFrontmatter = {
    title,
    date,
    description,
    status,
    github,
    live,
    tech,
    image,
  }

  return frontmatter
}

async function readProjectSource(slug: string) {
  const filePath = path.join(PROJECT_DIRECTORY, `${slug}.mdx`)
  const source = await readFile(filePath, "utf8")
  const { content, data } = matter(source)

  return {
    content,
    frontmatter: parseFrontmatter(data, slug),
  }
}

export function formatProjectDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date))
}

export async function getProjectSlugs() {
  const entries = await readdir(PROJECT_DIRECTORY)

  return entries.filter(isProjectFile).map(toProjectFileSlug)
}

export async function getAllProjects(): Promise<ProjectSummary[]> {
  const slugs = await getProjectSlugs()
  const projects = await Promise.all(
    slugs.map(async (slug) => {
      const { frontmatter } = await readProjectSource(slug)

      return {
        slug,
        ...frontmatter,
      }
    })
  )

  return projects.sort(
    (left, right) =>
      new Date(right.date).getTime() - new Date(left.date).getTime()
  )
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const { content, frontmatter } = await readProjectSource(slug)
    const { content: compiledContent } = await compileMDX({
      source: content,
      components: mdxComponents,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    })

    return {
      slug,
      content: compiledContent,
      ...frontmatter,
    }
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      return null
    }

    throw error
  }
}
