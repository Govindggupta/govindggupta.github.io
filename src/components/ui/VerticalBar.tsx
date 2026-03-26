"use client"

import { useEffect, useState } from "react"

import { useTheme } from "next-themes"

export default function VerticalBar() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const backgroundColor = mounted
    ? resolvedTheme === "dark"
      ? "#333333"
      : "#e5e5e5"
    : "var(--border)"

  return (
    <span
      aria-hidden="true"
      className="h-4 w-px shrink-0 bg-border transition-none dark:bg-[#333]"
      style={{ backgroundColor }}
    />
  )
}
