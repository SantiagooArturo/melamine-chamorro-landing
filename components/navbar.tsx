"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <Image src="/logo.png" alt="Melamina Chamorro Logo" width={80} height={80} className="h-20 w-auto" />
            <span className="hidden sm:inline font-black text-3xl text-foreground group-hover:text-accent transition-colors">
              Melamina Chamorro
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#servicios" className="text-foreground hover:text-accent transition-colors font-medium">
              Servicios
            </Link>
            <Link href="#portafolio" className="text-foreground hover:text-accent transition-colors font-medium">
              Portafolio
            </Link>
            <Link href="#contacto" className="text-foreground hover:text-accent transition-colors font-medium">
              Contacto
            </Link>
            <Button 
              className="bg-foreground hover:bg-foreground/90 text-background font-bold border border-black"
              onClick={() => window.open('https://wa.me/51960121229?text=Hola,%20me%20gustaría%20solicitar%20un%20presupuesto', '_blank')}
            >
              Cotizar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-secondary/30">
            <Link
              href="#servicios"
              className="block px-3 py-2 text-foreground hover:bg-accent/10 hover:text-accent rounded font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="#portafolio"
              className="block px-3 py-2 text-foreground hover:bg-accent/10 hover:text-accent rounded font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Portafolio
            </Link>
            <Link
              href="#contacto"
              className="block px-3 py-2 text-foreground hover:bg-accent/10 hover:text-accent rounded font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
            <Button 
              className="w-full bg-foreground hover:bg-foreground/90 text-background font-bold border border-black"
              onClick={() => window.open('https://wa.me/51960121229?text=Hola,%20me%20gustaría%20solicitar%20un%20presupuesto', '_blank')}
            >
              Cotizar
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
