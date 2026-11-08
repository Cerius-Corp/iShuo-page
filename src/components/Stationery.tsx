// The app's stationery, for the web: stamps with a perforated blue edge,
// pinned sticky notes, speech bubbles and washi tape. The same pieces the
// iOS app is drawn with, so the page looks like iShuo, not a template.

import { motion, type MotionStyle } from "motion/react"
import type { CSSProperties, ReactNode } from "react"

/** A stamp's holes: their radius and how far apart they are. */
const holeSizes = {
  regular: { "--hole": "5px", "--step": "19px" },
  small: { "--hole": "3.5px", "--step": "13px" },
} as const

/** A postage stamp: its perforated edge round paper, a soft shadow under the
 *  holes. The edge is as thick as one row of holes allows, so only the
 *  half-holes along the outside show, as on a real stamp. */
export function Stamp({
  children,
  className = "",
  edge = "bg-brand",
  paper = "bg-paper",
  small = false,
}: {
  children: ReactNode
  className?: string
  /** The edge's colour (a Tailwind background class). */
  edge?: string
  paper?: string
  /** A little stamp: smaller holes, closer together. */
  small?: boolean
}) {
  const holes = holeSizes[small ? "small" : "regular"] as CSSProperties
  return (
    <div className={`relative p-[calc(var(--step)-var(--hole)-1px)] ${className}`} style={holes}>
      <div className="absolute inset-0 drop-shadow-[0_6px_10px_rgba(15,31,92,0.16)]" aria-hidden>
        <div className={`perforated absolute inset-0 ${edge}`} />
      </div>
      <div className={`relative h-full ${paper}`}>{children}</div>
    </div>
  )
}

/** A pin's head: red, with a soft highlight. */
export function Pin({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`absolute block size-[18px] rounded-full bg-pin shadow-[0_2px_3px_rgba(0,0,0,0.25)] ${className}`}
    >
      <span className="absolute left-[4px] top-[3px] block size-[6px] rounded-full bg-white/60" />
    </span>
  )
}

/** A pinned sticky note, turned a little. */
export function StickyNote({
  children,
  className = "",
  tone = "bg-butter",
  pin = "left-6",
}: {
  children: ReactNode
  className?: string
  tone?: string
  pin?: string
}) {
  return (
    <div className={`relative rounded-[3px] px-5 pb-4 pt-6 shadow-[0_8px_18px_-10px_rgba(0,9,55,0.35)] ${tone} ${className}`}>
      <Pin className={`-top-2 ${pin}`} />
      {children}
    </div>
  )
}

/** A bubble's paper and its tail, written out whole so Tailwind sees them. */
const bubbleTones = {
  paper: { body: "bg-paper", tail: "fill-paper" },
  box: { body: "bg-box", tail: "fill-box" },
} as const

/** A speech bubble with its tail at the bottom: white (theirs) or soft blue (yours). */
export function Bubble({
  children,
  className = "",
  tone = "paper",
  tail = "left-6",
}: {
  children: ReactNode
  className?: string
  tone?: keyof typeof bubbleTones
  /** Where the tail sits along the bottom. */
  tail?: string
}) {
  const t = bubbleTones[tone]
  return (
    <div className={`relative rounded-2xl px-4 py-2.5 shadow-[0_6px_16px_-8px_rgba(0,9,55,0.3)] ${t.body} ${className}`}>
      {children}
      <svg
        aria-hidden
        viewBox="0 0 14 9"
        className={`absolute -bottom-[8px] h-[9px] w-[14px] ${tail} ${t.tail}`}
      >
        <path d="M0 0 H14 Q11 4.5 10.5 9 Z" />
      </svg>
    </div>
  )
}

/** A strip of washi tape holding something on. */
export function Tape({ className = "" }: { className?: string }) {
  return <img src="/img/washitape.png" alt="" aria-hidden className={`pointer-events-none absolute w-24 select-none ${className}`} />
}

/** One of the app's hand-drawn doodles, in soft blue: a flower or a squiggle.
 *  Positioned by its className; `style` takes motion values (a slow turn). */
export function Doodle({ kind, className = "", style }: {
  kind: "flower" | "squiggle"
  className?: string
  style?: MotionStyle
}) {
  return (
    <motion.img
      src={`/img/doodle-${kind}.svg`}
      alt=""
      aria-hidden
      draggable={false}
      style={style}
      className={`pointer-events-none absolute select-none ${className}`}
    />
  )
}
