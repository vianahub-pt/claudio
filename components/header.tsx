"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [announceMenuState, setAnnounceMenuState] = useState("")
  const pathname = usePathname()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null)

  const toggleMenu = () => {
    const newState = !isMenuOpen
    setIsMenuOpen(newState)
    setAnnounceMenuState(newState ? "Menu aberto" : "Menu fechado")

    // Foco no primeiro item quando abre o menu
    if (newState && firstMenuItemRef.current) {
      setTimeout(() => {
        firstMenuItemRef.current?.focus()
      }, 100)
    }
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    setAnnounceMenuState("Menu fechado")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  // Fechar menu com Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false)
        setAnnounceMenuState("Menu fechado")
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isMenuOpen])

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

  const getMobileLinkClasses = (path: string) => {
    const baseClasses =
      "transition-colors py-3 px-4 border-b border-gray-100 font-medium block focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
    const activeClasses = "text-blue-600 bg-blue-50"
    const inactiveClasses = "text-gray-700 hover:text-blue-600 hover:bg-gray-50"

    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`
  }

  return (
    <>
      {/* Anúncio para leitores de tela */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {announceMenuState}
      </div>

      <header className="bg-white shadow-md sticky top-0 z-50" role="banner">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            onClick={handleLinkClick}
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

          {/* Menu para desktop */}
          <nav
            className="hidden md:flex items-center space-x-2"
            role="navigation"
            aria-label="Navegação principal"
            id="main-navigation"
          >
            <Link href="/" className={getLinkClasses("/")} onClick={handleLinkClick}>
              Início
            </Link>
            <Link href="/about" className={getLinkClasses("/about")} onClick={handleLinkClick}>
              Quem Somos
            </Link>
            <Link href="/services" className={getLinkClasses("/services")} onClick={handleLinkClick}>
              Serviços
            </Link>
            <Link href="/projects" className={getLinkClasses("/projects")} onClick={handleLinkClick}>
              Projetos
            </Link>
            <Link href="/contact" className={getLinkClasses("/contact")} onClick={handleLinkClick}>
              Contacto
            </Link>
          </nav>

          {/* Botão do menu mobile */}
          <button
            ref={menuButtonRef}
            className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          >
            {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div
            className="md:hidden bg-white absolute top-full left-0 w-full shadow-md border-t"
            id="mobile-menu"
            role="navigation"
            aria-label="Menu de navegação móvel"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col">
              <Link ref={firstMenuItemRef} href="/" className={getMobileLinkClasses("/")} onClick={handleLinkClick}>
                Início
              </Link>
              <Link href="/about" className={getMobileLinkClasses("/about")} onClick={handleLinkClick}>
                Quem Somos
              </Link>
              <Link href="/services" className={getMobileLinkClasses("/services")} onClick={handleLinkClick}>
                Serviços
              </Link>
              <Link href="/projects" className={getMobileLinkClasses("/projects")} onClick={handleLinkClick}>
                Projetos
              </Link>
              <Link href="/contact" className={getMobileLinkClasses("/contact")} onClick={handleLinkClick}>
                Contacto
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}

export default header
