// iShuo's Terms of Service and Privacy Policy, shown at /policies, in
// every language the page comes in: one file per policy and language,
// named <policy>-<lang>.ts (terms-en.ts, privacy-id.ts, ...). The English
// is the original; the others are translated from it.
//
// Each policy is numbered sections; a section is parts, each with an
// optional heading. A block is a paragraph, a paragraph led by a bold
// label, a list (whose items can have a bold label too), or a note set
// apart from the text. Wrap words in **two asterisks** to make them bold
// within the text, where the policy documents have them bold.

import type { Lang } from "../i18n/languages"
import { privacyEn } from "./privacy-en"
import { privacyId } from "./privacy-id"
import { privacyZh } from "./privacy-zh"
import { termsEn } from "./terms-en"
import { termsId } from "./terms-id"
import { termsZh } from "./terms-zh"

export type Labelled = { label: string; text: string }
export type Block = string | Labelled | { list: (string | Labelled)[] } | { note: string }

export type Policy = {
  title: string
  /** The line with the date, as it reads in the policy's language. */
  updated: string
  /** What follows a bold label: ": " in English and Indonesian, "：" in Chinese. */
  colon?: string
  /** The word that leads a note ("Note" when not given). */
  noteLabel?: string
  intro: string[]
  sections: { title: string; parts: { heading?: string; blocks: Block[] }[] }[]
  /** A last line, after the sections. */
  outro?: string
}

export const policyKeys = ["terms", "privacy"] as const
export type PolicyKey = (typeof policyKeys)[number]

/** Both policies in each language. */
export const policiesIn: Record<Lang, Record<PolicyKey, Policy>> = {
  en: { terms: termsEn, privacy: privacyEn },
  id: { terms: termsId, privacy: privacyId },
  zh: { terms: termsZh, privacy: privacyZh },
}
