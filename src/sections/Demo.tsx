import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { SentenceMorph } from "../components/Morph"
import { Reveal } from "../components/Reveal"
import { Doodle, StickyNote, Tape } from "../components/Stationery"

/** Sentences learners really say, each a different kind of fix, with the
 *  mark the app gives that kind in Belajar. */
const examples = [
  {
    kind: "Pemilihan kata",
    mark: "A",
    said: "我不听懂。",
    better: "我没听懂。",
    pinyin: "Wǒ méi tīng dǒng.",
    meaning: "Saya tidak menangkapnya.",
    why: "没 untuk hasil yang tidak tercapai. 不 untuk kebiasaan atau kemauan.",
  },
  {
    kind: "Urutan letak kata",
    mark: "⇆",
    said: "我吃饭在食堂。",
    better: "我在食堂吃饭。",
    pinyin: "Wǒ zài shítáng chīfàn.",
    meaning: "Saya makan di kantin.",
    why: "Tempat ditaruh sebelum kata kerja, bukan di akhir kalimat.",
  },
  {
    kind: "Kata kurang/lebih",
    mark: "±",
    said: "他说中文说很快。",
    better: "他说中文说得很快。",
    pinyin: "Tā shuō Zhōngwén shuō de hěn kuài.",
    meaning: "Dia bicara bahasa Mandarin dengan cepat.",
    why: "Untuk menilai cara melakukan sesuatu, pakai 得: 说得很快.",
  },
]

/** The switch over the sentence: as said, or the better way. */
const views = [
  { label: "Kamu bilang", fixed: false, tint: "text-ink" },
  { label: "✓ Lebih tepat", fixed: true, tint: "text-mint" },
]

/** Try it: pick a sentence from the list, as in Belajar, and watch it turn
 *  into the better way (the characters move, fall away and pop in), and
 *  back. Everything that comes and goes keeps its place, so nothing jumps. */
export function Demo() {
  const [pick, setPick] = useState(0)
  const [fixed, setFixed] = useState(false)
  const ex = examples[pick]

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
            Coba sendiri.
          </h2>
          <p className="mt-4 max-w-sm text-[17px] leading-relaxed text-ink-soft">Kalimat yang sering diucapkan pelajar. Pilih satu, lalu lihat yang lebih tepat.</p>

          <div className="mt-8 space-y-2" role="tablist" aria-label="Contoh kalimat" aria-orientation="vertical">
            {examples.map((e, i) => {
              const on = pick === i
              return (
                <button
                  key={e.kind}
                  role="tab"
                  aria-selected={on}
                  onClick={() => choose(i)}
                  className="group relative flex w-full cursor-pointer items-center gap-4 rounded-2xl px-4 py-3.5 text-left"
                >
                  {on && (
                    <motion.span
                      layoutId="demo-pick"
                      className="absolute inset-0 rounded-2xl border border-grid bg-paper"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className={`relative flex size-10 shrink-0 items-center justify-center rounded-xl text-lg font-bold transition-colors ${on ? "bg-brand text-white" : "bg-box text-brand"}`}>
                    {e.mark}
                  </span>
                  <span className="relative min-w-0 flex-1">
                    <span className={`block text-[16px] font-bold transition-colors ${on ? "text-ink" : "text-ink-soft group-hover:text-ink"}`}>{e.kind}</span>
                    <span className="han block truncate text-[15px] text-ink-soft" lang="zh-Hans">{e.said}</span>
                  </span>
                  <svg viewBox="0 0 24 24" aria-hidden className={`relative size-5 shrink-0 fill-none stroke-current transition-all ${on ? "translate-x-0 text-brand opacity-100" : "-translate-x-1 text-ink-soft opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6" />
                  </svg>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* The sheet, with why it changed pinned to its corner. */}
        <Reveal delay={0.1} className="relative">
          <Tape className="-top-4 left-8 z-10 rotate-[-6deg]" />
          <div className="squared relative rounded-[28px] border border-grid px-6 pb-16 pt-9 sm:px-10 sm:pb-20">
            <Doodle kind="squiggle" className="right-6 top-8 w-24 opacity-90" />

            {/* What you said, or the better way: a two-way switch. */}
            <div role="radiogroup" aria-label="Tampilkan kalimat" className="relative inline-flex rounded-full border border-grid bg-canvas p-1">
              {views.map((v) => (
                <button
                  key={v.label}
                  role="radio"
                  aria-checked={fixed === v.fixed}
                  onClick={() => setFixed(v.fixed)}
                  className={`relative min-h-[38px] cursor-pointer rounded-full px-4 text-sm font-bold transition-colors ${fixed === v.fixed ? v.tint : "text-ink-soft hover:text-ink"}`}
                >
                  {fixed === v.fixed && (
                    <motion.span layoutId="demo-view" className="absolute inset-0 rounded-full bg-paper shadow-[0_2px_8px_-4px_rgba(0,9,55,0.3)]" transition={{ type: "spring", stiffness: 420, damping: 32 }} />
                  )}
                  <span className="relative">{v.label}</span>
                </button>
              ))}
            </div>

            <button onClick={() => setFixed((f) => !f)} className="relative mt-8 block w-full cursor-pointer text-left" aria-label="Bolak-balik antara ucapanmu dan yang lebih tepat">
              <SentenceMorph key={pick} said={ex.said} better={ex.better} fixed={fixed} className="text-[34px] leading-[1.35] sm:text-[52px]" />
            </button>

            {/* The pinyin and meaning, or the hint: both always laid out, one shown. */}
            <div className="relative mt-3 grid text-[16px]">
              <div className={`col-start-1 row-start-1 transition-opacity duration-300 ${fixed ? "opacity-100" : "opacity-0"}`} aria-hidden={!fixed}>
                <p className="font-medium text-ink-soft">{ex.pinyin}</p>
                <p className="mt-1 text-ink">{ex.meaning}</p>
              </div>
              <p className={`col-start-1 row-start-1 text-ink-soft transition-opacity duration-300 ${fixed ? "opacity-0" : "opacity-100"}`} aria-hidden={fixed}>
                Ketuk kalimatnya untuk melihat yang lebih tepat.
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
              <p className="font-bold">Kenapa begitu?</p>
              <p className="mt-1 text-[15px] leading-relaxed text-butter-ink">{ex.why}</p>
            </StickyNote>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
