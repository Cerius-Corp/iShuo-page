import { motion, useScroll, useTransform, type MotionValue } from "motion/react"
import { useRef, type ReactNode } from "react"
import { DownloadButton } from "../components/Buttons"
import { Phone } from "../components/Phone"

const ease = [0.22, 1, 0.36, 1] as const

/** Three screens of the app, fanned out; as the page scrolls on, the side
 *  ones lean further away. `x` is a share of the phone's own width. */
const sidePhones = [
  { src: "/img/screens/learn.jpg", alt: "Halaman Belajar: 22 kalimat dari obrolan menunggu dilatih", x: ["-64%", "-84%"], rotate: [-8, -15], delay: 0.45 },
  { src: "/img/screens/words.jpg", alt: "Kosa kata untuk daftar di kampus, tiap kata di perangko", x: ["64%", "84%"], rotate: [8, 15], delay: 0.55 },
]

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const lift = useTransform(scrollYProgress, [0, 1], [0, -70])

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 pb-10 pt-10 sm:px-6 md:pt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-4 lg:pb-24">
        <div className="relative z-10 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-grid bg-paper px-3.5 py-1.5 text-[13px] font-semibold text-ink-soft lg:mx-0"
          >
            <span className="size-2 rounded-full bg-mint" />
            Beta di iPhone · untuk pelajar Indonesia di China
          </motion.p>

          <h1 className="mt-6 text-[44px] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-[64px] lg:text-[68px]">
            <Rise delay={0.15}>Ngobrol</Rise>
            <Rise delay={0.22}>Mandarin,</Rise>
            <Rise delay={0.29} className="text-brand">tanpa takut</Rise>
            <Rise delay={0.36} className="relative text-brand" underlined>
              salah.
              <svg viewBox="0 0 300 18" aria-hidden className="absolute -bottom-3 left-0 h-4 w-full" preserveAspectRatio="none">
                <motion.path
                  d="M3 12 C 60 2, 120 16, 180 8 S 270 4, 297 10"
                  fill="none"
                  stroke="#ffd34d"
                  strokeWidth="6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.9, duration: 0.9, ease: "easeInOut" }}
                />
              </svg>
            </Rise>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mx-auto mt-8 max-w-[31rem] text-[17px] leading-relaxed text-ink-soft sm:text-lg lg:mx-0"
          >
            Rekam obrolanmu yang asli, di kampus, di warung, atau dengan teman. iShuo menunjukkan kalimat mana yang bisa lebih tepat, lalu melatihnya bersamamu sampai lancar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <DownloadButton />
            <a href="#cara-kerja" className="group inline-flex min-h-[44px] items-center gap-1.5 px-2 text-[15px] font-semibold text-brand">
              Lihat cara kerjanya
              <span className="transition-transform group-hover:translate-y-0.5" aria-hidden>↓</span>
            </a>
          </motion.div>
        </div>

        {/* The phones: Ngobrol langsung in front, Belajar and Kosa Kata behind. */}
        <div className="relative mx-auto h-[440px] w-full max-w-[560px] sm:h-[600px] lg:h-[640px]">
          {sidePhones.map((p) => (
            <SidePhone key={p.src} phone={p} progress={scrollYProgress} />
          ))}
          <motion.div
            initial={{ opacity: 0, y: 140 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 18, delay: 0.3 }}
            className="absolute left-1/2 top-0 z-10 w-[205px] -translate-x-1/2 sm:w-[270px] lg:w-[290px]"
          >
            <motion.div style={{ y: lift }}>
              <Phone src="/img/screens/live.jpg" alt="Ngobrol langsung: tiap kalimat muncul dengan pinyin dan artinya" eager />
              <motion.span
                initial={{ opacity: 0, scale: 0.6, rotate: -14 }}
                animate={{ opacity: 1, scale: 1, rotate: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 16, delay: 1.1 }}
                className="absolute -left-6 top-[18%] inline-flex items-center gap-2 rounded-full bg-paper px-3.5 py-2 text-[13px] font-bold text-[#d4371c] shadow-[0_10px_24px_-12px_rgba(0,9,55,0.45)] sm:-left-12 sm:text-sm"
              >
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#d4371c] opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-[#d4371c]" />
                </span>
                Merekam obrolan
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.6, rotate: 14 }}
                animate={{ opacity: 1, scale: 1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 260, damping: 16, delay: 1.3 }}
                className="absolute -right-5 bottom-[22%] rounded-[3px] bg-butter px-3.5 py-2 text-[13px] font-bold text-ink shadow-[0_10px_24px_-12px_rgba(0,9,55,0.45)] sm:-right-10 sm:text-sm"
              >
                <span className="han" lang="zh-Hans">你呢？</span> = Kalau kamu?
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/** One line of the headline, rising into place. */
function Rise({ children, delay, className = "", underlined = false }: {
  children: ReactNode
  delay: number
  className?: string
  /** Leaves room below for the squiggle under it. */
  underlined?: boolean
}) {
  return (
    <span className={`block overflow-hidden ${underlined ? "-mb-4 pb-5" : "pb-1"}`}>
      <motion.span
        className={`inline-block ${className}`}
        initial={{ y: "105%" }}
        animate={{ y: 0 }}
        transition={{ delay, duration: 0.8, ease }}
      >
        {children}
      </motion.span>
    </span>
  )
}

/** A phone behind the front one, leaning further out as the hero scrolls away. */
function SidePhone({ phone, progress }: { phone: (typeof sidePhones)[number]; progress: MotionValue<number> }) {
  const x = useTransform(progress, [0, 1], phone.x)
  const rotate = useTransform(progress, [0, 1], phone.rotate)
  return (
    <motion.div
      initial={{ opacity: 0, y: 160 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 18, delay: phone.delay }}
      className="absolute left-1/2 top-[9%] w-[172px] -translate-x-1/2 sm:w-[230px] lg:w-[245px]"
    >
      <motion.div style={{ x, rotate }}>
        <Phone src={phone.src} alt={phone.alt} eager />
      </motion.div>
    </motion.div>
  )
}
