"use client"

import Image from "next/image"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Canalização",
      description: "Renovação de Casa de Banho",
      gradient: "from-sky-400 to-sky-600",
      image: "/trabalho-07.jpg",
    },
    {
      title: "Eletricidade",
      description: "Instalação Elétrica Residencial",
      gradient: "from-yellow-400 to-orange-500",
      image: "/eletricidade.jpg",
    },
    {
      title: "Construção",
      description: "Remodelação de Fachada",
      gradient: "from-green-400 to-emerald-600",
      image: "/construcao.jpg",
    },
    {
      title: "Design & Funcionalidade",
      description: "Instalação de Tubagem Aparente",
      gradient: "from-purple-400 to-pink-500",
      image: "/canalizacao.jpg",
    },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-white text-center mb-12 opacity-0 animate-fade-in-up"
          style={{
            animationDelay: "0s",
            animationFillMode: "forwards",
          }}
        >
          Projetos <span className="text-sky-400">Recentes</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform opacity-0 animate-fade-in-up`}
              style={{
                animationDelay: `${(index + 1) * 0.1}s`,
                animationFillMode: "forwards",
              }}
            >
              {project.image ? (
                <div className="h-48 relative">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
              ) : (
                <div className={`h-48 bg-gradient-to-br ${project.gradient}`}></div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                <span className="text-sky-400 text-sm font-medium">Ver Projeto →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </section>
  )
}
