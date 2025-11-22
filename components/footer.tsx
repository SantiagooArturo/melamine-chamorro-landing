"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react"

// TikTok Icon Component
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer id="contacto" className="bg-foreground text-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Melamina Chamorro Logo"
                width={40}
                height={40}
                className="h-10 w-auto invert"
              />
              <span className="font-black text-lg">Melamina Chamorro</span>
            </Link>
            <p className="text-background/75 text-sm leading-relaxed">
              Especialistas en muebles de melamina personalizados para hogares y espacios corporativos. Transformando espacios desde hace 15+ años.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-base">Enlaces</h3>
            <nav className="space-y-2">
              <Link
                href="#servicios"
                className="text-background/70 hover:text-background transition-colors text-sm font-medium"
              >
                Servicios
              </Link>
              <Link
                href="#portafolio"
                className="text-background/70 hover:text-background transition-colors text-sm font-medium"
              >
                Portafolio
              </Link>
              <Link href="#" className="text-background/70 hover:text-background transition-colors text-sm font-medium">
                Sobre Nosotros
              </Link>
              <Link href="#" className="text-background/70 hover:text-background transition-colors text-sm font-medium">
                Blog
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-base">Contacto</h3>
            <div className="space-y-3 text-sm">
              <a 
                href="https://wa.me/51960121229" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+51 960 121 229</span>
              </a>
              <div className="flex items-center gap-3 text-background/70 hover:text-background transition-colors cursor-pointer">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@melaminachamorro.com</span>
              </div>
              <div className="flex items-start gap-3 text-background/70 hover:text-background transition-colors cursor-pointer">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Lima, Perú</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-base">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/p/Melamina-Chamorro-61552260650837/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors hover:scale-110 transform"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/melamina_chamorro/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors hover:scale-110 transform"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@melamina_chamorro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors hover:scale-110 transform"
              >
                <TikTokIcon className="w-5 h-5" />
                <span className="sr-only">TikTok</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-background/20 pt-8">
          <div className="grid md:grid-cols-2 gap-4 text-xs text-background/60">
            <p>&copy; 2025 Melamina Chamorro. Todos los derechos reservados.</p>
            <div className="flex gap-6 md:justify-end">
              <Link href="#" className="hover:text-background transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="hover:text-background transition-colors">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
