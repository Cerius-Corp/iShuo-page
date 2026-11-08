import { useId } from "react"
import type { Lang } from "../i18n/languages"

/** A language's flag, small and rounded: Indonesia's, the UK's for English,
 *  China's for Chinese. Drawn here, since flag emoji don't show on Windows. */
export function Flag({ lang, className = "" }: { lang: Lang; className?: string }) {
  return (
    <svg viewBox="0 0 30 20" aria-hidden preserveAspectRatio="xMidYMid slice" className={`h-[14px] w-[21px] shrink-0 rounded-[3px] ring-1 ring-ink/10 ${className}`}>
      {lang === "id" ? <Indonesia /> : lang === "en" ? <UnitedKingdom /> : <China />}
    </svg>
  )
}

function Indonesia() {
  return (
    <>
      <rect width="30" height="20" fill="#fff" />
      <rect width="30" height="10" fill="#ce1126" />
    </>
  )
}

function UnitedKingdom() {
  const crosses = useId()
  return (
    <>
      <clipPath id={crosses}>
        <path d="M15 10h15v10zv10H0zH0V0zV0h15z" />
      </clipPath>
      <rect width="30" height="20" fill="#012169" />
      <path d="M0 0l30 20M30 0L0 20" stroke="#fff" strokeWidth="4" />
      <path d="M0 0l30 20M30 0L0 20" stroke="#c8102e" strokeWidth="2.4" clipPath={`url(#${crosses})`} />
      <path d="M15 0v20M0 10h30" stroke="#fff" strokeWidth="6" />
      <path d="M15 0v20M0 10h30" stroke="#c8102e" strokeWidth="3.6" />
    </>
  )
}

/** A five-pointed star of radius 1 round the origin. */
const star = "0,-1 .2245,-.309 .951,-.309 .363,.118 .588,.809 0,.382 -.588,.809 -.363,.118 -.951,-.309 -.2245,-.309"

function China() {
  const small = [
    { x: 10, y: 2, turn: 23 },
    { x: 12, y: 4, turn: 46 },
    { x: 12, y: 7, turn: 70 },
    { x: 10, y: 9, turn: 21 },
  ]
  return (
    <>
      <rect width="30" height="20" fill="#ee1c25" />
      <polygon points={star} fill="#ffff00" transform="translate(5 5) scale(3)" />
      {small.map((s) => (
        <polygon key={s.y} points={star} fill="#ffff00" transform={`translate(${s.x} ${s.y}) rotate(${s.turn})`} />
      ))}
    </>
  )
}
