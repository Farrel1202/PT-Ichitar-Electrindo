"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const whatsappNumber = "6281775676019"
  const defaultMessage = "Halo PT Ichtiar Electrindo, saya ingin bertanya tentang layanan Anda."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Popup */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 bg-card rounded-lg shadow-lg border border-border overflow-hidden animate-fade-up mb-2">
          {/* Header */}
          <div className="bg-[#25D366] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">IE</span>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">PT Ichtiar Electrindo</p>
                  <p className="text-white/80 text-xs">Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white" aria-label="Close">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="bg-secondary rounded-lg p-3 mb-4">
              <p className="text-sm text-foreground">
                Halo! Ada yang bisa kami bantu? Silakan chat dengan tim kami untuk konsultasi gratis.
              </p>
              <p className="text-xs text-muted-foreground mt-2">Biasanya merespon dalam 5 menit</p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 ease-out"
            >
              <MessageCircle className="w-5 h-5" />
              Mulai Chat
            </a>
          </div>
        </div>
      )}

      {/* Float Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ease-out active:translate-y-px",
          isOpen ? "bg-foreground text-background" : "bg-[#25D366] text-white hover:bg-[#20BD5A]",
        )}
        aria-label="Chat via WhatsApp"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Pulse Animation */}
      {!isOpen && (
        <span className="absolute -top-1 -right-1 w-4 h-4">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#25D366]" />
        </span>
      )}
    </div>
  )
}
