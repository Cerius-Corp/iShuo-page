import { motion, type HTMLMotionProps } from "motion/react"
import type { ReactNode } from "react"

/** Rises into place the first time it scrolls into view. */
export function Reveal({ delay = 0, y = 28, ...props }: HTMLMotionProps<"div"> & { delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    />
  )
}

/** A section's heading, and a line under it. */
export function SectionHead({ title, children, center = false }: {
  title: ReactNode
  children?: ReactNode
  center?: boolean
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <h2 className="text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-balance sm:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-[17px] leading-relaxed text-ink-soft">{children}</p>}
    </Reveal>
  )
}
