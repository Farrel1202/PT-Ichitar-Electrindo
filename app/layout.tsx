import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { WhatsAppFloat } from "@/components/ui/whatsapp-float"
import { ScrollToTop } from "@/components/ui/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PT Ichtiar Electrindo - Powering Industries. Restoring Precision",
  description:
    "Spesialis perbaikan dynamo motor, shaft balancing, dan supply consumables industri. 20+ tahun pengalaman melayani 500+ klien di Indonesia.",
  keywords: [
    "perbaikan dynamo",
    "motor listrik",
    "shaft balancing",
    "consumables industri",
    "bekasi",
    "jakarta",
    "industrial motor repair",
  ],
  authors: [{ name: "PT Ichtiar Electrindo" }],
  openGraph: {
    title: "PT Ichtiar Electrindo - Industrial Motor Repair Services",
    description: "Powering Industries. Restoring Precision. 20+ years of excellence.",
    type: "website",
    locale: "id_ID",
    siteName: "PT Ichtiar Electrindo",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Ichtiar Electrindo",
    description: "Industrial Motor Repair & Maintenance Services",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`font-sans antialiased`}>
        {children}
        <WhatsAppFloat />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
