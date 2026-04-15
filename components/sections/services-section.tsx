import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cog, Gauge, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Cog,
    title: "Dynamo Motor Service",
    description:
      "Perbaikan lengkap, rewinding, dan maintenance untuk semua jenis motor industri AC/DC dengan standar kualitas tinggi.",
    href: "/services/dynamo-motor",
    features: ["Rewinding Coil", "Bearing Replacement", "Insulation Test"],
  },
  {
    icon: Gauge,
    title: "Shaft Balancing",
    description:
      "Layanan balancing presisi untuk mengurangi getaran dan memperpanjang umur peralatan rotating equipment Anda.",
    href: "/services/shaft-balancing",
    features: ["Dynamic Balancing", "Static Balancing", "Vibration Analysis"],
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-primary font-semibold mb-2">Layanan Kami</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Solusi Lengkap untuk Kebutuhan Motor Industri
          </h2>
          <p className="text-muted-foreground">
            Kami menyediakan berbagai layanan profesional untuk memastikan operasional industri Anda berjalan optimal.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all duration-200 ease-out hover:shadow-lg hover:-translate-y-0.5"
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>

                {/* Features */}
                <ul className="space-y-1 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Selengkapnya
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              Lihat Semua Layanan
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
