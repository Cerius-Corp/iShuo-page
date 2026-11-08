import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from "motion/react"
import type { PointerEvent } from "react"
import { DownloadButton } from "../components/Buttons"
import { Bubble, Stamp, Tape } from "../components/Stationery"

/** Lines from real conversations, floating round the stamp as in the
 *  app's welcome screen. */
const bubbles = [
  { text: "你好！", pinyin: "nǐ hǎo", at: "left-[2%] top-[14%]", tail: "left-6", tilt: -6, depth: 26 },
  { text: "多少钱？", pinyin: "duōshao qián", at: "right-[0%] top-[6%]", tail: "right-6", tilt: 5, depth: 40 },
  { text: "Nanti kita 去吃火锅 ya", pinyin: "", at: "left-[-4%] bottom-[18%]", tail: "left-8", tilt: -3, depth: 34, mixed: true },
  { text: "谢谢老师！", pinyin: "xièxie lǎoshī", at: "right-[2%] bottom-[8%]", tail: "right-8", tilt: 4, depth: 22 },
]

export function Hero() {
  const reduce = useReducedMotion()
  // The stamp and its bubbles lean with the pointer, each at its own depth.
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 120, damping: 18 })
  const sy = useSpring(py, { stiffness: 120, damping: 18 })
  const rotate = useTransform(sx, [-1, 1], [-7, -1])
  const stampX = useTransform(sx, [-1, 1], [-8, 8])
  const stampY = useTransform(sy, [-1, 1], [-8, 8])

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType !== "mouse") return
    const r = e.currentTarget.getBoundingClientRect()
    px.set(((e.clientX - r.left) / r.width) * 2 - 1)
    py.set(((e.clientY - r.top) / r.height) * 2 - 1)
  }

  return (
    <section className="relative overflow-hidden">
      <img src="/img/doodle-flower.svg" alt="" aria-hidden className="pointer-events-none absolute -left-10 top-40 w-36 opacity-60 sm:w-44" />
      <img src="/img/doodle-squiggle.svg" alt="" aria-hidden className="pointer-events-none absolute right-6 top-6 hidden w-40 opacity-70 lg:block" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-20 pt-8 sm:px-6 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:pb-28">
        <div className="relative z-10 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-grid bg-paper px-3.5 py-1.5 text-[13px] font-semibold text-ink-soft lg:mx-0"
          >
            <span className="size-2 rounded-full bg-mint" />
            Beta di iPhone · untuk pelajar Indonesia di China
          </motion.p>

          <h1 className="mt-6 text-[42px] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-[58px] xl:text-[62px]">
            <motion.span className="block" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
              Ngobrol Mandarin,
            </motion.span>
            <motion.span className="relative inline-block text-brand" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
              tanpa takut salah.
              <svg viewBox="0 0 300 18" aria-hidden className="absolute -bottom-3 left-0 h-4 w-full" preserveAspectRatio="none">
                <motion.path
                  d="M3 12 C 60 2, 120 16, 180 8 S 270 4, 297 10"
                  fill="none"
                  stroke="#ffd34d"
                  strokeWidth="6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.8, duration: 0.9, ease: "easeInOut" }}
                />
              </svg>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mx-auto mt-7 max-w-[34rem] text-[17px] leading-relaxed text-ink-soft sm:text-lg lg:mx-0"
          >
            Rekam obrolanmu yang asli, di kampus, di warung, atau dengan teman. iShuo menunjukkan kalimat mana yang bisa lebih tepat, lalu melatihnya bersamamu sampai lancar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <DownloadButton />
            <a href="#cara-kerja" className="group inline-flex min-h-[44px] items-center gap-1.5 px-2 text-[15px] font-semibold text-brand">
              Lihat cara kerjanya
              <span className="transition-transform group-hover:translate-y-0.5" aria-hidden>↓</span>
            </a>
          </motion.div>
        </div>

        {/* The stamp, its tape and the lines people said. */}
        <div className="relative mx-auto aspect-[1.05] w-full max-w-[460px]" onPointerMove={onMove} onPointerLeave={() => { px.set(0); py.set(0) }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -12 }}
            animate={{ opacity: 1, scale: 1, rotate: -4 }}
            transition={{ type: "spring", stiffness: 140, damping: 16, delay: 0.25 }}
            style={reduce ? undefined : { rotate, x: stampX, y: stampY }}
            className="absolute inset-[13%]"
          >
            <Stamp className="size-full" pad="p-[14px]">
              <div className="flex size-full items-center justify-center bg-paper">
                <img src="/img/mascotwave.png" alt="Maskot iShuo melambai sambil memegang HP" className="h-[86%] w-auto select-none object-contain" draggable={false} />
              </div>
            </Stamp>
            <Tape className="-top-5 left-1/2 -translate-x-1/2 rotate-[-4deg]" />
          </motion.div>

          {bubbles.map((b, i) => (
            <FloatingBubble key={b.text} bubble={b} index={i} sx={sx} sy={sy} still={!!reduce} />
          ))}
        </div>
      </div>
    </section>
  )
}

/** A line someone said, drifting a little and leaning with the pointer at its own depth. */
function FloatingBubble({ bubble: b, index: i, sx, sy, still }: {
  bubble: (typeof bubbles)[number]
  index: number
  sx: MotionValue<number>
  sy: MotionValue<number>
  still: boolean
}) {
  const x = useTransform(sx, [-1, 1], [-b.depth, b.depth])
  const y = useTransform(sy, [-1, 1], [-b.depth / 2, b.depth / 2])
  return (
    <motion.div
      className={`absolute ${b.at}`}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.6 + i * 0.12 }}
      style={still ? undefined : { x, y }}
    >
      <motion.div
        animate={still ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 3.4 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
        style={{ rotate: b.tilt }}
      >
        <Bubble tail={b.tail} tone={b.mixed ? "box" : "paper"}>
          <span className="han block whitespace-nowrap text-[15px] font-bold sm:text-lg" lang="zh-Hans">{b.text}</span>
          {b.pinyin && <span className="block text-xs font-medium text-ink-soft">{b.pinyin}</span>}
        </Bubble>
      </motion.div>
    </motion.div>
  )
}
