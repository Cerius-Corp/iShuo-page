import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

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

/** Questions people ask, on a dark band; one open at a time. */
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="bg-ink px-4 py-20 text-white sm:px-6 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#9db5ff]">FAQ</p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl"
          >
            Yang sering ditanyakan.
          </motion.h2>
          <img src="/img/mascotreading.png" alt="" aria-hidden className="mt-10 hidden w-36 lg:block" />
        </div>

        <div className="border-t border-white/12">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className="border-b border-white/12">
                <h3>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="flex min-h-[68px] w-full cursor-pointer items-center justify-between gap-4 py-4 text-left text-[17px] font-bold transition-colors hover:text-[#c9d6ff] sm:text-lg"
                  >
                    {f.q}
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full text-xl leading-none transition-colors ${isOpen ? "bg-white text-ink" : "bg-white/10 text-white"}`}
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
                      <p className="max-w-2xl pb-6 pr-10 text-[16px] leading-relaxed text-white/70">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
