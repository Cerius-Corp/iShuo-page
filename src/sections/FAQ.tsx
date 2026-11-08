import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { Reveal, SectionHead } from "../components/Reveal"

const faqs = [
  {
    q: "Apakah iShuo gratis?",
    a: "Selama masa beta, iShuo bisa dicoba gratis lewat TestFlight.",
  },
  {
    q: "iPhone apa yang bisa memakai iShuo?",
    a: "iPhone dengan iOS 26 atau lebih baru. Fitur AI-nya berjalan lewat server iShuo, jadi tidak harus iPhone yang mendukung Apple Intelligence.",
  },
  {
    q: "Apakah rekaman obrolanku disimpan?",
    a: "Rekaman suara dipakai untuk mengenali siapa yang bicara dan menuliskan kalimatnya, lalu dihapus setelah obrolan dianalisis. Teks obrolannya disimpan di iPhone-mu, dan dikirim ke AI iShuo hanya untuk diperiksa.",
  },
  {
    q: "Perlu minta izin sebelum merekam?",
    a: "Ya. Selalu minta izin dulu ke orang yang kamu ajak bicara sebelum merekam. Aturan perekaman berbeda di setiap tempat.",
  },
  {
    q: "Untuk level berapa?",
    a: "Dari yang baru tahu beberapa kata sampai yang sudah cukup lancar. Saat pertama kali membuka iShuo, kamu memilih levelmu, dan penjelasannya menyesuaikan.",
  },
  {
    q: "Bagaimana kalau aku campur bahasa Indonesia?",
    a: "Tidak apa-apa. iShuo mengenali kata bahasa Indonesia di tengah kalimat Mandarin dan menunjukkan padanan Mandarinnya.",
  },
  {
    q: "Bagaimana cara ikut beta di TestFlight?",
    a: "Pasang aplikasi TestFlight dari App Store, lalu buka link undangan iShuo di iPhone-mu (atau pindai QR code di bawah). Ketuk Terima, lalu Instal.",
  },
]

/** Questions people ask, one open at a time, like index cards. */
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHead kicker="FAQ" title="Yang sering ditanyakan." />
          <Reveal delay={0.1}>
            <img src="/img/mascotreading.png" alt="" aria-hidden className="mt-8 hidden w-40 lg:block" />
          </Reveal>
        </div>

        <Reveal className="divide-y divide-grid overflow-hidden rounded-[28px] border border-grid bg-paper">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q}>
                <h3>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="flex min-h-[64px] w-full cursor-pointer items-center justify-between gap-4 px-6 py-4 text-left text-[17px] font-bold transition-colors hover:bg-canvas"
                  >
                    {f.q}
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full text-xl leading-none ${isOpen ? "bg-brand text-white" : "bg-box text-brand"}`}
                      aria-hidden
                    >
                      +
                    </motion.span>
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
                      <p className="px-6 pb-6 text-[16px] leading-relaxed text-ink-soft">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
