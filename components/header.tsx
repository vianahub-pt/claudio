"use client"

import Link from "next/link"
import Image from "next/image"

const Header = () => {
  const getLinkClasses = () => {
    return "transition-colors font-medium px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 hover:text-blue-600 hover:bg-gray-50"
  }

  const getMobileLinkClasses = () => {
    return "block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors font-medium border-b border-gray-100 last:border-b-0"
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

        <div className="md:hidden">
          <input type="checkbox" id="mobile-menu-toggle" className="hidden peer" />
          <label
            htmlFor="mobile-menu-toggle"
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            aria-label="Abrir menu"
          >
            <span className="block w-6 h-0.5 bg-gray-700 transition-transform duration-300 peer-checked:rotate-45 peer-checked:translate-y-2"></span>
            <span className="block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 peer-checked:opacity-0"></span>
            <span className="block w-6 h-0.5 bg-gray-700 transition-transform duration-300 peer-checked:-rotate-45 peer-checked:-translate-y-2"></span>
          </label>

          {/* Mobile menu overlay and content */}
          <div className="fixed inset-0 z-40 transition-opacity duration-300 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible">
            {/* Overlay */}
            <label
              htmlFor="mobile-menu-toggle"
              className="absolute inset-0 bg-black bg-opacity-50 cursor-pointer"
            ></label>

            {/* Menu lateral */}
            <nav
              className="absolute top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 translate-x-full peer-checked:translate-x-0"
              role="navigation"
              aria-label="Navegação mobile"
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <span className="font-semibold text-gray-800">Menu</span>
                <label
                  htmlFor="mobile-menu-toggle"
                  className="p-2 rounded-md hover:bg-gray-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Fechar menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </label>
              </div>

              <div className="py-4">
                <Link href="/" className={getMobileLinkClasses()}>
                  Início
                </Link>
                <Link href="/about" className={getMobileLinkClasses()}>
                  Quem Somos
                </Link>
                <Link href="/services" className={getMobileLinkClasses()}>
                  Serviços
                </Link>
                <Link href="/projects" className={getMobileLinkClasses()}>
                  Projetos
                </Link>
                <Link href="/contact" className={getMobileLinkClasses()}>
                  Contacto
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <style jsx>{`
        #mobile-menu-toggle:checked ~ div .peer-checked\\:rotate-45 {
          transform: rotate(45deg) translateY(8px);
        }
        #mobile-menu-toggle:checked ~ div .peer-checked\\:opacity-0 {
          opacity: 0;
        }
        #mobile-menu-toggle:checked ~ div .peer-checked\\:-rotate-45 {
          transform: rotate(-45deg) translateY(-8px);
        }
        #mobile-menu-toggle:checked ~ div .peer-checked\\:opacity-100 {
          opacity: 1;
        }
        #mobile-menu-toggle:checked ~ div .peer-checked\\:visible {
          visibility: visible;
        }
        #mobile-menu-toggle:checked ~ div .peer-checked\\:translate-x-0 {
          transform: translateX(0);
        }
      `}</style>
    </header>
  )
}

export default Header
