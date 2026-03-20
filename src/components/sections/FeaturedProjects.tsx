import { ProjectCard } from "@/components/ui/ProjectCard"
import type { PinnedRepo } from "@/types"

export function FeaturedProjects({
  repos,
}: {
  repos: PinnedRepo[]
}) {
  const featuredRepos = repos.slice(0, 4)

  return (
    <section>
      {featuredRepos.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {featuredRepos.map((repo, index) => (
            <ProjectCard key={repo.name} project={repo} index={index} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted">No pinned repositories found.</p>
      )}
    </section>
  )
}
