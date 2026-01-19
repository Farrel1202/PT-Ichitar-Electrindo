import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WhatsAppFloat from "@/components/shared/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Building,
  Calendar,
  ArrowRight,
  Shield,
  Zap,
  ThumbsUp,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Tentang Kami - PT Ichtiar Electrindo",
  description:
    "PT Ichtiar Electrindo adalah perusahaan spesialis perbaikan dynamo motor dan shaft balancing industri dengan pengalaman 20+ tahun melayani berbagai industri di Indonesia.",
}

const milestones = [
  {
    year: "2003",
    title: "Pendirian Perusahaan",
    description: "PT Ichtiar Electrindo didirikan di Bekasi dengan fokus pada perbaikan motor listrik industri.",
  },
  {
    year: "2008",
    title: "Ekspansi Fasilitas",
    description: "Perluasan workshop dengan mesin balancing dan peralatan modern untuk meningkatkan kapasitas layanan.",
  },
  {
    year: "2012",
    title: "Sertifikasi Internasional",
    description: "Mendapatkan sertifikasi untuk standar internasional pada layanan motor listrik dan transformer.",
  },
  {
    year: "2015",
    title: "Diversifikasi Layanan",
    description: "Menambah layanan electrical systems, panel design, dan instalasi kelistrikan industri.",
  },
  {
    year: "2018",
    title: "Investasi Teknologi",
    description: "Upgrade peralatan testing modern termasuk megger, vibration analyzer, dan power testing equipment.",
  },
  {
    year: "2023",
    title: "20 Tahun Melayani Industri",
    description:
      "Merayakan dua dekade melayani industri Indonesia dengan ribuan proyek selesai dan kepuasan pelanggan tinggi.",
  },
]

const values = [
  {
    icon: Shield,
    title: "Integritas",
    description: "Menjunjung tinggi kejujuran dan transparansi dalam setiap transaksi.",
  },
  {
    icon: Award,
    title: "Kualitas",
    description: "Berkomitmen pada standar kualitas tertinggi dalam setiap pekerjaan.",
  },
  {
    icon: Zap,
    title: "Responsif",
    description: "Merespon kebutuhan pelanggan dengan cepat dan profesional.",
  },
  {
    icon: ThumbsUp,
    title: "Kepuasan Pelanggan",
    description: "Mengutamakan kepuasan pelanggan sebagai prioritas utama.",
  },
]

const stats = [
  { icon: Calendar, value: "20+", label: "Tahun Pengalaman" },
  { icon: Users, value: "500+", label: "Klien Puas" },
  { icon: Building, value: "10,000+", label: "Proyek Selesai" },
  { icon: Award, value: "99%", label: "Tingkat Kepuasan" },
]

const certifications = [
  "SK Menteri Kehakiman (2012)",
  "Standar Internasional Motor Listrik",
  "Member Asosiasi Industri",
  "Authorized Service & Repair",
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4">
                  Tentang PT Ichtiar Electrindo
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                  Solusi Terpadu Motor Listrik Industri Sejak 1992
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  PT Ichtiar Electrindo adalah perusahaan spesialis yang melayani servicing, repairing, rewinding,
                  testing, installing, dan over hauling motor listrik tegangan tinggi, generator, transformer, traction
                  motor, engine, pompa, air conditioning compressor, dan peralatan industri lainnya sesuai standar
                  internasional.
                </p>
                <div className="space-y-2 mb-8 text-sm text-muted-foreground">
                  <p>
                    <strong>Alamat:</strong> Taman Wisma Asri II, Jl. KH. Noeradie No. 7, Kp. Irian Raya RT 10 RW 04,
                    Kel. Teluk Pucung, Bekasi Utara
                  </p>
                  <p>
                    <strong>Telepon:</strong> (021) 8898-9763, (021) 8888-2733
                  </p>
                  <p>
                    <strong>Email:</strong> ichtiarelectrindo@ymail.com
                  </p>
                </div>
                <Button asChild size="lg">
                  <Link href="/contact">
                    Hubungi Kami
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src="/industrial-motor-repair-workshop-technician-workin.jpg"
                  alt="PT Ichtiar Electrindo Team"
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold">20+</div>
                  <div className="text-sm">Tahun Pengalaman</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Vision */}
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Visi</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Menjadi penyedia jasa perbaikan dan perawatan motor listrik industri terpercaya dan terdepan di
                    Indonesia dengan standar internasional yang diakui secara global.
                  </p>
                </CardContent>
              </Card>

              {/* Mission */}
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Misi</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">
                        Memberikan layanan perbaikan dan perawatan motor berkualitas tinggi dengan standar internasional
                        sesuai kebutuhan klien industri.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">
                        Menyediakan fasilitas lengkap dengan peralatan modern dan tim teknisi profesional berpengalaman.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">
                        Mengembangkan solusi electrical systems terintegrasi termasuk panel design, PLC control, dan
                        inspeksi kelistrikan.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">
                        Membangun kepercayaan jangka panjang melalui dedikasi pada kepuasan pelanggan dan layanan
                        responsif.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Nilai-Nilai Kami</h2>
              <p className="text-muted-foreground">
                Nilai-nilai yang menjadi fondasi dalam setiap layanan yang kami berikan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="bg-card border-border text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Perjalanan Kami</h2>
              <p className="text-muted-foreground">
                Milestone penting dalam perjalanan PT Ichtiar Electrindo sejak didirikan tahun 2003.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center gap-8 mb-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"} pl-12 md:pl-0`}
                    >
                      <div className="bg-card rounded-lg p-6 border border-border">
                        <Badge variant="secondary" className="mb-2">
                          {milestone.year}
                        </Badge>
                        <h3 className="font-semibold text-foreground mb-1">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background" />

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Sertifikasi & Keanggotaan</h2>
                <p className="text-muted-foreground mb-8">
                  Kami berkomitmen pada standar kualitas tertinggi yang dibuktikan dengan berbagai sertifikasi dan
                  keanggotaan profesional.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                      <Award className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm font-medium text-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src="/industrial-workshop-facility-modern-equipment.jpg"
                  alt="Our Facility"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Siap Bekerja Sama dengan Kami?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Hubungi tim kami untuk konsultasi dan diskusi kebutuhan industri Anda.
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
