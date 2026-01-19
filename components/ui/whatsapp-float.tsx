"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "6281234567890"
const DEFAULT_MESSAGE = "Halo PT Ichtiar Electrindo, saya ingin bertanya tentang layanan Anda."

export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = (message: string = DEFAULT_MESSAGE) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
    setIsOpen(false)
  }

  const quickMessages = [
    { label: "Konsultasi Gratis", message: "Halo, saya ingin konsultasi gratis tentang perbaikan motor." },
    { label: "Minta Penawaran", message: "Halo, saya ingin meminta penawaran harga untuk jasa perbaikan." },
    { label: "Layanan Darurat", message: "Halo, saya butuh layanan perbaikan darurat 24 jam." },
    { label: "Tanya Produk", message: "Halo, saya ingin bertanya tentang produk consumables." },
  ]

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Quick Message Popup */}
      <div
        className={`bg-background border border-border rounded-xl shadow-xl p-4 w-72 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-sm">PT Ichtiar Electrindo</p>
              <p className="text-xs text-muted-foreground">Biasanya balas dalam 5 menit</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-2">
          {quickMessages.map((item, index) => (
            <button
              key={index}
              onClick={() => handleWhatsAppClick(item.message)}
              className="w-full text-left px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted text-sm transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-3 pt-3 border-t border-border">
          <Button onClick={() => handleWhatsAppClick()} className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white">
            <MessageCircle className="w-4 h-4 mr-2" />
            Mulai Chat
          </Button>
        </div>
      </div>

      {/* Float Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen ? "rotate-90" : ""
        }`}
        aria-label="Chat WhatsApp"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Pulse Animation */}
      {!isOpen && (
        <span className="absolute bottom-0 right-0 w-14 h-14 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
      )}
    </div>
  )
}

export default WhatsAppFloat
