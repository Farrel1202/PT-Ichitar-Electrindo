"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WhatsAppFloat from "@/components/shared/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ArrowRight, Calendar, Building, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = ["Semua", "Motor Repair", "Shaft Balancing", "Maintenance", "Overhaul"]

const projects = [
  {
    id: 1,
    title: "Rewinding Motor 500KW",
    client: "PT Semen Indonesia",
    category: "Motor Repair",
    year: "2023",
    image: "/large-industrial-motor-repair-rewinding-workshop.jpg",
    description: "Perbaikan dan rewinding motor induksi 500KW untuk pabrik semen.",
    scope: ["Rewinding stator coil", "Penggantian bearing", "Insulation test", "Balancing rotor"],
    duration: "14 hari",
    result: "Motor beroperasi normal dengan efisiensi lebih baik dari sebelumnya.",
  },
  {
    id: 2,
    title: "Balancing Turbine Rotor",
    client: "PLTU Suralaya",
    category: "Shaft Balancing",
    year: "2023",
    image: "/turbine-rotor-balancing-precision-industrial-machi.jpg",
    description: "Dynamic balancing rotor turbin dengan presisi tinggi untuk pembangkit listrik.",
    scope: ["Dynamic balancing", "Vibration analysis", "Alignment check", "Documentation"],
    duration: "5 hari",
    result: "Vibrasi berkurang dari 8mm/s menjadi 1.2mm/s sesuai standar ISO.",
  },
  {
    id: 3,
    title: "Overhaul Motor Conveyor",
    client: "PT Freeport Indonesia",
    category: "Overhaul",
    year: "2023",
    image: "/conveyor-motor-maintenance-industrial-mining.jpg",
    description: "Program overhaul lengkap untuk 12 unit motor conveyor pertambangan.",
    scope: ["Complete disassembly", "Parts replacement", "Rewinding", "Testing"],
    duration: "30 hari",
    result: "Semua motor beroperasi optimal dengan garansi 12 bulan.",
  },
  {
    id: 4,
    title: "Repair DC Motor 200HP",
    client: "PT Krakatau Steel",
    category: "Motor Repair",
    year: "2022",
    image: "/dc-motor-repair-industrial-steel-factory.jpg",
    description: "Perbaikan dan upgrade motor DC untuk rolling mill di pabrik baja.",
    scope: ["Armature rewinding", "Commutator reconditioning", "Brush replacement", "Field coil repair"],
    duration: "21 hari",
    result: "Motor kembali beroperasi dengan performa seperti baru.",
  },
  {
    id: 5,
    title: "Fan Balancing Project",
    client: "PT Chandra Asri",
    category: "Shaft Balancing",
    year: "2022",
    image: "/industrial-fan-balancing-petrochemical-plant.jpg",
    description: "Balancing kipas industri untuk plant petrokimia dengan on-site service.",
    scope: ["On-site balancing", "Bearing inspection", "Vibration measurement", "Report"],
    duration: "3 hari",
    result: "Vibrasi turun 85% dan noise berkurang signifikan.",
  },
  {
    id: 6,
    title: "Motor Pump Annual Maintenance",
    client: "PT Pertamina EP",
    category: "Maintenance",
    year: "2022",
    image: "/pump-motor-maintenance-oil-refinery-industrial.jpg",
    description: "Program maintenance tahunan untuk 50+ motor pompa di kilang minyak.",
    scope: ["Inspection", "Cleaning", "Lubrication", "Testing", "Documentation"],
    duration: "45 hari",
    result: "Zero breakdown selama 12 bulan setelah maintenance.",
  },
  {
    id: 7,
    title: "Compressor Motor Overhaul",
    client: "PT Pupuk Kaltim",
    category: "Overhaul",
    year: "2021",
    image: "/compressor-motor-overhaul-fertilizer-plant.jpg",
    description: "Overhaul motor penggerak compressor 1000HP untuk pabrik pupuk.",
    scope: ["Complete overhaul", "Stator rewinding", "Bearing upgrade", "Cooling system repair"],
    duration: "28 hari",
    result: "Efisiensi motor meningkat 5% setelah overhaul.",
  },
  {
    id: 8,
    title: "Crusher Motor Emergency Repair",
    client: "PT Aneka Tambang",
    category: "Motor Repair",
    year: "2021",
    image: "/crusher-motor-emergency-repair-mining-industry.jpg",
    description: "Perbaikan darurat motor crusher yang mengalami kerusakan parah.",
    scope: ["Emergency response", "Damage assessment", "Fast rewinding", "Expedited testing"],
    duration: "7 hari",
    result: "Produksi kembali normal dalam waktu singkat.",
  },
  {
    id: 9,
    title: "Blower Balancing",
    client: "PT Holcim Indonesia",
    category: "Shaft Balancing",
    year: "2021",
    image: "/industrial-blower-balancing-cement-factory.jpg",
    description: "Balancing impeller blower kiln untuk pabrik semen.",
    scope: ["Impeller removal", "Workshop balancing", "Reinstallation", "Vibration test"],
    duration: "4 hari",
    result: "Operasi blower menjadi lebih smooth dan efisien.",
  },
]

const clients = [
  "PT Semen Indonesia",
  "PT Krakatau Steel",
  "PT Freeport Indonesia",
  "PT Pertamina",
  "PT Chandra Asri",
  "PLTU Suralaya",
  "PT Pupuk Kaltim",
  "PT Aneka Tambang",
  "PT Holcim Indonesia",
  "PT Indocement",
  "PT Astra Honda Motor",
  "PT Toyota Motor Manufacturing",
]

type Project = (typeof projects)[0]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Semua")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = activeCategory === "Semua" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <Badge variant="outline" className="mb-4">
                Portfolio
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Proyek yang Telah Kami Kerjakan
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Lihat berbagai proyek yang telah kami selesaikan untuk klien dari berbagai industri. Setiap proyek
                dikerjakan dengan standar kualitas tinggi dan komitmen pada kepuasan pelanggan.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2">
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
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="bg-card border-border overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors flex items-center justify-center">
                      <span className="text-background font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Lihat Detail
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{project.category}</Badge>
                      <span className="text-xs text-muted-foreground">{project.year}</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.client}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Klien Kami</h2>
              <p className="text-muted-foreground">
                Dipercaya oleh perusahaan-perusahaan terkemuka di berbagai industri.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-card rounded-lg border border-border text-foreground text-sm font-medium"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Ingin Proyek Anda Menjadi Bagian dari Portfolio Kami?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Hubungi kami untuk mendiskusikan kebutuhan proyek Anda.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Mulai Proyek
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedProject.title}</DialogTitle>
                  <DialogDescription>{selectedProject.client}</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />

                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-muted-foreground" />
                      <span>{selectedProject.client}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>{selectedProject.year}</span>
                    </div>
                    <Badge variant="secondary">{selectedProject.category}</Badge>
                  </div>

                  <p className="text-muted-foreground">{selectedProject.description}</p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Scope of Work</h4>
                    <ul className="space-y-1">
                      {selectedProject.scope.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Durasi</p>
                      <p className="font-medium text-foreground">{selectedProject.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Hasil</p>
                      <p className="text-sm text-foreground">{selectedProject.result}</p>
                    </div>
                  </div>

                  <Button asChild className="w-full">
                    <Link href="/contact">Diskusikan Proyek Serupa</Link>
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
