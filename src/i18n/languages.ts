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

/** The page's own language, used until (or unless) another is worked out. */
export const defaultLang: Lang = "id"

const isLang = (value: string | null): value is Lang => value !== null && value in languages

/** Where a language picked from the menu is remembered on this device. */
const storageKey = "ishuo-lang"

/** A language asked for: by a `?lang=` link, or picked here before. None
 *  means the visitor's country decides (see langForCountry). */
export function chosenLang(): Lang | null {
  const asked = new URLSearchParams(window.location.search).get("lang")
  if (isLang(asked)) return asked
  try {
    const saved = localStorage.getItem(storageKey)
    if (isLang(saved)) return saved
  } catch {
    // Storage can be off (private windows); then nothing was picked.
  }
  return null
}

/** Remembers a language picked from the menu, so the next visit opens in it. */
export function rememberLang(lang: Lang) {
  try {
    localStorage.setItem(storageKey, lang)
  } catch {
    // Not remembered when storage is off; the page still works.
  }
}

/** The language for a country (an ISO code like "ID"): Indonesian in
 *  Indonesia, Chinese in China, English anywhere else. None when the
 *  country isn't known, so the page stays in its own language. */
export function langForCountry(country: string): Lang | null {
  if (!country) return null
  return country === "ID" ? "id" : country === "CN" ? "zh" : "en"
}
