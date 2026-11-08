import { motion } from "motion/react"
import { Reveal, SectionHead } from "../components/Reveal"
import { StickyNote } from "../components/Stationery"

const notes = [
  { title: "Hafal kosa kata, tapi beku saat ngobrol", detail: "Di kelas lancar. Di warung, kalimatnya keluar terbalik.", tone: "bg-butter", tilt: -3 },
  { title: "Tidak ada yang mengoreksi", detail: "Lawan bicaramu paham maksudmu, jadi tidak ada yang bilang kalau ada yang kurang tepat.", tone: "bg-box", tilt: 2.5 },
  { title: "Lupa apa yang tadi salah", detail: "Selesai ngobrol, kalimatnya sudah hilang dari ingatan.", tone: "bg-sage", tilt: -1.5 },
]

/** Why iShuo: textbooks teach you sentences; real conversations show which
 *  of yours need work. */
export function Problem() {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHead kicker="Kenapa iShuo" title={<>Buku mengajarkan kalimat.<br className="hidden sm:block" /> Obrolanmu menunjukkan yang perlu dilatih.</>}>
          Pindah ke China itu seru, tapi bicara Mandarin setiap hari beda dengan belajar di kelas. iShuo belajar dari kalimat yang benar-benar kamu ucapkan, bukan dari contoh di buku.
        </SectionHead>

        <div className="mt-14 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {notes.map((n, i) => (
            <Reveal key={n.title} delay={i * 0.1}>
              <motion.div whileHover={{ rotate: 0, y: -4 }} style={{ rotate: n.tilt }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <StickyNote tone={n.tone} className="min-h-[170px]">
                  <p className="text-lg font-bold leading-snug">{n.title}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{n.detail}</p>
                </StickyNote>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
