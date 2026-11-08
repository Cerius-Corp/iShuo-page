import { motion, useScroll, useSpring } from "motion/react"
import { useRef, type ReactNode } from "react"
import { Reveal, SectionHead } from "../components/Reveal"
import { Bubble, Stamp } from "../components/Stationery"

/** Three steps on a dashed thread that draws itself as you scroll:
 *  talk, iShuo checks, you learn and practise. Each with a little piece of
 *  the app as it looks. */
export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })

  return (
    <section id="cara-kerja" className="relative scroll-mt-20 bg-paper px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHead kicker="Cara kerja" title="Tiga langkah, dari obrolan ke kalimat yang lancar." center />

        <div ref={ref} className="relative mx-auto mt-16 max-w-5xl">
          {/* The thread: dashed underneath, solid blue drawing over it. */}
          <div aria-hidden className="absolute bottom-10 left-[27px] top-6 w-[3px] md:left-1/2 md:-translate-x-1/2">
            <div className="h-full w-full bg-[repeating-linear-gradient(to_bottom,var(--color-grid)_0_10px,transparent_10px_18px)]" />
            <motion.div className="absolute inset-0 origin-top bg-brand" style={{ scaleY: progress }} />
          </div>

          <Step n={1} title="Rekam obrolanmu" side="left" visual={<TalkVisual />}>
            Buka <b>Ngobrol langsung</b> saat bicara dengan teman, dosen, atau penjual. Tiap kalimat muncul dengan pinyin dan artinya, dan iShuo mengenali mana suaramu.
          </Step>
          <Step n={2} title="iShuo memeriksa" side="right" visual={<CheckVisual />}>
            Setelah selesai, iShuo mencari kalimatmu yang bisa lebih tepat, lalu mengelompokkannya: urutan kata, pilihan kata, kata yang kurang, kata yang kamu lupa, atau supaya lebih natural.
          </Step>
          <Step n={3} title="Belajar dan latih lafal" side="left" visual={<PracticeVisual />} last>
            Di <b>Belajar</b>, lihat kalimatmu berubah jadi yang lebih tepat dan kenapa. Lalu ucapkan lagi di <b>Latih lafal</b>: tiap karakter dicek sampai pas.
          </Step>
        </div>
      </div>
    </section>
  )
}

function Step({ n, title, side, visual, children, last = false }: {
  n: number
  title: string
  side: "left" | "right"
  visual: ReactNode
  children: ReactNode
  last?: boolean
}) {
  const text = (
    <Reveal className="md:max-w-[22rem]">
      <h3 className="text-2xl font-extrabold tracking-tight">{title}</h3>
      <p className="mt-3 text-[16px] leading-relaxed text-ink-soft [&_b]:font-semibold [&_b]:text-ink">{children}</p>
    </Reveal>
  )
  const art = <Reveal delay={0.12} className="w-full max-w-[22rem]">{visual}</Reveal>
  return (
    <div className={`relative grid grid-cols-[56px_1fr] gap-x-4 md:grid-cols-[1fr_72px_1fr] md:gap-x-10 ${last ? "" : "pb-16 md:pb-24"}`}>
      {/* The number, on a little stamp on the thread. */}
      <div className="row-span-2 md:col-start-2 md:row-span-1 md:row-start-1">
        <motion.div
          initial={{ scale: 0.4, rotate: -20, opacity: 0 }}
          whileInView={{ scale: 1, rotate: n % 2 ? -6 : 5, opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -20% 0px" }}
          transition={{ type: "spring", stiffness: 260, damping: 15 }}
          className="relative z-10 mx-auto w-14"
        >
          <Stamp pad="p-[6px]" className="size-14" small>
            <span className="flex size-full items-center justify-center text-xl font-extrabold text-brand">{n}</span>
          </Stamp>
        </motion.div>
      </div>
      <div className={`md:row-start-1 md:flex md:items-center ${side === "left" ? "md:col-start-1 md:justify-end md:text-right" : "md:col-start-3"}`}>
        <div className={side === "left" ? "md:ml-auto" : ""}>{text}</div>
      </div>
      <div className={`mt-6 md:mt-0 md:row-start-1 md:flex md:items-center ${side === "left" ? "md:col-start-3" : "md:col-start-1 md:justify-end"}`}>
        {art}
      </div>
    </div>
  )
}

/** A live conversation: their line, yours being heard. */
function TalkVisual() {
  return (
    <div className="squared relative rounded-3xl border border-grid p-5">
      <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d4371c]">
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#d4371c] opacity-60 motion-reduce:hidden" />
          <span className="relative inline-flex size-2.5 rounded-full bg-[#d4371c]" />
        </span>
        Ngobrol langsung
      </div>
      <p className="mb-1 text-xs font-semibold text-ink-soft">Mereka</p>
      <Bubble className="w-fit max-w-[90%]">
        <span className="han block text-lg font-bold" lang="zh-Hans">你学什么专业啊？</span>
        <span className="block text-xs text-ink-soft">nǐ xué shénme zhuānyè a?</span>
        <span className="block text-xs text-ink-soft/80">Kamu kuliah jurusan apa?</span>
      </Bubble>
      <p className="mb-1 mt-5 text-right text-xs font-semibold text-ink-soft">Kamu</p>
      <div className="flex justify-end">
        <Bubble tone="box" tail="right-6" className="w-fit max-w-[90%] text-right">
          <span className="han block text-lg font-bold" lang="zh-Hans">我学计算机。</span>
          <span className="block text-xs text-ink-soft">wǒ xué jìsuànjī.</span>
        </Bubble>
      </div>
    </div>
  )
}

/** A fix, as after a conversation: what you said and the better way. */
function CheckVisual() {
  return (
    <div className="rounded-3xl border border-grid bg-canvas p-5">
      <p className="flex items-center gap-2 text-sm font-bold"><span className="text-brand">⇆</span> Pemilihan kata</p>
      <div className="mt-4 grid grid-cols-[1fr_1px_1fr] gap-4 text-center">
        <div>
          <p className="text-xs font-semibold text-[#d4371c]">Kamu bilang</p>
          <p className="han mt-2 text-3xl font-bold text-[#d4371c]" lang="zh-Hans">不</p>
          <p className="text-xs text-ink-soft">bù · tidak</p>
        </div>
        <div className="bg-[repeating-linear-gradient(to_bottom,var(--color-grid)_0_4px,transparent_4px_8px)]" />
        <div>
          <p className="text-xs font-semibold text-mint">Lebih tepat</p>
          <p className="han mt-2 text-3xl font-bold" lang="zh-Hans">没</p>
          <p className="text-xs text-ink-soft">méi · belum</p>
        </div>
      </div>
      <div className="mt-4 rounded-2xl bg-sage/50 px-4 py-3">
        <p className="text-xs font-semibold text-mint">✓ Yang benar</p>
        <p className="han text-lg font-bold" lang="zh-Hans">我<span className="text-mint">没</span>听懂。</p>
        <p className="text-xs text-ink-soft">Saya tidak menangkapnya.</p>
      </div>
    </div>
  )
}

/** Latih lafal: the line on a stamp, a dot under each character. */
function PracticeVisual() {
  const chars = [
    { c: "我", p: "wǒ", ok: true },
    { c: "没", p: "méi", ok: false },
    { c: "听", p: "tīng", ok: true },
    { c: "懂", p: "dǒng", ok: true },
  ]
  return (
    <div className="relative pt-3">
      <Stamp pad="p-3" className="rotate-[-2deg]">
        <div className="px-5 py-6 text-center">
          <p className="text-sm font-semibold text-ink-soft">Ucapkan kalimat ini</p>
          <div className="mt-3 flex justify-center gap-2.5">
            {chars.map((x, i) => (
              <div key={x.c} className="flex flex-col items-center">
                <span className="text-xs text-ink-soft">{x.p}</span>
                <span className="han text-3xl font-bold" lang="zh-Hans">{x.c}</span>
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.12, type: "spring", stiffness: 400, damping: 15 }}
                  className={`mt-1 size-2 rounded-full ${x.ok ? "bg-mint" : "bg-[#f29a3a]"}`}
                />
              </div>
            ))}
          </div>
        </div>
      </Stamp>
      <div className="absolute -right-2 -top-1 rotate-[6deg] rounded-[3px] bg-butter px-3 py-1.5 text-sm font-bold shadow-md">Hampir pas!</div>
    </div>
  )
}
