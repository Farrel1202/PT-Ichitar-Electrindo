/**
 * Workshop location — pin is approximate (Taman Wisma Asri, Bekasi Utara).
 * Tweak WORKSHOP_LAT / WORKSHOP_LON if you geocode the exact entrance.
 */
export const WORKSHOP_LAT = -6.2373
export const WORKSHOP_LON = 106.9911

const dLon = 0.028
const dLat = 0.022

const bbox = `${WORKSHOP_LON - dLon},${WORKSHOP_LAT - dLat},${WORKSHOP_LON + dLon},${WORKSHOP_LAT + dLat}`

/** OpenStreetMap embed: no API key, works in iframe (Google `pb` placeholders often show a blank map). */
export const WORKSHOP_MAP_EMBED_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${WORKSHOP_LAT}%2C${WORKSHOP_LON}`

/** Opens native Google Maps / app for directions. */
export const WORKSHOP_GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "Komplek Taman Wisma Asri Blok H-21/3, RT.001/RW.010, Teluk Pucung, Bekasi Utara, Jawa Barat 17121, Indonesia",
  )
