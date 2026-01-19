"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    content:
      "PT Ichtiar Electrindo telah menjadi partner terpercaya kami selama 10 tahun. Kualitas perbaikan motor mereka sangat baik dan tim teknisi yang sangat profesional.",
    author: "Budi Santoso",
    position: "Maintenance Manager",
    company: "PT Semen Indonesia",
    rating: 5,
  },
  {
    content:
      "Layanan shaft balancing mereka sangat presisi. Setelah di-balance oleh tim Ichtiar, vibrasi mesin kami turun drastis dan produktivitas meningkat.",
    author: "Ahmad Wijaya",
    position: "Plant Supervisor",
    company: "PT Krakatau Steel",
    rating: 5,
  },
  {
    content:
      "Response time yang cepat dan hasil kerja yang memuaskan. Sangat recommended untuk perusahaan yang membutuhkan layanan perbaikan motor industri.",
    author: "Siti Rahayu",
    position: "Procurement Manager",
    company: "PT Chandra Asri",
    rating: 5,
  },
  {
    content:
      "Kami sangat puas dengan layanan maintenance rutin dari PT Ichtiar. Downtime mesin berkurang signifikan sejak menggunakan jasa mereka.",
    author: "Hendra Gunawan",
    position: "Technical Director",
    company: "PT Pertamina EP",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold mb-2">Testimoni</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Apa Kata Klien Kami</h2>
          <p className="text-muted-foreground">
            Kepuasan pelanggan adalah prioritas utama kami. Inilah yang mereka katakan tentang layanan kami.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Card */}
            <Card className="bg-card border-border">
              <CardContent className="p-8 lg:p-12">
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-primary/20 mb-6" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-lg lg:text-xl text-foreground mb-8 leading-relaxed">
                  "{testimonials[activeIndex].content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">{testimonials[activeIndex].author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonials[activeIndex].author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      index === activeIndex ? "w-6 bg-primary" : "bg-border hover:bg-muted-foreground",
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
