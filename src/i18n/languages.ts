import { en } from "../copy/en"
import { id } from "../copy/id"
import { zh } from "../copy/zh"

/** The languages the page comes in: its words, its `lang` and its short name. */
export const languages = {
  id: { copy: id, tag: "id", short: "ID" },
  en: { copy: en, tag: "en", short: "EN" },
  zh: { copy: zh, tag: "zh-Hans", short: "中文" },
} as const

export type Lang = keyof typeof languages

const isLang = (value: string | null): value is Lang => value !== null && value in languages

/** Where the choice is remembered on this device. */
export const storageKey = "ishuo-lang"

/** The language to open in: a `?lang=` link, else the last one picked here,
 *  else Indonesian, the page's own (many learners keep their phone in
 *  English, so the browser's language isn't a guide). */
export function startingLang(): Lang {
  const asked = new URLSearchParams(window.location.search).get("lang")
  if (isLang(asked)) return asked
  try {
    const saved = localStorage.getItem(storageKey)
    if (isLang(saved)) return saved
  } catch {
    // Storage can be off (private windows); then it opens in Indonesian.
  }
  return "id"
}
