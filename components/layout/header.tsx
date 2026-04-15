"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/about" },
  {
    name: "Layanan",
    href: "/services",
    children: [
      { name: "Dynamo Motor Service", href: "/services/dynamo-motor" },
      { name: "Shaft Balancing", href: "/services/shaft-balancing" },
    ],
  },
  { name: "Fasilitas", href: "/facilities" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Kontak", href: "/contact" },
]

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const isHomePage = pathname === "/"
  const shouldUseDarkText = !isHomePage || isScrolled

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        shouldUseDarkText ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/pt-ichtiar-logo.PNG" alt="PT Ichtiar Electrindo" className="h-11 lg:h-12 w-auto" />
            <div className="hidden sm:block">
              <p
                className={cn(
                  "font-bold text-base lg:text-lg leading-tight",
                  shouldUseDarkText ? "text-foreground" : "text-white",
                )}
              >
                PT Ichtiar
              </p>
              <p
                className={cn(
                  "font-bold text-base lg:text-lg leading-tight",
                  shouldUseDarkText ? "text-foreground" : "text-white",
                )}
              >
                Electrindo
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 xl:px-5 py-2.5 text-[15px] xl:text-base font-semibold tracking-[0.01em] transition-colors rounded-md flex items-center gap-1.5",
                    shouldUseDarkText
                      ? "text-foreground hover:text-primary hover:bg-secondary"
                      : "text-white hover:text-primary drop-shadow-md",
                  )}
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4 mt-px" />}
                </Link>
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-card rounded-lg shadow-lg border border-border py-2 animate-fade-in">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+622188676776"
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                shouldUseDarkText
                  ? "text-foreground hover:text-primary"
                  : "text-white drop-shadow-md hover:text-primary",
              )}
            >
            </a>
            <Button asChild size="lg" className="text-[15px] font-semibold px-7">
              <Link href="/contact">Minta Penawaran</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 transition-colors",
              shouldUseDarkText ? "text-foreground" : "text-white",
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-base text-foreground font-semibold hover:bg-secondary rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2.5 text-[15px] text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-border">
              <Button asChild size="lg" className="w-full text-base font-semibold">
                <Link href="/contact">Minta Penawaran</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
