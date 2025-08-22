import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import SkipLinks from "@/components/skipLinks"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Claudio Eletricista e Picheleiro",
    template: "%s | Claudio Eletricista e Picheleiro",
  },
  description:
    "Serviços profissionais de eletricista, canalização e remodelação. Instalações elétricas, canalizações, reparações e muito mais.",
  keywords: ["eletricista", "picheleiro", "canalização", "Oliveira de Azeméis", "instalações elétricas", "reparações"],
  authors: [{ name: "Claudio Eletricista e Picheleiro" }],
  creator: "Claudio Eletricista e Picheleiro",
  publisher: "Claudio Eletricista e Picheleiro",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://claudioeletricista.pt",
    title: "Claudio Eletricista e Picheleiro",
    description: "Serviços profissionais de eletricista, canalização e remodelação.",
    siteName: "Claudio Eletricista e Picheleiro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claudio Eletricista e Picheleiro",
    description: "Serviços profissionais de eletricista, canalização e remodelação.",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-PT">
      <body className={inter.className}>
        <SkipLinks />
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <img src="/logo.png" alt="Claudio Eletricista e Picheleiro" className="h-12 w-auto" />
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Início
                </a>
                <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Quem Somos
                </a>
                <a href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Serviços
                </a>
                <a href="/projects" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Projetos
                </a>
                <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Contacto
                </a>
              </nav>
            </div>
          </div>
        </header>
        <div id="main-content">{children}</div>
      </body>
    </html>
  )
}
