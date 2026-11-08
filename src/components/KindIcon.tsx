import { useId } from "react"

/** The kinds of fix the page shows, with the marks Belajar gives them
 *  (drawn after the app's symbols: a book with an A, two arrows, ±). */
export type Kind = "choice" | "order" | "missingOrExtra"

/** A kind of fix's mark, in the current text colour. */
export function KindIcon({ kind, className = "size-5" }: { kind: Kind; className?: string }) {
  const cut = useId()
  if (kind === "choice") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className={className}>
        <mask id={cut}>
          <rect width="24" height="24" fill="#fff" />
          <path d="M9.4 13.6 11.6 7h.8l2.2 6.6M10.1 11.5h3.8" fill="none" stroke="#000" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </mask>
        <path
          mask={`url(#${cut})`}
          className="fill-current"
          d="M6.5 2.5h11A1.5 1.5 0 0 1 19 4v13H7.6a1.3 1.3 0 0 0 0 2.6H19V21a.5.5 0 0 1-.5.5h-11A2.5 2.5 0 0 1 5 19V4a1.5 1.5 0 0 1 1.5-1.5Z"
        />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={`fill-none stroke-current ${className}`} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {kind === "order" ? <path d="M4 8h15m-4-4 4 4-4 4M20 16H5m4-4-4 4 4 4" /> : <path d="M12 4v9M7.5 8.5h9M7.5 19h9" />}
    </svg>
  )
}
