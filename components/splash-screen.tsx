"use client"

import { useLayoutEffect, useRef } from "react"
import { SPLASH_STORAGE_KEY } from "@/lib/splash-constants"

/**
 * Drives exit animation on server-rendered `#__splash` (no duplicate overlay = no hero flash).
 */
export function SplashScreen() {
  const finishedRef = useRef(false)
  const fallbackRef = useRef<number | null>(null)

  useLayoutEffect(() => {
    const el = document.getElementById("__splash")
    if (!el) return

    const finish = () => {
      if (finishedRef.current) return
      finishedRef.current = true
      if (fallbackRef.current != null) {
        window.clearTimeout(fallbackRef.current)
        fallbackRef.current = null
      }
      document.body.classList.remove("splash-lock")
      try {
        sessionStorage.setItem(SPLASH_STORAGE_KEY, "1")
      } catch {
        /* ignore */
      }
      el.remove()
    }

    const skipByStorage = () => {
      try {
        return sessionStorage.getItem(SPLASH_STORAGE_KEY) === "1"
      } catch {
        return false
      }
    }

    if (document.body.classList.contains("splash-skip")) {
      el.remove()
      return
    }

    if (skipByStorage()) {
      el.remove()
      return
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      try {
        sessionStorage.setItem(SPLASH_STORAGE_KEY, "1")
      } catch {
        /* ignore */
      }
      el.remove()
      return
    }

    document.body.classList.add("splash-lock")

    const leaveTimer = window.setTimeout(() => {
      el.classList.add("splash--leave")
      fallbackRef.current = window.setTimeout(finish, 900)
    }, 1680)

    const onTransitionEnd = (e: Event) => {
      if (e.target !== el) return
      const te = e as TransitionEvent
      if (te.propertyName !== "opacity") return
      el.removeEventListener("transitionend", onTransitionEnd)
      finish()
    }

    el.addEventListener("transitionend", onTransitionEnd)

    return () => {
      window.clearTimeout(leaveTimer)
      if (fallbackRef.current != null) window.clearTimeout(fallbackRef.current)
      el.removeEventListener("transitionend", onTransitionEnd)
      document.body.classList.remove("splash-lock")
    }
  }, [])

  return null
}
