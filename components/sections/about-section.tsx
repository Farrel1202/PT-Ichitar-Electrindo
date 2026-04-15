import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

const highlights = [
  "Tim teknisi bersertifikat dengan pengalaman 20+ tahun",
  "Workshop dilengkapi peralatan modern dan canggih",
  "Layanan cepat dengan garansi kepuasan pelanggan",
  "Melayani berbagai industri di seluruh Indonesia",
]

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/company.jpeg"
                  alt="Teknisi bekerja"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="/workshop.jpg"
                  alt="Mesin balancing"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="pt-8">
                <img
                  src="/workshop2.jpg"
                  alt="Motor industri"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">20+</div>
              <div className="text-sm">Tahun Pengalaman</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-semibold mb-2">Tentang Kami</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
              Partner Terpercaya untuk Solusi Motor Industri Anda
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              PT Ichtiar Electrindo adalah perusahaan yang bergerak di bidang perbaikan dan perawatan motor listrik
              industri. Sejak tahun 2003, kami telah melayani ratusan perusahaan dari berbagai sektor industri dengan
              komitmen pada kualitas dan ketepatan waktu.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
            Didukung oleh tim teknisi berpengalaman dan fasilitas workshop yang lengkap, kami hadir dengan layanan perbaikan terpercaya untuk memastikan operasional industri Anda tetap optimal.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg">
              <Link href="/about">
                Selengkapnya
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
