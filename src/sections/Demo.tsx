import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { SentenceMorph } from "../components/Morph"
import { Reveal } from "../components/Reveal"
import { KindIcon, type Kind } from "../components/KindIcon"
import { Doodle, StickyNote, Tape } from "../components/Stationery"
import { useCopy } from "../i18n/useCopy"

/** Sentences learners really say, each a different kind of fix (their
 *  meanings and whys are in the copy, in the same order). */
const examples: { kind: Kind; said: string; better: string; pinyin: string }[] = [
  { kind: "choice", said: "我不听懂。", better: "我没听懂。", pinyin: "Wǒ méi tīng dǒng." },
  { kind: "order", said: "我吃饭在食堂。", better: "我在食堂吃饭。", pinyin: "Wǒ zài shítáng chīfàn." },
  { kind: "missingOrExtra", said: "他说中文说很快。", better: "他说中文说得很快。", pinyin: "Tā shuō Zhōngwén shuō de hěn kuài." },
]

/** The switch over the sentence: as said, or the better way. */
const views = [
  { fixed: false, tint: "text-ink" },
  { fixed: true, tint: "text-mint" },
]

/** Try it: pick a sentence from the list, as in Belajar, and watch it turn
 *  into the better way (the characters move, fall away and pop in), and
 *  back. Everything that comes and goes keeps its place, so nothing jumps. */
export function Demo() {
  const { demo, kinds } = useCopy()
  const [pick, setPick] = useState(0)
  const [fixed, setFixed] = useState(false)
  const ex = examples[pick]
  const words = demo.examples[pick]

  // A new sentence starts as said (see choose), then plays its change on its own.
  useEffect(() => {
    const t = setTimeout(() => setFixed(true), 900)
    return () => clearTimeout(t)
  }, [pick])

  function choose(i: number) {
    if (i === pick) return
    setFixed(false)
    setPick(i)
  }

  return (
    <section id="coba" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        {/* The heading, and the sentences to pick from. */}
        <Reveal>
          <h2 className="text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-balance sm:text-5xl">
            {demo.title}
          </h2>
          <p className="mt-4 max-w-sm text-[17px] leading-relaxed text-ink-soft">{demo.lead}</p>

          {/* The sentences on a ruled note, the picked one marked with a highlighter. */}
          <div className="relative mt-10 max-w-md rotate-[-1deg] rounded-[4px] bg-paper px-2 py-3 shadow-[0_10px_24px_-14px_rgba(0,9,55,0.35)]">
            <Tape className="-top-4 left-1/2 -translate-x-1/2 rotate-[3deg]" />
            <span aria-hidden className="absolute inset-y-0 left-[52px] w-px bg-pin/30" />
            <div role="tablist" aria-label={demo.listLabel} aria-orientation="vertical">
              {examples.map((e, i) => {
                const on = pick === i
                return (
                  <button
                    key={e.kind}
                    role="tab"
                    aria-selected={on}
                    onClick={() => choose(i)}
                    className="group relative flex w-full cursor-pointer items-center gap-5 border-b border-dashed border-grid py-4 pl-3 pr-3 text-left transition-colors last:border-b-0 hover:bg-canvas/70"
                  >
                    <span className={`flex w-7 shrink-0 justify-center transition-colors ${on ? "text-brand" : "text-ink-soft/60 group-hover:text-ink-soft"}`}>
                      <KindIcon kind={e.kind} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="relative inline-block">
                        {on && (
                          <motion.span
                            layoutId="demo-pick"
                            aria-hidden
                            className="absolute -inset-x-1.5 bottom-0 top-1/3 -skew-x-6 rounded-[2px] bg-butter"
                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                          />
                        )}
                        <span className={`relative text-[16px] font-bold transition-colors ${on ? "text-ink" : "text-ink-soft group-hover:text-ink"}`}>{kinds[e.kind]}</span>
                      </span>
                      <span className="han mt-0.5 block truncate text-[15px] text-ink-soft" lang="zh-Hans">{e.said}</span>
                    </span>
                    {/* A radio mark: filled for the one shown, empty (and lit on hover) for the others. */}
                    <span
                      aria-hidden
                      className={`flex size-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                        on ? "border-brand bg-brand text-white" : "border-grid text-transparent group-hover:border-brand/60"
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="size-3.5 fill-none stroke-current" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m5 12.5 4.5 4.5L19 7.5" />
                      </svg>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </Reveal>

        {/* The sheet, with why it changed pinned to its corner. */}
        <Reveal delay={0.1} className="relative">
          <Tape className="-top-4 left-8 z-10 rotate-[-6deg]" />
          <div className="squared relative rounded-[28px] border border-grid px-6 pb-16 pt-9 sm:px-10 sm:pb-20">
            <Doodle kind="squiggle" className="right-6 top-8 w-24 opacity-90" />

            {/* What you said, or the better way: a two-way switch. */}
            <div role="radiogroup" aria-label={demo.switchLabel} className="relative inline-flex rounded-full border border-grid bg-canvas p-1">
              {views.map((v) => (
                <button
                  key={String(v.fixed)}
                  role="radio"
                  aria-checked={fixed === v.fixed}
                  onClick={() => setFixed(v.fixed)}
                  className={`relative min-h-[38px] cursor-pointer rounded-full px-4 text-sm font-bold transition-colors ${fixed === v.fixed ? v.tint : "text-ink-soft hover:text-ink"}`}
                >
                  {fixed === v.fixed && (
                    <motion.span layoutId="demo-view" className="absolute inset-0 rounded-full bg-paper shadow-[0_2px_8px_-4px_rgba(0,9,55,0.3)]" transition={{ type: "spring", stiffness: 420, damping: 32 }} />
                  )}
                  <span className="relative">{v.fixed ? demo.better : demo.said}</span>
                </button>
              ))}
            </div>

            <button onClick={() => setFixed((f) => !f)} className="relative mt-8 block w-full cursor-pointer text-left" aria-label={demo.flip}>
              <SentenceMorph key={pick} said={ex.said} better={ex.better} fixed={fixed} className="text-[34px] leading-[1.35] sm:text-[52px]" />
            </button>

            {/* The pinyin and meaning, or the hint: both always laid out, one shown. */}
            <div className="relative mt-3 grid text-[16px]">
              <div className={`col-start-1 row-start-1 transition-opacity duration-300 ${fixed ? "opacity-100" : "opacity-0"}`} aria-hidden={!fixed}>
                <p className="font-medium text-ink-soft">{ex.pinyin}</p>
                {words.meaning && <p className="mt-1 text-ink">{words.meaning}</p>}
              </div>
              <p className={`col-start-1 row-start-1 text-ink-soft transition-opacity duration-300 ${fixed ? "opacity-0" : "opacity-100"}`} aria-hidden={fixed}>
                {demo.hint}
              </p>
            </div>
          </div>

          {/* Kenapa begitu: its place is kept while it's hidden. */}
          <motion.div
            key={pick}
            initial={false}
            animate={fixed ? { opacity: 1, y: 0, rotate: -1.5 } : { opacity: 0, y: 14, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22, delay: fixed ? 0.35 : 0 }}
            aria-hidden={!fixed}
            className="relative z-10 mx-4 -mt-10 sm:ml-auto sm:mr-8 sm:max-w-sm"
          >
            <StickyNote pin="right-8">
              <p className="font-bold">{demo.why}</p>
              <p className="mt-1 text-[15px] leading-relaxed text-butter-ink">{words.why}</p>
            </StickyNote>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
