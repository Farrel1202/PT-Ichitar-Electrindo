/**
 * Server-rendered splash shell — paints before React hydrates so no hero “flash”.
 * Exit animation + removal handled by `SplashScreen` (client).
 */
export function SplashScreenStatic() {
  return (
    <div
      id="__splash"
      className="splash-shell fixed inset-0 z-[10000] flex flex-col items-center justify-center"
      style={{
        background:
          "radial-gradient(ellipse 85% 70% at 50% 42%, oklch(0.22 0.04 145 / 0.97) 0%, oklch(0.12 0.02 145) 55%, oklch(0.08 0.01 145) 100%)",
      }}
      suppressHydrationWarning
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(circle at 50% 48%, oklch(0.52 0.14 145 / 0.12) 0%, transparent 42%), radial-gradient(ellipse 120% 90% at 50% 100%, oklch(0 0 0 / 0.45) 0%, transparent 50%)",
        }}
        aria-hidden
      />
      <div
        className={[
          "relative flex flex-col items-center gap-8 px-6",
          "motion-safe:animate-[splash-logo-in_900ms_cubic-bezier(0.22,1,0.36,1)_120ms_both]",
        ].join(" ")}
      >
        <img
          src="/pt-ichtiar-logo.PNG"
          alt=""
          width={200}
          height={120}
          fetchPriority="high"
          decoding="sync"
          className="h-24 w-auto max-w-[min(72vw,280px)] object-contain drop-shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
        />
        <div className="flex flex-col items-center gap-2">
          <div
            className="h-px w-28 origin-center rounded-full bg-linear-to-r from-transparent via-primary/70 to-transparent motion-safe:animate-[splash-line_1.1s_ease-out_0.35s_both]"
            aria-hidden
          />
          <p className="text-center text-xs font-medium tracking-[0.2em] text-white/55 uppercase">
            Industrial precision
          </p>
        </div>
      </div>
    </div>
  )
}
