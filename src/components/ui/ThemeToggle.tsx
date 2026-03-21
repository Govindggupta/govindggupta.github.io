"use client"

import { useEffect, useRef, useState } from "react"

import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const sunRayClasses = [
  "-translate-x-1/2 -translate-y-[0.95rem]",
  "translate-x-[0.62rem] -translate-y-[0.62rem] rotate-45",
  "translate-x-[0.95rem] -translate-y-1/2 rotate-90",
  "translate-x-[0.62rem] translate-y-[0.62rem] rotate-[135deg]",
  "-translate-x-1/2 translate-y-[0.95rem] rotate-180",
  "-translate-x-[0.62rem] translate-y-[0.62rem] rotate-[225deg]",
  "-translate-x-[0.95rem] -translate-y-1/2 rotate-[270deg]",
  "-translate-x-[0.62rem] -translate-y-[0.62rem] rotate-[315deg]",
] as const

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [activeAnimation, setActiveAnimation] = useState<"sun" | "moon" | null>(
    null
  )
  const resetTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    setMounted(true)

    return () => {
      if (resetTimeoutRef.current !== null) {
        window.clearTimeout(resetTimeoutRef.current)
      }
    }
  }, [])

  if (!mounted) {
    return <div aria-hidden="true" className="h-9 w-9" />
  }

  const isDark = resolvedTheme === "dark"
  const showMoon = isDark
  const showSun = !isDark

  const handleToggle = () => {
    const nextTheme = isDark ? "light" : "dark"
    const nextAnimation = nextTheme === "dark" ? "moon" : "sun"

    if (resetTimeoutRef.current !== null) {
      window.clearTimeout(resetTimeoutRef.current)
    }

    setActiveAnimation(nextAnimation)
    setTheme(nextTheme)

    resetTimeoutRef.current = window.setTimeout(() => {
      setActiveAnimation(null)
    }, 1150)
  }

  return (
    <motion.button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={handleToggle}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileTap={{ scale: 0.96 }}
      className="relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-background-alt/80 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_2px_8px_rgba(0,0,0,0.08)] transition-colors duration-200 hover:bg-background-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_2px_10px_rgba(0,0,0,0.32)]"
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{
          opacity: showMoon ? 1 : 0,
          scale: showMoon ? 1 : 0.85,
          rotate:
            activeAnimation === "moon"
              ? [0, -16, 14, -10, 6, -3, 0]
              : hovered && showMoon
                ? -10
                : 0,
        }}
        transition={{
          duration: activeAnimation === "moon" ? 0.95 : 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Moon size={15} strokeWidth={1.8} className="text-neutral-700 dark:text-neutral-200" />
      </motion.span>

      <motion.span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{
          opacity: showSun ? 1 : 0,
          scale: showSun ? 1 : 0.85,
          rotate: hovered && showSun ? 8 : 0,
        }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {sunRayClasses.map((rayClass, index) => (
          <motion.span
            key={rayClass}
            className={`absolute left-1/2 top-1/2 h-2 w-px rounded-full bg-neutral-700 dark:bg-neutral-200 ${rayClass}`}
            initial={false}
            animate={
              showSun
                ? {
                    opacity: activeAnimation === "sun" ? [0, 1, 1] : hovered ? 1 : 0.75,
                    scaleY: activeAnimation === "sun" ? [0.2, 1, 1] : hovered ? 1.1 : 1,
                  }
                : {
                    opacity: 0,
                    scaleY: 0.2,
                  }
            }
            transition={
              activeAnimation === "sun"
                ? {
                    duration: 0.22,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }
                : {
                    duration: 0.18,
                  }
            }
          />
        ))}

        <Sun size={15} strokeWidth={1.8} className="relative z-10 text-neutral-700 dark:text-neutral-200" />
      </motion.span>
    </motion.button>
  )
}
