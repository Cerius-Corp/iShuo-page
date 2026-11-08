import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "motion/react"
import { useEffect, useRef, useState } from "react"

/** The grid's lines, faint everywhere and brighter where the cursor is. */
const tones = {
  canvas: { base: "rgba(196,192,236,0.45)", lit: "rgba(15,68,209,0.4)" },
  brand: { base: "rgba(255,255,255,0.1)", lit: "rgba(255,255,255,0.5)" },
} as const

const lines = (color: string, size: number) => ({
  backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
  backgroundSize: `${size}px ${size}px`,
})

/** Squared paper filling its section; with a mouse, the lines light up
 *  round the cursor and follow it. Place it first inside a `relative`
 *  section whose content is `relative` too. */
export function CursorGrid({ tone = "canvas", size = 28, className = "" }: {
  tone?: keyof typeof tones
  /** One square's side, in pixels. */
  size?: number
  /** For the faint grid, e.g. a mask fading it out at an edge. */
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 350, damping: 40 })
  const sy = useSpring(y, { stiffness: 350, damping: 40 })
  const [lit, setLit] = useState(false)
  const mask = useMotionTemplate`radial-gradient(260px circle at ${sx}px ${sy}px, #000, transparent)`

  useEffect(() => {
    const host = ref.current?.parentElement
    if (!host || reduce || !matchMedia("(pointer: fine)").matches) return
    const move = (e: PointerEvent) => {
      const r = host.getBoundingClientRect()
      x.set(e.clientX - r.left)
      y.set(e.clientY - r.top)
      setLit(true)
    }
    const leave = () => setLit(false)
    host.addEventListener("pointermove", move)
    host.addEventListener("pointerleave", leave)
    return () => {
      host.removeEventListener("pointermove", move)
      host.removeEventListener("pointerleave", leave)
    }
  }, [reduce, x, y])

  const t = tones[tone]
  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0">
      <div className={`absolute inset-0 ${className}`} style={lines(t.base, size)} />
      <motion.div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ ...lines(t.lit, size), maskImage: mask, WebkitMaskImage: mask, opacity: lit ? 1 : 0 }}
      />
    </div>
  )
}
