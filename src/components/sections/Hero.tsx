import * as motion from "framer-motion/client"
import { Briefcase, Globe, MapPin } from "lucide-react"
import Image from "next/image"

import { socials } from "@/data/socials"
import techStack from "@/data/techstack"
import { TechIcon } from "@/components/ui/TechIcon"
import { getGitHubProfile } from "@/lib/github"

const heroTransition = {
  duration: 0.4,
  ease: "easeOut" as const,
}

export async function Hero() {
  const profile = await getGitHubProfile()
  const name = profile.name ?? "Govind Gupta"
  const bio =
    profile.bio ??
    "Building robust web apps. Focused on clean architecture and great user experience."

  return (
    <section className="mx-auto w-full max-w-[900px] px-4 py-16 md:px-6 md:py-20">
      <div className="space-y-8">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.35fr)_minmax(0,0.9fr)]">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={heroTransition}
            className="order-2 max-w-[34rem] text-left md:order-1"
          >
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {name}
            </h1>
            <p className="mt-1 text-base text-muted">Full Stack Developer</p>

            <p className="mt-3 max-w-[36rem] text-sm leading-6 text-muted">
              {bio}
            </p>

            <div className="mt-4 flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-sm text-muted">
                <MapPin size={15} strokeWidth={1.8} />
                <span>India</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted">
                <Globe size={15} strokeWidth={1.8} />
                <a
                  href="https://govindgupta.me"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-border decoration-[1px] underline-offset-[3px] hover:opacity-60"
                >
                  govindgupta.me
                </a>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted">
                <Briefcase size={15} strokeWidth={1.8} />
                <span>Open to opportunities</span>
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              {socials.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-transparent text-foreground transition-colors duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    <Icon size={15} strokeWidth={1.8} />
                  </a>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={heroTransition}
            className="order-1 flex flex-col items-center gap-4 md:order-2 md:items-end md:justify-start md:pt-1"
          >
            <div className="overflow-hidden rounded-2xl border border-border">
              <Image
                src={profile.avatar_url}
                alt={name}
                width={160}
                height={160}
                sizes="(min-width: 768px) 160px, 88px"
                priority
                className="h-[88px] w-[88px] object-cover sm:h-[100px] sm:w-[100px] md:h-[152px] md:w-[152px]"
              />
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted">
              <span className="h-2 w-2 rounded-full bg-neutral-400 dark:bg-neutral-500" />
              <span>Available for work</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...heroTransition, delay: 0.1 }}
          className="space-y-4"
        >
          <p className="text-xs tracking-widest text-muted uppercase">Stack</p>
          <div className="flex flex-wrap gap-3">
            {techStack.map((item) => (
              <TechIcon key={item.name} tech={item} showTooltip />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
