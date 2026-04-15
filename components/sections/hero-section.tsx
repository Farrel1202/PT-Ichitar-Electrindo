"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { HERO_MEDIA } from "@/lib/hero-media"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [videoBroken, setVideoBroken] = useState(false)
  const [saveData, setSaveData] = useState(false)
  const heroSectionRef = useRef<HTMLElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const onVideoError = useCallback(() => {
    setVideoBroken(true)
  }, [])

  const tryPlay = useCallback(() => {
    if (prefersReducedMotion || videoBroken || saveData) return
    const el = videoRef.current
    if (!el) return
    const p = el.play()
    if (p !== undefined) p.catch(() => {})
  }, [prefersReducedMotion, videoBroken, saveData])

  useEffect(() => {
    setIsVisible(true)

    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    if (conn?.saveData) setSaveData(true)

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const syncMotion = () => setPrefersReducedMotion(mq.matches)
    syncMotion()
    mq.addEventListener("change", syncMotion)
    return () => mq.removeEventListener("change", syncMotion)
  }, [])

  useEffect(() => {
    tryPlay()
  }, [tryPlay])

  const scrollToAboutSection = () => {
    const target = document.getElementById("tentang-kami")
    if (!target) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" })
  }

  const showVideo = !prefersReducedMotion && !videoBroken && !saveData

  return (
    <section ref={heroSectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 z-0 bg-black" aria-hidden="true" />

        {showVideo ? (
          <video
            ref={videoRef}
            className="absolute inset-0 z-[1] h-full w-full object-cover"
            poster={HERO_MEDIA.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onError={onVideoError}
            onLoadedData={tryPlay}
            aria-hidden="true"
          >
            {HERO_MEDIA.sources.map((s) => (
              <source key={s.src} src={s.src} type={s.type} media={s.media} />
            ))}
          </video>
        ) : null}

        {/* Soft dark film: multi-stop so edges & center fade gently (not flat / harsh). */}
        <div
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{
            background: `
              radial-gradient(ellipse 120% 85% at 50% -5%, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.14) 42%, transparent 68%),
              radial-gradient(ellipse 95% 70% at 50% 108%, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.12) 48%, transparent 62%),
              radial-gradient(ellipse 85% 60% at 50% 42%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 55%, rgba(0, 0, 0, 0.22) 100%),
              linear-gradient(
                195deg,
                rgba(2, 8, 12, 0.72) 0%,
                rgba(4, 14, 18, 0.34) 26%,
                rgba(3, 12, 16, 0.28) 48%,
                rgba(2, 10, 14, 0.4) 72%,
                rgba(0, 4, 8, 0.68) 100%
              ),
              linear-gradient(118deg, rgba(6, 48, 38, 0.12) 0%, transparent 42%, rgba(4, 30, 36, 0.1) 100%)
            `,
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-36 pb-24 lg:pt-44 lg:pb-28">
        <div className="max-w-5xl mx-auto text-center">
          <h1
            className={`text-[2.35rem] md:text-6xl lg:text-7xl font-bold leading-[1.06] mb-10 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span
              className="text-balance block bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                backgroundImage: `linear-gradient(
                  168deg,
                  #f8fafc 0%,
                  #eef2ff 12%,
                  #f0fdf4 28%,
                  #d1fae5 46%,
                  #a7f3d0 60%,
                  #7dd3c0 74%,
                  #5eead4 86%,
                  #34d399 94%,
                  #2dd4bf 100%
                )`,
              }}
            >
              Motor Industri
              <br />
              Restored to Peak Performance, Production Stays Stable
            </span>
          </h1>
          <p
            className={`mx-auto max-w-2xl text-base md:text-lg text-white/82 tracking-[0.01em] transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ textShadow: "0 2px 20px rgba(0, 0, 0, 0.45), 0 1px 2px rgba(0, 0, 0, 0.35)" }}
          >
            Precision rewinding for industrial motors, delivered with fast turnaround and dependable workmanship.
          </p>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="size-16 rounded-full border-background/55 bg-black/35 text-background hover:text-background hover:bg-black/45"
          onClick={scrollToAboutSection}
          aria-label="Lanjut ke bagian Tentang Kami"
        >
          <ArrowDown className="w-7 h-7" />
        </Button>
      </div>
    </section>
  )
}
