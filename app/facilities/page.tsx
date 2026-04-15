import Link from "next/link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WhatsAppFloat from "@/components/ui/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Phone } from "lucide-react"
import FacilitiesSection from "@/components/sections/facilities-section"

export default function FacilitiesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Header Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <Badge variant="outline" className="mb-4">
                Fasilitas
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Peralatan Modern untuk Hasil Terbaik
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Workshop kami dilengkapi dengan peralatan modern dan teknisi berpengalaman untuk memberikan layanan berkualitas tinggi. Setiap peralatan dikelola dengan standar internasional dan terus diperbarui dengan teknologi terbaru.
              </p>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <FacilitiesSection />

        {/* Specifications Section */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4">
                  Keunggulan Fasilitas
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Standar Internasional Dengan Teknologi Terkini
                </h2>
                <p className="text-lg text-muted-foreground">
                  Semua fasilitas kami dirancang mengikuti standar internasional dan terus diperbarui dengan teknologi
                  terbaru untuk memberikan hasil terbaik.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-background border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Peralatan Modern</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Dilengkapi dengan peralatan testing dan fabrication terkini dari manufaktur terpercaya.
                    </p>
                    <ul className="space-y-2">
                      {["CNC Precision", "Digital Testing", "Real-time Monitoring"].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-background border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Tim Profesional</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Operator dan teknisi bersertifikat dengan pengalaman puluhan tahun di industri motor.
                    </p>
                    <ul className="space-y-2">
                      {["Bersertifikat", "Berpengalaman", "Profesional"].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Percayakan Kebutuhan Motor Industri Anda Kepada Kami
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Dengan fasilitas lengkap dan tim profesional, kami siap memberikan solusi terbaik untuk motor dan
              peralatan industri Anda.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Minta Penawaran</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="tel:+622188676776">
                  <Phone className="mr-2 w-5 h-5" />
                  Hubungi Kami
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
