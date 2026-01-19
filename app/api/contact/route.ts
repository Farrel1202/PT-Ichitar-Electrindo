import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter").max(100, "Nama terlalu panjang"),
  company: z.string().optional(),
  email: z.string().email("Format email tidak valid"),
  phone: z
    .string()
    .min(10, "Nomor telepon minimal 10 digit")
    .regex(/^[0-9+\-\s()]+$/, "Format nomor telepon tidak valid"),
  service: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, "Pesan minimal 10 karakter").max(2000, "Pesan terlalu panjang"),
})

// Simple in-memory rate limiting (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>()

function checkRateLimit(identifier: string, maxRequests = 5, windowMs = 60000): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(identifier)

  if (!record || now - record.timestamp > windowMs) {
    rateLimitMap.set(identifier, { count: 1, timestamp: now })
    return true
  }

  if (record.count >= maxRequests) {
    return false
  }

  record.count++
  return true
}

// Lead scoring function
function calculateLeadScore(data: {
  hasCompany: boolean
  hasService: boolean
  messageLength: number
}): { score: number; quality: "hot" | "warm" | "cold" } {
  let score = 0

  // Company information (+20 points)
  if (data.hasCompany) score += 20

  // Service specified (+15 points)
  if (data.hasService) score += 15

  // Message quality (0-25 points)
  if (data.messageLength > 200) score += 25
  else if (data.messageLength > 100) score += 15
  else if (data.messageLength > 50) score += 10
  else score += 5

  // Base score for submitting form (+40 points)
  score += 40

  // Determine quality
  let quality: "hot" | "warm" | "cold"
  if (score >= 70) quality = "hot"
  else if (score >= 50) quality = "warm"
  else quality = "cold"

  return { score: Math.min(score, 100), quality }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get("x-forwarded-for")
    const ip = forwarded ? forwarded.split(",")[0] : request.headers.get("x-real-ip") || "anonymous"

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Terlalu banyak permintaan. Silakan coba lagi nanti.",
        },
        { status: 429 },
      )
    }

    // Parse request body
    const body = await request.json()

    // Validate data
    const validationResult = contactSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Data tidak valid",
          details: validationResult.error.errors.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        },
        { status: 400 },
      )
    }

    const validatedData = validationResult.data

    // Calculate lead score
    const leadInfo = calculateLeadScore({
      hasCompany: !!validatedData.company,
      hasService: !!validatedData.service,
      messageLength: validatedData.message.length,
    })

    // Generate WhatsApp URL for quick follow-up
    const whatsappMessage = `*PESAN DARI WEBSITE*

*Nama:* ${validatedData.name}
*Perusahaan:* ${validatedData.company || "-"}
*Email:* ${validatedData.email}
*Telepon:* ${validatedData.phone}
*Layanan:* ${validatedData.service || "-"}
*Subjek:* ${validatedData.subject || "-"}

*Pesan:*
${validatedData.message}

---
Lead Score: ${leadInfo.score} (${leadInfo.quality})`

    const whatsappUrl = `https://wa.me/6281775676019?text=${encodeURIComponent(whatsappMessage)}`

    // In production, you would:
    // 1. Save to database
    // 2. Send email notifications
    // 3. Integrate with CRM
    // 4. Send auto-response email

    // Log submission (in production, save to database)
    console.log("Contact form submission:", {
      ...validatedData,
      leadScore: leadInfo.score,
      leadQuality: leadInfo.quality,
      submittedAt: new Date().toISOString(),
      ip,
    })

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Pesan berhasil dikirim! Tim kami akan segera menghubungi Anda.",
      data: {
        contactId: `CNT-${Date.now()}`,
        leadScore: leadInfo.score,
        leadQuality: leadInfo.quality,
        whatsappUrl,
        estimatedResponse:
          leadInfo.quality === "hot" ? "1-2 jam" : leadInfo.quality === "warm" ? "1x24 jam" : "2x24 jam",
      },
    })
  } catch (error) {
    console.error("Contact form error:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Terjadi kesalahan server. Silakan coba lagi.",
      },
      { status: 500 },
    )
  }
}

// GET method to check API health
export async function GET() {
  return NextResponse.json({
    status: "healthy",
    service: "contact-api",
    timestamp: new Date().toISOString(),
  })
}
