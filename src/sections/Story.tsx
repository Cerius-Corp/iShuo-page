import { AnimatePresence, LayoutGroup, motion, useMotionValueEvent, useScroll, useTransform, type MotionValue } from "motion/react"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { SentenceMorph } from "../components/Morph"
import { Bubble, Stamp, StickyNote } from "../components/Stationery"

/** The three steps, and where along the section's scroll each one starts. */
const steps = [
  { title: "Rekam obrolanmu", text: "Buka Ngobrol langsung saat bicara dengan teman, dosen, atau penjual. Tiap kalimat muncul dengan pinyin dan artinya.", from: 0 },
  { title: "iShuo memeriksa", text: "Setelah selesai, iShuo mencari kalimatmu yang bisa lebih tepat, lalu menjelaskan kenapa.", from: 0.34 },
  { title: "Latih sampai lancar", text: "Di Belajar, ucapkan lagi kalimat yang sudah diperbaiki. Tiap karakter dicek sampai pas.", from: 0.67 },
]
const stepEnd = (i: number) => steps[i + 1]?.from ?? 1

/** One conversation, from the moment it's said to the moment it's right. */
const talk = [
  { hanzi: "你是哪国人？", pinyin: "nǐ shì nǎ guó rén?", meaning: "Kamu dari negara mana?", mine: false },
  { hanzi: "我是印尼人。", pinyin: "wǒ shì Yìnní rén.", meaning: "Aku orang Indonesia.", mine: true },
  { hanzi: "你来中国多久了？", pinyin: "nǐ lái Zhōngguó duōjiǔ le?", meaning: "Sudah berapa lama di China?", mine: false },
]
const said = { hanzi: "我来中国两个月。", pinyin: "wǒ lái Zhōngguó liǎng gè yuè.", meaning: "Aku di China dua bulan." }
const better = {
  hanzi: "我来中国两个月了。",
  meaning: "Aku sudah dua bulan di China.",
  why: "了 di akhir kalimat: sesuatu yang sudah berlangsung sampai sekarang, dan masih berlanjut.",
  chars: [["我", "wǒ"], ["来", "lái"], ["中", "zhōng"], ["国", "guó"], ["两", "liǎng"], ["个", "gè"], ["月", "yuè"], ["了", "le"]],
}

/** How it works, told by scrolling: the section stays on screen while the
 *  sheet on it goes from a live conversation, to the fix, to practising it. */
export function Story() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })
  const [step, setStep] = useState(0)
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setStep(steps.findLastIndex((s) => v >= s.from))
  })

  return (
    <section id="cara-kerja" ref={ref} className="relative h-[330vh] bg-paper">
      <div className="sticky top-0 flex h-svh items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 pt-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:pt-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand">Cara kerja</p>
            <h2 className="mt-3 hidden text-[44px] font-extrabold leading-[1.08] tracking-[-0.03em] lg:block">Dari obrolan ke kalimat yang lancar.</h2>

            {/* Laptop: all three steps, the current one lit, each with its own progress. */}
            <ol className="mt-10 hidden space-y-7 lg:block">
              {steps.map((s, i) => (
                <li key={s.title} className="relative pl-8">
                  <span aria-hidden className="absolute bottom-0 left-0 top-1 w-[3px] overflow-hidden rounded-full bg-grid">
                    <StepFill progress={scrollYProgress} index={i} axis="y" />
                  </span>
                  <motion.div animate={{ opacity: step === i ? 1 : 0.35 }} transition={{ duration: 0.3 }}>
                    <h3 className="text-[22px] font-extrabold tracking-tight">
                      <span className="mr-2 text-brand">0{i + 1}</span>
                      {s.title}
                    </h3>
                    <p className="mt-1.5 max-w-sm text-[16px] leading-relaxed text-ink-soft">{s.text}</p>
                  </motion.div>
                </li>
              ))}
            </ol>

            {/* Phone: only the current step, with three bars for where you are. */}
            <div className="lg:hidden">
              <div className="mt-3 flex gap-1.5" aria-hidden>
                {steps.map((s, i) => (
                  <span key={s.title} className="h-1 flex-1 overflow-hidden rounded-full bg-grid">
                    <StepFill progress={scrollYProgress} index={i} axis="x" />
                  </span>
                ))}
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={step} className="min-h-[136px]" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
                  <h3 className="mt-4 text-[26px] font-extrabold tracking-tight">
                    <span className="mr-2 text-brand">0{step + 1}</span>
                    {steps[step].title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{steps[step].text}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* The sheet that changes. */}
          <div className="squared relative mx-auto h-[min(440px,54svh)] min-h-[340px] w-full max-w-[480px] overflow-hidden rounded-[28px] border border-grid shadow-[0_30px_60px_-36px_rgba(0,9,55,0.4)] sm:h-[480px] sm:max-h-none">
            <LayoutGroup>
              <AnimatePresence mode="popLayout" initial={false}>
                {step === 0 && <Talk key="talk" progress={scrollYProgress} />}
                {step === 1 && <Check key="check" />}
                {step === 2 && <Practice key="practice" />}
              </AnimatePresence>
            </LayoutGroup>
          </div>
        </div>
      </div>
    </section>
  )
}

/** A step's progress bar, filling while the page scrolls through that step. */
function StepFill({ progress, index, axis }: { progress: MotionValue<number>; index: number; axis: "x" | "y" }) {
  const fill = useTransform(progress, [steps[index].from, stepEnd(index)], [0, 1])
  return <motion.span className={`block size-full bg-brand ${axis === "y" ? "origin-top" : "origin-left"}`} style={axis === "y" ? { scaleY: fill } : { scaleX: fill }} />
}

const swap = {
  initial: { opacity: 0, y: 30, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -30, scale: 0.97 },
  transition: { type: "spring", stiffness: 220, damping: 26 },
} as const

/** 1 · The conversation as it's heard: each line arrives as you scroll. */
function Talk({ progress }: { progress: MotionValue<number> }) {
  const lines = [...talk, { ...said, mine: true }]
  const slip = useTransform(progress, [0.27, 0.32], [0, 1])
  return (
    <motion.div {...swap} className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
      {/* Older lines slide up under the label, as in a chat. */}
      <div aria-hidden className="absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-paper via-paper/80 to-transparent" />
      <p className="absolute left-5 top-5 z-10 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d4371c] sm:left-6 sm:top-6">
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#d4371c] opacity-60 motion-reduce:hidden" />
          <span className="relative inline-flex size-2.5 rounded-full bg-[#d4371c]" />
        </span>
        Ngobrol langsung
      </p>
      <div className="space-y-3.5">
        {lines.map((l, i) => {
          const last = i === lines.length - 1
          return (
            <Arrives key={l.hanzi} progress={progress} at={0.02 + i * 0.065} mine={l.mine}>
              <motion.div layoutId={last ? "said" : undefined} className="w-fit max-w-[88%]">
                <Bubble tone={l.mine ? "box" : "paper"} tail={l.mine ? "right-6" : "left-6"}>
                  <span className="han relative block text-[17px] font-bold sm:text-lg" lang="zh-Hans">
                    {l.hanzi}
                    {last && (
                      <motion.span aria-hidden style={{ scaleX: slip }} className="absolute -bottom-0.5 left-0 right-0 h-[3px] origin-left rounded-full bg-[#d4371c]/70" />
                    )}
                  </span>
                  <span className="block text-xs text-ink-soft">{l.pinyin}</span>
                  <span className="block text-xs text-ink-soft/80">{l.meaning}</span>
                </Bubble>
              </motion.div>
            </Arrives>
          )
        })}
      </div>
    </motion.div>
  )
}

/** A line of the conversation, rising in at its point of the scroll. */
function Arrives({ progress, at, mine, children }: { progress: MotionValue<number>; at: number; mine: boolean; children: ReactNode }) {
  const opacity = useTransform(progress, [at, at + 0.04], [0, 1])
  const y = useTransform(progress, [at, at + 0.04], [24, 0])
  return (
    <motion.div style={{ opacity, y }} className={`flex flex-col ${mine ? "items-end" : "items-start"}`}>
      <span className="mb-1 text-[11px] font-semibold text-ink-soft">{mine ? "Kamu" : "Mereka"}</span>
      {children}
    </motion.div>
  )
}

/** 2 · After the conversation: what you said, turning into the better way. */
function Check() {
  const [fixed, setFixed] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setFixed(true), 650)
    return () => clearTimeout(t)
  }, [])
  return (
    <motion.div {...swap} className="absolute inset-0 flex flex-col p-5 sm:p-6">
      <p className="flex items-center gap-2 text-sm font-bold">
        <span className="flex size-6 items-center justify-center rounded-md bg-box text-brand">±</span>
        Kata kurang/lebih
      </p>
      <div className="my-auto pt-4">
        <motion.div layoutId="said" className="w-full rounded-2xl bg-paper px-4 py-4 shadow-[0_10px_24px_-16px_rgba(0,9,55,0.45)] sm:px-5">
          <p className={`text-xs font-bold transition-colors duration-500 ${fixed ? "text-mint" : "text-ink-soft"}`}>{fixed ? "✓ Lebih tepat" : "Kamu bilang"}</p>
          <SentenceMorph said={said.hanzi} better={better.hanzi} fixed={fixed} className="mt-2 text-[25px] leading-[1.3] sm:text-[34px]" />
          <p className="mt-1 text-[13px] text-ink-soft">{fixed ? better.meaning : said.meaning}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: -1.5 }}
          transition={{ type: "spring", stiffness: 240, damping: 20, delay: 1.1 }}
          className="mx-2 mt-7"
        >
          <StickyNote pin="right-8">
            <p className="text-[15px] font-bold">Kenapa begitu?</p>
            <p className="mt-0.5 text-[14px] leading-relaxed text-butter-ink">{better.why}</p>
          </StickyNote>
        </motion.div>
      </div>
    </motion.div>
  )
}

/** 3 · Latih lafal: say it again; each character gets its dot as it's heard. */
function Practice() {
  return (
    <motion.div {...swap} className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-5 sm:p-6">
      <div className="relative w-full max-w-[400px]">
        <Stamp pad="p-3" className="rotate-[-1.5deg]">
          <div className="px-3 py-6 text-center sm:px-5">
            <p className="text-sm font-semibold text-ink-soft">Ucapkan kalimat ini</p>
            <div className="mt-3 flex justify-center gap-1 sm:gap-1.5">
              {better.chars.map(([c, p], i) => (
                <div key={c + i} className="flex flex-col items-center">
                  <span className="text-[10px] text-ink-soft sm:text-xs">{p}</span>
                  <span className="han text-[26px] font-bold sm:text-[32px]" lang="zh-Hans">{c}</span>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.14, type: "spring", stiffness: 420, damping: 14 }}
                    className="mt-1 size-2 rounded-full bg-mint"
                  />
                </div>
              ))}
            </div>
          </div>
        </Stamp>
        <motion.span
          initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 7 }}
          transition={{ delay: 0.6 + better.chars.length * 0.14, type: "spring", stiffness: 300, damping: 12 }}
          className="absolute -right-1 -top-4 rounded-[3px] bg-sage px-3 py-1.5 text-sm font-extrabold text-mint shadow-md"
        >
          Pas!
        </motion.span>
      </div>
      <div className="relative flex size-[72px] items-center justify-center">
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full bg-brand/20"
          animate={{ scale: [1, 1.35, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
        />
        <span className="relative flex size-[64px] items-center justify-center rounded-full bg-brand text-white shadow-[0_10px_24px_-10px_rgba(15,68,209,0.9)]">
          <svg viewBox="0 0 24 24" aria-hidden className="size-7 fill-current">
            <path d="M12 14.5a3.5 3.5 0 0 0 3.5-3.5V5.5a3.5 3.5 0 1 0-7 0V11a3.5 3.5 0 0 0 3.5 3.5Zm6-3.5a.9.9 0 1 0-1.8 0 4.2 4.2 0 0 1-8.4 0 .9.9 0 1 0-1.8 0 6 6 0 0 0 5.1 5.93V19H9.5a.9.9 0 1 0 0 1.8h5a.9.9 0 1 0 0-1.8h-1.6v-2.07A6 6 0 0 0 18 11Z" />
          </svg>
        </span>
      </div>
      <img src="/img/mascotcheer.png" alt="" aria-hidden className="pointer-events-none absolute -bottom-3 -right-3 w-24 sm:w-28" />
    </motion.div>
  )
}
