import { motion } from "motion/react"
import { Reveal } from "../components/Reveal"
import { Stamp } from "../components/Stationery"
import { site } from "../site"

/** Contact, as a postcard: a note on the left, where to write on the
 *  right, a stamp in the corner. */
export function Contact() {
  const lines = [
    site.contactEmail && { label: "Email", value: site.contactEmail, href: `mailto:${site.contactEmail}` },
    site.instagram && { label: "Instagram", value: `@${site.instagram}`, href: `https://instagram.com/${site.instagram}` },
    { label: "Dari iPhone", value: "Send Beta Feedback di TestFlight", href: site.testFlightURL },
  ].filter(Boolean) as { label: string; value: string; href: string }[]

  return (
    <section id="kontak" className="scroll-mt-20 px-4 pb-20 sm:px-6 lg:pb-28">
      <Reveal className="mx-auto max-w-5xl">
        <motion.div
          whileHover={{ rotate: 0 }}
          initial={{ rotate: -0.6 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative grid overflow-hidden rounded-[10px] bg-paper shadow-[0_30px_60px_-36px_rgba(0,9,55,0.45)] md:grid-cols-2"
        >
          {/* Airmail stripes along the top. */}
          <div aria-hidden className="absolute inset-x-0 top-0 h-2 [background:repeating-linear-gradient(-45deg,#0f44d1_0_14px,#fff_14px_22px,#e0453f_22px_36px,#fff_36px_44px)]" />

          <div className="px-7 pb-10 pt-12 sm:px-10">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand">Kontak</p>
            <h2 className="mt-3 text-[30px] font-extrabold leading-[1.1] tracking-[-0.025em] sm:text-4xl">Ada pertanyaan atau masukan?</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
              Kami sedang membangun iShuo bersama orang-orang yang memakainya. Cerita soal obrolanmu, apa yang membingungkan, atau ide fitur, semuanya kami baca.
            </p>
            <p className="mt-6 text-[16px] font-semibold">Terima kasih, 谢谢！</p>
          </div>

          <div className="relative border-t border-dashed border-grid px-7 pb-10 pt-10 sm:px-10 md:border-l md:border-t-0 md:pt-24">
            <div className="absolute right-6 top-6 w-[78px] rotate-[4deg]">
              <Stamp pad="p-[6px]" small>
                <img src="/img/mascotface.png" alt="" aria-hidden className="aspect-square w-full bg-box object-contain p-1" />
              </Stamp>
            </div>
            <p className="text-sm font-semibold text-ink-soft">Kepada: Tim iShuo</p>
            <ul className="mt-4">
              {lines.map((l) => (
                <li key={l.label} className="border-b border-grid py-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">{l.label}</p>
                  <a href={l.href} target={l.href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer" className="mt-0.5 inline-block break-all text-[17px] font-bold text-brand underline-offset-4 hover:underline">
                    {l.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Reveal>
    </section>
  )
}

/** The year shown in the footer (worked out once, not on every render). */
const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-grid px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-ink-soft sm:flex-row">
        <div className="flex items-center gap-2.5">
          <img src="/img/appicon.png" alt="" className="size-7 rounded-lg" />
          <span className="font-bold text-ink">iShuo</span>
          <span className="han" lang="zh-Hans">· 我说</span>
        </div>
        <p>© {year} iShuo · Dibuat dengan 心 oleh tim Cerius</p>
      </div>
    </footer>
  )
}
