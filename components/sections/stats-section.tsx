"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 20, suffix: "+", label: "Tahun Pengalaman" },
  { value: 500, suffix: "+", label: "Klien Puas" },
  { value: 5000, suffix: "+", label: "Proyek Selesai" },
  { value: 99, suffix: "%", label: "Tingkat Kepuasan" },
]

/** Ease-out cubic — one t value drives all columns (cheap). */
function easeOutCubic(t: number) {
  const p = 1 - t
  return 1 - p * p * p
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [counts, setCounts] = useState<number[]>(() => stats.map(() => 0))
  const [started, setStarted] = useState(false)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) {
      setCounts(stats.map((s) => s.value))
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        setStarted(true)
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.15 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return

    const durationMs = 1100
    const targets = stats.map((s) => s.value)
    const t0 = performance.now()

    const tick = (now: number) => {
      const elapsed = now - t0
      const t = Math.min(1, elapsed / durationMs)
      const e = easeOutCubic(t)
      setCounts(targets.map((target) => Math.round(target * e)))
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        rafRef.current = null
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
    }
  }, [started])

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground tabular-nums">
                {counts[index]?.toLocaleString() ?? 0}
                {stat.suffix}
              </div>
              <p className="mt-2 text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
