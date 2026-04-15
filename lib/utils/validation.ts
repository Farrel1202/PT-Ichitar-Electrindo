import { z } from "zod"

// Phone number validation for Indonesian numbers
export const phoneSchema = z
  .string()
  .min(10, "Nomor telepon minimal 10 digit")
  .max(15, "Nomor telepon maksimal 15 digit")
  .regex(/^(\+62|62|0)[0-9]{9,13}$/, "Format nomor telepon tidak valid")

// Email validation with common Indonesian domains
export const emailSchema = z.string().email("Format email tidak valid").min(5).max(254)

// Indonesian company name validation
export const companyNameSchema = z.string().min(2, "Nama perusahaan minimal 2 karakter").max(200)

// Contact form schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter").max(100, "Nama terlalu panjang"),
  company: companyNameSchema.optional().or(z.literal("")),
  email: emailSchema,
  phone: phoneSchema,
  service: z.string().optional(),
  subject: z.string().max(200).optional(),
  message: z.string().min(10, "Pesan minimal 10 karakter").max(2000, "Pesan terlalu panjang"),
})

// Quote request schema
export const quoteRequestSchema = z.object({
  name: z.string().min(2).max(100),
  company: companyNameSchema,
  email: emailSchema,
  phone: phoneSchema,
  service: z.enum(["dynamo", "balancing", "consultation"]),
  motorType: z.string().optional(),
  motorBrand: z.string().optional(),
  motorPower: z.string().optional(),
  motorVoltage: z.string().optional(),
  quantity: z.coerce.number().min(1).max(1000).default(1),
  urgency: z.enum(["normal", "urgent", "emergency"]).default("normal"),
  details: z.string().min(20, "Detail minimal 20 karakter").max(3000),
  preferredContact: z.enum(["phone", "email", "whatsapp"]).default("whatsapp"),
})

// Type exports
export type ContactFormData = z.infer<typeof contactFormSchema>
export type QuoteRequestData = z.infer<typeof quoteRequestSchema>

// Validation helper functions
export function formatPhoneNumber(phone: string): string {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, "")

  // Convert to +62 format
  if (cleaned.startsWith("0")) {
    return "+62" + cleaned.slice(1)
  } else if (cleaned.startsWith("62")) {
    return "+" + cleaned
  } else if (cleaned.startsWith("+62")) {
    return cleaned
  }

  return "+62" + cleaned
}

export function generateWhatsAppUrl(phone: string, message: string): string {
  const formattedPhone = formatPhoneNumber(phone).replace("+", "")
  return `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`
}

export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, "") // Remove < and >
    .replace(/javascript:/gi, "") // Remove javascript: protocol
    .replace(/on\w+=/gi, "") // Remove event handlers
}
