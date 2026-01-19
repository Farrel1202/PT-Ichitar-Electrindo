import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  content: string
  rating: number
  image?: string
}

export function TestimonialCard({ name, role, company, content, rating, image }: TestimonialCardProps) {
  return (
    <Card className="h-full border-border/50">
      <CardContent className="p-6 flex flex-col h-full">
        <Quote className="w-8 h-8 text-primary/20 mb-4" />
        <p className="text-muted-foreground flex-1 mb-6 italic">&ldquo;{content}&rdquo;</p>
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-muted"}`} />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
            {name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-muted-foreground">
              {role}, {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
