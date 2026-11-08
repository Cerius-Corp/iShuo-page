import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { useState } from "react"
import { DownloadButton } from "../components/Buttons"
import { onAppStore } from "../site"

const links = [
  { href: "#cara-kerja", label: "Cara kerja" },
  { href: "#coba", label: "Coba" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontak", label: "Kontak" },
]

/** The bar on top: the name, the sections, and the way to try it. A line
 *  under it once the page has scrolled. */
export function Nav() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12))

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 border-b bg-canvas transition-colors duration-300 ${scrolled ? "border-grid" : "border-transparent"}`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Utama">
        <a href="#" className="flex items-center gap-2.5 font-extrabold tracking-tight">
          <img src="/img/appicon.png" alt="" className="size-9 rounded-[10px]" />
          <span className="text-lg">iShuo</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="rounded-full px-3.5 py-2 text-[15px] font-medium text-ink-soft transition-colors hover:bg-brand-soft hover:text-brand">
              {l.label}
            </a>
          ))}
        </div>
        <DownloadButton className="!min-h-[42px] !px-4 !text-sm">
          <span className="hidden sm:inline">{onAppStore ? "Download" : "Coba di TestFlight"}</span>
          <span className="sm:hidden">{onAppStore ? "Download" : "Coba"}</span>
        </DownloadButton>
      </nav>
    </motion.header>
  )
}
