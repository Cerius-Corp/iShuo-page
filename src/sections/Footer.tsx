import { useCopy } from "../i18n/useCopy"
import { contacts, onPolicies, policiesPath, sections } from "../site"

/** The year shown in the footer (worked out once, not on every render). */
const year = new Date().getFullYear()

/** The end of the page, on dark: where to reach the team, then the name,
 *  the sections, the policies and the small print. */
export function Footer() {
  const copy = useCopy()
  return (
    <footer className="bg-ink px-4 text-white sm:px-6">
      <div id="kontak" className="mx-auto grid max-w-6xl gap-10 pb-16 pt-20 lg:grid-cols-[1fr_1fr] lg:items-center lg:pt-28">
        <div>
          <h2 className="text-[40px] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-6xl">{copy.footer.title}</h2>
          <p className="mt-4 text-[17px] text-white/60">{copy.footer.lead}</p>
        </div>
        <ul className="border-t border-white/12">
          {contacts.map((c) => (
            <li key={c.kind} className="border-b border-white/12">
              <a
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex min-h-[64px] items-center justify-between gap-4 py-3"
              >
                <span>
                  <span className="block text-[13px] font-semibold text-white/45">{copy.footer.contacts[c.kind]}</span>
                  <span className="block break-all text-lg font-bold sm:text-xl">{c.value}</span>
                </span>
                <svg viewBox="0 0 24 24" aria-hidden className="size-5 shrink-0 -rotate-45 fill-none stroke-current text-white/50 transition-[rotate,translate,color] duration-300 group-hover:translate-x-1 group-hover:rotate-0 group-hover:text-white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-5 border-t border-white/10 py-8 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5">
          <img src="/img/appicon.png" alt="" className="size-7 rounded-lg" />
          <span className="font-extrabold text-white">iShuo</span>
          <span className="han" lang="zh-Hans">我说</span>
        </div>
        <nav aria-label={copy.footer.sectionsLabel} className="flex flex-wrap gap-x-5 gap-y-2">
          {sections.map((s) => (
            <a key={s.href} href={onPolicies && s.key !== "contact" ? `/${s.href}` : s.href} className="transition-colors hover:text-white">{copy.nav.sections[s.key]}</a>
          ))}
          <a href={policiesPath} aria-current={onPolicies ? "page" : undefined} className="transition-colors hover:text-white aria-[current=page]:text-white">{copy.footer.policies}</a>
        </nav>
        <p>
          © {year} · {copy.footer.made[0]}<span className="han" lang="zh-Hans">心</span>{copy.footer.made[1]}
        </p>
      </div>
    </footer>
  )
}
