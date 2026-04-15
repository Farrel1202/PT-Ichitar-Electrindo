import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

const footerLinks = {
  layanan: [
    { name: "Dynamo Motor Service", href: "/services/dynamo-motor" },
    { name: "Shaft Balancing", href: "/services/shaft-balancing" },
  ],
  perusahaan: [
    { name: "Tentang Kami", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Karir", href: "/careers" },
    { name: "Blog", href: "/blog" },
  ],
  support: [
    { name: "Kontak", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Syarat & Ketentuan", href: "/terms" },
    { name: "Kebijakan Privasi", href: "/privacy" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/ichtiarelectrindo" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/ichtiarelectrindo" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/ichtiarelectrindo" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/@ichtiarelectrindo" },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div>
              <img src="/pt-ichtiar-logo.PNG" alt="PT Ichtiar Electrindo" className="h-10 w-auto" />
              </div>
              <div>
                <p className="font-bold text-white text-sm leading-tight">PT Ichtiar</p>
                <p className="font-bold text-primary text-sm leading-tight">Electrindo</p>
              </div>
            </Link>
            <p className="text-gray-300 text-sm mb-6 max-w-sm">
            Spesialis perbaikan Electrical Motor Rewinding & Repair Services.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+622188676776"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                (021) 8867-6776
              </a>
              <a
                href="mailto:info@ichtiarelectrindo.com"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                info@ichtiarelectrindo.com
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Komplek Taman Wisma Asri Blok H-21/3, Teluk Pucung, Bekasi Utara 17121</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Clock className="w-4 h-4 text-primary" />
                Senin - Jumat: 08:00 - 17:00
              </div>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-semibold text-white mb-4">Layanan</h4>
            <ul className="space-y-2">
              {footerLinks.layanan.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="font-semibold text-white mb-4">Perusahaan</h4>
            <ul className="space-y-2">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} PT Ichtiar Electrindo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
