import Lenis from "lenis"
import "lenis/dist/lenis.css"
import { MotionConfig } from "motion/react"
import { useEffect } from "react"
import { LanguageProvider } from "./i18n/LanguageProvider"
import { Footer } from "./sections/Footer"
import { Demo } from "./sections/Demo"
import { Download } from "./sections/Download"
import { FAQ } from "./sections/FAQ"
import { Features } from "./sections/Features"
import { Hero } from "./sections/Hero"
import { Nav } from "./sections/Nav"
import { Policies } from "./sections/Policies"
import { Quote } from "./sections/Quote"
import { Story } from "./sections/Story"
import { setScroller } from "./scroll"
import { onPolicies } from "./site"

/** How far below the nav a section lands when a link scrolls to it. */
const anchorOffset = -88

export default function App() {
  // Smooth scrolling (and smooth jumps to #sections), unless Reduce Motion is on.
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const lenis = new Lenis({ autoRaf: true, anchors: { offset: anchorOffset } })
    setScroller(lenis)
    return () => {
      setScroller(null)
      lenis.destroy()
    }
  }, [])

  return (
    <LanguageProvider>
      {/* Animations follow the system's Reduce Motion setting. */}
      <MotionConfig reducedMotion="user">
        <Nav />
        {/* One site, two pages: /policies, and the landing page everywhere else. */}
        <main>
          {onPolicies ? (
            <Policies />
          ) : (
            <>
              <Hero />
              <Quote />
              <Story />
              <Features />
              <Demo />
              <FAQ />
              <Download />
            </>
          )}
        </main>
        <Footer />
      </MotionConfig>
    </LanguageProvider>
  )
}
