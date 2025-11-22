"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Ruler, Zap, Home, Sparkles, Building2, Users } from "lucide-react"

const services = [
  {
    icon: Ruler,
    title: "Diseño a Medida",
    description:
      "Creamos diseños únicos que se adapten perfecto a tu espacio. Consultoría profesional para maximizar funcionalidad.",
  },
  {
    icon: Zap,
    title: "Fabricación Premium",
    description:
      "Muebles de melamina de primera calidad con acabados impecables. Precisión en cada detalle, durabilidad garantizada.",
  },
  {
    icon: Home,
    title: "Instalación Experta",
    description:
      "Equipo profesional que instala con precisión. Toda la obra limpia y lista para disfrutar inmediatamente.",
  },
  {
    icon: Sparkles,
    title: "Renovación Integral",
    description:
      "Transformamos cocinas, habitaciones y departamentos completos. Soluciones personalizadas para modernizar.",
  },
  {
    icon: Building2,
    title: "Soluciones Corporativas",
    description:
      "Muebles y diseños para oficinas, instituciones y espacios comerciales. Funcionalidad profesional garantizada.",
  },
  {
    icon: Users,
    title: "Proyectos Grandes",
    description:
      "Renovaciones completas de oficinas, consultorios y espacios empresariales. Equipo especializado en proyectos grandes.",
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-foreground/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-black text-foreground">Nuestros Servicios</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            De la visión al resultado: diseño, fabricación e instalación profesional en cada proyecto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="border border-border bg-card/50 hover:bg-card hover:border-foreground/50 transition-all duration-300 group cursor-pointer"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-foreground/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-foreground/20 transition-colors">
                    <Icon className="w-7 h-7 text-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
