"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

const Breadcrumb = () => {
  const pathname = usePathname()

  const routeNames: Record<string, string> = {
    "/": "Início",
    "/about": "Quem Somos",
    "/services": "Serviços",
    "/projects": "Projetos",
    "/contact": "Contacto",
  }

  // Don't show breadcrumb on home page
  if (pathname === "/") {
    return null
  }

  const pathSegments = pathname.split("/").filter((segment) => segment !== "")
  const breadcrumbItems = [
    { name: "Início", href: "/" },
    ...pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/")
      const name = routeNames[href] || segment.charAt(0).toUpperCase() + segment.slice(1)
      return { name, href }
    }),
  ]

  return (
    <nav className="bg-gray-50 border-b border-gray-200" role="navigation" aria-label="Navegação estrutural">
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center space-x-2 text-sm" role="list">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1
            const isHome = index === 0

            return (
              <li key={item.href} className="flex items-center" role="listitem">
                {isHome && (
                  <svg width="16" height="16" fill="currentColor" className="mr-1 text-gray-500" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                )}

                {isLast ? (
                  <span className="text-gray-700 font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-blue-600 hover:text-blue-800 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-1"
                  >
                    {item.name}
                  </Link>
                )}

                {!isLast && (
                  <svg width="16" height="16" fill="currentColor" className="mx-2 text-gray-400" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumb
