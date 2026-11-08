import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { useCopy } from "../i18n/useCopy"

/** Questions people ask, on a dark band; one open at a time. */
export function FAQ() {
  const { faq } = useCopy()
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="bg-ink px-4 py-14 text-white sm:px-6 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-7 sm:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[28px] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl"
          >
            {faq.title}
          </motion.h2>
          <p className="mt-2 text-[15px] text-white/60 sm:mt-4 sm:text-[17px]">
            {faq.more}{" "}
            <a href="#kontak" className="font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">{faq.ask}</a>
          </p>
        </div>

        <ul className="border-t border-white/12">
          {faq.items.map((f, i) => {
            const isOpen = open === i
            return (
              <li key={f.q} className="border-b border-white/12">
                <h3>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="group flex min-h-[56px] w-full cursor-pointer items-center gap-3 py-3 text-left sm:min-h-[72px] sm:gap-4 sm:py-4"
                  >
                    <span className="w-6 shrink-0 text-[12px] font-semibold tabular-nums text-white/35 sm:w-7 sm:text-sm">{String(i + 1).padStart(2, "0")}</span>
                    <span className={`flex-1 text-[15px] font-bold transition-colors sm:text-lg ${isOpen ? "text-white" : "text-white/85 group-hover:text-white"}`}>{f.q}</span>
                    <motion.svg
                      viewBox="0 0 24 24"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 24 }}
                      className={`size-4 shrink-0 fill-none stroke-current transition-colors sm:size-5 ${isOpen ? "text-white" : "text-white/50 group-hover:text-white"}`}
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="m6 9 6 6 6-6" />
                    </motion.svg>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-4 pl-9 pr-7 text-[14px] leading-relaxed text-white/65 sm:pb-6 sm:pl-11 sm:pr-9 sm:text-[16px]">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
