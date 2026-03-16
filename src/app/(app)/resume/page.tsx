import Panel from "@/components/portfolio/Panel";
import {
  featuredProjects,
  focusAreas,
  portfolio,
  socialLinks,
  stack,
} from "@/content/portfolio";

export default function Resume() {
  return (
    <main className="screen-line-before screen-line-after mb-6 p-1 py-1.25">
      <div className="rounded-sm border border-border bg-background p-3 sm:p-4">
        <div className="grid gap-3 md:grid-cols-6">
          <Panel
            eyebrow="Resume Snapshot"
            title="A compact professional summary"
            className="md:col-span-4"
          >
            <div className="space-y-4">
              <p className="text-sm leading-7 text-muted-foreground">
                Until the full resume PDF is added, this page works as a concise summary of what
                this portfolio can already support: technical direction, project proof, and the
                type of work I am actively trying to grow into.
              </p>
              <div className="rounded-sm border border-border bg-muted/10 p-3">
                <p className="text-sm font-semibold text-foreground">Current positioning</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {portfolio.headline}
                </p>
              </div>
            </div>
          </Panel>

          <Panel eyebrow="Availability" title="What I am looking for" className="md:col-span-2">
            <div className="space-y-3">
              <p className="text-sm leading-7 text-muted-foreground">
                {portfolio.availability}
              </p>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-sm border border-border p-3 transition-colors duration-200 hover:border-foreground/25 hover:bg-muted/20"
                >
                  <p className="text-sm font-semibold text-foreground">{link.label}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{link.value}</p>
                </a>
              ))}
            </div>
          </Panel>

          <Panel eyebrow="Strengths" title="Core strengths" className="md:col-span-3">
            <div className="space-y-3">
              {focusAreas.map((area) => (
                <div key={area.title} className="rounded-sm border border-border bg-muted/10 p-3">
                  <p className="text-sm font-semibold text-foreground">{area.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel eyebrow="Technical Toolkit" title="Tools and technologies" className="md:col-span-3">
            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-sm border border-border bg-muted/15 px-2.5 py-1.5 text-xs uppercase tracking-[0.16em] text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </Panel>

          <Panel eyebrow="Selected Work" title="Projects supporting this summary" className="md:col-span-6">
            <div className="grid gap-3 md:grid-cols-3">
              {featuredProjects.map((project) => (
                <div key={project.name} className="rounded-sm border border-border bg-muted/10 p-3">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {project.tag}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">{project.name}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {project.summary}
                  </p>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </main>
  );
}
