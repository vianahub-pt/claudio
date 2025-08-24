"use client"

import { useEffect, useState } from "react"

interface CounterProps {
  end: number
  suffix?: string
  className?: string
  duration?: number
}

export function Counter({ end, suffix = "", className = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration])

  return (
    <span className={className}>
      {count}
      {suffix}
    </span>
  )
}
