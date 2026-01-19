import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WhatsAppFloat from "@/components/ui/whatsapp-float"
import { PageHeader } from "@/components/ui/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Fasilitas - PT Ichtiar Electrindo",
  description:
    "Fasilitas lengkap dan modern untuk perbaikan motor industri, balancing, dan supply consumables. Dilengkapi dengan peralatan terkini dan teknisi berpengalaman.",
}

const facilities = [
  {
    title: "Crane",
    category: "Material Handling",
    capacity: "5 TON & 3 TON",
    description:
      "Sarana naik turun barang dengan kapasitas 5 ton dan 3 ton, dilengkapi sistem keselamatan untuk handling peralatan industri berat dengan aman dan efisien.",
    features: ["Crane 5 TON", "Crane 3 TON", "Sistem keselamatan standar", "Operator bersertifikat"],
    image: "/industrial-crane-facility-lifting-equipment.jpg",
  },
  {
    title: "Mesin Bubut",
    category: "Fabrication Equipment",
    capacity: "2.5M & 1.5M",
    description:
      "Mesin bubut presisi 2.5 meter dan 1.5 meter untuk pabrikasi, pembuatan bushings, dan modifikasi komponen motor dengan akurasi tinggi sesuai spesifikasi.",
    features: ["Bubut 2.5 Meter", "Bubut 1.5 Meter", "Presisi CNC", "Untuk bushings & modifikasi"],
    image: "/industrial-lathe-machine-cnc-precision-fabrication.jpg",
  },
  {
    title: "Mesin Milling",
    category: "Fabrication Equipment",
    capacity: "Single Stick & Double Stick",
    description:
      "Peralatan milling single stick dan double stick untuk pabrikasi dan modifikasi komponen dengan presisi tinggi dan permukaan hasil yang halus.",
    features: ["Single Stick", "Double Stick", "Presisi tinggi", "Untuk fabrication dan modifikasi"],
    image: "/industrial-milling-machine-cnc-precision-machining.jpg",
  },
  {
    title: "Mesin Balancing",
    category: "Testing Equipment",
    capacity: "2 TON",
    description:
      "Mesin balancing 2 ton untuk memastikan keseimbangan rotor dan mengurangi getaran pada rotating equipment industri dengan presisi internasional.",
    features: ["Kapasitas 2 TON", "Balancing presisi", "Dynamic balancing", "Vibration analysis"],
    image: "/precision-balancing-machine-industrial-equipment.jpg",
  },
  {
    title: "Mesin MAL (Gulungan)",
    category: "Winding Equipment",
    capacity: "Gulungan Tembaga Bulat",
    description:
      "Mesin untuk pencetak dan pengukuran data winding motor, memastikan spesifikasi coil tembaga bulat akurat dan konsisten sesuai kebutuhan.",
    features: ["Pencetak winding data", "Ukuran data motor", "Gulungan tembaga bulat", "Presisi tinggi"],
    image: "/motor-winding-machine-copper-coil-equipment.jpg",
  },
  {
    title: "Oven/Pemanas",
    category: "Heating Equipment",
    capacity: "3M² hingga 3000°C",
    description:
      "Oven pemanas dengan kapasitas besar 3M² dan suhu hingga 3000°C untuk proses curing, drying, heating motor dengan temperatur terkontrol sesuai kebutuhan.",
    features: ["Ukuran 3M²", "Suhu hingga 3000°C", "Temperature kontrol", "Sesuai kebutuhan"],
    image: "/industrial-oven-heating-furnace-controlled-temperature.jpg",
  },
  {
    title: "Gudang Material",
    category: "Storage Facility",
    capacity: "Inventory Lengkap",
    description:
      "Ruang penyimpanan material dan peralatan kerja yang luas dan terorganisir dengan sistem inventory manajemen yang baik untuk aksesibilitas mudah.",
    features: ["Penyimpanan terstruktur", "Inventory management", "Material protection", "Easy access"],
    image: "/industrial-warehouse-storage-facility-organized.jpg",
  },
  {
    title: "Alat Tes Megger",
    category: "Testing Equipment",
    capacity: "5000 & 1000 M.Ohm",
    description:
      "Peralatan testing insulation resistance dengan skala 5000 M.Ohm dan 1000 M.Ohm untuk mengukur kondisi isolasi motor dengan akurasi tinggi.",
    features: ["Megger 5000 M.Ohm", "Megger 1000 M.Ohm", "Insulation testing", "Akurat & reliable"],
    image: "/megger-tester-insulation-resistance-testing-equipment.jpg",
  },
  {
    title: "Tank Ampere & Vibrasi Digital",
    category: "Testing Equipment",
    capacity: "Precision Measurement",
    description:
      "Alat test tank ampere dan vibrasi digital untuk measurement performa motor dan analisis getaran dengan presisi measurement real-time.",
    features: ["Tank Ampere test", "Digital Vibrasi analyzer", "Precision measurement", "Real-time data"],
    image: "/vibration-analyzer-digital-testing-equipment.jpg",
  },
  {
    title: "Alat Tes Power 380V",
    category: "Testing Equipment",
    capacity: "Regulator & Inverter",
    description:
      "Fasilitas pengetesan sistem regulator dan inverter dengan power supply 380V untuk validasi performa dan pengetesan sistem power motor industri.",
    features: ["Sistem Regulator test", "Sistem Inverter test", "Power 380V supply", "Performance validation"],
    image: "/power-testing-equipment-380v-regulator-inverter.jpg",
  },
]

const categories = Array.from(new Set(facilities.map((f) => f.category)))

export default function FacilitiesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <PageHeader
          title="Fasilitas Kami"
          description="Fasilitas modern dan lengkap dengan peralatan terkini untuk mendukung layanan perbaikan motor industri, balancing presisi, dan supply consumables berkualitas."
          breadcrumbs={[
            { label: "Beranda", href: "/" },
            { label: "Fasilitas", href: "/facilities" },
          ]}
        />

        {/* Facilities Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            {/* Category Overview */}
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category) => {
                  const count = facilities.filter((f) => f.category === category).length
                  return (
                    <Card key={category} className="bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-foreground mb-2">{category}</h3>
                        <p className="text-sm text-muted-foreground">{count} Peralatan</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Facilities Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-48 bg-secondary">
                    <img
                      src={facility.image || "/placeholder.svg?height=192&width=400&query=industrial%20equipment"}
                      alt={facility.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                        {facility.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl">{facility.title}</CardTitle>
                    <CardDescription className="text-sm font-medium text-primary">{facility.capacity}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground mb-4">{facility.description}</p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {facility.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

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
