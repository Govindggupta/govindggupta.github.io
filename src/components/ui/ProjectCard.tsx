"use client"

import { useState } from "react"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import type { ProjectSummary } from "@/lib/projects"

interface ProjectCardProps {
  project: ProjectSummary
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [imageFailed, setImageFailed] = useState(false)
  const previewUrl = project.image && !imageFailed ? project.image : null

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block self-start overflow-hidden rounded-2xl border border-border bg-[var(--color-background-primary)] transition-colors duration-150 hover:bg-foreground/3 dark:hover:bg-foreground/3"
      aria-label={`${project.title} case study`}
    >
      <article className="flex min-h-0 flex-col">
        <div className="flex items-start justify-between px-4 pt-4">
          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-semibold text-foreground">
              {project.title}
            </h2>
            {project.description ? (
              <p className="mt-2 line-clamp-2 min-h-10 text-sm text-muted">
                {project.description}
              </p>
            ) : (
              <p className="mt-2 min-h-10 text-sm text-muted">
                No description available.
              </p>
            )}
          </div>
          <span className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden text-black dark:text-white">
            <ArrowUpRight
              size={17}
              strokeWidth={2}
              className="absolute -translate-x-2 translate-y-2 opacity-0 transition-all duration-150 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
            />
          </span>
        </div>

        <div className="relative mx-2 aspect-1200/630 origin-top-right translate-x-2 translate-y-0 -rotate-3 overflow-hidden rounded-xl border border-border bg-neutral-200 shadow-lg shadow-zinc-900 transition-transform duration-150 group-hover:rotate-0 dark:bg-neutral-800">
          {previewUrl ? (
            <Image
              src={previewUrl}
              alt={project.title}
              fill
              sizes="(min-width: 768px) 420px, 100vw"
              className="object-cover object-top"
              onError={() => setImageFailed(true)}
              unoptimized
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-black dark:bg-black">
              <span className="absolute -left-30 h-70 w-70 rounded-full bg-white/4"></span>
              <span className="absolute -bottom-30 left-20 h-50 w-50 rounded-full bg-white/4"></span>
              <span className="absolute -right-10 bottom-30 h-60 w-60 rounded-full bg-white/4"></span>
              <span className="absolute -right-55 -bottom-50 h-90 w-90 rounded-full border-50 border-white/4"></span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute text-[clamp(2.5rem,9vw,5rem)] font-black tracking-tighter whitespace-nowrap text-white opacity-[0.08] select-none dark:text-foreground dark:opacity-[0.04]"
              >
                {project.title}
              </span>
              <span className="relative z-10 px-4 text-center text-[clamp(0.85rem,2.2vw,1.1rem)] leading-snug font-medium tracking-tight break-words text-muted">
                {project.title}
              </span>
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}
