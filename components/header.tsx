"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const getLinkClasses = () => {
    return "transition-colors font-medium px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 hover:text-blue-600 hover:bg-gray-50"
  }

  const getMobileLinkClasses = () => {
    return "block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors font-medium border-b border-gray-100 last:border-b-0"
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
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
            className="h-12 w-auto md:h-16"
          />
        </Link>

        <nav
          className="hidden md:flex items-center space-x-2 lg:space-x-4"
          role="navigation"
          aria-label="Navegação principal"
          id="main-navigation"
        >
          <Link href="/" className={getLinkClasses()}>
            Início
          </Link>
          <Link href="/about" className={getLinkClasses()}>
            Quem Somos
          </Link>
          <Link href="/services" className={getLinkClasses()}>
            Serviços
          </Link>
          <Link href="/projects" className={getLinkClasses()}>
            Projetos
          </Link>
          <Link href="/contact" className={getLinkClasses()}>
            Contacto
          </Link>
        </nav>

        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={closeMenu}></div>

        {/* Menu lateral */}
        <nav
          className={`absolute top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          role="navigation"
          aria-label="Navegação mobile"
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <span className="font-semibold text-gray-800">Menu</span>
            <button
              onClick={closeMenu}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Fechar menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="py-4">
            <Link href="/" className={getMobileLinkClasses()} onClick={closeMenu}>
              Início
            </Link>
            <Link href="/about" className={getMobileLinkClasses()} onClick={closeMenu}>
              Quem Somos
            </Link>
            <Link href="/services" className={getMobileLinkClasses()} onClick={closeMenu}>
              Serviços
            </Link>
            <Link href="/projects" className={getMobileLinkClasses()} onClick={closeMenu}>
              Projetos
            </Link>
            <Link href="/contact" className={getMobileLinkClasses()} onClick={closeMenu}>
              Contacto
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
