"use client"

import { Counter } from "@/components/counter"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    if (videoRef.current && !videoError) {
      const playVideo = async () => {
        try {
          await videoRef.current?.play()
        } catch (error) {
          console.warn("Vídeo não pôde ser reproduzido automaticamente:", error)
          setVideoError(true)
        }
      }

      // Tentar reproduzir o vídeo após um pequeno delay
      const timer = setTimeout(playVideo, 100)

      return () => clearTimeout(timer)
    }
  }, [videoError])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => setVideoError(true)}
          >
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/claudio-hero-BDTRS4C33fIl5fRLtDIOy4uF7HYPqn.mp4"
              type="video/mp4"
            />
          </video>
        ) : (
          <div className="absolute inset-0 w-full h-full bg-gray-900" />
        )}
      </div>

      <div className="absolute inset-0 bg-black/30 z-0" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 pt-20 sm:pt-24 lg:pt-28">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                <span className="block text-white">Claudio</span>
                <span className="block text-sky-400">Eletricista</span>
                <span className="block text-white">e Picheleiro</span>
              </h1>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-sky-400 max-w-3xl mx-auto leading-relaxed drop-shadow-lg px-4 sm:px-0">
              Serviços profissionais de eletricidade, canalização e remodelação com qualidade e experiência comprovada
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-12 max-w-xs sm:max-w-2xl mx-auto">
              <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-xl">
                <Counter
                  end={500}
                  suffix="+"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-400 mb-2 drop-shadow-lg"
                />
                <div className="text-white/90 text-sm sm:text-base lg:text-lg drop-shadow-lg">Projetos Realizados</div>
              </div>
              <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-xl">
                <Counter
                  end={15}
                  suffix="+"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-400 mb-2 drop-shadow-lg"
                />
                <div className="text-white/90 text-sm sm:text-base lg:text-lg drop-shadow-lg">Anos de Experiência</div>
              </div>
              <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-xl">
                <Counter
                  end={100}
                  suffix="%"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-400 mb-2 drop-shadow-lg"
                />
                <div className="text-white/90 text-sm sm:text-base lg:text-lg drop-shadow-lg">Satisfação Garantida</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 sm:pt-8 px-4 sm:px-0">
              <Link
                href="/contacto"
                className="bg-sky-400 hover:bg-sky-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors shadow-lg text-center"
              >
                Solicitar Orçamento
              </Link>
              <Link
                href="/servicos"
                className="border-2 border-white hover:bg-white hover:text-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors shadow-lg text-center"
              >
                Ver Serviços
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
