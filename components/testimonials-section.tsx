"use client"

import { Star } from "lucide-react"
import { useEffect, useState } from "react"

const testimonials = [
  {
    name: "Maria Silva",
    location: "Lisboa",
    text: "Excelente trabalho! O Cláudio e a sua equipa fizeram a instalação elétrica da nossa casa nova. Muito profissionais e pontuais.",
    rating: 5,
  },
  {
    name: "João Santos",
    location: "Porto",
    text: "Serviço de canalização impecável. Resolveram o problema rapidamente e com preços justos. Recomendo!",
    rating: 5,
  },
  {
    name: "Ana Costa",
    location: "Braga",
    text: "Remodelação da casa de banho ficou perfeita. Atenção aos detalhes e acabamentos de qualidade.",
    rating: 5,
  },
  {
    name: "Pedro Oliveira",
    location: "Coimbra",
    text: "Profissionais muito competentes. Fizeram a instalação elétrica do meu escritório sem qualquer problema.",
    rating: 5,
  },
  {
    name: "Sofia Ferreira",
    location: "Aveiro",
    text: "Excelente atendimento e trabalho de qualidade. Cumpriram todos os prazos acordados.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [centerIndex, setCenterIndex] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000) // Aumentado para 8 segundos para movimento mais lento

    return () => clearInterval(interval)
  }, [])

  const infiniteTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-white">O Que Dizem os Nossos</span> <span className="text-sky-400">Clientes</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto overflow-hidden py-8">
          <div className="relative">
            <div
              className="flex animate-infinite-scroll"
              style={{
                width: `${infiniteTestimonials.length * 400}px`,
                animation: "scroll-left 40s linear infinite", // Aumentado para 40s para movimento mais lento
              }}
            >
              {infiniteTestimonials.map((testimonial, index) => {
                const actualIndex = index % testimonials.length
                const isCenterCard = actualIndex === centerIndex

                return (
                  <div
                    key={`${actualIndex}-${Math.floor(index / testimonials.length)}`}
                    className="flex-shrink-0 px-4"
                    style={{ width: "400px" }}
                  >
                    <div
                      className="rounded-lg p-6 shadow-md transition-all duration-700 ease-in-out mx-auto max-w-sm bg-gray-700" // Usando fundo escuro para manter consistência
                    >
                      <div className="flex justify-center mb-4">
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>

                      <blockquote className="text-gray-300 mb-4 text-center italic text-sm">
                        "{testimonial.text}"
                      </blockquote>

                      <div className="text-center">
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-gray-400 text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${testimonials.length * 400}px);
            }
          }
        `}</style>
      </div>
    </section>
  )
}
