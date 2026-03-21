import type { ReactNode } from "react"
import * as motion from "framer-motion/client"
import {
  BriefcaseBusiness,
  Globe,
  Mail,
  MapPin,
  User,
} from "lucide-react"
import Image from "next/image"

import { socials } from "@/data/socials"
import { getGitHubProfile } from "@/lib/github"

const heroTransition = {
  duration: 0.35,
  ease: "easeOut" as const,
}

function InfoIconShell({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-background-alt/80 text-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_1px_2px_rgba(0,0,0,0.08)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_1px_2px_rgba(0,0,0,0.35)]">
      {children}
    </span>
  )
}

function HeroInfoRow({
  icon,
  children,
}: {
  icon: ReactNode
  children: ReactNode
}) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <InfoIconShell>{icon}</InfoIconShell>
      <div className="min-w-0 text-sm text-foreground">{children}</div>
    </div>
  )
}

export async function Hero() {
  const profile = await getGitHubProfile()
  const name = profile.name ?? "Govind Gupta"
  const bio =
    profile.bio ??
    "Designing and shipping web products with a focus on clean systems, strong details, and a better user experience."

  return (
    <section className="mx-auto w-full max-w-[900px] px-4 pt-16 pb-2 md:px-6 md:pt-18">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={heroTransition}
        className="space-y-5"
      >
        <div className="grid items-center gap-4 md:grid-cols-[190px_minmax(0,1fr)] md:gap-8">
          <div className="flex items-center justify-start">
            <Image
              src={profile.avatar_url}
              alt={name}
              width={160}
              height={160}
              sizes="(min-width: 768px) 160px, 112px"
              priority
              className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32 md:h-40 md:w-40"
            />
          </div>

          <div className="flex min-h-[150px] flex-col justify-center">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-[3.35rem]">
              {name}
            </h1>
            <p className="mt-1 text-lg text-muted">Full Stack Developer</p>
            <p className="mt-3 max-w-[42rem] text-sm leading-6 text-muted">
              {bio}
            </p>
          </div>
        </div>

        <div className="grid gap-x-10 gap-y-2 sm:grid-cols-2">
          <div className="space-y-2">
            <HeroInfoRow
              icon={<BriefcaseBusiness size={14} strokeWidth={1.8} />}
            >
              Full Stack Developer
            </HeroInfoRow>

            <HeroInfoRow icon={<MapPin size={14} strokeWidth={1.8} />}>
              Surat, Gujarat, India
            </HeroInfoRow>

            <HeroInfoRow icon={<Globe size={14} strokeWidth={1.8} />}>
              <a
                href="https://govindgupta.me"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-border decoration-[1px] underline-offset-[3px] hover:opacity-70"
              >
                govindgupta.me
              </a>
            </HeroInfoRow>
          </div>

          <div className="space-y-2">
            <HeroInfoRow
              icon={
                <span className="h-2 w-2 rounded-full bg-neutral-400 dark:bg-neutral-500" />
              }
            >
              Open to work
            </HeroInfoRow>

            <HeroInfoRow icon={<Mail size={14} strokeWidth={1.8} />}>
              <a
                href="mailto:govindgupta@email.com"
                className="underline decoration-border decoration-[1px] underline-offset-[3px] hover:opacity-70"
              >
                govindgupta@email.com
              </a>
            </HeroInfoRow>

            <HeroInfoRow icon={<User size={14} strokeWidth={1.8} />}>
              he/him
            </HeroInfoRow>
          </div>
        </div>

        <div className="pt-0.5">
          <ul className="flex flex-wrap items-center gap-3">
            {socials.map(({ href, icon: Icon, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-foreground transition-opacity duration-200 hover:opacity-60"
                >
                  <Icon size={17} strokeWidth={1.8} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
