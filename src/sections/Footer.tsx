import { contacts, sections } from "../site"

/** The year shown in the footer (worked out once, not on every render). */
const year = new Date().getFullYear()

/** The end of the page, on dark: where to reach the team, then the name,
 *  the sections and the small print. */
export function Footer() {
  return (
    <footer className="bg-ink px-4 text-white sm:px-6">
      <div id="kontak" className="mx-auto grid max-w-6xl gap-10 pb-16 pt-20 lg:grid-cols-[1fr_1fr] lg:items-center lg:pt-28">
        <div>
          <h2 className="text-[40px] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-6xl">Ada pertanyaan?</h2>
          <p className="mt-4 text-[17px] text-white/60">Tulis saja. Semua masukan kami baca.</p>
        </div>
        <ul className="border-t border-white/12">
          {contacts.map((c) => (
            <li key={c.label} className="border-b border-white/12">
              <a
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex min-h-[64px] items-center justify-between gap-4 py-3"
              >
                <span>
                  <span className="block text-[13px] font-semibold text-white/45">{c.label}</span>
                  <span className="block break-all text-lg font-bold sm:text-xl">{c.value}</span>
                </span>
                <svg viewBox="0 0 24 24" aria-hidden className="size-5 shrink-0 fill-none stroke-current text-white/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M8 7h9v9" />
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
        <nav aria-label="Bagian halaman" className="flex flex-wrap gap-x-5 gap-y-2">
          {sections.map((s) => (
            <a key={s.href} href={s.href} className="transition-colors hover:text-white">{s.label}</a>
          ))}
        </nav>
        <p>© {year} · Dibuat dengan <span className="han" lang="zh-Hans">心</span> oleh tim Cerius</p>
      </div>
    </footer>
  )
}
