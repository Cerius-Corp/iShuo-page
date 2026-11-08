import { motion } from "motion/react"
import { QRCodeSVG } from "qrcode.react"
import { DownloadButton } from "../components/Buttons"
import { Stamp } from "../components/Stationery"
import { downloadURL, onAppStore } from "../site"

/** The way in: the icon, a big line, the button, and on a laptop a QR code
 *  to scan with the iPhone (a phone can't scan its own screen). */
export function Download() {
  return (
    <section className="relative overflow-hidden px-4 py-24 text-center sm:px-6 lg:py-32">
      <motion.img
        src="/img/appicon.png"
        alt=""
        initial={{ opacity: 0, scale: 0.5, rotate: -18 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 14 }}
        className="mx-auto size-24 rounded-[24px] shadow-[0_24px_40px_-18px_rgba(15,68,209,0.7)] sm:size-28 sm:rounded-[28px]"
      />
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-10 max-w-3xl text-[44px] font-extrabold leading-[1.02] tracking-[-0.035em] text-balance sm:text-7xl"
      >
        Mulai ngobrol <span className="text-brand">hari ini.</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-6 max-w-lg text-[17px] leading-relaxed text-ink-soft text-balance"
      >
        {onAppStore
          ? "Download iShuo, lalu rekam obrolan pertamamu."
          : "Gratis selama beta. Pasang TestFlight, buka undangannya, dan mulai."}
      </motion.p>

      <div className="mt-10 flex flex-col items-center justify-center gap-8 md:flex-row">
        <DownloadButton />
        <motion.div
          initial={{ opacity: 0, rotate: -12, scale: 0.85 }}
          whileInView={{ opacity: 1, rotate: 3, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 160, damping: 15, delay: 0.3 }}
          className="hidden items-center gap-4 md:flex"
        >
          <span className="text-sm font-semibold text-ink-soft">atau pindai</span>
          <Stamp pad="p-2.5" small>
            <div className="p-3">
              <QRCodeSVG value={downloadURL} size={104} fgColor="#000937" bgColor="#ffffff" level="M" marginSize={0} title="QR code untuk membuka iShuo di iPhone" />
            </div>
          </Stamp>
        </motion.div>
      </div>
    </section>
  )
}
