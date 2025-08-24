import type React from "react"
import type { Metadata } from "next"
import { Kurale } from "next/font/google"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import "./globals.css"

const kurale = Kurale({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kurale",
  preload: true,
})

export const metadata: Metadata = {
  title: "Claudio Eletricista e Picheleiro",
  description: "Serviços profissionais de eletricidade e pichelaria em Portugal",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={kurale.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="dark font-kurale">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
