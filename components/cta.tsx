"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-40 h-40 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl font-black text-pretty leading-tight">Transforma tu espacio hoy</h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 text-pretty max-w-2xl mx-auto">
            Contacta con nuestros expertos para una consulta gratuita y descubre cómo podemos hacer realidad tu
            proyecto.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button
            size="lg"
            className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-bold gap-2 h-12"
            onClick={() => window.open('https://wa.me/51960121229?text=Hola,%20me%20gustaría%20contactar%20con%20ustedes', '_blank')}
          >
            Contactar Ahora <Phone className="w-4 h-4" />
          </Button>
          <Button
            size="lg"
            className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent font-bold h-12"
            onClick={() => window.open('https://wa.me/51960121229?text=Hola,%20me%20gustaría%20solicitar%20un%20presupuesto', '_blank')}
          >
            Solicitar Presupuesto <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="pt-8 border-t border-primary-foreground/30 flex flex-col sm:flex-row gap-6 justify-center text-sm">
          <div className="flex items-center gap-2">
            <span className="text-xl">✓</span>
            <span>Respuesta en 24 horas</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">✓</span>
            <span>Sin compromiso</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">✓</span>
            <span>Presupuesto detallado</span>
          </div>
        </div>
      </div>
    </section>
  )
}
