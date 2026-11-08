// What you said turning into the better way, as the app's sentence lesson
// shows it (Morph / SentenceMorph): the characters both share keep their
// place, the ones in the wrong place glide to where they go, the wrong
// ones fall away (red, struck through) and the missing ones pop in (green).

import { AnimatePresence, LayoutGroup, motion } from "motion/react"

type Kind = "same" | "out" | "moved" | "new"
interface Tile {
  id: string
  text: string
  kind: Kind
}

/** b's characters that are a's (b index → a index): the ones both share in
 *  order stay (longest common subsequence); the same character elsewhere moved. */
function match(a: string[], b: string[]) {
  const t = Array.from({ length: a.length + 1 }, () => new Array<number>(b.length + 1).fill(0))
  for (let i = a.length - 1; i >= 0; i--)
    for (let j = b.length - 1; j >= 0; j--)
      t[i][j] = a[i] === b[j] ? t[i + 1][j + 1] + 1 : Math.max(t[i + 1][j], t[i][j + 1])
  const stays = new Map<number, number>()
  let i = 0
  let j = 0
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      stays.set(j, i)
      i++
      j++
    } else if (t[i + 1][j] >= t[i][j + 1]) i++
    else j++
  }
  const used = new Set(stays.values())
  const moves = new Map<number, number>()
  b.forEach((c, jj) => {
    if (stays.has(jj)) return
    const ii = a.findIndex((x, k) => !used.has(k) && x === c)
    if (ii >= 0) {
      moves.set(jj, ii)
      used.add(ii)
    }
  })
  return { stays, moves }
}

function morph(said: string, better: string) {
  const a = [...said]
  const b = [...better]
  const { stays, moves } = match(a, b)
  const stayed = new Set(stays.values())
  const moved = new Set(moves.values())
  const from: Tile[] = a.map((c, i) => ({ id: `a${i}`, text: c, kind: stayed.has(i) ? "same" : moved.has(i) ? "moved" : "out" }))
  const to: Tile[] = b.map((c, j) => {
    const s = stays.get(j)
    if (s !== undefined) return { id: `a${s}`, text: c, kind: "same" }
    const m = moves.get(j)
    if (m !== undefined) return { id: `a${m}`, text: c, kind: "moved" }
    return { id: `b${j}`, text: c, kind: "new" }
  })
  return { from, to }
}

const tint = (k: Kind, fixed: boolean) =>
  !fixed && k === "out" ? "text-[#d4371c] bg-[#d4371c]/10 line-through decoration-2"
  : !fixed && k === "moved" ? "text-[#c46a12] bg-[#ff8e71]/20"
  : fixed && (k === "moved" || k === "new") ? "text-mint bg-sage/60"
  : "text-ink"

/** One sentence, as said or fixed; changing `fixed` plays the change. */
export function SentenceMorph({ said, better, fixed, className = "" }: { said: string; better: string; fixed: boolean; className?: string }) {
  const { from, to } = morph(said, better)
  const tiles = fixed ? to : from
  return (
    <LayoutGroup id={`${said}→${better}`}>
      <p className={`han flex flex-wrap items-center font-bold ${className}`} lang="zh-Hans" aria-label={fixed ? better : said}>
        <AnimatePresence mode="popLayout" initial={false}>
          {tiles.map((t) => (
            <motion.span
              key={t.id}
              layout="position"
              aria-hidden
              initial={{ opacity: 0, scale: 0.3, y: -12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.4, y: 14, transition: { duration: 0.22 } }}
              transition={{ type: "spring", stiffness: 380, damping: 26, delay: t.kind === "new" ? 0.18 : 0 }}
              className={`inline-block rounded-md px-[0.04em] transition-colors duration-500 ${tint(t.kind, fixed)}`}
            >
              {t.text}
            </motion.span>
          ))}
        </AnimatePresence>
      </p>
    </LayoutGroup>
  )
}
