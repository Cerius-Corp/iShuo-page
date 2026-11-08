import { motion } from "motion/react"
import { DownloadButton } from "../components/Buttons"
import { LanguageSwitch } from "../components/LanguageSwitch"
import { useCopy } from "../i18n/useCopy"
import { onAppStore, sections } from "../site"

/** A bar floating over the page (the hero's paper runs under it): the name,
 *  the sections, the language, and the way to try it. */
export function Nav() {
  const copy = useCopy()
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-6"
    >
      <nav
        className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border border-grid bg-paper/85 pl-3 pr-2 shadow-[0_6px_20px_-14px_rgba(0,9,55,0.25)] backdrop-blur-md sm:h-16 sm:pl-4"
        aria-label={copy.nav.label}
      >
        <a href="#" className="flex items-center gap-2.5 font-extrabold tracking-tight">
          <img src="/img/appicon.png" alt="" className="size-8 rounded-[9px] sm:size-9 sm:rounded-[10px]" />
          <span className="text-lg">iShuo</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {sections.map((l) => (
            <a key={l.href} href={l.href} className="rounded-full px-3.5 py-2 text-[15px] font-medium text-ink-soft transition-colors hover:bg-brand-soft hover:text-brand">
              {copy.nav.sections[l.key]}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <LanguageSwitch />
          <DownloadButton className="!min-h-[40px] !px-4 !text-sm sm:!min-h-[44px]">
            <span className="hidden sm:inline">{onAppStore ? copy.nav.download : copy.nav.try}</span>
            <span className="sm:hidden">{onAppStore ? copy.nav.download : copy.nav.tryShort}</span>
          </DownloadButton>
        </div>
      </nav>
    </motion.header>
  )
}
