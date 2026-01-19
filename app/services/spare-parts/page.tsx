import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WhatsAppFloat from "@/components/shared/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, CheckCircle, Phone, ArrowRight, ChevronRight, Package, Truck, Clock, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Spare Parts Supply - PT Ichtiar Electrindo",
  description:
    "Supply spare parts motor industri: OEM parts, electrical components, mechanical parts. Custom fabrication available. Harga kompetitif.",
}

const partCategories = [
  {
    title: "Motor Components",
    items: [
      "Rotor Assembly",
      "Stator Assembly",
      "Commutator",
      "Slip Ring",
      "Brush Holder",
      "Carbon Brush",
      "Fan Cowl",
      "Terminal Box",
    ],
  },
  {
    title: "Electrical Parts",
    items: [
      "Capacitor",
      "Contactor",
      "Relay",
      "Overload",
      "Terminal Block",
      "Connector",
      "Cable Gland",
      "Junction Box",
    ],
  },
  {
    title: "Mechanical Parts",
    items: [
      "Shaft",
      "Coupling",
      "Pulley",
      "Bearing Housing",
      "End Shield",
      "Mounting Bracket",
      "Vibration Damper",
      "Cooling Fan",
    ],
  },
  {
    title: "Sealing Parts",
    items: [
      "Oil Seal",
      "Labyrinth Seal",
      "V-Ring",
      "Felt Seal",
      "Flinger",
      "Bearing Cover",
      "End Cap",
      "Grease Fitting",
    ],
  },
]

const benefits = [
  {
    icon: Package,
    title: "OEM & Aftermarket",
    description: "Pilihan parts original dan alternatif berkualitas.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Pengiriman cepat untuk meminimalkan downtime.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Garansi kualitas untuk semua parts yang kami supply.",
  },
  {
    icon: Truck,
    title: "Import Service",
    description: "Layanan pengadaan parts import sesuai kebutuhan.",
  },
]

const supportedBrands = [
  "ABB",
  "Siemens",
  "WEG",
  "Teco",
  "Marathon",
  "Leroy Somer",
  "Baldor",
  "GE",
  "Nidec",
  "Brook Crompton",
  "Cantoni",
  "TMEIC",
]

export default function SparePartsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="pt-24 bg-secondary">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/services" className="hover:text-foreground">
                Layanan
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">Spare Parts</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pb-16 lg:pb-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-0">
                  <Wrench className="w-4 h-4 mr-1" />
                  Parts Supply
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Spare Parts Supply</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Supply spare parts motor industri dari berbagai merk dengan harga kompetitif. Tersedia parts OEM
                  maupun aftermarket berkualitas. Layanan custom fabrication untuk parts yang tidak tersedia di pasaran.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="/contact">Minta Penawaran</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="tel:+622188676776">
                      <Phone className="mr-2 w-5 h-5" />
                      (021) 8867-6776
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/industrial-spare-parts-motor-components-warehouse.jpg"
                  alt="Spare Parts Supply"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-card border-border text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Parts Categories */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Kategori Spare Parts</h2>
              <p className="text-muted-foreground">Berbagai spare parts untuk kebutuhan maintenance motor industri.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partCategories.map((category, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-3 h-3 text-primary shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Brands */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Brand Motor yang Kami Support</h2>
              <p className="text-muted-foreground">
                Kami menyediakan spare parts untuk berbagai merk motor industri terkemuka.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {supportedBrands.map((brand, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-secondary rounded-lg border border-border text-foreground font-semibold"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Fabrication */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/custom-fabrication-machining-workshop-industrial.jpg"
                  alt="Custom Fabrication"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div>
                <Badge variant="outline" className="mb-4">
                  Custom Service
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Layanan Custom Fabrication</h2>
                <p className="text-muted-foreground mb-6">
                  Untuk parts yang tidak tersedia di pasaran atau memerlukan modifikasi khusus, kami menyediakan layanan
                  custom fabrication dengan dukungan workshop machining yang lengkap.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">Reverse engineering untuk parts obsolete</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">Machining shaft dan komponen mekanik</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">Modifikasi mounting dan bracket</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">Fabrication custom parts sesuai spesifikasi</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/contact">
                    Konsultasi Kebutuhan
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Butuh Spare Parts untuk Motor Anda?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Kirimkan detail kebutuhan Anda dan dapatkan penawaran harga terbaik.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Minta Penawaran
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
