import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"

// Quote request validation schema
const quoteSchema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().min(2).max(200),
  email: z.string().email(),
  phone: z.string().min(10),
  service: z.string().min(1),
  motorType: z.string().optional(),
  motorBrand: z.string().optional(),
  motorPower: z.string().optional(),
  quantity: z.coerce.number().min(1).default(1),
  urgency: z.enum(["normal", "urgent", "emergency"]).default("normal"),
  details: z.string().min(20).max(3000),
  attachments: z.array(z.string()).optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate data
    const validationResult = quoteSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Data tidak valid",
          details: validationResult.error.errors,
        },
        { status: 400 },
      )
    }

    const validatedData = validationResult.data

    // Generate quote ID
    const quoteId = `QT-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, "0")}${Date.now().toString().slice(-6)}`

    // Calculate priority based on urgency and details
    const priority = validatedData.urgency === "emergency" ? 1 : validatedData.urgency === "urgent" ? 2 : 3

    // Generate WhatsApp message for quote
    const whatsappMessage = `*PERMINTAAN PENAWARAN*

*No. Quote:* ${quoteId}
*Prioritas:* ${validatedData.urgency === "emergency" ? "EMERGENCY" : validatedData.urgency === "urgent" ? "URGENT" : "Normal"}

*Data Pemohon:*
Nama: ${validatedData.name}
Perusahaan: ${validatedData.company}
Email: ${validatedData.email}
Telepon: ${validatedData.phone}

*Detail Kebutuhan:*
Layanan: ${validatedData.service}
Tipe Motor: ${validatedData.motorType || "-"}
Merk Motor: ${validatedData.motorBrand || "-"}
Daya Motor: ${validatedData.motorPower || "-"}
Jumlah Unit: ${validatedData.quantity}

*Keterangan:*
${validatedData.details}`

    const whatsappUrl = `https://wa.me/6281775676019?text=${encodeURIComponent(whatsappMessage)}`

    // Log quote request
    console.log("Quote request:", {
      quoteId,
      ...validatedData,
      priority,
      submittedAt: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: "Permintaan penawaran berhasil dikirim!",
      data: {
        quoteId,
        priority,
        estimatedResponse:
          validatedData.urgency === "emergency"
            ? "1-2 jam"
            : validatedData.urgency === "urgent"
              ? "1x24 jam"
              : "2-3 hari kerja",
        whatsappUrl,
      },
    })
  } catch (error) {
    console.error("Quote request error:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Terjadi kesalahan server",
      },
      { status: 500 },
    )
  }
}
