"use client"

import { useEffect, useRef, useState } from "react"

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "framer-motion"

interface TextFlipProps {
  texts: readonly string[]
  className?: string
  interval?: number
  transition?: Transition
  variants?: Variants
}

const defaultVariants: Variants = {
  initial: { y: -10, opacity: 0 },
  animate: { y: -1, opacity: 1 },
  exit: { y: 10, opacity: 0 },
}

const defaultTransition: Transition = {
  duration: 0.3,
  ease: "easeOut",
}

export function TextFlip({
  texts,
  className,
  interval = 1.5,
  transition = defaultTransition,
  variants = defaultVariants,
}: Readonly<TextFlipProps>) {
  const [index, setIndex] = useState(0)
  const [reservedHeight, setReservedHeight] = useState<number | null>(null)
  const containerRef = useRef<HTMLSpanElement | null>(null)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion || texts.length <= 1) {
      return
    }

    const timer = window.setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % texts.length)
    }, interval * 1000)

    return () => {
      window.clearInterval(timer)
    }
  }, [interval, shouldReduceMotion, texts.length])

  useEffect(() => {
    if (texts.length === 0) {
      return
    }

    const container = containerRef.current
    if (!container) {
      return
    }

    const measurementNode = document.createElement("span")
    measurementNode.className = [className, "block"].filter(Boolean).join(" ")
    measurementNode.style.position = "absolute"
    measurementNode.style.left = "0"
    measurementNode.style.top = "0"
    measurementNode.style.visibility = "hidden"
    measurementNode.style.pointerEvents = "none"
    measurementNode.style.whiteSpace = "normal"

    function calculateReservedHeight() {
      if (!container) {
        return
      }

      const width = container.clientWidth
      if (width <= 0) {
        return
      }

      measurementNode.style.width = `${width}px`

      if (!container.contains(measurementNode)) {
        container.appendChild(measurementNode)
      }

      let maxHeight = 0
      for (const text of texts) {
        measurementNode.textContent = text
        maxHeight = Math.max(
          maxHeight,
          Math.ceil(measurementNode.getBoundingClientRect().height),
        )
      }

      setReservedHeight((currentHeight) =>
        currentHeight === maxHeight ? currentHeight : maxHeight,
      )
    }

    calculateReservedHeight()

    const resizeObserver = new ResizeObserver(() => {
      calculateReservedHeight()
    })
    resizeObserver.observe(container)

    if ("fonts" in document) {
      void document.fonts.ready.then(() => {
        calculateReservedHeight()
      })
    }

    return () => {
      resizeObserver.disconnect()

      if (container.contains(measurementNode)) {
        container.removeChild(measurementNode)
      }
    }
  }, [className, texts])

  if (texts.length === 0) {
    return null
  }

  const activeText = texts[index] ?? texts[0]
  const classes = [
    "relative inline-flex min-h-[1lh] items-top overflow-hidden",
    className,
  ]
    .filter(Boolean)
    .join(" ")
  const style =
    reservedHeight === null ? undefined : { minHeight: `${reservedHeight}px` }

  if (shouldReduceMotion) {
    return (
      <span ref={containerRef} className={classes} style={style} aria-live="off">
        {texts[0]}
      </span>
    )
  }

  return (
    <span ref={containerRef} className={classes} style={style} aria-live="off">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={`${index}-${activeText}`}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          transition={transition}
          className="inline-block"
        >
          {activeText}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
