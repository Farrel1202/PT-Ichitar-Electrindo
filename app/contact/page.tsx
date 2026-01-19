import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WhatsAppFloat from "@/components/shared/whatsapp-float"
import ContactPageContent from "@/components/contact-page-content"

export const metadata: Metadata = {
  title: "Hubungi Kami - PT Ichtiar Electrindo",
  description:
    "Hubungi PT Ichtiar Electrindo untuk konsultasi dan penawaran layanan perbaikan motor industri. Telepon, WhatsApp, atau kunjungi workshop kami.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactPageContent />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
