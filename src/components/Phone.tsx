/** A screenshot of the app in an iPhone: dark frame, rounded screen,
 *  the Dynamic Island on top. Sized by its width; the height follows. */
export function Phone({ src, alt, className = "", eager = false }: {
  /** A screenshot from /img/screens. */
  src: string
  alt: string
  className?: string
  /** Load it straight away (the hero), not when it's scrolled near. */
  eager?: boolean
}) {
  return (
    <div className={`relative aspect-[402/874] rounded-[15%/7%] bg-ink p-[3.4%] shadow-[0_40px_70px_-30px_rgba(0,9,55,0.55),inset_0_0_0_1.5px_rgba(255,255,255,0.14)] ${className}`}>
      <div className="relative size-full overflow-hidden rounded-[12.4%/5.7%] bg-canvas">
        <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} draggable={false} className="size-full select-none object-cover object-top" />
        <span aria-hidden className="absolute left-1/2 top-[1.4%] h-[4.1%] w-[31%] -translate-x-1/2 rounded-full bg-ink" />
      </div>
    </div>
  )
}
