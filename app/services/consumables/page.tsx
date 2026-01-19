import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WhatsAppFloat from "@/components/shared/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, CheckCircle, Phone, ArrowRight, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Consumables Supply - PT Ichtiar Electrindo",
  description:
    "Supply consumables industri berkualitas: bearing SKF FAG NSK, industrial grease, sealing products, insulation materials. Harga kompetitif.",
}

const categories = [
  {
    title: "Bearing",
    description: "Bearing industri dari brand terkemuka untuk berbagai aplikasi.",
    products: ["SKF Bearing", "FAG Bearing", "NSK Bearing", "NTN Bearing", "Koyo Bearing", "Timken Bearing"],
    image: "/industrial-bearings-skf-fag-nsk-ball-roller.jpg",
  },
  {
    title: "Grease & Lubricant",
    description: "Pelumas industri untuk berbagai kondisi operasional.",
    products: [
      "Shell Grease",
      "Mobil Lubricant",
      "SKF Grease",
      "High Temperature Grease",
      "Food Grade Lubricant",
      "Synthetic Oil",
    ],
    image: "/industrial-grease-lubricant-oil-containers.jpg",
  },
  {
    title: "Sealing Products",
    description: "Produk sealing untuk mencegah kebocoran dan kontaminasi.",
    products: ["Oil Seal", "Mechanical Seal", "O-Ring", "Gasket", "Packing", "Lip Seal"],
    image: "/industrial-sealing-products-oil-seal-oring-gasket.jpg",
  },
  {
    title: "Insulation Materials",
    description: "Material isolasi untuk rewinding dan perbaikan motor.",
    products: ["Nomex Paper", "Kapton Tape", "Mica Tape", "Varnish", "Resin", "Insulation Sleeve"],
    image: "/insulation-materials-nomex-kapton-mica-tape.jpg",
  },
  {
    title: "Copper Wire",
    description: "Kawat tembaga berkualitas untuk rewinding motor.",
    products: [
      "Enameled Wire",
      "Rectangular Wire",
      "Litz Wire",
      "Bare Copper",
      "Tin Coated Wire",
      "Silver Plated Wire",
    ],
    image: "/copper-wire-enameled-conductor-rewinding.jpg",
  },
  {
    title: "Tools & Equipment",
    description: "Peralatan pendukung untuk maintenance dan repair.",
    products: ["Bearing Puller", "Bearing Heater", "Alignment Tools", "Vibration Meter", "Megger", "Multimeter"],
    image: "/industrial-tools-equipment-maintenance-repair.jpg",
  },
]

const brands = ["SKF", "FAG", "NSK", "NTN", "Timken", "Koyo", "Shell", "Mobil", "Castrol", "Total", "DuPont", "3M"]

export default function ConsumablesPage() {
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
              <span className="text-foreground">Consumables Supply</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pb-16 lg:pb-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-0">
                  <Package className="w-4 h-4 mr-1" />
                  Supply Berkualitas
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Consumables Supply</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Penyedia consumables industri berkualitas tinggi dari brand-brand terkemuka. Bearing, grease, seal,
                  dan material pendukung lainnya dengan harga kompetitif dan ketersediaan stok yang terjamin.
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
                  src="/industrial-consumables-bearings-seals-grease-parts.jpg"
                  alt="Consumables Supply"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Kategori Produk</h2>
              <p className="text-muted-foreground">
                Berbagai consumables industri untuk kebutuhan maintenance dan repair.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Card key={index} className="bg-card border-border overflow-hidden group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                    <ul className="space-y-1">
                      {category.products.map((product, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-3 h-3 text-primary shrink-0" />
                          <span className="text-muted-foreground">{product}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Brand yang Kami Supply</h2>
              <p className="text-muted-foreground">
                Kami hanya menyediakan produk dari brand-brand terpercaya dan berkualitas.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-card rounded-lg border border-border text-foreground font-semibold"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Mengapa Beli dari Kami?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Produk Original</span>
                      <p className="text-sm text-muted-foreground">Jaminan keaslian produk dari distributor resmi.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Harga Kompetitif</span>
                      <p className="text-sm text-muted-foreground">
                        Penawaran harga terbaik untuk pembelian dalam jumlah.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Stok Tersedia</span>
                      <p className="text-sm text-muted-foreground">
                        Inventory lengkap untuk item-item yang sering dibutuhkan.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Technical Support</span>
                      <p className="text-sm text-muted-foreground">Bantuan teknis untuk pemilihan produk yang tepat.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Pengiriman Cepat</span>
                      <p className="text-sm text-muted-foreground">Layanan pengiriman ke seluruh Indonesia.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/industrial-spare-parts-motor-components-warehouse.jpg"
                  alt="Our Warehouse"
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
              Butuh Consumables untuk Industri Anda?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Hubungi kami untuk penawaran harga dan ketersediaan stok.
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
