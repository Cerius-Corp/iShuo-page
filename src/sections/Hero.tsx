import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react"
import { Fragment, useRef, type PointerEvent, type ReactNode } from "react"
import { DownloadButton } from "../components/Buttons"
import { CursorGrid } from "../components/CursorGrid"
import { Phone } from "../components/Phone"
import { Doodle } from "../components/Stationery"
import { useMedia } from "../hooks/useMedia"
import { useCopy } from "../i18n/useCopy"

const ease = [0.22, 1, 0.36, 1] as const

/** Three screens of the app, fanned out; as the page scrolls on, the side
 *  ones lean further away. `x` is a share of the phone's own width;
 *  `depth` and `turn` are how far each drifts and turns with the mouse;
 *  `alt` is which description (in the copy) it has; `spread` the CSS class
 *  that leans it out on a phone (see index.css). */
const sidePhones: { src: string; alt: "learn" | "words"; x: string[]; rotate: number[]; spread: string; delay: number; depth: number; turn: number }[] = [
  { src: "/img/screens/learn.jpg", alt: "learn", x: ["-64%", "-84%"], rotate: [-8, -15], spread: "hero-spread-left", delay: 0.45, depth: -26, turn: 10 },
  { src: "/img/screens/words.jpg", alt: "words", x: ["64%", "84%"], rotate: [8, 15], spread: "hero-spread-right", delay: 0.55, depth: -38, turn: -8 },
]

/** Where the mouse is across the hero, -1…1 each way, eased. */
type Pointer = { x: MotionValue<number>; y: MotionValue<number> }

export function Hero() {
  const { hero } = useCopy()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const lift = useTransform(scrollYProgress, [0, 1], [0, -70])

  // With a mouse, the phones drift with it and spread as the hero scrolls
  // away, moved from here. On a phone the same rise and spread is a CSS
  // scroll-driven animation (hero-rise, hero-spread-* in index.css), which
  // the browser runs off the main thread: moving them from here with every
  // scroll is what made it stutter there.
  const reduce = useReducedMotion()
  const moving = useMedia("(pointer: fine)") && !reduce
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const follow = { stiffness: 110, damping: 18 }
  const pointer: Pointer = { x: useSpring(px, follow), y: useSpring(py, follow) }

  function onMove(e: PointerEvent<HTMLElement>) {
    if (reduce || e.pointerType !== "mouse") return
    const r = e.currentTarget.getBoundingClientRect()
    px.set(((e.clientX - r.left) / r.width) * 2 - 1)
    py.set(((e.clientY - r.top) / r.height) * 2 - 1)
  }

  return (
    <section ref={ref} onPointerMove={onMove} onPointerLeave={() => { px.set(0); py.set(0) }} className="relative overflow-hidden">
      <CursorGrid className="[mask-image:linear-gradient(to_bottom,#000_55%,transparent)]" />
      <Doodle kind="flower" className="-left-8 top-20 w-20 sm:top-24 sm:w-32 lg:left-[3%] lg:top-16" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-6 px-4 pb-8 pt-24 sm:px-6 sm:pb-10 sm:pt-28 md:pt-36 lg:grid-cols-[1fr_1.05fr] lg:gap-4 lg:pb-24">
        <div className="relative z-10 text-center lg:text-left">
          <h1 className="text-[clamp(30px,10.1vw,38px)] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-[64px] lg:text-[68px]">
            {/* A line each (on phones they flow together, so the headline takes
                two or three lines); from accentFrom on in blue, the last one underlined. */}
            {hero.lines.map((line, i) => {
              const last = i === hero.lines.length - 1
              return (
                <Fragment key={line + i}>
                {i > 0 && " "}
                <Rise delay={0.15 + i * 0.07} className={`${i >= hero.accentFrom ? "text-brand" : ""} ${last ? "relative" : ""}`} underlined={last}>
                  {line}
                  {last && <Squiggle />}
                </Rise>
                </Fragment>
              )
            })}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mx-auto mt-6 max-w-[31rem] text-[15px] leading-relaxed text-ink-soft sm:mt-8 sm:text-lg lg:mx-0"
          >
            {hero.lead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-6 flex flex-col items-center gap-2 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start"
          >
            <DownloadButton className="!min-h-[46px] !px-5 !text-[14px] sm:!min-h-[52px] sm:!px-6 sm:!text-[15px]" />
            <a href="#cara-kerja" className="group inline-flex min-h-[44px] items-center gap-1.5 px-2 text-[15px] font-semibold text-brand">
              {hero.how}
              <span className="transition-transform group-hover:translate-y-0.5" aria-hidden>↓</span>
            </a>
          </motion.div>
        </div>

        {/* The phones: Ngobrol langsung in front, Belajar and Kosa Kata behind. */}
        <div className="relative mx-auto h-[390px] w-full max-w-[500px] sm:h-[520px] lg:h-[560px]">
          {sidePhones.map((p) => (
            <SidePhone key={p.src} phone={p} alt={hero.alts[p.alt]} progress={scrollYProgress} pointer={pointer} moving={moving} />
          ))}
          <motion.div
            initial={{ opacity: 0, y: 140 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 18, delay: 0.3 }}
            className="absolute left-1/2 top-0 z-10 w-[180px] -translate-x-1/2 sm:w-[235px] lg:w-[250px]"
          >
            <motion.div style={moving ? { y: lift } : undefined} className={moving ? "will-change-transform" : "hero-rise"}>
              <Drift pointer={pointer} moving={moving} depth={14} turn={7}>
                <Phone src="/img/screens/live.jpg" alt={hero.alts.live} eager />
              </Drift>
              <Drift pointer={pointer} moving={moving} depth={44} className="absolute -left-6 top-[18%] sm:-left-12">
                <motion.span
                  initial={{ opacity: 0, scale: 0.6, rotate: -14 }}
                  animate={{ opacity: 1, scale: 1, rotate: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 16, delay: 1.1 }}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-paper px-3.5 py-2 text-[13px] font-bold text-[#d4371c] shadow-[0_10px_24px_-12px_rgba(0,9,55,0.45)] sm:text-sm"
                >
                  <span className="relative flex size-2.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#d4371c] opacity-60 motion-reduce:hidden" />
                    <span className="relative inline-flex size-2.5 rounded-full bg-[#d4371c]" />
                  </span>
                  {hero.recording}
                </motion.span>
              </Drift>
              <Drift pointer={pointer} moving={moving} depth={60} className="absolute -right-5 bottom-[22%] sm:-right-10">
                <motion.span
                  initial={{ opacity: 0, scale: 0.6, rotate: 14 }}
                  animate={{ opacity: 1, scale: 1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 260, damping: 16, delay: 1.3 }}
                  className="inline-block whitespace-nowrap rounded-[3px] bg-butter px-3.5 py-2 text-[13px] font-bold text-ink shadow-[0_10px_24px_-12px_rgba(0,9,55,0.45)] sm:text-sm"
                >
                  <span className="han" lang="zh-Hans">你呢？</span> = {hero.sticker}
                </motion.span>
              </Drift>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/** The yellow line drawn under the headline's last line. */
function Squiggle() {
  return (
    <svg viewBox="0 0 300 18" aria-hidden className="absolute -bottom-3 left-0 h-4 w-full" preserveAspectRatio="none">
      <motion.path
        d="M3 12 C 60 2, 120 16, 180 8 S 270 4, 297 10"
        fill="none"
        stroke="#ffd34d"
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.9, duration: 0.9, ease: "easeInOut" }}
      />
    </svg>
  )
}

/** One line of the headline, rising into place. */
function Rise({ children, delay, className = "", underlined = false }: {
  children: ReactNode
  delay: number
  className?: string
  /** Leaves room below for the squiggle under it. */
  underlined?: boolean
}) {
  return (
    <span className={`inline-block overflow-hidden align-top sm:block ${underlined ? "-mb-4 pb-5" : "-mb-[0.16em] pb-[0.16em]"}`}>
      <motion.span
        className={`inline-block ${className}`}
        initial={{ y: "105%" }}
        animate={{ y: 0 }}
        transition={{ delay, duration: 0.8, ease }}
      >
        {children}
      </motion.span>
    </span>
  )
}

/** Drifts `depth` pixels with the mouse (negative: against it) and turns
 *  up to `turn` degrees, so things at different depths move apart. Holds
 *  still unless `moving`. */
function Drift({ pointer, moving, depth, turn = 0, className = "", children }: {
  pointer: Pointer
  moving: boolean
  depth: number
  turn?: number
  className?: string
  children: ReactNode
}) {
  const x = useTransform(pointer.x, (v) => v * depth)
  const y = useTransform(pointer.y, (v) => v * depth * 0.6)
  const rotateY = useTransform(pointer.x, (v) => v * turn)
  const rotateX = useTransform(pointer.y, (v) => -v * turn * 0.7)
  if (!moving) return <div className={className}>{children}</div>
  return (
    <motion.div style={{ x, y, rotateX, rotateY, transformPerspective: 1200 }} className={`will-change-transform ${className}`}>
      {children}
    </motion.div>
  )
}

/** A phone behind the front one, leaning further out as the hero scrolls away. */
function SidePhone({ phone, alt, progress, pointer, moving }: {
  phone: (typeof sidePhones)[number]
  alt: string
  progress: MotionValue<number>
  pointer: Pointer
  /** Spreading with the scroll; otherwise it stays where it starts. */
  moving: boolean
}) {
  const x = useTransform(progress, [0, 1], phone.x)
  const rotate = useTransform(progress, [0, 1], phone.rotate)
  return (
    <motion.div
      initial={{ opacity: 0, y: 160 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 18, delay: phone.delay }}
      className="absolute left-1/2 top-[9%] w-[150px] -translate-x-1/2 sm:w-[200px] lg:w-[212px]"
    >
      <Drift pointer={pointer} moving={moving} depth={phone.depth} turn={phone.turn}>
        <motion.div style={moving ? { x, rotate } : { x: phone.x[0], rotate: phone.rotate[0] }} className={moving ? undefined : phone.spread}>
          <Phone src={phone.src} alt={alt} eager />
        </motion.div>
      </Drift>
    </motion.div>
  )
}
