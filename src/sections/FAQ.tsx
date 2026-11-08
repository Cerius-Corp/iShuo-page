import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

const faqs = [
  { q: "Apakah iShuo gratis?", a: "Ya, gratis selama masa beta di TestFlight." },
  { q: "iPhone apa yang bisa memakai iShuo?", a: "iPhone dengan iOS 26 ke atas. Tidak perlu Apple Intelligence." },
  { q: "Apakah rekaman obrolanku disimpan?", a: "Tidak. Rekaman suara dihapus setelah obrolan dianalisis. Teksnya tersimpan di iPhone-mu dan hanya dikirim ke AI iShuo untuk diperiksa." },
  { q: "Perlu minta izin sebelum merekam?", a: "Ya. Selalu minta izin dulu ke lawan bicaramu." },
  { q: "Untuk level berapa?", a: "Semua level. Penjelasannya menyesuaikan level yang kamu pilih." },
  { q: "Bagaimana kalau aku campur bahasa Indonesia?", a: "Tidak apa-apa. iShuo tetap paham dan menunjukkan padanan Mandarinnya." },
  { q: "Bagaimana cara ikut beta?", a: "Pasang TestFlight dari App Store, buka link undangan iShuo di iPhone, lalu ketuk Terima dan Instal." },
]

/** Questions people ask, on a dark band; one open at a time. */
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="bg-ink px-4 py-20 text-white sm:px-6 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl"
          >
            Yang sering ditanyakan.
          </motion.h2>
          <p className="mt-4 text-[17px] text-white/60">
            Belum terjawab? <a href="#kontak" className="font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">Tanya kami</a>.
          </p>
          <img src="/img/mascotreading.png" alt="" aria-hidden className="mt-10 hidden w-36 lg:block" />
        </div>

        <ul className="border-t border-white/12">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <li key={f.q} className="border-b border-white/12">
                <h3>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="group flex min-h-[72px] w-full cursor-pointer items-center gap-4 py-4 text-left"
                  >
                    <span className="w-7 shrink-0 text-sm font-semibold tabular-nums text-white/35">{String(i + 1).padStart(2, "0")}</span>
                    <span className={`flex-1 text-[17px] font-bold transition-colors sm:text-lg ${isOpen ? "text-white" : "text-white/85 group-hover:text-white"}`}>{f.q}</span>
                    <motion.svg
                      viewBox="0 0 24 24"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 24 }}
                      className={`size-5 shrink-0 fill-none stroke-current transition-colors ${isOpen ? "text-white" : "text-white/50 group-hover:text-white"}`}
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="m6 9 6 6 6-6" />
                    </motion.svg>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pl-11 pr-9 text-[16px] leading-relaxed text-white/65">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
