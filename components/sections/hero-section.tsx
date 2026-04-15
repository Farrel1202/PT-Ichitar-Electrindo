"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

const HERO_VIDEO_PRIMARY = "/hero-video-safe.mp4"
const HERO_VIDEO_FALLBACK = "/hero-video.mp4"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const heroSectionRef = useRef<HTMLElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    setIsVisible(true)

    const video = videoRef.current
    if (!video) return

    let usingFallback = false

    const attemptPlay = () => {
      const playback = video.play()
      if (playback && typeof playback.then === "function") {
        playback.catch(() => {})
      }
    }

    const setSourceAndPlay = (src: string) => {
      if (video.getAttribute("src") !== src) {
        video.setAttribute("src", src)
        video.load()
      }
      attemptPlay()
    }

    const handleVideoError = () => {
      if (!usingFallback) {
        usingFallback = true
        setSourceAndPlay(HERO_VIDEO_FALLBACK)
      }
    }

    const tryPlay = () => {
      video.muted = true
      video.playsInline = true
      setSourceAndPlay(HERO_VIDEO_PRIMARY)

      // Some mobile browsers block autoplay until first interaction.
      const startOnInteract = () => {
        attemptPlay()
        window.removeEventListener("touchstart", startOnInteract)
        window.removeEventListener("click", startOnInteract)
      }
      window.addEventListener("touchstart", startOnInteract, { once: true })
      window.addEventListener("click", startOnInteract, { once: true })
    }

    tryPlay()
    const ensurePlayback = window.setInterval(() => {
      if (!video.paused && video.currentTime > 0.1) return
      tryPlay()
    }, 1800)

    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        attemptPlay()
      }
    }

    video.addEventListener("error", handleVideoError)
    video.addEventListener("stalled", attemptPlay)
    video.addEventListener("suspend", attemptPlay)
    document.addEventListener("visibilitychange", handleVisibility)

    return () => {
      window.clearInterval(ensurePlayback)
      video.removeEventListener("error", handleVideoError)
      video.removeEventListener("stalled", attemptPlay)
      video.removeEventListener("suspend", attemptPlay)
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [])

  const scrollToNextSection = () => {
    const section = heroSectionRef.current
    if (!section) return

    const nextSection = section.nextElementSibling as HTMLElement | null
    if (!nextSection) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    nextSection.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" })
  }

  return (
    <section ref={heroSectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-video-poster.jpg"
          preload="metadata"
          aria-hidden="true"
          disablePictureInPicture
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/36 via-black/18 to-black/6" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 14% 34%, rgba(22, 163, 74, 0.14), rgba(0, 0, 0, 0) 38%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-36 pb-24 lg:pt-44 lg:pb-28">
        <div className="max-w-5xl mx-auto text-center">
          <h1
            className={`text-[2.35rem] md:text-6xl lg:text-7xl font-bold leading-[1.06] mb-10 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ textShadow: "0 12px 30px rgba(0, 0, 0, 0.35)" }}
          >
            <span className="text-balance block text-transparent bg-clip-text bg-linear-to-b from-white via-white/95 to-white/82">
              Motor Industri
              <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-200 via-emerald-300 to-cyan-200">
                Restored to Peak Performance, Production Stays Stable
              </span>
            </span>
          </h1>
          <p
            className={`mx-auto max-w-2xl text-base md:text-lg text-white/82 tracking-[0.01em] transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ textShadow: "0 8px 22px rgba(0, 0, 0, 0.3)" }}
          >
            Precision rewinding for industrial motors, delivered with fast turnaround and dependable workmanship.
          </p>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="size-16 rounded-full border-background/55 bg-black/25 text-background hover:text-background hover:bg-background/15 backdrop-blur-sm motion-safe:animate-bounce"
          onClick={scrollToNextSection}
          aria-label="Lihat profil perusahaan"
        >
          <ArrowDown className="w-7 h-7" />
        </Button>
      </div>

    </section>
  )
}
