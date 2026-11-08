import { motion } from "motion/react"
import type { ReactNode } from "react"
import { Reveal, SectionHead } from "../components/Reveal"
import { Bubble } from "../components/Stationery"

/** The rest of the app, each on its own card with a little of its look. */
export function Features() {
  return (
    <section className="bg-paper px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHead kicker="Yang lain di iShuo" title="Siap sebelum ngobrol, terus latihan sesudahnya." />

        <div className="mt-12 grid gap-5 md:grid-cols-6">
          <Card className="md:col-span-4" title="Kosa Kata per situasi" text="Daftar di kampus, makan bersama keluarga, naik taksi: pilih situasinya, pelajari kata dan kalimat yang biasanya muncul, lalu simpan ke Pocket.">
            <Folders />
          </Card>
          <Card className="md:col-span-2" title="Latihan dengan AI" text="Ngobrol dengan iShuo kapan saja. Bingung jawab? Ketuk Bantu jawab.">
            <div className="space-y-3">
              <Bubble className="w-fit"><span className="han text-base font-bold" lang="zh-Hans">你想喝点什么？</span></Bubble>
              <div className="flex justify-end">
                <Bubble tone="box" tail="right-5" className="w-fit"><span className="han text-base font-bold" lang="zh-Hans">我要一杯拿铁。</span></Bubble>
              </div>
            </div>
          </Card>
          <Card className="md:col-span-2" title="Pocket saat ngobrol" text="Kata yang sudah kamu simpan selalu ada di samping mic, kalau tiba-tiba lupa.">
            <div className="flex flex-wrap gap-2">
              {["报到", "宿舍", "学生证"].map((w) => (
                <span key={w} className="han rounded-full bg-box px-3 py-1.5 text-base font-bold" lang="zh-Hans">{w}</span>
              ))}
            </div>
          </Card>
          <Card className="md:col-span-2" title="Bahasa campur" text="Keceplosan bahasa Indonesia di tengah kalimat? iShuo tetap mengerti, dan menunjukkan Mandarinnya.">
            <p className="text-base font-semibold">Nanti kita <span className="han rounded bg-sage/60 px-1 text-mint" lang="zh-Hans">去吃火锅</span> ya</p>
          </Card>
          <Card className="md:col-span-2" title="Progress yang jujur" text="Lihat jenis perbaikan mana yang makin jarang muncul di obrolanmu. Tanpa streak, tanpa tekanan.">
            <Bars />
          </Card>
        </div>
      </div>
    </section>
  )
}

function Card({ title, text, children, className = "" }: { title: string; text: string; children: ReactNode; className?: string }) {
  return (
    <Reveal className={className}>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="flex h-full flex-col justify-between gap-6 rounded-[28px] border border-grid bg-canvas p-6 sm:p-7"
      >
        <div className="md:min-h-[72px]">{children}</div>
        <div>
          <h3 className="text-xl font-extrabold tracking-tight">{title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{text}</p>
        </div>
      </motion.article>
    </Reveal>
  )
}

/** Kosa Kata's folders, fanned out; they spread a little more on hover. */
function Folders() {
  const folders = [
    { label: "Daftar di kampus", color: "bg-[#5856d6]" },
    { label: "Teman sekelas", color: "bg-[#ff3b30]" },
    { label: "Dosen", color: "bg-[#34c759]" },
    { label: "Perpustakaan", color: "bg-[#007aff]" },
  ]
  return (
    <motion.div initial="rest" whileHover="open" animate="rest" className="relative h-[150px]">
      {folders.map((f, i) => (
        <motion.div
          key={f.label}
          variants={{ rest: { y: i * 26, x: i * 6 }, open: { y: i * 32, x: i * 14 } }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="absolute left-0 right-8 top-0"
          style={{ zIndex: i }}
        >
          <div className={`h-3 w-20 rounded-t-lg ${f.color}`} />
          <div className={`rounded-b-xl rounded-tr-xl border-t-4 bg-paper px-4 py-3 text-base font-extrabold shadow-[0_8px_18px_-12px_rgba(0,9,55,0.4)] ${f.color.replace("bg-", "border-")}`}>
            {f.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

/** Slips per conversation going down: the latest bar in the brand blue. */
function Bars() {
  const heights = [62, 54, 40, 36, 22, 14]
  return (
    <div className="flex h-[72px] items-end gap-2">
      {heights.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: h }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, type: "spring", stiffness: 160, damping: 20 }}
          className={`w-full rounded-md ${i === heights.length - 1 ? "bg-brand" : "bg-brand/20"}`}
        />
      ))}
    </div>
  )
}
