import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface BackLinkProps {
  href: string
  children: string
  className?: string
}

function mergeClassNames(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ")
}

export function BackLink({ href, children, className }: BackLinkProps) {
  return (
    <Link
      href={href}
      className={mergeClassNames(
        "group mb-8 inline-flex items-center gap-1.5",
        className
      )}
    >
      <span className="transition-transform duration-200 ease-out group-hover:-translate-x-1">
        <ArrowLeft size={14} strokeWidth={1.8} className="text-muted" />
      </span>
      <span className="text-sm text-muted transition-colors duration-200 ease-out group-hover:text-foreground">
        {children}
      </span>
    </Link>
  )
}
