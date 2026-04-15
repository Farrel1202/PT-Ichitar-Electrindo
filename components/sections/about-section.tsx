import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import companyImg from "@/public/company.jpeg"
import workshopImg from "@/public/workshop.jpg"
import workshop2Img from "@/public/workshop2.jpg"

const highlights = [
  "Tim teknisi bersertifikat dengan pengalaman 20+ tahun",
  "Workshop dilengkapi peralatan modern dan canggih",
  "Layanan cepat dengan garansi kepuasan pelanggan",
  "Melayani berbagai industri di seluruh Indonesia",
]

/** ~50% layout width on mobile 2-col; ~25% on lg (half of half grid). */
const ABOUT_IMG_SIZES = "(max-width: 1024px) 50vw, 26vw"

export default function AboutSection() {
  return (
    <section
      id="tentang-kami"
      className="scroll-mt-20 bg-background py-20 lg:scroll-mt-24 lg:py-28"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image grid: next/image serves AVIF/WebP + resized srcset (was ~21MB raw JPEG). */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src={companyImg}
                    alt="Teknisi bekerja di workshop"
                    fill
                    sizes={ABOUT_IMG_SIZES}
                    quality={78}
                    placeholder="blur"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 w-full overflow-hidden rounded-lg">
                  <Image
                    src={workshopImg}
                    alt="Mesin balancing"
                    fill
                    sizes={ABOUT_IMG_SIZES}
                    quality={78}
                    placeholder="blur"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="relative h-80 w-full overflow-hidden rounded-lg">
                  <Image
                    src={workshop2Img}
                    alt="Motor industri"
                    fill
                    sizes={ABOUT_IMG_SIZES}
                    quality={78}
                    placeholder="blur"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">20+</div>
              <div className="text-sm">Tahun Pengalaman</div>
            </div>
          </div>

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
              Didukung oleh tim teknisi berpengalaman dan fasilitas workshop yang lengkap, kami hadir dengan layanan
              perbaikan terpercaya untuk memastikan operasional industri Anda tetap optimal.
            </p>

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
