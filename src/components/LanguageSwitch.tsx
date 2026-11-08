import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { languages, type Lang } from "../i18n/languages"
import { useCopy, useLang } from "../i18n/useCopy"
import { Flag } from "./Flag"

const choices = Object.keys(languages) as Lang[]

/** The language's flag and short name; it opens a menu of the three
 *  languages, each with its flag and named in itself. Closes on a pick,
 *  Escape or a click away. */
export function LanguageSwitch() {
  const { lang, setLang } = useLang()
  const copy = useCopy()
  const [open, setOpen] = useState(false)
  const box = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const away = (e: PointerEvent) => {
      if (!box.current?.contains(e.target as Node)) setOpen(false)
    }
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("pointerdown", away)
    document.addEventListener("keydown", escape)
    return () => {
      document.removeEventListener("pointerdown", away)
      document.removeEventListener("keydown", escape)
    }
  }, [open])

  return (
    <div ref={box} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`${copy.language.label}: ${copy.language.name}`}
        className="flex min-h-[40px] cursor-pointer items-center gap-2 rounded-full px-2.5 text-[14px] font-semibold text-ink-soft transition-colors hover:bg-brand-soft hover:text-brand sm:min-h-[44px] sm:px-3"
      >
        <Flag lang={lang} />
        {languages[lang].short}
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            role="menu"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.16 }}
            className="absolute right-0 top-full mt-2 w-56 origin-top-right rounded-2xl border border-grid bg-paper p-1.5 shadow-[0_16px_36px_-18px_rgba(0,9,55,0.4)]"
          >
            {choices.map((l) => (
              <li key={l} role="none">
                <button
                  role="menuitemradio"
                  aria-checked={l === lang}
                  lang={languages[l].tag}
                  onClick={() => {
                    setLang(l)
                    setOpen(false)
                  }}
                  className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-left text-[15px] font-semibold transition-colors ${
                    l === lang ? "bg-brand-soft text-brand" : "text-ink hover:bg-canvas"
                  }`}
                >
                  <span className="flex items-center gap-2.5 whitespace-nowrap">
                    <Flag lang={l} />
                    {languages[l].copy.language.name}
                  </span>
                  {l === lang && (
                    <svg viewBox="0 0 24 24" aria-hidden className="size-4 fill-none stroke-current" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 12.5 4.5 4.5L19 7.5" />
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
