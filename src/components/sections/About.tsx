import * as motion from "framer-motion/client"

import aboutLines from "@/data/about"

export function About() {
  return (
    <section className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-6 flex items-start justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-4xl font-bold tracking-tight text-foreground">
              About
            </h2>
          </div>
        </div>

        <ul className="space-y-3">
          {aboutLines.map((line) => (
            <li key={line} className="flex items-start gap-3.5">
              <span className="mt-[0.62em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground/45" />
              <p className="text-[15px] leading-relaxed text-foreground/90 sm:text-base">
                {line}
              </p>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
