"use client"

import { Zap, Wrench, Bath, Hammer, Home, Building } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      title: "Instalações Elétricas",
      description: "Instalações elétricas completas e certificadas para residências e comércios",
      icon: Zap,
    },
    {
      title: "Canalizações",
      description: "Serviços especializados de canalização e sistemas hidráulicos",
      icon: Wrench,
    },
    {
      title: "Casas de Banho",
      description: "Remodelação completa de casas de banho com design moderno",
      icon: Bath,
    },
    {
      title: "Reparações Gerais",
      description: "Reparações rápidas e eficazes para todos os tipos de problemas",
      icon: Hammer,
    },
    {
      title: "Projetos Residenciais",
      description: "Projetos completos para habitações particulares",
      icon: Home,
    },
    {
      title: "Projetos Comerciais",
      description: "Soluções profissionais para estabelecimentos comerciais",
      icon: Building,
    },
  ]

  return (
    <section className="py-20 bg-black">
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .float-animation:nth-child(2) {
          animation-delay: 0.5s;
        }
        
        .float-animation:nth-child(3) {
          animation-delay: 1s;
        }
        
        .float-animation:nth-child(4) {
          animation-delay: 1.5s;
        }
        
        .float-animation:nth-child(5) {
          animation-delay: 2s;
        }
        
        .float-animation:nth-child(6) {
          animation-delay: 2.5s;
        }
      `}</style>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-white">Nossos </span>
          <span className="text-sky-400">Serviços</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-lg float-animation shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <IconComponent className="w-8 h-8 text-sky-400" />
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
