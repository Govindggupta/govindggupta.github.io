import Panel from "@/components/portfolio/Panel";
import {
  aboutParagraphs,
  focusAreas,
  portfolio,
  socialLinks,
  stack,
} from "@/content/portfolio";

export default function About() {
  return (
    <main className="screen-line-before screen-line-after mb-6 p-1 py-1.25">
      <div className="rounded-sm border border-border bg-background p-3 sm:p-4">
        <div className="grid gap-3 md:grid-cols-6">
          <Panel eyebrow="About" title={`Meet ${portfolio.name}`} className="md:col-span-4">
            <div className="space-y-4 text-sm leading-7 text-muted-foreground">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Panel>

          <Panel eyebrow="Profiles" title="Where to find me" className="md:col-span-2">
            <div className="space-y-3">
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
              <div className="rounded-sm border border-border bg-muted/10 p-3">
                <p className="text-sm font-semibold text-foreground">Location</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {portfolio.location}
                </p>
              </div>
            </div>
          </Panel>

          <Panel eyebrow="Focus" title="How I approach product work" className="md:col-span-3">
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

          <Panel eyebrow="Toolkit" title="Tools I use most often" className="md:col-span-3">
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
        </div>
      </div>
    </main>
  );
}
