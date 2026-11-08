import { useEffect, useMemo, useState, type ReactNode } from "react"
import { languages, startingLang, storageKey, type Lang } from "./languages"
import { LanguageContext } from "./useCopy"

/** Holds the language picked; keeps the page's `lang`, title and
 *  description in step with it, and remembers it on this device. */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(startingLang)
  const { copy, tag } = languages[lang]

  useEffect(() => {
    document.documentElement.lang = tag
    document.title = copy.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute("content", copy.meta.description)
    try {
      localStorage.setItem(storageKey, lang)
    } catch {
      // Not remembered when storage is off; the page still works.
    }
  }, [lang, tag, copy])

  const value = useMemo(() => ({ lang, setLang, copy }), [lang, copy])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
