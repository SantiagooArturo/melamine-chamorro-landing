"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"

const projects = {
  cocinas: [
    {
      title: "Cocina Moderna Minimalista",
      description: "Diseño contemporáneo limpio y funcional",
      image: "/minimalist-modern-kitchen-melamine-white-design.jpg",
    },
    {
      title: "Cocina Clásica Elegante",
      description: "Tonos cálidos con acabado premium",
      image: "/elegant-classic-kitchen-warm-tones-wood-effect.jpg",
    },
    {
      title: "Cocina Integrada Abierta",
      description: "Espacio conectado con sala de estar",
      image: "/open-integrated-kitchen-living-room-melamine.jpg",
    },
  ],
  habitaciones: [
    {
      title: "Dormitorio Principal",
      description: "Suite completa con closet integrado",
      image: "/master-bedroom-integrated-closet-melamine-furnitur.jpg",
    },
    {
      title: "Habitación Juvenil",
      description: "Diseño moderno funcional y espacioso",
      image: "/modern-youth-bedroom-loft-design-furniture.jpg",
    },
    {
      title: "Suite Completa Lujo",
      description: "Dormitorio con baño y vestidor privado",
      image: "/luxury-suite-bedroom-bathroom-dressing-room.jpg",
    },
  ],
  departamentos: [
    {
      title: "Departamento Studio Optimizado",
      description: "Maximización de espacios pequeños",
      image: "/studio-apartment-space-saving-melamine-design.jpg",
    },
    {
      title: "Departamento 2 Ambientes",
      description: "Renovación integral moderna",
      image: "/two-bedroom-apartment-modern-renovation-peru.jpg",
    },
    {
      title: "Penthouse de Lujo",
      description: "Diseño premium con vistas privilegiadas",
      image: "/modern-luxury-penthouse-interior-design.jpg",
    },
  ],
  corporativos: [
    {
      title: "Oficina Profesional Moderna",
      description: "Mobiliario corporativo funcional y elegante",
      image: "/modern-office-furniture-professional-corporate-design.jpg",
    },
    {
      title: "Sala de Juntas Ejecutiva",
      description: "Mobiliario premium para espacios ejecutivos",
      image: "/executive-meeting-room-professional-furniture.jpg",
    },
    {
      title: "Clínica y Consultorios",
      description: "Mobiliario especializado para espacios de salud",
      image: "/medical-clinic-furniture-organized-professional.jpg",
    },
  ],
}

export default function Portfolio() {
  return (
    <section id="portafolio" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-black text-foreground">Nuestro Portafolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proyectos realizados con profesionalismo que muestran nuestra calidad y dedicación.
          </p>
        </div>

        <Tabs defaultValue="cocinas" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 bg-secondary/50 p-1 h-12">
            <TabsTrigger
              value="cocinas"
              className="font-bold data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
            >
              Cocinas
            </TabsTrigger>
            <TabsTrigger
              value="habitaciones"
              className="font-bold data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
            >
              Habitaciones
            </TabsTrigger>
            <TabsTrigger
              value="departamentos"
              className="font-bold data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
            >
              Departamentos
            </TabsTrigger>
            <TabsTrigger
              value="corporativos"
              className="font-bold data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
            >
              Corporativos
            </TabsTrigger>
          </TabsList>

          {Object.entries(projects).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-8">
              <div className="grid md:grid-cols-3 gap-6">
                {items.map((project, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden group cursor-pointer border border-border hover:border-accent/50 transition-all hover:shadow-xl"
                  >
                    <div className="relative h-56 overflow-hidden bg-muted">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-5 bg-card">
                      <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
