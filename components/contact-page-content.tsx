"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Send, Loader2, Shield, MessageSquare } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { WorkshopMap } from "@/components/shared/workshop-map"

const contactInfo = [
  {
    icon: Phone,
    title: "Telepon",
    content: "(021) 8867-6776",
    href: "tel:+622188676776",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    content: "+62 817-7567-6019",
    href: "https://wa.me/6281775676019",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@ichtiarelectrindo.com",
    href: "mailto:info@ichtiarelectrindo.com",
  },
  {
    icon: MapPin,
    title: "Alamat Workshop",
    content: "Komplek Taman Wisma Asri Blok H-21/3, RT.001/RW.010, Teluk Pucung, Bekasi Utara 17121",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "Senin - Sabtu: 08:00 - 17:00 WIB",
  },
]

const faqItems = [
  {
    question: "Berapa lama waktu perbaikan motor?",
    answer:
      "Waktu perbaikan bervariasi tergantung jenis kerusakan dan kapasitas motor. Umumnya 7-21 hari untuk perbaikan standar. Layanan express tersedia untuk kebutuhan mendesak.",
  },
  {
    question: "Apakah ada layanan pickup motor?",
    answer:
      "Ya, kami menyediakan layanan pickup dan delivery untuk area Jabodetabek. Untuk luar area, kami bisa merekomendasikan jasa ekspedisi terpercaya.",
  },
  {
    question: "Berapa garansi yang diberikan?",
    answer:
      "Kami memberikan garansi hingga 12 bulan untuk pekerjaan rewinding dan 6 bulan untuk perbaikan umum. Garansi tidak berlaku untuk kerusakan akibat penggunaan yang tidak sesuai.",
  },
  {
    question: "Apakah bisa on-site service?",
    answer:
      "Ya, kami menyediakan layanan on-site untuk balancing, alignment, dan inspeksi. Hubungi kami untuk diskusi kebutuhan spesifik Anda.",
  },
]

export default function ContactPageContent() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih telah menghubungi kami. Tim kami akan segera merespon.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4">
              Hubungi Kami
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Ada Pertanyaan? Kami Siap Membantu
            </h1>
            <p className="text-lg text-muted-foreground">
              Silakan hubungi kami melalui form di bawah atau kontak langsung. Tim kami akan merespon dalam 1x24 jam.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold text-foreground mb-6">Informasi Kontak</h2>
              {contactInfo.map((item, index) => (
                <Card key={index} className="bg-secondary border-0">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">{item.title}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{item.content}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Map */}
              <div className="mt-6">
                <WorkshopMap className="h-64 lg:h-72 rounded-lg" />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 h-full">
              <Card className="border-border h-full">
                <CardContent className="p-6 lg:p-8 h-full flex flex-col">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Kirim Pesan</h2>
                  <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Nama Lengkap <span className="text-destructive">*</span>
                        </label>
                        <Input id="name" name="name" placeholder="Nama Anda" required />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Perusahaan
                        </label>
                        <Input id="company" name="company" placeholder="Nama Perusahaan" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email <span className="text-destructive">*</span>
                        </label>
                        <Input id="email" name="email" type="email" placeholder="email@perusahaan.com" required />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Telepon <span className="text-destructive">*</span>
                        </label>
                        <Input id="phone" name="phone" type="tel" placeholder="08xx xxxx xxxx" required />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Layanan yang Dibutuhkan
                      </label>
                      <Select name="service">
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih Layanan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dynamo">Dynamo Motor Service</SelectItem>
                          <SelectItem value="balancing">Shaft Balancing</SelectItem>
                          <SelectItem value="consultation">Konsultasi</SelectItem>
                          <SelectItem value="other">Lainnya</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subjek
                      </label>
                      <Input id="subject" name="subject" placeholder="Subjek pesan Anda" />
                    </div>

                    <div className="flex-1 flex flex-col">
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Pesan <span className="text-destructive">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Ceritakan kebutuhan Anda secara detail..."
                        className="flex-1"
                        required
                      />
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Mengirim...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Kirim Pesan
                        </>
                      )}
                    </Button>

                    <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      Data Anda aman dan tidak akan dibagikan kepada pihak ketiga
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Pertanyaan Umum</h2>
            <p className="text-muted-foreground">Jawaban untuk pertanyaan yang sering diajukan.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
                  <p className="text-sm text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">Butuh Respon Cepat?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Untuk kebutuhan mendesak, hubungi langsung via WhatsApp atau telepon. Tim kami siap membantu 24/7.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <a href="https://wa.me/6281775676019" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 w-5 h-5" />
                Chat WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href="tel:+622188676776">
                <Phone className="mr-2 w-5 h-5" />
                (021) 8867-6776
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
