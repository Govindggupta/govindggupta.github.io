"use client"

import { useEffect, useState } from "react"

import { useTheme } from "next-themes"

import type { TechItem } from "@/data/techstack"

interface TechIconProps {
  tech: TechItem
  size?: number
  showTooltip?: boolean
}

export function TechIcon({
  tech,
  size = 28,
  showTooltip = false,
}: TechIconProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div aria-hidden="true" style={{ width: size, height: size }} />
  }

  const iconSrc = resolvedTheme === "dark" ? tech.iconLight : tech.iconDark

  return (
    <div className="group relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={iconSrc}
        alt={tech.name}
        width={size}
        height={size}
        title={showTooltip ? tech.name : undefined}
        className="transition-transform duration-200 group-hover:scale-110"
      />
    </div>
  )
}
