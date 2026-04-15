"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const facilities = [
  {
    title: "Crane",
    category: "Material Handling",
    capacity: "5 TON & 3 TON",
    description:
      "Fasilitas crane dengan kapasitas 5 ton dan 3 ton untuk handling peralatan industri berat. Dilengkapi sistem keselamatan standar dan dioperasikan oleh operator bersertifikat untuk memastikan proses naik turun material berjalan aman dan efisien.",
    features: ["Crane 5 TON", "Crane 3 TON", "Sistem keselamatan standar", "Operator bersertifikat"],
    image: "/industrial-crane-facility-lifting-equipment.jpg",
  },
  {
    title: "Mesin Bubut",
    category: "Fabrication Equipment",
    capacity: "2.5M & 1.5M",
    description:
      "Mesin bubut presisi dengan panjang kerja 2.5 meter dan 1.5 meter untuk pabrikasi komponen motor. Digunakan untuk pembuatan bushings, modifikasi shaft, dan komponen mekanik lainnya dengan akurasi tinggi sesuai spesifikasi teknis.",
    features: ["Bubut 2.5 Meter", "Bubut 1.5 Meter", "Presisi CNC", "Pembuatan bushings & modifikasi shaft"],
    image: "/industrial-lathe-machine-cnc-precision-fabrication.jpg",
  },
  {
    title: "Mesin Milling",
    category: "Fabrication Equipment",
    capacity: "Single Stick & Double Stick",
    description:
      "Peralatan milling dengan konfigurasi single stick dan double stick untuk pabrikasi dan modifikasi komponen motor. Mampu menghasilkan permukaan yang halus dengan presisi tinggi untuk berbagai kebutuhan fabrication.",
    features: ["Single Stick", "Double Stick", "Presisi tinggi", "Fabrication dan modifikasi komponen"],
    image: "/industrial-milling-machine-cnc-precision-machining.jpg",
  },
  {
    title: "Mesin Balancing",
    category: "Testing Equipment",
    capacity: "2 TON",
    description:
      "Mesin balancing dengan kapasitas 2 ton untuk memastikan keseimbangan rotor dan armature. Dilengkapi sistem dynamic balancing dan vibration analysis untuk mengurangi getaran pada rotating equipment industri sesuai standar internasional.",
    features: ["Kapasitas 2 TON", "Dynamic balancing", "Vibration analysis", "Standar internasional"],
    image: "/precision-balancing-machine-industrial-equipment.jpg",
  },
  {
    title: "Mesin MAL (Gulungan)",
    category: "Winding Equipment",
    capacity: "Gulungan Tembaga Bulat",
    description:
      "Mesin untuk pencetakan dan pengukuran data winding motor. Memastikan spesifikasi coil tembaga bulat akurat dan konsisten sesuai kebutuhan rewinding, dengan kemampuan mengukur parameter teknis yang diperlukan.",
    features: ["Pencetak data winding", "Pengukuran data motor", "Gulungan tembaga bulat", "Presisi tinggi"],
    image: "/motor-winding-machine-copper-coil-equipment.jpg",
  },
  {
    title: "Oven/Pemanas",
    category: "Heating Equipment",
    capacity: "3M² hingga 3000°C",
    description:
      "Oven pemanas dengan kapasitas 3M² dan kemampuan suhu hingga 3000°C untuk proses curing, drying, dan heating motor. Dilengkapi sistem kontrol temperatur yang presisi untuk memastikan proses pemanasan sesuai spesifikasi teknis.",
    features: ["Kapasitas 3M²", "Suhu hingga 3000°C", "Kontrol temperatur presisi", "Curing, drying & heating"],
    image: "/industrial-oven-heating-furnace-controlled-temperature.jpg",
  },
  {
    title: "Gudang Material",
    category: "Storage Facility",
    capacity: "Inventory Lengkap",
    description:
      "Ruang penyimpanan material dan peralatan kerja yang luas dan terorganisir dengan sistem inventory management yang baik. Memastikan material terlindungi dan mudah diakses untuk mendukung efisiensi operasional workshop.",
    features: ["Penyimpanan terstruktur", "Inventory management system", "Material protection", "Akses mudah"],
    image: "/industrial-warehouse-storage-facility-organized.jpg",
  },
  {
    title: "Alat Tes Megger",
    category: "Testing Equipment",
    capacity: "5000 & 1000 M.Ohm",
    description:
      "Peralatan testing insulation resistance dengan skala pengukuran 5000 M.Ohm dan 1000 M.Ohm. Digunakan untuk mengukur kondisi isolasi motor dengan akurasi tinggi, memastikan keamanan dan performa motor sesuai standar.",
    features: ["Megger 5000 M.Ohm", "Megger 1000 M.Ohm", "Insulation testing", "Akurat & reliable"],
    image: "/megger-tester-insulation-resistance-testing-equipment.jpg",
  },
  {
    title: "Tank Ampere & Vibrasi Digital",
    category: "Testing Equipment",
    capacity: "Precision Measurement",
    description:
      "Alat test tank ampere dan vibrasi digital untuk pengukuran performa motor dan analisis getaran. Menyediakan data measurement real-time dengan presisi tinggi untuk evaluasi kondisi dan performa motor industri.",
    features: ["Tank Ampere test", "Digital vibration analyzer", "Precision measurement", "Real-time data"],
    image: "/vibration-analyzer-digital-testing-equipment.jpg",
  },
  {
    title: "Alat Tes Power 380V",
    category: "Testing Equipment",
    capacity: "Regulator & Inverter",
    description:
      "Fasilitas pengetesan sistem regulator dan inverter dengan power supply 380V untuk validasi performa motor industri. Digunakan untuk pengetesan sistem power, memastikan komponen elektrik berfungsi optimal sesuai spesifikasi.",
    features: ["Sistem regulator test", "Sistem inverter test", "Power supply 380V", "Validasi performa"],
    image: "/power-testing-equipment-380v-regulator-inverter.jpg",
  },
]

const allCategories = Array.from(new Set(facilities.map((f) => f.category)))
const filterCategories = ["Semua", ...allCategories]

export default function FacilitiesSection() {
  const [activeCategory, setActiveCategory] = useState("Semua")

  const filteredFacilities =
    activeCategory === "Semua" ? facilities : facilities.filter((f) => f.category === activeCategory)

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterCategories.map((category) => (
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

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((facility, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg"
            >
              {/* Image */}
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <Badge variant="secondary" className="mb-2">
                  {facility.category}
                </Badge>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {facility.title}
                </h3>
                <p className="text-sm font-medium text-primary mb-2">{facility.capacity}</p>
                <p className="text-sm text-muted-foreground">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
