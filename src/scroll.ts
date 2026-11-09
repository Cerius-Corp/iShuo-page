import type Lenis from "lenis"

/** The page's smooth scroller, while there is one (none with Reduce Motion). */
let lenis: Lenis | null = null
export const setScroller = (next: Lenis | null) => {
  lenis = next
}

/** Scrolls so `el` sits `offset` px below the top of the screen: smoothly
 *  through Lenis when it's running, else the browser's own way. */
export function scrollToElement(el: HTMLElement, offset: number) {
  if (lenis) {
    lenis.scrollTo(el, { offset: -offset })
    return
  }
  const smooth = !matchMedia("(prefers-reduced-motion: reduce)").matches
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: smooth ? "smooth" : "auto" })
}
