"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = ["Semua", "Motor Repair", "Shaft Balancing", "Maintenance"]

const projects = [
  {
    title: "Rewinding Motor 500KW - PT Semen Indonesia",
    category: "Motor Repair",
    image: "/large-industrial-motor-repair-rewinding-workshop.jpg",
    description: "Perbaikan dan rewinding motor induksi 500KW untuk pabrik semen.",
  },
  {
    title: "Balancing Turbine Rotor - PLTU Suralaya",
    category: "Shaft Balancing",
    image: "/turbine-rotor-balancing-precision-industrial-machi.jpg",
    description: "Dynamic balancing rotor turbin dengan presisi tinggi.",
  },
  {
    title: "Overhaul Motor Conveyor - PT Freeport",
    category: "Maintenance",
    image: "/conveyor-motor-maintenance-industrial-mining.jpg",
    description: "Program maintenance preventif untuk motor conveyor pertambangan.",
  },
  {
    title: "Repair DC Motor 200HP - PT Krakatau Steel",
    category: "Motor Repair",
    image: "/dc-motor-repair-industrial-steel-factory.jpg",
    description: "Perbaikan dan upgrade motor DC untuk rolling mill.",
  },
  {
    title: "Fan Balancing - PT Chandra Asri",
    category: "Shaft Balancing",
    image: "/industrial-fan-balancing-petrochemical-plant.jpg",
    description: "Balancing kipas industri untuk plant petrokimia.",
  },
  {
    title: "Motor Pump Maintenance - PT Pertamina",
    category: "Maintenance",
    image: "/pump-motor-maintenance-oil-refinery-industrial.jpg",
    description: "Annual maintenance motor pompa untuk kilang minyak.",
  },
]

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Semua")

  const filteredProjects = activeCategory === "Semua" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold mb-2">Portfolio</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Proyek yang Telah Kami Kerjakan
          </h2>
          <p className="text-muted-foreground">
            Lihat berbagai proyek yang telah kami selesaikan untuk klien dari berbagai industri.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-colors",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <Badge variant="secondary" className="mb-2">
                  {project.category}
                </Badge>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>

              {/* Hover Overlay Link */}
              <Link
                href="/portfolio"
                className="absolute inset-0 flex items-center justify-center bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <ArrowUpRight className="w-6 h-6 text-primary-foreground" />
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/portfolio">
              Lihat Semua Portfolio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
