"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Shield, Zap, Award } from "lucide-react"

const features = [
  { icon: Shield, text: "ISO Certified" },
  { icon: Zap, text: "Fast Service" },
  { icon: Award, text: "20+ Years" },
]

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/industrial-factory-motor-machinery-dark-atmosphere.jpg"
          alt="Industrial motor repair workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-2 text-sm font-medium bg-primary/20 text-primary border-primary/30"
            >
              20+ Tahun Keunggulan Industri
            </Badge>
          </div>

          {/* Heading */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-balance">
              Memberdayakan Industri. <span className="text-primary">Mengembalikan Presisi.</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg md:text-xl text-background/80 mb-8 max-w-2xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Spesialis perbaikan dynamo motor, shaft balancing, dan supply consumables industri. Dipercaya oleh 500+
            perusahaan di seluruh Indonesia.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button asChild size="lg" className="text-base px-8">
              <Link href="/services">
                Layanan Kami
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8 bg-transparent border-background/30 text-background hover:bg-background/10 hover:text-background"
            >
              <a href="tel:+622188676776">
                <Play className="mr-2 w-5 h-5" />
                Hubungi Sekarang
              </a>
            </Button>
          </div>

          {/* Features */}
          <div
            className={`flex flex-wrap gap-6 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {features.map((feature) => (
              <div key={feature.text} className="flex items-center gap-2 text-background/80">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <feature.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-background/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-background/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
