import Panel from "@/components/portfolio/Panel";
import { featuredProjects, portfolio } from "@/content/portfolio";

export default function Projects() {
  return (
    <main className="screen-line-before screen-line-after mb-6 p-1 py-1.25">
      <div className="rounded-sm border border-border bg-background p-3 sm:p-4">
        <div className="grid gap-3 md:grid-cols-6">
          <Panel
            eyebrow="Projects"
            title="Selected builds and experiments"
            className="md:col-span-6"
          >
            <p className="max-w-4xl text-sm leading-7 text-muted-foreground">
              Most of the public proof for this portfolio currently lives on GitHub. These
              projects show the direction I am most interested in: useful AI features, clean
              interface work, and application ideas that can grow into stronger product systems.
            </p>
          </Panel>

          {featuredProjects.map((project) => (
            <Panel
              key={project.name}
              eyebrow={project.tag}
              title={project.name}
              className="md:col-span-2"
            >
              <div className="space-y-4">
                <p className="text-sm leading-7 text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-sm border border-border bg-muted/15 px-2.5 py-1.5 text-xs uppercase tracking-[0.16em] text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <p
                      key={highlight}
                      className="rounded-sm border border-border bg-muted/10 px-3 py-2 text-sm text-muted-foreground"
                    >
                      {highlight}
                    </p>
                  ))}
                </div>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-sm border border-border px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors duration-200 hover:border-foreground/25 hover:bg-muted/20"
                >
                  Open Repository
                </a>
              </div>
            </Panel>
          ))}

          <Panel
            eyebrow="More Work"
            title="Explore the full GitHub profile"
            className="md:col-span-6"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                There are more experiments and smaller builds beyond the featured set. The GitHub
                profile is the best place to inspect the broader range of repositories as this
                portfolio continues to grow.
              </p>
              <a
                href={portfolio.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-sm border border-foreground bg-foreground px-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-background transition-colors duration-200 hover:bg-background hover:text-foreground"
              >
                Visit GitHub
              </a>
            </div>
          </Panel>
        </div>
      </div>
    </main>
  );
}
