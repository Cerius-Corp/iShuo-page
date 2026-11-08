import { createContext, useContext } from "react"
import { id, type Copy } from "../copy/id"
import type { Lang } from "./languages"

export const LanguageContext = createContext<{ lang: Lang; setLang: (lang: Lang) => void; copy: Copy }>({
  lang: "id",
  setLang: () => {},
  copy: id,
})

/** The page's words in the language picked. */
export const useCopy = () => useContext(LanguageContext).copy

/** The language picked, and a way to change it. */
export function useLang() {
  const { lang, setLang } = useContext(LanguageContext)
  return { lang, setLang }
}
