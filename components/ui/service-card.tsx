import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  href: string
  image?: string
  icon?: React.ReactNode
  className?: string
}

export function ServiceCard({ title, description, href, image, icon, className }: ServiceCardProps) {
  return (
    <Link href={href}>
      <Card
        className={cn(
          "group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full",
          className,
        )}
      >
        {image && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
        )}
        <CardContent className="p-6">
          {icon && (
            <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
              {icon}
            </div>
          )}
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
          <span className="inline-flex items-center text-sm font-medium text-primary">
            Pelajari Lebih Lanjut
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}
