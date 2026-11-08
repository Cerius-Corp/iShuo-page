import { motion, useScroll, useTransform, type MotionValue } from "motion/react"
import { useRef } from "react"

/** What a learner thinks on the way home, on a sticky-note yellow band. Each word lights up as the page
 *  scrolls past it; the second sentence is the one that hurts, in blue. */
const lines = [
  { text: "“Tadi aku bilang apa, ya? Rasanya ada yang salah,", accent: false },
  { text: "tapi tidak ada yang mengoreksi.”", accent: true },
]
const words = lines.flatMap((l) => l.text.split(" ").map((w) => ({ w, accent: l.accent })))

export function Quote() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] })

  return (
    <section className="bg-butter px-4 py-24 sm:px-6 lg:py-32">
      <div ref={ref} className="mx-auto max-w-4xl text-center">
        <p className="text-[34px] font-extrabold leading-[1.15] tracking-[-0.03em] sm:text-5xl lg:text-[60px]">
          {words.map((x, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} accent={x.accent}>
              {x.w}
            </Word>
          ))}
        </p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-8 max-w-xl text-[17px] leading-relaxed text-butter-ink text-balance"
        >
          Lawan bicaramu tetap paham, jadi tidak ada yang bilang. Besoknya, kalimat yang sama terulang lagi.
        </motion.p>
      </div>
    </section>
  )
}

function Word({ children, progress, range, accent }: {
  children: string
  progress: MotionValue<number>
  range: [number, number]
  accent: boolean
}) {
  const opacity = useTransform(progress, range, [0.14, 1])
  return (
    <>
      <motion.span style={{ opacity }} className={accent ? "text-brand" : undefined}>{children}</motion.span>{" "}
    </>
  )
}
