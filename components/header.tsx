"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const header = () => {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const getLinkClasses = (path: string) => {
    const baseClasses =
      "transition-colors font-medium px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    const activeClasses = "text-blue-600 bg-blue-50 border-b-2 border-blue-600"
    const inactiveClasses = "text-gray-700 hover:text-blue-600 hover:bg-gray-50"

    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50" role="banner">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
          aria-label="Claudio Eletricista e Picheleiro - Página inicial"
        >
          <Image
            src="/logo.png"
            alt="Logotipo da Claudio Eletricista e Picheleiro"
            width={200}
            height={80}
            className="h-16 w-auto"
          />
        </Link>

        {/* Menu para desktop e mobile simplificado */}
        <nav
          className="flex items-center space-x-2"
          role="navigation"
          aria-label="Navegação principal"
          id="main-navigation"
        >
          <Link href="/" className={getLinkClasses("/")}>
            Início
          </Link>
          <Link href="/about" className={getLinkClasses("/about")}>
            Quem Somos
          </Link>
          <Link href="/services" className={getLinkClasses("/services")}>
            Serviços
          </Link>
          <Link href="/projects" className={getLinkClasses("/projects")}>
            Projetos
          </Link>
          <Link href="/contact" className={getLinkClasses("/contact")}>
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default header
