import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WhatsAppFloat from "@/components/shared/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cog, Gauge, Package, Wrench, ArrowRight, CheckCircle, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Layanan Kami - PT Ichtiar Electrindo",
  description:
    "Layanan perbaikan dynamo motor, shaft balancing, supply consumables dan spare parts industri. Solusi lengkap untuk kebutuhan motor industri Anda.",
}

const services = [
  {
    icon: Cog,
    title: "Dynamo Motor Service",
    description:
      "Perbaikan lengkap, rewinding, dan maintenance untuk semua jenis motor industri AC/DC dengan standar kualitas tinggi.",
    href: "/services/dynamo-motor",
    features: [
      "Rewinding coil motor AC/DC",
      "Penggantian bearing & seal",
      "Insulation test & hi-pot test",
      "Balancing rotor & armature",
      "Repair commutator & slip ring",
      "Overhaul motor lengkap",
    ],
    image: "/industrial-motor-repair-workshop-technician-workin.jpg",
  },
  {
    icon: Gauge,
    title: "Shaft Balancing",
    description:
      "Layanan balancing presisi untuk mengurangi getaran dan memperpanjang umur peralatan rotating equipment Anda.",
    href: "/services/shaft-balancing",
    features: [
      "Dynamic balancing",
      "Static balancing",
      "Vibration analysis",
      "Alignment services",
      "On-site balancing",
      "Balancing report & certificate",
    ],
    image: "/precision-balancing-machine-industrial-equipment.jpg",
  },
  {
    icon: Package,
    title: "Consumables Supply",
    description:
      "Penyedia consumables industri berkualitas seperti bearing, seal, grease, dan material pendukung lainnya.",
    href: "/services/consumables",
    features: [
      "SKF, FAG, NSK Bearing",
      "Industrial grease & lubricant",
      "Sealing products",
      "Insulation materials",
      "Varnish & resin",
      "Copper wire & conductor",
    ],
    image: "/industrial-consumables-bearings-seals-grease-parts.jpg",
  },
  {
    icon: Wrench,
    title: "Spare Parts Supply",
    description:
      "Supply spare parts original dan aftermarket untuk berbagai merk motor industri dengan harga kompetitif.",
    href: "/services/spare-parts",
    features: [
      "Motor components OEM",
      "Electrical parts",
      "Mechanical parts",
      "Custom fabrication",
      "Import parts service",
      "Competitive pricing",
    ],
    image: "/industrial-spare-parts-motor-components-warehouse.jpg",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Konsultasi",
    description: "Tim kami akan menganalisis kebutuhan dan kondisi peralatan Anda.",
  },
  {
    step: "02",
    title: "Inspeksi",
    description: "Pemeriksaan menyeluruh untuk menentukan scope pekerjaan yang diperlukan.",
  },
  {
    step: "03",
    title: "Penawaran",
    description: "Kami berikan penawaran transparan dengan detail scope dan estimasi waktu.",
  },
  {
    step: "04",
    title: "Pengerjaan",
    description: "Tim teknisi berpengalaman mengerjakan dengan standar kualitas tinggi.",
  },
  {
    step: "05",
    title: "Quality Control",
    description: "Pengujian menyeluruh untuk memastikan hasil kerja sesuai standar.",
  },
  {
    step: "06",
    title: "Serah Terima",
    description: "Penyerahan hasil kerja disertai dokumentasi dan garansi layanan.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <Badge variant="outline" className="mb-4">
                Layanan Kami
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Solusi Lengkap untuk Motor Industri Anda
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Kami menyediakan berbagai layanan profesional untuk memastikan operasional industri Anda berjalan
                optimal dengan dukungan tim teknisi berpengalaman.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Minta Penawaran</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:+622188676776">
                    <Phone className="mr-2 w-5 h-5" />
                    Hubungi Kami
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-80 lg:h-96 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-muted-foreground mb-6">{service.description}</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild>
                      <Link href={service.href}>
                        Selengkapnya
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-primary font-semibold mb-2">Proses Kerja</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Bagaimana Kami Bekerja</h2>
              <p className="text-muted-foreground">
                Proses kerja yang sistematis dan transparan untuk memastikan hasil terbaik.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((item, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary/20 mb-4">{item.step}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Butuh Bantuan untuk Motor Industri Anda?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Konsultasikan kebutuhan Anda dengan tim ahli kami. Kami siap memberikan solusi terbaik.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Hubungi Kami</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="https://wa.me/6281775676019" target="_blank" rel="noopener noreferrer">
                  Chat WhatsApp
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
