import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ParallaxSection from "@/components/parallax-section"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import TestimonialsSection from "@/components/testimonials-section"
import CtaSection from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Home - Claudio Eletricista e Picheleiro",
  description: "Serviços profissionais de eletricidade e pichelaria em Portugal",
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900 pt-16">
      <HeroSection />
      <AboutSection />
      <ParallaxSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  )
}
