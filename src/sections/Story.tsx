import { AnimatePresence, LayoutGroup, motion, useMotionValueEvent, useScroll, useTransform, type MotionValue } from "motion/react"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { KindIcon } from "../components/KindIcon"
import { SentenceMorph } from "../components/Morph"
import { Bubble, Doodle, Stamp, StickyNote } from "../components/Stationery"

/** The three steps, and where along the section's scroll each one starts. */
const steps = [
  { title: "Rekam obrolanmu", text: "Nyalakan Ngobrol langsung. Tiap kalimat muncul dengan pinyin dan artinya.", from: 0 },
  { title: "iShuo memeriksa", text: "Kalimat yang bisa lebih tepat ditandai, lengkap dengan alasannya.", from: 0.34 },
  { title: "Latih sampai lancar", text: "Ucapkan lagi kalimatnya. Tiap karakter dicek sampai pas.", from: 0.67 },
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
  why: "了 di akhir kalimat: sudah berlangsung sampai sekarang.",
  chars: [["我", "wǒ"], ["来", "lái"], ["中", "zhōng"], ["国", "guó"], ["两", "liǎng"], ["个", "gè"], ["月", "yuè"], ["了", "le"]],
}

/** How it works, told by scrolling: the section stays on screen while the
 *  iPhone in it goes from a live conversation, to the fix, to practising it. */
export function Story() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })
  const [step, setStep] = useState(0)
  const fit = usePhoneFit()
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setStep(steps.findLastIndex((s) => v >= s.from))
  })

  /** Scrolls to just inside a step, so it can be picked from the list. */
  function goTo(i: number) {
    const section = ref.current
    if (!section) return
    const travel = section.offsetHeight - window.innerHeight
    window.scrollTo({ top: section.offsetTop + travel * (steps[i].from + 0.03), behavior: "smooth" })
  }

  return (
    <section id="cara-kerja" ref={ref} className="relative h-[330vh] bg-paper">
      <div className="sticky top-0 flex h-svh items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 pt-20 sm:px-6 lg:grid-cols-[minmax(0,28rem)_auto] lg:items-center lg:justify-center lg:gap-24 lg:pt-16">
          <div>
            <h2 className="hidden text-[44px] font-extrabold leading-[1.08] tracking-[-0.03em] text-balance lg:block">Dari obrolan ke kalimat yang lancar.</h2>

            {/* Laptop: the three steps on one line that fills as you scroll. */}
            <ol className="relative mt-10 hidden space-y-8 lg:block">
              <span aria-hidden className="absolute bottom-6 left-[15px] top-4 w-[3px] overflow-hidden rounded-full bg-grid">
                <motion.span className="block size-full origin-top bg-brand" style={{ scaleY: scrollYProgress }} />
              </span>
              {steps.map((s, i) => {
                const state = i < step ? "done" : i === step ? "now" : "next"
                return (
                  <li key={s.title}>
                    <button
                      onClick={() => goTo(i)}
                      aria-current={state === "now" ? "step" : undefined}
                      className="group relative flex w-full cursor-pointer gap-4 text-left"
                    >
                      <span
                        className={`relative z-10 flex size-[33px] shrink-0 items-center justify-center rounded-full text-sm font-extrabold transition-colors duration-300 ${
                          state === "now" ? "bg-brand text-white" : state === "done" ? "bg-box text-brand" : "border border-grid bg-paper text-ink-soft"
                        }`}
                      >
                        {state === "done" ? "✓" : i + 1}
                      </span>
                      <motion.span className="block pt-0.5" animate={{ opacity: state === "now" ? 1 : 0.45 }} transition={{ duration: 0.3 }}>
                        <span className="block text-[22px] font-extrabold tracking-tight group-hover:text-brand">{s.title}</span>
                        <span className="mt-1 block max-w-sm text-[16px] leading-relaxed text-ink-soft">{s.text}</span>
                      </motion.span>
                    </button>
                  </li>
                )
              })}
            </ol>

            {/* Phone: only the current step, with three bars for where you are. */}
            <div className="lg:hidden">
              <div className="flex gap-1.5" aria-hidden>
                {steps.map((s, i) => (
                  <span key={s.title} className="h-1 flex-1 overflow-hidden rounded-full bg-grid">
                    <StepFill progress={scrollYProgress} index={i} />
                  </span>
                ))}
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={step} className="min-h-[112px]" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
                  <h3 className="mt-3 text-[22px] font-extrabold tracking-tight">
                    <span className="mr-2 text-brand">0{step + 1}</span>
                    {steps[step].title}
                  </h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-ink-soft">{steps[step].text}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* The iPhone, showing the app at each step: always its own size
              and shape, scaled down whole to fit the screen's height. */}
          <div className="relative mx-auto" style={{ width: phone.width * fit, height: phone.height * fit }}>
            <div
              className="absolute left-0 top-0 origin-top-left rounded-[46px] bg-ink p-[9px] shadow-[0_40px_70px_-34px_rgba(0,9,55,0.55),inset_0_0_0_1.5px_rgba(255,255,255,0.14)]"
              style={{ width: phone.width, height: phone.height, scale: fit }}
            >
              <div className="relative flex size-full flex-col overflow-hidden rounded-[38px] bg-canvas">
                <StatusBar />
                <div className="relative flex-1">
                  <LayoutGroup>
                    <AnimatePresence mode="popLayout" initial={false}>
                      {step === 0 && <Talk key="talk" progress={scrollYProgress} />}
                      {step === 1 && <Check key="check" />}
                      {step === 2 && <Practice key="practice" />}
                    </AnimatePresence>
                  </LayoutGroup>
                </div>
                <span aria-hidden className="absolute bottom-2 left-1/2 h-1 w-28 -translate-x-1/2 rounded-full bg-ink/80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** The iPhone's own size, in pixels; it's scaled from this. */
const phone = { width: 330, height: 676 }

/** How much the iPhone is scaled to fit the height left for it on screen:
 *  under the nav on a laptop, under the nav and the step's text on a phone. */
function usePhoneFit() {
  const [fit, setFit] = useState(1)
  useEffect(() => {
    const measure = () => {
      const taken = window.innerWidth >= 1024 ? 150 : 290
      setFit(Math.min(1, Math.max(0.6, (window.innerHeight - taken) / phone.height)))
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])
  return fit
}

/** A step's progress bar, filling while the page scrolls through that step. */
function StepFill({ progress, index }: { progress: MotionValue<number>; index: number }) {
  const fill = useTransform(progress, [steps[index].from, stepEnd(index)], [0, 1])
  return <motion.span className="block size-full origin-left bg-brand" style={{ scaleX: fill }} />
}

/** The top of the iPhone's screen: the time, the Dynamic Island, signal and battery. */
function StatusBar() {
  return (
    <div className="relative flex h-11 shrink-0 items-center justify-between px-7 text-[13px] font-semibold">
      <span>09.41</span>
      <span aria-hidden className="absolute left-1/2 top-2.5 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-ink" />
      <span aria-hidden className="flex items-center gap-1">
        <svg viewBox="0 0 18 12" className="h-2.5 w-4 fill-current"><rect x="0" y="8" width="3" height="4" rx="1" /><rect x="5" y="5" width="3" height="7" rx="1" /><rect x="10" y="2.5" width="3" height="9.5" rx="1" /><rect x="15" y="0" width="3" height="12" rx="1" /></svg>
        <span className="h-2.5 w-5 rounded-[3px] border border-current p-[1.5px]"><span className="block size-full rounded-[1px] bg-current" /></span>
      </span>
    </div>
  )
}

/** A screen's bar, as in the app: back on the left, the title, an action on the right. */
function AppBar({ title, action, titleTone = "text-ink" }: { title: ReactNode; action?: ReactNode; titleTone?: string }) {
  return (
    <div className="flex h-12 shrink-0 items-center justify-between gap-2 px-4">
      <span className="flex size-8 items-center justify-center rounded-full bg-paper shadow-[0_2px_6px_-3px_rgba(0,9,55,0.25)]">
        <svg viewBox="0 0 24 24" aria-hidden className="size-4 fill-none stroke-current" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="m15 6-6 6 6 6" /></svg>
      </span>
      <span className={`flex items-center gap-1.5 text-[14px] font-bold ${titleTone}`}>{title}</span>
      <span className="flex min-w-8 justify-end">{action}</span>
    </div>
  )
}

/** A small rounded action in a screen's bar. */
function BarPill({ children }: { children: ReactNode }) {
  return <span className="rounded-full bg-paper px-3 py-1.5 text-[12px] font-semibold text-brand shadow-[0_2px_6px_-3px_rgba(0,9,55,0.25)]">{children}</span>
}

/** The screens slide in from the right and out to the left, like going forward in the app. */
const swap = {
  initial: { opacity: 0, x: 48 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -48 },
  transition: { type: "spring", stiffness: 260, damping: 30 },
} as const

/** 1 · Ngobrol langsung: each line arrives as you scroll. */
function Talk({ progress }: { progress: MotionValue<number> }) {
  const lines = [...talk, { ...said, mine: true }]
  const slip = useTransform(progress, [0.27, 0.32], [0, 1])
  return (
    <motion.div {...swap} className="absolute inset-0 flex flex-col">
      <AppBar
        titleTone="text-[#d4371c]"
        title={
          <>
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#d4371c] opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-[#d4371c]" />
            </span>
            Ngobrol langsung
          </>
        }
        action={<BarPill>Akhiri</BarPill>}
      />
      {/* Older lines slide up and fade under the bar, as in a chat. */}
      <div className="flex flex-1 flex-col justify-end space-y-3 overflow-hidden px-4 pb-28 [mask-image:linear-gradient(to_bottom,transparent,#000_16%)]">
        {lines.map((l, i) => {
          const last = i === lines.length - 1
          return (
            <Arrives key={l.hanzi} progress={progress} at={0.02 + i * 0.065} mine={l.mine}>
              <motion.div layoutId={last ? "said" : undefined} className="w-fit max-w-[88%]">
                <Bubble tone={l.mine ? "box" : "paper"} tail={l.mine ? "right-5" : "left-5"} className="!px-3.5 !py-2">
                  <span className="han relative block text-[16px] font-bold" lang="zh-Hans">
                    {l.hanzi}
                    {last && (
                      <motion.span aria-hidden style={{ scaleX: slip }} className="absolute -bottom-0.5 left-0 right-0 h-[3px] origin-left rounded-full bg-[#d4371c]/70" />
                    )}
                  </span>
                  <span className="block text-[11px] text-ink-soft">{l.pinyin}</span>
                  <span className="block text-[11px] text-ink-soft/80">{l.meaning}</span>
                </Bubble>
              </motion.div>
            </Arrives>
          )
        })}
      </div>
      {/* Pocket on the left, the mic listening in the middle. */}
      <div className="absolute inset-x-0 bottom-7 flex items-center justify-center">
        <span className="absolute left-6 flex flex-col items-center gap-1">
          <span className="flex size-10 items-center justify-center rounded-full bg-paper shadow-[0_2px_8px_-4px_rgba(0,9,55,0.3)]">
            <svg viewBox="0 0 24 24" aria-hidden className="size-4 fill-ink"><path d="M6 3.5h12a1 1 0 0 1 1 1v16.2a.6.6 0 0 1-.95.49L12 17l-6.05 4.19A.6.6 0 0 1 5 20.7V4.5a1 1 0 0 1 1-1Z" /></svg>
          </span>
          <span className="text-[10px] font-medium text-ink-soft">Pocket</span>
        </span>
        <span className="relative flex size-16 items-center justify-center">
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-full bg-[#d4371c]/25"
            animate={{ scale: [1, 1.35, 1], opacity: [0.9, 0, 0.9] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          />
          <span className="relative flex size-14 items-center justify-center rounded-full bg-[#d4371c] text-white">
            <MicIcon className="size-6" />
          </span>
        </span>
      </div>
    </motion.div>
  )
}

/** A microphone, in the current text colour. */
function MicIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={`fill-current ${className}`}>
      <path d="M12 14.5a3.5 3.5 0 0 0 3.5-3.5V5.5a3.5 3.5 0 1 0-7 0V11a3.5 3.5 0 0 0 3.5 3.5Zm6-3.5a.9.9 0 1 0-1.8 0 4.2 4.2 0 0 1-8.4 0 .9.9 0 1 0-1.8 0 6 6 0 0 0 5.1 5.93V19H9.5a.9.9 0 1 0 0 1.8h5a.9.9 0 1 0 0-1.8h-1.6v-2.07A6 6 0 0 0 18 11Z" />
    </svg>
  )
}

/** A line of the conversation, rising in at its point of the scroll. */
function Arrives({ progress, at, mine, children }: { progress: MotionValue<number>; at: number; mine: boolean; children: ReactNode }) {
  const opacity = useTransform(progress, [at, at + 0.04], [0, 1])
  const y = useTransform(progress, [at, at + 0.04], [24, 0])
  return (
    <motion.div style={{ opacity, y }} className={`flex flex-col ${mine ? "items-end" : "items-start"}`}>
      <span className="mb-1 text-[10px] font-semibold text-ink-soft">{mine ? "Kamu" : "Mereka"}</span>
      {children}
    </motion.div>
  )
}

/** 2 · Hasil obrolan: what you said, turning into the better way. */
function Check() {
  const [fixed, setFixed] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setFixed(true), 650)
    return () => clearTimeout(t)
  }, [])
  return (
    <motion.div {...swap} className="absolute inset-0 flex flex-col">
      <AppBar title="Hasil obrolan" action={<BarPill>•••</BarPill>} />
      <div className="relative flex flex-1 flex-col px-4 pb-6">
        <Doodle kind="flower" className="-left-4 bottom-12 w-14 opacity-80" />
        <img src="/img/mascotreading.png" alt="" aria-hidden className="mx-auto mt-3 w-20" />
        <p className="mt-2 text-center text-[15px] font-extrabold">Yuk, perbaiki bareng!</p>
        <motion.div layoutId="said" className="relative mt-4 rounded-2xl bg-paper px-4 py-3.5 shadow-[0_10px_24px_-16px_rgba(0,9,55,0.45)]">
          <p className="flex items-center gap-1.5 text-[12px] font-bold">
            <span className="flex size-5 items-center justify-center rounded-md bg-box text-brand"><KindIcon kind="missingOrExtra" className="size-3.5" /></span>
            Kata kurang/lebih
          </p>
          <p className={`mt-3 text-[11px] font-bold transition-colors duration-500 ${fixed ? "text-mint" : "text-ink-soft"}`}>{fixed ? "✓ Lebih tepat" : "Kamu bilang"}</p>
          <SentenceMorph said={said.hanzi} better={better.hanzi} fixed={fixed} className="mt-1 text-[24px] leading-[1.3]" />
          <p className="mt-1 text-[12px] text-ink-soft">{fixed ? better.meaning : said.meaning}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: -1.5 }}
          transition={{ type: "spring", stiffness: 240, damping: 20, delay: 1.1 }}
          className="relative mx-1 mt-5"
        >
          <StickyNote pin="right-6" className="!px-4 !pb-3 !pt-5">
            <p className="text-[13px] font-bold">Kenapa begitu?</p>
            <p className="mt-0.5 text-[12px] leading-relaxed text-butter-ink">{better.why}</p>
          </StickyNote>
        </motion.div>
      </div>
    </motion.div>
  )
}

/** When the last character's dot is in, in seconds. */
const heard = 0.6 + better.chars.length * 0.14

/** Bars of a voice being heard: they move, then settle once it's all heard. */
function Voice() {
  const bars = [6, 12, 18, 10, 22, 14, 26, 16, 20, 9, 24, 13, 18, 8, 15, 11]
  return (
    <div aria-hidden className="mt-8 flex h-8 items-center gap-[3px]">
      {bars.map((h, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-brand/45"
          initial={{ height: 4 }}
          animate={{ height: [4, h, 6, h * 0.7, 4] }}
          transition={{ duration: 0.9, delay: i * 0.03, repeat: 1, ease: "easeInOut" }}
        />
      ))}
    </div>
  )
}

/** 3 · Latihan lafal: say it again; each character gets its dot as it's heard. */
function Practice() {
  return (
    <motion.div {...swap} className="absolute inset-0 flex flex-col">
      <AppBar title="Latihan lafal" action={<BarPill>Lewati</BarPill>} />
      <div className="mx-4 flex gap-1.5" aria-hidden>
        <span className="h-1 flex-1 rounded-full bg-brand" />
        <span className="h-1 flex-1 rounded-full bg-brand/20" />
      </div>
      <div className="relative flex flex-1 flex-col items-center px-4 pb-6 pt-8">
        <p className="text-[13px] font-semibold text-ink-soft">Ucapkan kalimat ini</p>
        <div className="relative mt-3 w-full">
          <Stamp small>
            <div className="px-2 py-6 text-center">
              <div className="flex justify-center gap-[3px]">
                {better.chars.map(([c, p], i) => (
                  <div key={c + i} className="flex flex-col items-center">
                    <span className="text-[9px] text-ink-soft">{p}</span>
                    <span className="han text-[22px] font-bold" lang="zh-Hans">{c}</span>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.14, type: "spring", stiffness: 420, damping: 14 }}
                      className="mt-1 size-1.5 rounded-full bg-mint"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[12px] text-ink-soft">{better.meaning}</p>
            </div>
          </Stamp>
          <motion.span
            initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 7 }}
            transition={{ delay: heard, type: "spring", stiffness: 300, damping: 12 }}
            className="absolute -right-1 -top-4 rounded-[3px] bg-sage px-2.5 py-1 text-[13px] font-extrabold text-mint shadow-md"
          >
            Pas!
          </motion.span>
        </div>
        <Voice />
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: heard + 0.2 }}
          className="mt-4 rounded-full bg-sage/70 px-3.5 py-1.5 text-[12px] font-bold text-mint"
        >
          ✓ Semua karakter pas
        </motion.p>
        <div className="mt-auto flex flex-col items-center gap-2 pt-4">
          <span className="relative flex size-16 items-center justify-center">
            <motion.span
              aria-hidden
              className="absolute inset-0 rounded-full bg-brand/20"
              animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            />
            <span className="relative flex size-14 items-center justify-center rounded-full bg-brand text-white">
              <MicIcon className="size-6" />
            </span>
          </span>
          <span className="text-[11px] font-semibold text-ink-soft">Ketuk lalu ucapkan</span>
        </div>
        <img src="/img/mascotcheer.png" alt="" aria-hidden className="pointer-events-none absolute -right-2 bottom-24 w-20" />
      </div>
    </motion.div>
  )
}
