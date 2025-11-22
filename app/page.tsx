import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Features from "@/components/features"
import Portfolio from "@/components/portfolio"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Portfolio />
      <CTA />
      <Footer />
    </main>
  )
}
