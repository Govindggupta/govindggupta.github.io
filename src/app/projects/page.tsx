import { ProjectCard } from "@/components/ui/ProjectCard"
import { BackLink } from "@/components/ui/BackLink"
import { PageTransition } from "@/components/ui/PageTransition"
import { buildMetadata } from "@/lib/metadata"
import { getAllProjects } from "@/lib/projects"

export async function generateMetadata() {
  return buildMetadata({
    title: "Projects",
    description:
      "A small selection of product builds spanning dashboards, publishing systems, and internal tooling.",
    path: "/projects",
  })
}

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <PageTransition className="mx-auto w-full max-w-225 px-4 section-space md:px-6">
      <section className="space-y-6">
        <div className="space-y-4">
          <BackLink href="/" className="mb-0">
            Back home
          </BackLink>
          <h1 className="text-4xl font-bold text-foreground">Projects</h1>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {projects
              .sort((a, b) => {
                const aHasUrl = a.live ? 1 : 0
                const bHasUrl = b.live ? 1 : 0
                return bHasUrl - aHasUrl
              })
              .map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
          </div>
        ) : (
          <p className="text-sm text-muted">No projects found.</p>
        )}
      </section>
    </PageTransition>
  )
}
