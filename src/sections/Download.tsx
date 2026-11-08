import { motion } from "motion/react"
import { QRCodeSVG } from "qrcode.react"
import { DownloadButton } from "../components/Buttons"
import { Reveal } from "../components/Reveal"
import { Stamp } from "../components/Stationery"
import { downloadURL, onAppStore } from "../site"

/** The way in: a button, and on a laptop a QR code to scan with the iPhone
 *  (a phone can't scan its own screen, so there it's the button alone). */
export function Download() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:pb-28">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[36px] bg-brand px-6 py-14 text-white sm:px-12 lg:px-16">
          {/* Faint squared paper over the blue. */}
          <div aria-hidden className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:28px_28px]" />
          <img src="/img/mascotcheer.png" alt="" aria-hidden className="pointer-events-none absolute -bottom-6 -right-6 hidden w-56 opacity-95 md:block lg:right-[30%] lg:w-52" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-white/70">{onAppStore ? "Sudah di App Store" : "Beta terbuka"}</p>
              <h2 className="mt-3 text-[34px] font-extrabold leading-[1.08] tracking-[-0.025em] text-balance sm:text-5xl">
                Mulai ngobrol hari ini.
              </h2>
              <p className="mt-4 max-w-md text-[17px] leading-relaxed text-white/80">
                {onAppStore
                  ? "Download iShuo di iPhone-mu, lalu rekam obrolan pertamamu."
                  : "iShuo sedang dalam beta di TestFlight. Pasang TestFlight, buka undangannya, dan iShuo siap dipakai. Segera hadir di App Store."}
              </p>
              <DownloadButton className="mt-8 !bg-white !text-brand !shadow-[0_10px_24px_-12px_rgba(0,0,0,0.5)]" />
            </div>

            <motion.div
              initial={{ rotate: -10, opacity: 0, scale: 0.9 }}
              whileInView={{ rotate: 4, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 160, damping: 16, delay: 0.15 }}
              className="mx-auto hidden w-[230px] md:block lg:ml-auto lg:mr-0"
            >
              <Stamp edge="bg-paper" paper="bg-paper" pad="p-3">
                <div className="flex flex-col items-center px-4 pb-4 pt-5 text-ink">
                  <QRCodeSVG value={downloadURL} size={168} fgColor="#000937" bgColor="#ffffff" level="M" marginSize={0} title="QR code untuk membuka iShuo di iPhone" />
                  <p className="mt-4 text-center text-sm font-bold">Pindai dengan kamera iPhone</p>
                </div>
              </Stamp>
            </motion.div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
