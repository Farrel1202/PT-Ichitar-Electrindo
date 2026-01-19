import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WhatsAppFloat from "@/components/shared/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cog, CheckCircle, Phone, ArrowRight, Zap, Shield, Clock, Award, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Dynamo Motor Service - PT Ichtiar Electrindo",
  description:
    "Layanan perbaikan dynamo motor industri: rewinding, overhaul, bearing replacement, insulation test. Tim teknisi berpengalaman 20+ tahun.",
}

const services = [
  {
    title: "Rewinding Coil",
    description: "Penggulungan ulang coil motor AC/DC dengan material berkualitas tinggi.",
  },
  {
    title: "Bearing Replacement",
    description: "Penggantian bearing dengan produk original SKF, FAG, NSK.",
  },
  {
    title: "Insulation Test",
    description: "Pengujian isolasi motor untuk memastikan keamanan operasional.",
  },
  {
    title: "Balancing Rotor",
    description: "Balancing rotor dan armature untuk mengurangi vibrasi.",
  },
  {
    title: "Commutator Repair",
    description: "Perbaikan dan reconditioning commutator serta slip ring.",
  },
  {
    title: "Complete Overhaul",
    description: "Overhaul motor lengkap dengan standar pabrik.",
  },
]

const motorTypes = [
  "Motor Induksi AC",
  "Motor DC Shunt",
  "Motor DC Series",
  "Motor DC Compound",
  "Servo Motor",
  "Stepper Motor",
  "Explosion Proof Motor",
  "High Voltage Motor",
  "Submersible Motor",
  "Traction Motor",
]

const benefits = [
  {
    icon: Zap,
    title: "Fast Response",
    description: "Tim kami siap merespon dalam 24 jam untuk kebutuhan darurat.",
  },
  {
    icon: Shield,
    title: "Garansi Layanan",
    description: "Garansi hingga 12 bulan untuk semua pekerjaan rewinding.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Komitmen penyelesaian sesuai jadwal yang disepakati.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Pengujian menyeluruh sebelum penyerahan unit.",
  },
]

export default function DynamoMotorPage() {
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
              <span className="text-foreground">Dynamo Motor Service</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pb-16 lg:pb-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-0">
                  <Cog className="w-4 h-4 mr-1" />
                  Layanan Utama
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                  Dynamo Motor Service
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Layanan perbaikan dan rewinding motor listrik industri dengan standar kualitas tinggi. Kami menangani
                  berbagai jenis motor AC/DC dari berbagai merk dan kapasitas.
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
                  src="/industrial-motor-repair-workshop-technician-workin.jpg"
                  alt="Dynamo Motor Service"
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
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Layanan yang Kami Tawarkan</h2>
              <p className="text-muted-foreground">
                Solusi lengkap untuk semua kebutuhan perbaikan motor industri Anda.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Motor Types */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Jenis Motor yang Kami Tangani</h2>
                <p className="text-muted-foreground mb-8">
                  Tim teknisi kami berpengalaman menangani berbagai jenis motor industri dari berbagai merk dan
                  kapasitas.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {motorTypes.map((type, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-foreground">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src="/industrial-electric-motor-dynamo-repair-service.jpg"
                  alt="Various motor types"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Mengapa Memilih Kami?</h2>
              <p className="text-muted-foreground">
                Komitmen kami pada kualitas dan kepuasan pelanggan menjadi prioritas utama.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-card border-border text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Butuh Perbaikan Motor Segera?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Hubungi tim kami sekarang untuk konsultasi gratis dan penawaran terbaik.
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
