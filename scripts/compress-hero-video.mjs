#!/usr/bin/env node
/**
 * Builds hero background assets: HD-ish look, modest size, web-friendly.
 *
 * Quality vs size (tuned for industrial / sparks footage):
 * - Desktop: up to 1920px wide, H.264 CRF 23 + VP9 CRF 30, Lanczos downscale, 30fps cap
 * - Mobile:  up to 1080px wide, H.264 CRF 25 + VP9 CRF 33 (lighter decode on phones)
 * - x264 `-tune grain` keeps sparks/detail sharper without shipping full 4K
 *
 * 1. Put your master clip in one of these (first match wins):
 *      - HERO_VIDEO_SOURCE=/absolute/path/to/file.mp4
 *      - public/media/source/hero-master.mp4
 *      - public/Industrial Worker Grinding Metal 4K.mp4
 * 2. Run: pnpm media:compress-hero
 *
 * Requires: ffmpeg on PATH (libx264 + libvpx-vp9).
 */

import { spawnSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, "..")
const outDir = path.join(root, "public", "media")
const srcDir = path.join(outDir, "source")
const sourceCandidates = [
  process.env.HERO_VIDEO_SOURCE && path.resolve(process.env.HERO_VIDEO_SOURCE),
  path.join(srcDir, "hero-master.mp4"),
  path.join(root, "public", "Industrial Worker Grinding Metal 4K.mp4"),
].filter(Boolean)

function resolveSource() {
  for (const p of sourceCandidates) {
    if (fs.existsSync(p)) return p
  }
  return null
}

const source = resolveSource()

function sh(bin, args, label) {
  const r = spawnSync(bin, args, { stdio: "inherit", cwd: root })
  if (r.status !== 0) {
    console.error(`\n[media:compress-hero] Failed: ${label}`)
    process.exit(r.status ?? 1)
  }
}

function ffmpeg(args) {
  sh("ffmpeg", ["-hide_banner", "-loglevel", "warning", "-y", ...args], `ffmpeg ${args.slice(0, 6).join(" ")} …`)
}

if (!source) {
  console.error(`
[media:compress-hero] No source video found. Tried:
${sourceCandidates.map((p) => `  - ${p}`).join("\n")}

Add your clip (e.g. industrial footage) to one of the paths above, then run again:
  pnpm media:compress-hero
`)
  process.exit(1)
}

console.log(`[media:compress-hero] Using source:\n  ${source}\n`)

fs.mkdirSync(outDir, { recursive: true })
fs.mkdirSync(srcDir, { recursive: true })

/** Lanczos + fps cap: sharper downscale from 4K; 30fps = smaller + lighter decode (INP). */
const vfMobile = "fps=30,scale='min(1080,iw)':-2:flags=lanczos+accurate_rnd,format=yuv420p"
const vfDesktop = "fps=30,scale='min(1920,iw)':-2:flags=lanczos+accurate_rnd,format=yuv420p"
const vfMobileWebm = "fps=30,scale='min(1080,iw)':-2:flags=lanczos+accurate_rnd"
const vfDesktopWebm = "fps=30,scale='min(1920,iw)':-2:flags=lanczos+accurate_rnd"
const vfPoster = "scale='min(1920,iw)':-2:flags=lanczos+accurate_rnd"

// Poster: sharp first frame for LCP (still small vs video)
ffmpeg([
  "-i",
  source,
  "-vf",
  vfPoster,
  "-frames:v",
  "1",
  "-q:v",
  "78",
  "-update",
  "1",
  path.join(outDir, "hero-poster.jpg"),
])

// --- Mobile (~1080px max width): strip audio ---
ffmpeg([
  "-i",
  source,
  "-an",
  "-vf",
  vfMobile,
  "-c:v",
  "libx264",
  "-preset",
  "slow",
  "-profile:v",
  "high",
  "-tune",
  "grain",
  "-crf",
  "25",
  "-movflags",
  "+faststart",
  path.join(outDir, "hero-mobile.mp4"),
])

ffmpeg([
  "-i",
  source,
  "-an",
  "-vf",
  vfMobileWebm,
  "-c:v",
  "libvpx-vp9",
  "-crf",
  "33",
  "-b:v",
  "0",
  "-row-mt",
  "1",
  "-cpu-used",
  "2",
  "-deadline",
  "good",
  path.join(outDir, "hero-mobile.webm"),
])

// --- Desktop (~1920px = Full HD width) ---
ffmpeg([
  "-i",
  source,
  "-an",
  "-vf",
  vfDesktop,
  "-c:v",
  "libx264",
  "-preset",
  "slow",
  "-profile:v",
  "high",
  "-tune",
  "grain",
  "-crf",
  "23",
  "-movflags",
  "+faststart",
  path.join(outDir, "hero-desktop.mp4"),
])

ffmpeg([
  "-i",
  source,
  "-an",
  "-vf",
  vfDesktopWebm,
  "-c:v",
  "libvpx-vp9",
  "-crf",
  "30",
  "-b:v",
  "0",
  "-row-mt",
  "1",
  "-cpu-used",
  "2",
  "-deadline",
  "good",
  path.join(outDir, "hero-desktop.webm"),
])

function kb(p) {
  return `${Math.round(fs.statSync(p).size / 102.4) / 10} KB`
}

console.log("\n[media:compress-hero] Done. Output sizes:")
for (const f of fs.readdirSync(outDir)) {
  if (f.startsWith("hero-")) {
    const fp = path.join(outDir, f)
    if (fs.statSync(fp).isFile()) console.log(`  ${f}: ${kb(fp)}`)
  }
}
