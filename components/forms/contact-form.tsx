"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Send, Shield, CheckCircle } from "lucide-react"

const contactSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter").max(100, "Nama terlalu panjang"),
  company: z.string().optional(),
  email: z.string().email("Format email tidak valid"),
  phone: z
    .string()
    .min(10, "Nomor telepon minimal 10 digit")
    .regex(/^[0-9+\-\s()]+$/, "Format nomor telepon tidak valid"),
  service: z.string().optional(),
  message: z.string().min(10, "Pesan minimal 10 karakter").max(2000, "Pesan terlalu panjang"),
})

type ContactFormData = z.infer<typeof contactSchema>

interface ContactFormProps {
  onSuccess?: (data: { whatsappUrl?: string }) => void
  showWhatsAppRedirect?: boolean
}

export default function ContactForm({ onSuccess, showWhatsAppRedirect = true }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Gagal mengirim pesan")
      }

      setIsSuccess(true)

      toast({
        title: "Pesan Terkirim!",
        description: `Terima kasih telah menghubungi kami. Estimasi respon: ${result.data?.estimatedResponse || "1x24 jam"}.`,
      })

      if (onSuccess) {
        onSuccess({ whatsappUrl: result.data?.whatsappUrl })
      }

      // Optionally redirect to WhatsApp
      if (showWhatsAppRedirect && result.data?.whatsappUrl) {
        setTimeout(() => {
          const shouldRedirect = window.confirm("Ingin melanjutkan chat via WhatsApp untuk respon lebih cepat?")
          if (shouldRedirect) {
            window.open(result.data.whatsappUrl, "_blank")
          }
        }, 1000)
      }

      reset()

      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      console.error("Form submission error:", error)

      toast({
        title: "Terjadi Kesalahan",
        description: error instanceof Error ? error.message : "Mohon coba lagi atau hubungi kami melalui WhatsApp.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Pesan Terkirim!</h3>
        <p className="text-muted-foreground mb-4">Tim kami akan segera menghubungi Anda.</p>
        <Button onClick={() => setIsSuccess(false)} variant="outline">
          Kirim Pesan Lain
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Nama Lengkap <span className="text-destructive">*</span>
          </label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Nama Anda"
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
            Perusahaan
          </label>
          <Input id="company" {...register("company")} placeholder="Nama Perusahaan" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email <span className="text-destructive">*</span>
          </label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="email@perusahaan.com"
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Telepon <span className="text-destructive">*</span>
          </label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="08xx xxxx xxxx"
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
          Layanan yang Dibutuhkan
        </label>
        <Select onValueChange={(value) => setValue("service", value)}>
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

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Pesan <span className="text-destructive">*</span>
        </label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Ceritakan kebutuhan Anda..."
          rows={5}
          className={errors.message ? "border-destructive" : ""}
        />
        {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
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
  )
}
