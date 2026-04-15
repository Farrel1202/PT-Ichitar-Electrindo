"use client"

import Link from "next/link"
import { WORKSHOP_GOOGLE_MAPS_URL, WORKSHOP_MAP_EMBED_SRC } from "@/lib/site-location"
import { cn } from "@/lib/utils"

type WorkshopMapProps = {
  className?: string
}

/** OSM embed (reliable) + link to Google Maps for directions. */
export function WorkshopMap({ className }: WorkshopMapProps) {
  return (
    <div
      className={cn(
        "relative h-[320px] overflow-hidden rounded-xl bg-muted shadow-lg lg:h-[420px]",
        className,
      )}
    >
      <iframe
        src={WORKSHOP_MAP_EMBED_SRC}
        title="Lokasi workshop PT Ichtiar Electrindo"
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-end p-2">
        <Link
          href={WORKSHOP_GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto rounded-md border border-border bg-background/95 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-secondary"
        >
          Buka di Google Maps
        </Link>
      </div>
    </div>
  )
}
