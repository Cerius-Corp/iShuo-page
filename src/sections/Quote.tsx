import { motion, useScroll, useTransform, type MotionValue } from "motion/react"
import { useRef } from "react"
import { Doodle } from "../components/Stationery"
import { useCopy } from "../i18n/useCopy"

/** What a learner thinks on the way home, between two of the app's doodles
 *  turning as you scroll. Each word lights up as the page scrolls past it;
 *  the part that hurts is in blue. */
export function Quote() {
  const { quote } = useCopy()
  const words = [...quote.plain.map((w) => ({ w, accent: false })), ...quote.accent.map((w) => ({ w, accent: true }))]
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] })
  const turn = useTransform(scrollYProgress, [0, 1], [-30, 60])

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:py-32">
      <Doodle kind="flower" style={{ rotate: turn }} className="left-[3%] top-4 w-14 sm:top-12 sm:w-28 lg:left-[10%] lg:top-20 lg:w-32" />
      <Doodle kind="squiggle" className="bottom-14 right-[6%] w-28 sm:w-36 lg:right-[12%]" />
      <div ref={ref} className="relative mx-auto max-w-4xl text-center">
        <p className="text-[34px] font-extrabold leading-[1.15] tracking-[-0.03em] sm:text-5xl lg:text-[60px]">
          {words.map((x, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} accent={x.accent} join={quote.join}>
              {x.w}
            </Word>
          ))}
        </p>
      </div>
    </section>
  )
}

function Word({ children, progress, range, accent, join }: {
  children: string
  progress: MotionValue<number>
  range: [number, number]
  accent: boolean
  /** What goes after it: a space, or nothing in Chinese. */
  join: string
}) {
  const opacity = useTransform(progress, range, [0.14, 1])
  return (
    <>
      <motion.span style={{ opacity }} className={accent ? "text-brand" : undefined}>{children}</motion.span>
      {join}
    </>
  )
}
