import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react"
import { useRef, type PointerEvent, type ReactNode } from "react"
import { DownloadButton } from "../components/Buttons"
import { CursorGrid } from "../components/CursorGrid"
import { Phone } from "../components/Phone"
import { Doodle } from "../components/Stationery"

const ease = [0.22, 1, 0.36, 1] as const

/** Three screens of the app, fanned out; as the page scrolls on, the side
 *  ones lean further away. `x` is a share of the phone's own width;
 *  `depth` and `turn` are how far each drifts and turns with the mouse. */
const sidePhones = [
  { src: "/img/screens/learn.jpg", alt: "Halaman Belajar: 22 kalimat dari obrolan menunggu dilatih", x: ["-64%", "-84%"], rotate: [-8, -15], delay: 0.45, depth: -26, turn: 10 },
  { src: "/img/screens/words.jpg", alt: "Kosa kata untuk daftar di kampus, tiap kata di perangko", x: ["64%", "84%"], rotate: [8, 15], delay: 0.55, depth: -38, turn: -8 },
]

/** Where the mouse is across the hero, -1…1 each way, eased. */
type Pointer = { x: MotionValue<number>; y: MotionValue<number> }

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const lift = useTransform(scrollYProgress, [0, 1], [0, -70])

  // The phones and stickers drift with the mouse, each at its own depth.
  const reduce = useReducedMotion()
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
          <h1 className="text-[38px] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-[64px] lg:text-[68px]">
            <Rise delay={0.15}>Ngobrol</Rise>
            <Rise delay={0.22}>Mandarin,</Rise>
            <Rise delay={0.29} className="text-brand">tanpa takut</Rise>
            <Rise delay={0.36} className="relative text-brand" underlined>
              salah.
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
            </Rise>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mx-auto mt-6 max-w-[31rem] text-[15px] leading-relaxed text-ink-soft sm:mt-8 sm:text-lg lg:mx-0"
          >
            Rekam obrolanmu sehari-hari. iShuo menunjukkan kalimat yang bisa lebih tepat, lalu melatihnya bersamamu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-6 flex flex-col items-center gap-2 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start"
          >
            <DownloadButton className="!min-h-[46px] !px-5 !text-[14px] sm:!min-h-[52px] sm:!px-6 sm:!text-[15px]" />
            <a href="#cara-kerja" className="group inline-flex min-h-[44px] items-center gap-1.5 px-2 text-[15px] font-semibold text-brand">
              Lihat cara kerjanya
              <span className="transition-transform group-hover:translate-y-0.5" aria-hidden>↓</span>
            </a>
          </motion.div>
        </div>

        {/* The phones: Ngobrol langsung in front, Belajar and Kosa Kata behind. */}
        <div className="relative mx-auto h-[390px] w-full max-w-[500px] sm:h-[520px] lg:h-[560px]">
          {sidePhones.map((p) => (
            <SidePhone key={p.src} phone={p} progress={scrollYProgress} pointer={pointer} />
          ))}
          <motion.div
            initial={{ opacity: 0, y: 140 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 18, delay: 0.3 }}
            className="absolute left-1/2 top-0 z-10 w-[180px] -translate-x-1/2 sm:w-[235px] lg:w-[250px]"
          >
            <motion.div style={{ y: lift }}>
              <Drift pointer={pointer} depth={14} turn={7}>
                <Phone src="/img/screens/live.jpg" alt="Ngobrol langsung: tiap kalimat muncul dengan pinyin dan artinya" eager />
              </Drift>
              <Drift pointer={pointer} depth={44} className="absolute -left-6 top-[18%] sm:-left-12">
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
                  Merekam obrolan
                </motion.span>
              </Drift>
              <Drift pointer={pointer} depth={60} className="absolute -right-5 bottom-[22%] sm:-right-10">
                <motion.span
                  initial={{ opacity: 0, scale: 0.6, rotate: 14 }}
                  animate={{ opacity: 1, scale: 1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 260, damping: 16, delay: 1.3 }}
                  className="inline-block whitespace-nowrap rounded-[3px] bg-butter px-3.5 py-2 text-[13px] font-bold text-ink shadow-[0_10px_24px_-12px_rgba(0,9,55,0.45)] sm:text-sm"
                >
                  <span className="han" lang="zh-Hans">你呢？</span> = Kalau kamu?
                </motion.span>
              </Drift>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
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
    <span className={`block overflow-hidden ${underlined ? "-mb-4 pb-5" : "-mb-[0.16em] pb-[0.16em]"}`}>
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
 *  up to `turn` degrees, so things at different depths move apart. */
function Drift({ pointer, depth, turn = 0, className = "", children }: {
  pointer: Pointer
  depth: number
  turn?: number
  className?: string
  children: ReactNode
}) {
  const x = useTransform(pointer.x, (v) => v * depth)
  const y = useTransform(pointer.y, (v) => v * depth * 0.6)
  const rotateY = useTransform(pointer.x, (v) => v * turn)
  const rotateX = useTransform(pointer.y, (v) => -v * turn * 0.7)
  return (
    <motion.div style={{ x, y, rotateX, rotateY, transformPerspective: 1200 }} className={className}>
      {children}
    </motion.div>
  )
}

/** A phone behind the front one, leaning further out as the hero scrolls away. */
function SidePhone({ phone, progress, pointer }: { phone: (typeof sidePhones)[number]; progress: MotionValue<number>; pointer: Pointer }) {
  const x = useTransform(progress, [0, 1], phone.x)
  const rotate = useTransform(progress, [0, 1], phone.rotate)
  return (
    <motion.div
      initial={{ opacity: 0, y: 160 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 18, delay: phone.delay }}
      className="absolute left-1/2 top-[9%] w-[150px] -translate-x-1/2 sm:w-[200px] lg:w-[212px]"
    >
      <Drift pointer={pointer} depth={phone.depth} turn={phone.turn}>
        <motion.div style={{ x, rotate }}>
          <Phone src={phone.src} alt={phone.alt} eager />
        </motion.div>
      </Drift>
    </motion.div>
  )
}
