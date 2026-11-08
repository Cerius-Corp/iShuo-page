import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { SentenceMorph } from "../components/Morph"
import { Reveal, SectionHead } from "../components/Reveal"
import { StickyNote, Tape } from "../components/Stationery"

/** Sentences learners really say, each a different kind of fix. */
const examples = [
  {
    kind: "Pemilihan kata",
    said: "我不听懂。",
    better: "我没听懂。",
    pinyin: "Wǒ méi tīng dǒng.",
    meaning: "Saya tidak menangkapnya.",
    why: "没 untuk hasil yang tidak tercapai. 不 untuk kebiasaan atau kemauan.",
  },
  {
    kind: "Urutan letak kata",
    said: "我吃饭在食堂。",
    better: "我在食堂吃饭。",
    pinyin: "Wǒ zài shítáng chīfàn.",
    meaning: "Saya makan di kantin.",
    why: "Tempat ditaruh sebelum kata kerja, bukan di akhir kalimat.",
  },
  {
    kind: "Kata kurang",
    said: "他说中文说很快。",
    better: "他说中文说得很快。",
    pinyin: "Tā shuō Zhōngwén shuō de hěn kuài.",
    meaning: "Dia bicara bahasa Mandarin dengan cepat.",
    why: "Untuk menilai cara melakukan sesuatu, pakai 得: 说得很快.",
  },
]

/** Try it: pick a sentence, watch it turn into the better way (the
 *  characters move, fall away and pop in, as in the app), and back.
 *  Everything that comes and goes keeps its place, so nothing below jumps. */
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
      <div className="mx-auto max-w-6xl">
        <SectionHead title="Lihat kalimatmu jadi lebih tepat." center>
          Pilih contoh, lalu ketuk kalimatnya untuk bolak-balik.
        </SectionHead>

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="mb-6 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Contoh kalimat">
            {examples.map((e, i) => (
              <button
                key={e.kind}
                role="tab"
                aria-selected={pick === i}
                onClick={() => choose(i)}
                className={`relative min-h-[44px] cursor-pointer rounded-full px-4 text-[15px] font-semibold transition-colors ${pick === i ? "text-white" : "bg-paper text-brand hover:bg-brand-soft"}`}
              >
                {pick === i && <motion.span layoutId="demo-chip" className="absolute inset-0 rounded-full bg-brand" transition={{ type: "spring", stiffness: 420, damping: 32 }} />}
                <span className="relative">{e.kind}</span>
              </button>
            ))}
          </div>

          <div className="relative">
            <Tape className="-top-4 left-8 z-10 rotate-[-6deg]" />
            <div className="squared relative rounded-[28px] border border-grid px-6 pb-8 pt-9 sm:px-12 sm:pb-10 sm:pt-11">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className={`text-sm font-bold transition-colors duration-300 ${fixed ? "text-mint" : "text-ink-soft"}`}>
                  {fixed ? "✓ Lebih tepat" : "Kamu bilang"}
                </p>
                <button
                  onClick={() => setFixed((f) => !f)}
                  className="min-h-[40px] cursor-pointer rounded-full bg-box px-4 text-sm font-semibold text-brand transition-colors hover:bg-brand-soft"
                >
                  {fixed ? "↩ Lihat ucapanmu" : "Lihat yang tepat ↪"}
                </button>
              </div>

              <button onClick={() => setFixed((f) => !f)} className="mt-5 block w-full cursor-pointer text-left" aria-label="Bolak-balik antara ucapanmu dan yang lebih tepat">
                <SentenceMorph key={pick} said={ex.said} better={ex.better} fixed={fixed} className="text-[34px] leading-[1.35] sm:text-5xl" />
              </button>

              {/* The pinyin and meaning, or the hint: both always laid out, one shown. */}
              <div className="mt-3 grid text-[15px]">
                <div className={`col-start-1 row-start-1 transition-opacity duration-300 ${fixed ? "opacity-100" : "opacity-0"}`} aria-hidden={!fixed}>
                  <p className="font-medium text-ink-soft">{ex.pinyin}</p>
                  <p className="mt-1 text-ink">{ex.meaning}</p>
                </div>
                <p className={`col-start-1 row-start-1 text-ink-soft transition-opacity duration-300 ${fixed ? "opacity-0" : "opacity-100"}`} aria-hidden={fixed}>
                  Ketuk kalimatnya untuk bolak-balik.
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
              className="relative z-10 mx-4 -mt-5 sm:ml-auto sm:mr-10 sm:max-w-md"
            >
              <StickyNote pin="right-8">
                <p className="font-bold">Kenapa begitu?</p>
                <p className="mt-1 text-[15px] leading-relaxed text-butter-ink">{ex.why}</p>
              </StickyNote>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
