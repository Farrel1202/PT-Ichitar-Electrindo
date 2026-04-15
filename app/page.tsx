import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import HeroSection from "@/components/sections/hero-section"
import StatsSection from "@/components/sections/stats-section"
import AboutSection from "@/components/sections/about-section"
import ServicesSection from "@/components/sections/services-section"
import PortfolioSection from "@/components/sections/portfolio-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import CTASection from "@/components/sections/cta-section"
import ContactSection from "@/components/sections/contact-section"
import WhatsAppFloat from "@/components/shared/whatsapp-float"
import { WorkshopMap } from "@/components/shared/workshop-map"

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://ichtiarelectrindo.com/#organization",
        name: "PT Ichtiar Electrindo",
        url: "https://ichtiarelectrindo.com",
        logo: {
          "@type": "ImageObject",
          url: "https://ichtiarelectrindo.com/logo.png",
          width: 600,
          height: 60,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+62-21-8876776",
          contactType: "customer service",
          areaServed: "ID",
          availableLanguage: ["id", "en"],
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://ichtiarelectrindo.com/#localbusiness",
        name: "PT Ichtiar Electrindo",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Komplek Taman Wisma Asri Blok H-21/3, RT.001/RW.010, Teluk Pucung",
          addressLocality: "Bekasi Utara",
          addressRegion: "Jawa Barat",
          postalCode: "17121",
          addressCountry: "ID",
        },
        telephone: "+62-21-8876776",
        priceRange: "$$",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "08:00",
            closes: "17:00",
          },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        {/* Map Section (between About & Services) */}
        <section className="py-16 lg:py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-8 lg:mb-10">
              <p className="text-primary font-semibold mb-2">Lokasi</p>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 text-balance">
                Workshop PT Ichtiar Electrindo
              </h2>
              <p className="text-muted-foreground">
                Berlokasi di Komplek Taman Wisma Asri, Bekasi Utara. Mudah diakses untuk pengiriman dan pengambilan
                motor industri Anda.
              </p>
            </div>
            <WorkshopMap />
          </div>
        </section>

        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
