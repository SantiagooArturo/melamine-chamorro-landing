"use client"
import { CheckCircle } from "lucide-react"

const features = [
  "Materiales de primera calidad",
  "Diseño sin costo adicional",
  "Instalación profesional incluida",
  "Garantía de satisfacción",
  "Asesoría técnica especializada",
  "Cumplimiento de plazos",
  "Acabados de precisión",
  "Amplia gama de colores",
]

export default function Features() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Features */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-black text-foreground leading-tight">
                Por qué <span className="text-accent">nos eligen</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                15+ años de experiencia, más de 500 proyectos realizados con excelencia y dedicación.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-bl from-accent/20 to-transparent rounded-3xl" />
            <img
              src="/luxury-bedroom-wardrobe-melamine-furniture-modern-.jpg"
              alt="Dormitorio moderno con muebles de melamina"
              className="w-full h-full object-cover rounded-3xl shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
