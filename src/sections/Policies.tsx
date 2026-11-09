import { AnimatePresence, motion, useAnimate } from "motion/react"
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react"
import { Doodle, Tape } from "../components/Stationery"
import { policies, type Block, type PolicyKey } from "../copy/policies"
import { useCopy } from "../i18n/useCopy"
import { scrollToElement } from "../scroll"
import { site } from "../site"

const keys = Object.keys(policies) as PolicyKey[]

/** How far below the top of the screen a section lands, clear of the nav
 *  and the bar (and where it counts as the one being read). */
const readingLine = () => (matchMedia("(min-width: 640px)").matches ? 176 : 150)

/** A section's id, like "privacy-03". */
const sectionId = (tab: PolicyKey, i: number) => `${tab}-${String(i + 1).padStart(2, "0")}`

/** The tab a link asks for (/policies#privacy), else the Terms. */
const tabFromHash = (): PolicyKey => {
  const hash = window.location.hash.slice(1)
  return hash in policies ? (hash as PolicyKey) : "terms"
}

/** The Terms of Service and the Privacy Policy, at /policies: a title on
 *  squared paper, a bar to switch between the two, and the one picked on a
 *  sheet of paper, its sections numbered like the FAQ. Beside it on a
 *  laptop (above it on a phone), its contents, to jump to a section. */
export function Policies() {
  const copy = useCopy()
  const [tab, setTab] = useState<PolicyKey>(tabFromHash)
  const sheet = useRef<HTMLDivElement>(null)
  const policy = policies[tab]
  const [current, setCurrent] = useState(0)

  // The section being read: the last one whose top has passed the reading line.
  useEffect(() => {
    const onScroll = () => {
      const line = readingLine() + 8
      let reading = 0
      policy.sections.forEach((_, i) => {
        const el = document.getElementById(sectionId(tab, i))
        if (el && el.getBoundingClientRect().top <= line) reading = i
      })
      setCurrent(reading)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [tab, policy])

  const jump = (i: number) => {
    const el = document.getElementById(sectionId(tab, i))
    if (!el) return
    setCurrent(i)
    scrollToElement(el, readingLine())
  }

  // Back and forward (or a link) changing #terms / #privacy switch the tab.
  useEffect(() => {
    const onHash = () => setTab(tabFromHash())
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  const pick = (next: PolicyKey) => {
    if (next === tab) return
    setTab(next)
    history.replaceState(null, "", `#${next}`)
    // Read far down one, start the other from its top.
    const top = sheet.current?.getBoundingClientRect().top ?? 0
    if (sheet.current && top < 0) scrollToElement(sheet.current, readingLine() - 24)
  }

  return (
    <>
      <section className="squared relative overflow-hidden px-4 pb-14 pt-32 sm:px-6 sm:pb-20 sm:pt-40">
        <Doodle kind="squiggle" className="-left-6 top-28 w-28 opacity-80 sm:left-[8%] sm:w-40" />
        <Doodle kind="flower" className="right-4 top-24 w-12 rotate-12 sm:right-[12%] sm:top-32 sm:w-20" />
        <div className="relative mx-auto max-w-3xl text-center">
          <motion.img
            src="/img/mascotreading.png"
            alt=""
            initial={{ opacity: 0, y: 20, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ type: "spring", stiffness: 180, damping: 16 }}
            className="mx-auto h-24 w-auto sm:h-32"
          />
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-[40px] font-extrabold leading-[1.02] tracking-[-0.035em] sm:mt-7 sm:text-7xl"
          >
            {copy.policies.title}
            <span className="text-brand">.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft text-balance sm:mt-5 sm:text-[17px]"
          >
            {copy.policies.lead}
            {copy.policies.englishOnly && <span className="mt-1 block text-[13px] sm:text-sm">{copy.policies.englishOnly}</span>}
          </motion.p>
        </div>
      </section>

      {/* The bar: a button each, and one blue pill sliding under the one
          picked. It slides by its own width, so the page scrolling as the
          tab switches (the bar is sticky) doesn't throw it off. */}
      <div className="sticky top-[76px] z-40 -mt-7 px-4 sm:top-[92px] sm:px-6">
        <div
          role="tablist"
          aria-label={copy.policies.tabsLabel}
          className="relative mx-auto grid max-w-md grid-cols-2 rounded-full border border-grid bg-paper p-1.5 shadow-[0_8px_22px_-14px_rgba(0,9,55,0.35)]"
        >
          <motion.span
            aria-hidden
            initial={false}
            animate={{ x: `${keys.indexOf(tab) * 100}%` }}
            transition={{ type: "spring", stiffness: 420, damping: 34 }}
            className="absolute inset-y-1.5 left-1.5 w-[calc(50%-6px)] rounded-full bg-brand"
          />
          {keys.map((k) => {
            const active = k === tab
            return (
              <button
                key={k}
                role="tab"
                id={`tab-${k}`}
                aria-selected={active}
                aria-controls="policy"
                onClick={() => pick(k)}
                className={`relative min-h-[44px] cursor-pointer rounded-full px-3 text-[14px] font-semibold transition-colors sm:min-h-[48px] sm:text-[15px] ${active ? "text-white" : "text-ink-soft hover:text-brand"}`}
              >
                <span className="relative">{copy.policies.tabs[k]}</span>
              </button>
            )
          })}
        </div>
      </div>

      <section className="px-4 pb-20 pt-10 sm:px-6 sm:pb-28 sm:pt-14">
        <div ref={sheet} className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10">
          <aside className="hidden lg:block">
            <Contents titles={policy.sections.map((s) => s.title)} current={current} onJump={jump} label={copy.policies.contents} />
          </aside>
          <div className="relative min-w-0">
            <Tape className="-top-4 left-1/2 -translate-x-1/2 rotate-[-4deg]" />
            <motion.article
              key={tab}
              id="policy"
              role="tabpanel"
              aria-labelledby={`tab-${tab}`}
              lang="en"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[20px] border border-grid bg-paper px-5 pb-8 pt-10 shadow-[0_18px_40px_-26px_rgba(0,9,55,0.35)] sm:rounded-[28px] sm:px-12 sm:pb-12 sm:pt-14"
            >
              <header className="border-b border-grid pb-6 sm:pb-8">
                <span className="inline-block rounded-full bg-butter px-3 py-1 text-[12px] font-semibold text-butter-ink sm:text-[13px]">
                  Last updated on {policy.updated}
                </span>
                <h2 className="mt-4 text-[28px] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-[44px]">{policy.title}</h2>
                <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink-soft sm:text-[17px]">
                  {policy.intro.map((p) => <p key={p}>{p}</p>)}
                </div>
                <JumpMenu titles={policy.sections.map((s) => s.title)} onJump={jump} label={copy.policies.jump} />
              </header>
  
              <ol>
                {policy.sections.map((s, i) => (
                  <li key={s.title} id={sectionId(tab, i)} className="grid grid-cols-[28px_1fr] gap-x-2 border-b border-grid py-6 last:border-b-0 last:pb-0 sm:grid-cols-[40px_1fr] sm:gap-x-3 sm:py-8">
                    <span className="pt-[3px] text-[12px] font-semibold tabular-nums text-brand/60 sm:pt-[5px] sm:text-sm">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-[17px] font-bold tracking-[-0.01em] sm:text-xl">{s.title}</h3>
                      <div className="mt-3 space-y-5 sm:space-y-6">
                        {s.parts.map((part, j) => (
                          <div key={part.heading ?? j}>
                            {part.heading && <h4 className="mb-1.5 text-[15px] font-semibold text-brand sm:text-[16px]">{part.heading}</h4>}
                            <div className="space-y-3 text-[15px] leading-relaxed text-ink-soft sm:text-[16px]">
                              {part.blocks.map((b, k) => <PolicyBlock key={k} block={b} />)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
  
              {policy.outro && (
                <p className="mt-8 border-t border-grid pt-6 text-[15px] font-semibold leading-relaxed text-ink sm:mt-10 sm:pt-8 sm:text-[16px]">{policy.outro}</p>
              )}
            </motion.article>
          </div>
        </div>
      </section>
    </>
  )
}

/** The contents beside a policy, like a sheet in a folder: a tab on top,
 *  each section by number, the one being read marked in blue. It stays in
 *  view while the policy scrolls past. */
function Contents({ titles, current, onJump, label }: { titles: string[]; current: number; onJump: (i: number) => void; label: string }) {
  // The highlight goes to the current section's place in the list (measured
  // inside it, so scrolling the page doesn't move it): straight there at
  // first and on a new policy, sliding after.
  const [list, animate] = useAnimate<HTMLOListElement>()
  const placed = useRef<string | null>(null)
  useLayoutEffect(() => {
    const button = list.current?.querySelectorAll("button")[current]
    if (!button) return
    const sameList = placed.current === titles[0]
    placed.current = titles[0]
    animate(
      "[data-highlight]",
      { y: button.offsetTop, height: button.offsetHeight },
      sameList ? { type: "spring", stiffness: 420, damping: 36 } : { duration: 0 },
    )
  }, [current, titles, list, animate])

  return (
    <nav aria-label={label} className="sticky top-[176px] pt-[30px]">
      <div className="relative">
        {/* The folder tab. */}
        <span className="absolute -top-[30px] left-5 rounded-t-[12px] border border-b-0 border-grid bg-paper px-4 pb-2 pt-2 text-[12px] font-bold uppercase tracking-[0.08em] text-brand">
          {label}
        </span>
        <ol
          ref={list}
          data-lenis-prevent
          className="relative max-h-[calc(100vh-240px)] overflow-y-auto rounded-[20px] rounded-tl-[6px] border border-grid bg-paper p-2.5 shadow-[0_18px_40px_-26px_rgba(0,9,55,0.35)]"
        >
          <li aria-hidden data-highlight className="absolute inset-x-2.5 top-0 rounded-xl bg-brand-soft" />
          {titles.map((title, i) => {
            const active = i === current
            return (
              <li key={title}>
                <button
                  onClick={() => onJump(i)}
                  aria-current={active ? "location" : undefined}
                  className={`relative flex w-full cursor-pointer gap-2.5 rounded-xl px-3 py-2 text-left text-[13.5px] leading-snug transition-colors ${active ? "text-brand" : "text-ink-soft hover:bg-canvas hover:text-ink"}`}
                >
                  <span className={`relative w-5 shrink-0 pt-px text-[11.5px] font-semibold tabular-nums ${active ? "text-brand" : "text-brand/50"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`relative ${active ? "font-semibold" : "font-medium"}`}>{title}</span>
                </button>
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}

/** On a phone, where there's no room beside the policy: its contents in a
 *  list that opens under the introduction. */
function JumpMenu({ titles, onJump, label }: { titles: string[]; onJump: (i: number) => void; label: string }) {
  const [open, setOpen] = useState(false)
  return (
    <nav aria-label={label} className="mt-5 rounded-2xl border border-grid bg-canvas lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="jump-menu"
        className="flex min-h-[48px] w-full cursor-pointer items-center justify-between gap-3 px-4 text-left text-[14px] font-semibold text-brand"
      >
        {label}
        <motion.svg
          viewBox="0 0 24 24"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="size-4 shrink-0 fill-none stroke-current"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="m6 9 6 6 6-6" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ol
            id="jump-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden px-2"
          >
            {titles.map((title, i) => (
              <li key={title} className="border-t border-grid first:border-t-0">
                <button
                  onClick={() => {
                    setOpen(false)
                    onJump(i)
                  }}
                  className="flex min-h-[44px] w-full cursor-pointer items-center gap-2.5 px-2 text-left text-[14px] font-medium text-ink-soft"
                >
                  <span className="w-5 shrink-0 text-[12px] font-semibold tabular-nums text-brand/60">{String(i + 1).padStart(2, "0")}</span>
                  {title}
                </button>
              </li>
            ))}
            <li aria-hidden className="h-2" />
          </motion.ol>
        )}
      </AnimatePresence>
    </nav>
  )
}

function PolicyBlock({ block }: { block: Block }) {
  if (typeof block === "string") return <p>{withEmail(block)}</p>
  if ("note" in block) {
    return (
      <p className="rounded-[3px] bg-butter px-4 py-3 text-butter-ink shadow-[0_6px_14px_-10px_rgba(0,9,55,0.35)]">
        <span className="font-semibold">Note:</span> {withEmail(block.note)}
      </p>
    )
  }
  if ("list" in block) {
    return (
      <ul className="space-y-2">
        {block.list.map((item) => (
          <li key={item} className="relative pl-5">
            <span aria-hidden className="absolute left-0 top-[0.6em] block size-[7px] rounded-full bg-doodle" />
            <ListItem text={item} />
          </li>
        ))}
      </ul>
    )
  }
  return (
    <p>
      <span className="font-semibold text-ink">{block.label}:</span> {withEmail(block.text)}
    </p>
  )
}

/** A list item like "Apple: speech recognition…" gets its lead-in in bold. */
function ListItem({ text }: { text: string }) {
  const named = /^([A-Z][\w’ ]{0,24}): (.+)$/.exec(text)
  if (!named) return <>{withEmail(text)}</>
  return (
    <>
      <span className="font-semibold text-ink">{named[1]}:</span> {withEmail(named[2])}
    </>
  )
}

/** The contact address, wherever it appears, as a link. */
function withEmail(text: string): ReactNode {
  const parts = text.split(site.contactEmail)
  if (parts.length === 1) return text
  return parts.flatMap((part, i) =>
    i === 0
      ? [part]
      : [
          <a key={i} href={`mailto:${site.contactEmail}`} className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand">
            {site.contactEmail}
          </a>,
          part,
        ],
  )
}
