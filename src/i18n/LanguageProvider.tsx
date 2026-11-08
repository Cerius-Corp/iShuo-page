import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react"
import { chosenLang, defaultLang, langForCountry, languages, rememberLang, type Lang } from "./languages"
import { LanguageContext } from "./useCopy"

/** Holds the language: one asked for (a `?lang=` link or an earlier pick),
 *  else the one for the visitor's country, else English. Keeps the page's
 *  `lang`, title and description in step, and remembers picks from the menu. */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => chosenLang() ?? defaultLang)
  const { copy, tag } = languages[lang]

  // Nothing asked for: ask the site which country the visitor is in. Where
  // that isn't known (or the function isn't there, as when run locally),
  // the page simply stays in English.
  useEffect(() => {
    if (chosenLang()) return
    const request = new AbortController()
    fetch("/api/country", { signal: request.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((answer: { country?: string } | null) => {
        const forCountry = langForCountry(answer?.country ?? "")
        if (forCountry) setLangState(forCountry)
      })
      .catch(() => {})
    return () => request.abort()
  }, [])

  useEffect(() => {
    document.documentElement.lang = tag
    document.title = copy.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute("content", copy.meta.description)
  }, [tag, copy])

  /** A pick from the menu: shown now, and remembered for the next visit. */
  const setLang = useCallback((picked: Lang) => {
    setLangState(picked)
    rememberLang(picked)
  }, [])

  const value = useMemo(() => ({ lang, setLang, copy }), [lang, setLang, copy])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
