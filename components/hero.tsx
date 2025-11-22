"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 md:pt-32 pb-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-96 right-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-96 -left-48 w-96 h-96 bg-foreground/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/5 rounded-full border border-foreground/20">
              <Sparkles className="w-4 h-4 text-foreground" />
              <span className="text-sm font-semibold text-foreground">Especialistas en melamina</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-black text-foreground leading-tight text-balance">
                Rediseña <span className="text-foreground">tus espacios</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Muebles personalizados de melamina para cocinas, habitaciones y departamentos. Diseño, fabricación e
                instalación de calidad internacional.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background font-semibold gap-2 h-12"
                onClick={() => window.open('https://wa.me/51960121229?text=Hola,%20me%20gustaría%20solicitar%20un%20presupuesto', '_blank')}
              >
                Solicitar Presupuesto <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-foreground text-foreground hover:bg-foreground/5 bg-transparent font-semibold h-12"
                onClick={() => document.getElementById('portafolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Proyectos
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-3xl md:text-4xl font-black text-foreground">500+</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">Proyectos</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-foreground">15+</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">Años</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-foreground">100%</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">Satisfacción</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-foreground/10 to-transparent rounded-3xl" />
            <img
              src="/modern-melamine-kitchen-furniture-design-peru-prof.jpg"
              alt="Diseño moderno de muebles en melamina"
              className="w-full h-auto rounded-3xl shadow-2xl relative z-10 object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
