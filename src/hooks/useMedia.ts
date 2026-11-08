import { useEffect, useState } from "react"

/** Whether a media query matches (e.g. "(min-width: 1024px)"), following
 *  changes such as a window being resized. */
export function useMedia(query: string) {
  const [matches, setMatches] = useState(() => matchMedia(query).matches)
  useEffect(() => {
    const list = matchMedia(query)
    const change = () => setMatches(list.matches)
    change()
    list.addEventListener("change", change)
    return () => list.removeEventListener("change", change)
  }, [query])
  return matches
}
