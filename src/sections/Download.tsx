import { motion } from "motion/react"
import { QRCodeSVG } from "qrcode.react"
import { DownloadButton } from "../components/Buttons"
import { Doodle, Stamp } from "../components/Stationery"
import { useCopy } from "../i18n/useCopy"
import { downloadURL, onAppStore } from "../site"

/** The way in: the icon, a big line, the button, and on a laptop a QR code
 *  to scan with the iPhone (a phone can't scan its own screen). */
export function Download() {
  const copy = useCopy()
  return (
    <section className="relative overflow-hidden px-4 py-16 text-center sm:px-6 sm:py-24 lg:py-32">
      <Doodle kind="flower" className="left-1/2 top-9 w-12 translate-x-[44px] rotate-12 sm:top-16 sm:w-20 sm:translate-x-[84px]" />
      <motion.img
        src="/img/appicon.png"
        alt=""
        initial={{ opacity: 0, scale: 0.5, rotate: -18 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 14 }}
        className="mx-auto size-[72px] rounded-[18px] shadow-[0_24px_40px_-18px_rgba(15,68,209,0.7)] sm:size-28 sm:rounded-[28px]"
      />
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-6 max-w-3xl text-[32px] font-extrabold leading-[1.05] tracking-[-0.035em] text-balance sm:mt-10 sm:text-7xl"
      >
        {copy.get.title}<span className="text-brand">{copy.get.titleAccent}</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-ink-soft text-balance sm:mt-6 sm:text-[17px]"
      >
        {onAppStore ? copy.get.store : copy.get.beta}
      </motion.p>

      <div className="mt-6 flex flex-col items-center justify-center gap-8 sm:mt-10 md:flex-row">
        <DownloadButton className="!min-h-[46px] !px-5 !text-[14px] sm:!min-h-[52px] sm:!px-6 sm:!text-[15px]" />
        <motion.div
          initial={{ opacity: 0, rotate: -12, scale: 0.85 }}
          whileInView={{ opacity: 1, rotate: 3, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 160, damping: 15, delay: 0.3 }}
          className="hidden items-center gap-4 md:flex"
        >
          <span className="text-sm font-semibold text-ink-soft">{copy.get.scan}</span>
          <Stamp small>
            <div className="p-3">
              <QRCodeSVG value={downloadURL} size={104} fgColor="#000937" bgColor="#ffffff" level="M" marginSize={0} title={copy.get.qr} />
            </div>
          </Stamp>
        </motion.div>
      </div>
    </section>
  )
}
