import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WhatsAppFloat from "@/components/shared/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Gauge,
  CheckCircle,
  Phone,
  ArrowRight,
  ChevronRight,
  Target,
  TrendingDown,
  FileText,
  Wrench,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Shaft Balancing Service - PT Ichtiar Electrindo",
  description:
    "Layanan shaft balancing presisi tinggi: dynamic balancing, static balancing, vibration analysis. Kurangi getaran, perpanjang umur mesin.",
}

const services = [
  {
    title: "Dynamic Balancing",
    description: "Balancing rotor dengan pengukuran multi-plane untuk presisi maksimal.",
    icon: Target,
  },
  {
    title: "Static Balancing",
    description: "Balancing untuk komponen dengan kecepatan rendah atau single-plane.",
    icon: Gauge,
  },
  {
    title: "Vibration Analysis",
    description: "Analisis vibrasi menyeluruh untuk diagnosis masalah rotating equipment.",
    icon: TrendingDown,
  },
  {
    title: "On-Site Balancing",
    description: "Layanan balancing langsung di lokasi untuk meminimalkan downtime.",
    icon: Wrench,
  },
  {
    title: "Balancing Report",
    description: "Dokumentasi lengkap dengan sertifikat balancing untuk setiap pekerjaan.",
    icon: FileText,
  },
  {
    title: "Alignment Service",
    description: "Layanan alignment shaft dan coupling untuk performa optimal.",
    icon: Target,
  },
]

const equipmentTypes = [
  "Motor Rotor & Armature",
  "Fan & Blower Impeller",
  "Pump Impeller",
  "Turbine Rotor",
  "Compressor Rotor",
  "Grinding Wheel",
  "Flywheel",
  "Spindle",
  "Coupling",
  "Pulley & Sheave",
]

const specifications = [
  { label: "Kapasitas Maksimal", value: "5000 kg" },
  { label: "Diameter Maksimal", value: "2000 mm" },
  { label: "Panjang Maksimal", value: "4000 mm" },
  { label: "Kelas Balancing", value: "ISO G1.0 - G6.3" },
  { label: "Sensitivitas", value: "0.1 gram-mm" },
  { label: "Speed Range", value: "100 - 3000 RPM" },
]

export default function ShaftBalancingPage() {
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
              <span className="text-foreground">Shaft Balancing</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pb-16 lg:pb-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-0">
                  <Gauge className="w-4 h-4 mr-1" />
                  Presisi Tinggi
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Shaft Balancing</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Layanan balancing presisi untuk mengurangi getaran dan memperpanjang umur peralatan rotating equipment
                  Anda. Dilengkapi dengan mesin balancing modern dan tim teknisi berpengalaman.
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
                  src="/precision-balancing-machine-industrial-equipment.jpg"
                  alt="Shaft Balancing Service"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Layanan Balancing Kami</h2>
              <p className="text-muted-foreground">
                Solusi balancing lengkap dengan peralatan modern dan akurasi tinggi.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications & Equipment */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Specifications */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Spesifikasi Mesin Balancing</h2>
                <p className="text-muted-foreground mb-8">
                  Workshop kami dilengkapi dengan mesin balancing modern yang mampu menangani berbagai ukuran komponen.
                </p>
                <div className="space-y-4">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground">{spec.label}</span>
                      <span className="font-semibold text-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment Types */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Komponen yang Dapat Di-Balance</h2>
                <p className="text-muted-foreground mb-8">
                  Kami menangani berbagai jenis rotating equipment dari berbagai industri.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {equipmentTypes.map((type, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-foreground">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/turbine-rotor-balancing-precision-industrial-machi.jpg"
                  alt="Balancing Process"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Manfaat Shaft Balancing</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Kurangi Vibrasi</span>
                      <p className="text-sm text-muted-foreground">
                        Meminimalkan getaran berlebih yang dapat merusak komponen.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Perpanjang Umur Bearing</span>
                      <p className="text-sm text-muted-foreground">
                        Bearing lebih awet dengan beban yang terdistribusi merata.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Tingkatkan Efisiensi</span>
                      <p className="text-sm text-muted-foreground">
                        Operasi lebih efisien dengan konsumsi energi yang optimal.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Kurangi Downtime</span>
                      <p className="text-sm text-muted-foreground">
                        Minimalisir kerusakan mendadak dan biaya perbaikan.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">Perlu Layanan Balancing?</h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Hubungi kami untuk konsultasi dan penawaran. On-site service tersedia.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Hubungi Kami
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
