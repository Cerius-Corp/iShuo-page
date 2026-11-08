import { motion, useScroll, useTransform, type MotionValue } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { CursorGrid } from "../components/CursorGrid"
import { Stamp } from "../components/Stationery"

/** The rest of the app, each on a stamp with a screen from it. `tilt` fans the three
 *  cards out on a laptop (written whole, so Tailwind sees the classes). */
const cards = [
  {
    src: "/img/screens/folders.jpg",
    alt: "Kosa Kata: folder per situasi, dari daftar di kampus sampai perpustakaan",
    title: "Kosa kata per situasi",
    text: "Mau daftar kampus atau naik taksi? Pelajari katanya dulu.",
    tilt: "lg:-rotate-4 lg:translate-y-8",
  },
  {
    src: "/img/screens/practice.jpg",
    alt: "Latihan dengan AI di kafe, dengan contoh jawaban untuk diucapkan",
    title: "Latihan dengan AI",
    text: "Ngobrol kapan saja. Bingung jawab? Ada contoh jawabannya.",
    tilt: "",
  },
  {
    src: "/img/screens/progress.jpg",
    alt: "Progress: jumlah percakapan naik, yang bisa diperbaiki turun",
    title: "Progress yang jujur",
    text: "Lihat apa yang makin jarang perlu diperbaiki. Tanpa streak.",
    tilt: "lg:rotate-4 lg:translate-y-8",
  },
]

const extras = ["Pocket kata di samping mic", "Bisa campur bahasa Indonesia", "Latih lafal per karakter", "Folder kosa kata per topik"]

/** A band of brand blue: "ngobrol" sliding past in huge letters, then
 *  the rest of the app on cards. */
export function Features() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const slide = useTransform(scrollYProgress, [0, 1], ["0%", "-38%"])
  const wide = useWide()
  const row = useRef<HTMLDivElement>(null)
  const { scrollYProgress: spread } = useScroll({ target: row, offset: ["start end", "center 60%"] })

  return (
    <section id="fitur" ref={ref} className="relative overflow-hidden bg-brand py-20 text-white lg:py-28">
      <CursorGrid tone="brand" />

      <motion.p aria-hidden style={{ x: slide }} className="relative whitespace-nowrap text-[22vw] font-extrabold leading-[0.9] tracking-[-0.04em] text-white/15 lg:text-[15vw]">
        NGOBROL · NGOBROL · NGOBROL · NGOBROL
      </motion.p>

      <div className="relative mx-auto mt-10 max-w-6xl px-4 sm:px-6 lg:mt-14">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] text-balance sm:text-5xl"
        >
          Siap sebelum ngobrol, lanjut latihan sesudahnya.
        </motion.h2>
      </div>

      {/* Phone: a row to swipe through. Laptop: three cards fanned out. */}
      <div ref={row} className="relative mx-auto mt-12 flex max-w-6xl snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-10 [scrollbar-width:none] sm:px-6 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:pb-12">
        {cards.map((c, i) => (
          <FeatureCard key={c.title} card={c} index={i} spread={spread} wide={wide} />
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

/** One card. On a laptop the three start close together in the middle and
 *  spread to their places as the band scrolls in (and close up again on the
 *  way back); on a phone they sit in a row to swipe through. */
function FeatureCard({ card: c, index, spread, wide }: {
  card: (typeof cards)[number]
  index: number
  spread: MotionValue<number>
  wide: boolean
}) {
  const x = useTransform(spread, [0, 1], [`${(1 - index) * 62}%`, "0%"])
  return (
    <motion.article
      style={wide ? { x, zIndex: index === 1 ? 2 : 1 } : undefined}
      initial={{ opacity: 0, y: 90 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ type: "spring", stiffness: 110, damping: 18, delay: index * 0.12 }}
      className="w-[80vw] max-w-[330px] shrink-0 snap-center lg:w-auto lg:max-w-none"
    >
      {/* On hover it straightens and lifts, and the screen inside scrolls down a little. */}
      <Stamp edge="bg-paper" className={`group text-ink transition-[rotate,translate,scale] duration-500 ease-out lg:hover:-translate-y-3 lg:hover:rotate-0 lg:hover:scale-[1.03] ${c.tilt}`}>
        <div className="p-2 pb-6">
          <div className="relative h-[300px] overflow-hidden rounded-[14px] bg-canvas sm:h-[340px]">
            <motion.img
              src={c.src}
              alt={c.alt}
              loading="lazy"
              draggable={false}
              initial={{ opacity: 0, scale: 1.12, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.9, delay: 0.25 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-0 w-full origin-top select-none transition-[translate] duration-700 ease-out lg:group-hover:-translate-y-[18%]"
            />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-paper to-transparent" />
          </div>
          <h3 className="mt-4 px-3 text-xl font-extrabold tracking-tight">{c.title}</h3>
          <p className="mt-1.5 px-3 text-[15px] leading-relaxed text-ink-soft">{c.text}</p>
        </div>
      </Stamp>
    </motion.article>
  )
}

/** Whether the screen is laptop-wide (Tailwind's `lg`), following resizes. */
function useWide() {
  const query = "(min-width: 1024px)"
  const [wide, setWide] = useState(() => matchMedia(query).matches)
  useEffect(() => {
    const list = matchMedia(query)
    const change = () => setWide(list.matches)
    list.addEventListener("change", change)
    return () => list.removeEventListener("change", change)
  }, [])
  return wide
}
