import { MotionConfig } from "motion/react"
import { Contact, Footer } from "./sections/Contact"
import { Demo } from "./sections/Demo"
import { Download } from "./sections/Download"
import { FAQ } from "./sections/FAQ"
import { Features } from "./sections/Features"
import { Hero } from "./sections/Hero"
import { HowItWorks } from "./sections/HowItWorks"
import { Nav } from "./sections/Nav"
import { Problem } from "./sections/Problem"

export default function App() {
  return (
    // Animations follow the system's Reduce Motion setting.
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Demo />
        <Features />
        <FAQ />
        <Download />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
