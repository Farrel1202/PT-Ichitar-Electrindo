/**
 * Hero background clips from `pnpm media:compress-hero` (1080-wide mobile, 1920-wide desktop).
 * WebM is listed first for smaller transfers; MP4 fallback. Re-run the script after changing master footage.
 */
export const HERO_MEDIA = {
  /** Single-frame JPEG from `media:compress-hero` (~tens of KB) for fast first paint. */
  poster: "/media/hero-poster.jpg",
  sources: [
    { src: "/media/hero-mobile.webm", type: "video/webm", media: "(max-width: 768px)" },
    { src: "/media/hero-desktop.webm", type: "video/webm", media: "(min-width: 769px)" },
    { src: "/media/hero-mobile.mp4", type: "video/mp4", media: "(max-width: 768px)" },
    { src: "/media/hero-desktop.mp4", type: "video/mp4", media: "(min-width: 769px)" },
  ],
} as const
