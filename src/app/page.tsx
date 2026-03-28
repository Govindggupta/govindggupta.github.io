import { Suspense } from "react"
import Link from "next/link"

import {
  GitHubGraph,
  GitHubGraphFallback,
  githubSectionLink,
} from "@/components/sections/githubgraph/GitHubGraph"
import { Experience } from "@/components/sections/Experience"
import { FeaturedProjects } from "@/components/sections/FeaturedProjects"
import { Hero } from "@/components/sections/Hero"
import { Interests } from "@/components/sections/Interests"
import { LatestPosts } from "@/components/sections/LatestPosts"
import { TechStack } from "@/components/sections/TechStack"
import { SectionReveal } from "@/components/ui/SectionReveal"
import { experiences } from "@/data/experience"
import { getAllPosts } from "@/lib/mdx"
import { buildMetadata } from "@/lib/metadata"
import { getPinnedRepos } from "@/lib/github"

function HomeSectionHeader({
  title,
  description,
  href,
  count,
  external = false,
  showLink = true,
}: {
  title: string
  description: string
  href: string
  count?: number
  external?: boolean
  showLink?: boolean
}) {
  const content = (
    <div className="mb-6 flex items-start justify-between gap-6">
      <div className="space-y-1">
        <h2 className="text-4xl font-bold tracking-tight text-foreground">
          {title}
          {typeof count === "number" ? (
            <sup className="ml-1 align-super text-base leading-none font-normal text-muted">
              {count}
            </sup>
          ) : null}
        </h2>
        <p className="text-sm text-muted">{description}</p>
      </div>
      {showLink ? (
        <span className="shrink-0 self-end text-sm text-muted transition-colors hover:text-foreground">
          {external ? "View on GitHub →" : "View all →"}
        </span>
      ) : null}
    </div>
  )

  if (!showLink) {
    return content
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block">
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className="block">
      {content}
    </Link>
  )
}

export async function generateMetadata() {
  return buildMetadata({
    title: "Home",
    path: "/",
  })
}

export default async function HomePage() {
  const [repos, posts] = await Promise.all([getPinnedRepos(), getAllPosts()])
  const projectsSpacingClass = experiences.length > 0 ? "mt-20" : "mt-24"

  return (
    <main className="pb-16">
      <div className="pt-20 [&>section]:pt-0 [&>section]:pb-0 [&>section]:md:pt-0">
        <Hero />
      </div>

      <SectionReveal className="mx-auto mt-12 w-full max-w-[900px] px-4 md:px-6">
        <TechStack />
      </SectionReveal>

      {experiences.length > 0 ? (
        <SectionReveal className="mx-auto mt-24 w-full max-w-[900px] px-4 md:px-6">
          <HomeSectionHeader
            title="Experience"
            description="Where I've worked."
            href="/"
            showLink={false}
          />
          <Experience />
        </SectionReveal>
      ) : null}

      <SectionReveal
        className={`mx-auto mt-24 w-full max-w-[900px] px-4 md:px-6`}
      >
        <HomeSectionHeader
          title="Projects"
          count={repos.length}
          description="Things I've built."
          href="/projects"
          showLink={false}
        />
        <FeaturedProjects repos={repos.slice(0, 4)} />
      </SectionReveal>

      <SectionReveal className="mx-auto mt-24 w-full max-w-[900px] px-4 md:px-6">
        <HomeSectionHeader
          title="Blog"
          count={posts.length}
          description="Thoughts and learnings."
          href="/blog"
          showLink={false}
        />
        <LatestPosts posts={posts.slice(0, 4)} />
      </SectionReveal>

      <SectionReveal className="mx-auto mt-24 w-full max-w-[900px] px-4 md:px-6">
        <HomeSectionHeader
          title="GitHub"
          description="My open source activity."
          href={githubSectionLink}
          external
        />
        <Suspense fallback={<GitHubGraphFallback />}>
          <GitHubGraph />
        </Suspense>
      </SectionReveal>

      {/* <SectionReveal className="mx-auto mt-14 w-full max-w-[900px] px-4 md:px-6">
        <Interests />
      </SectionReveal> */}
    </main>
  )
}
