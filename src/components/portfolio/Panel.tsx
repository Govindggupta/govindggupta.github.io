import Link from "next/link";
import type { ReactNode } from "react";

type PanelProps = {
  eyebrow?: string;
  title?: string;
  className?: string;
  href?: string;
  children: ReactNode;
};

const baseClassName =
  "group relative overflow-hidden rounded-sm border border-border bg-gradient-to-br from-background via-background to-muted/20 p-4 sm:p-5";

function PanelBody({ eyebrow, title, children }: Omit<PanelProps, "className" | "href">) {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(127,127,127,0.12),transparent_48%)]" />
      <div className="relative space-y-4">
        {(eyebrow || title) && (
          <div className="space-y-2">
            {eyebrow ? (
              <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                {title}
              </h2>
            ) : null}
          </div>
        )}
        {children}
      </div>
    </>
  );
}

export default function Panel({
  eyebrow,
  title,
  className = "",
  href,
  children,
}: PanelProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClassName} transition-colors duration-200 hover:border-foreground/25 ${className}`}
      >
        <PanelBody eyebrow={eyebrow} title={title}>
          {children}
        </PanelBody>
      </Link>
    );
  }

  return (
    <section className={`${baseClassName} ${className}`}>
      <PanelBody eyebrow={eyebrow} title={title}>
        {children}
      </PanelBody>
    </section>
  );
}
