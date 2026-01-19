"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send, Loader2, Shield, MessageSquare } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

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
    title: "Alamat",
    content: "Komplek Taman Wisma Asri Blok H-21/3, Teluk Pucung, Bekasi Utara 17121",
  },
  {
    icon: Clock,
    title: "Jam Kerja",
    content: "Senin - Sabtu: 08:00 - 17:00",
  },
]

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih telah menghubungi kami. Tim kami akan segera menghubungi Anda.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold mb-2">Hubungi Kami</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Ada Pertanyaan? Kami Siap Membantu
          </h2>
          <p className="text-muted-foreground">
            Isi form di bawah atau hubungi kami langsung melalui kontak yang tersedia.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
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
            <div className="mt-6 rounded-lg overflow-hidden h-48 bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.234!2d107.0294477!3d-6.2027649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698948324ece9f:0xebbc1ecc3baf9e98!2sIchtiar%20Electrindo!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PT Ichtiar Electrindo Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 h-full">
            <Card className="border-border h-full">
              <CardContent className="p-6 lg:p-8 h-full flex flex-col">
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
                        <SelectItem value="consumables">Consumables Supply</SelectItem>
                        <SelectItem value="spareparts">Spare Parts</SelectItem>
                        <SelectItem value="consultation">Konsultasi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Pesan <span className="text-destructive">*</span>
                    </label>
                    <Textarea id="message" name="message" placeholder="Ceritakan kebutuhan Anda..." className="flex-1" required />
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
  )
}
