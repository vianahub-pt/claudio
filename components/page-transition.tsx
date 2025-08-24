"use client"

import type React from "react"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    document.body.classList.add("page-transition")

    const timer = setTimeout(() => {
      document.body.classList.remove("page-transition")
    }, 300)

    return () => clearTimeout(timer)
  }, [pathname])

  return <>{children}</>
}
