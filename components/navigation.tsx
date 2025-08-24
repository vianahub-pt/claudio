"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/quem-somos/", label: "Quem Somos" },
  { href: "/servicos/", label: "Serviços" },
  { href: "/projetos/", label: "Projetos" },
  { href: "/contacto/", label: "Contacto" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="bg-black/80 backdrop-blur-sm border-b border-gray-800 fixed w-full top-0 z-50 md:bg-black/80 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-navbar.png"
              alt="Claudio Eletricista e Picheleiro"
              width={220}
              height={50}
              className="h-8 w-auto sm:h-10 md:h-12"
            />
          </Link>

          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-bold transition-colors hover:text-sky-400 ${
                  pathname === item.href ? "text-sky-400" : "text-gray-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-sky-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={closeMenu} />}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-900 transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h2 className="text-white font-semibold">Menu</h2>
          <button
            onClick={closeMenu}
            className="text-gray-300 hover:text-sky-400 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col p-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`text-xl font-bold transition-colors hover:text-sky-400 py-2 px-4 rounded-lg ${
                pathname === item.href ? "text-sky-400 bg-sky-400/10" : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
