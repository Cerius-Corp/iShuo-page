import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

/** The rest of the app, each with a screen from it. `tilt` fans the three
 *  cards out on a laptop (written whole, so Tailwind sees the classes). */
const cards = [
  {
    src: "/img/screens/words.jpg",
    alt: "Kosa kata untuk daftar di kampus: paspor, surat penerimaan, foto, dokumen",
    title: "Kosa kata per situasi",
    text: "Daftar di kampus, makan bersama keluarga, naik taksi: pelajari kata yang biasanya muncul sebelum kamu ke sana.",
    tilt: "lg:-rotate-4 lg:translate-y-8",
  },
  {
    src: "/img/screens/practice.jpg",
    alt: "Latihan dengan AI di kafe, dengan contoh jawaban untuk diucapkan",
    title: "Latihan dengan AI",
    text: "Ngobrol dengan iShuo kapan saja. Bingung mau jawab apa? Ketuk Bantuan jawaban.",
    tilt: "",
  },
  {
    src: "/img/screens/progress.jpg",
    alt: "Progress: jumlah percakapan naik, yang bisa diperbaiki turun",
    title: "Progress yang jujur",
    text: "Lihat jenis perbaikan mana yang makin jarang muncul di obrolanmu. Tanpa streak, tanpa tekanan.",
    tilt: "lg:rotate-4 lg:translate-y-8",
  },
]

const extras = ["Pocket kata di samping mic", "Bisa campur bahasa Indonesia", "Latih lafal per karakter", "Folder kosa kata per topik"]

/** A band of brand blue: the three steps sliding past in huge letters, then
 *  the rest of the app on cards. */
export function Features() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const slide = useTransform(scrollYProgress, [0, 1], ["0%", "-38%"])

  return (
    <section id="fitur" ref={ref} className="relative overflow-hidden bg-brand py-20 text-white lg:py-28">
      {/* Faint squared paper over the blue. */}
      <div aria-hidden className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:28px_28px]" />

      <motion.p aria-hidden style={{ x: slide }} className="relative whitespace-nowrap text-[22vw] font-extrabold leading-[0.9] tracking-[-0.04em] text-white/15 lg:text-[15vw]">
        NGOBROL · PERIKSA · LATIH · NGOBROL · PERIKSA · LATIH
      </motion.p>

      <div className="relative mx-auto mt-10 max-w-6xl px-4 sm:px-6 lg:mt-14">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-balance sm:text-5xl"
        >
          Siap sebelum ngobrol, terus latihan sesudahnya.
        </motion.h2>
      </div>

      {/* Phone: a row to swipe through. Laptop: three cards fanned out. */}
      <div className="relative mx-auto mt-12 flex max-w-6xl snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-10 [scrollbar-width:none] sm:px-6 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:pb-12">
        {cards.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 90 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ type: "spring", stiffness: 110, damping: 18, delay: i * 0.12 }}
            className="w-[80vw] max-w-[330px] shrink-0 snap-center lg:w-auto lg:max-w-none"
          >
            <div className={`rounded-[30px] bg-paper p-3 pb-6 text-ink shadow-[0_30px_60px_-30px_rgba(0,9,55,0.6)] transition-transform duration-500 ease-out lg:hover:rotate-0 lg:hover:translate-y-0 ${c.tilt}`}>
              <div className="relative h-[300px] overflow-hidden rounded-[22px] bg-canvas sm:h-[340px]">
                <img src={c.src} alt={c.alt} loading="lazy" className="absolute inset-x-0 top-0 w-full select-none" draggable={false} />
                <div aria-hidden className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-paper to-transparent" />
              </div>
              <h3 className="mt-4 px-3 text-xl font-extrabold tracking-tight">{c.title}</h3>
              <p className="mt-1.5 px-3 text-[15px] leading-relaxed text-ink-soft">{c.text}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <ul className="relative mx-auto mt-4 flex max-w-6xl flex-wrap gap-2.5 px-4 sm:px-6 lg:mt-10">
        {extras.map((e, i) => (
          <motion.li
            key={e}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 + i * 0.07 }}
            className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[15px] font-semibold"
          >
            {e}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
