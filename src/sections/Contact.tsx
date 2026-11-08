import { motion } from "motion/react"
import { DownloadButton } from "../components/Buttons"
import { contacts, onAppStore, sections } from "../site"

/** Contact: one big line and one round button to write to the team. */
export function Contact() {
  const primary = contacts[0]
  return (
    <section id="kontak" className="border-t border-grid px-4 py-24 text-center sm:px-6 lg:py-32">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand">Ada pertanyaan atau masukan?</p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mt-4 text-[52px] font-extrabold leading-none tracking-[-0.04em] sm:text-8xl"
      >
        Hubungi kami
      </motion.h2>
      <p className="mx-auto mt-6 max-w-md text-[17px] leading-relaxed text-ink-soft">
        Kami membangun iShuo bersama orang-orang yang memakainya. Cerita soal obrolanmu, apa yang membingungkan, atau ide fitur, semuanya kami baca.
      </p>
      <motion.a
        href={primary.href}
        aria-label={`${primary.label}: ${primary.value}`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.08, rotate: 45 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 16 }}
        className="mx-auto mt-10 flex size-20 items-center justify-center rounded-full bg-brand text-white shadow-[0_16px_32px_-14px_rgba(15,68,209,0.9)]"
      >
        <svg viewBox="0 0 24 24" aria-hidden className="size-8 fill-none stroke-current" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17 17 7M8 7h9v9" />
        </svg>
      </motion.a>
      <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[15px] font-semibold">
        {contacts.map((c) => (
          <li key={c.label}>
            <a href={c.href} target={c.href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer" className="text-brand underline-offset-4 hover:underline">
              {c.value}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

/** The year shown in the footer (worked out once, not on every render). */
const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-ink px-4 pb-10 pt-16 text-white/65 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <img src="/img/appicon.png" alt="" className="size-9 rounded-[10px]" />
            <span className="text-lg font-extrabold text-white">iShuo</span>
            <span className="han text-white/50" lang="zh-Hans">我说</span>
          </div>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed">Belajar Mandarin dari obrolanmu sendiri. Untuk pelajar Indonesia di China.</p>
        </div>
        <FooterList title="Kontak" items={contacts.map((c) => ({ href: c.href, label: c.value }))} />
        <FooterList title="Halaman" items={sections.map((s) => ({ href: s.href, label: s.label }))} />
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/40">Dapatkan iShuo</p>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed">{onAppStore ? "Download di App Store untuk iPhone." : "Coba di iPhone-mu lewat TestFlight."}</p>
          <DownloadButton className="mt-5 !min-h-[46px] !bg-white !text-ink !shadow-none" />
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-6xl flex-col gap-2 border-t border-white/10 pt-6 text-sm sm:flex-row sm:justify-between">
        <p>© {year} iShuo</p>
        <p>Dibuat dengan <span className="han" lang="zh-Hans">心</span> oleh tim Cerius</p>
      </div>
    </footer>
  )
}

function FooterList({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/40">{title}</p>
      <ul className="mt-4 space-y-2.5 text-[15px]">
        {items.map((i) => (
          <li key={i.href}>
            <a href={i.href} target={i.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="transition-colors hover:text-white">{i.label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
