"use client"

import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-700">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-white">Sobre </span>
            <span className="text-sky-400">Nós</span>
          </h2>
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 animate-slide-in-left">
              <div className="relative overflow-hidden rounded-lg border-4 border-sky-400 shadow-2xl group">
                <Image
                  src="/trabalho-03.jpg"
                  alt="Trabalho de eletricidade e canalização"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Somos uma empresa especializada em serviços de eletricidade, canalização e remodelação, atendendo
                  clientes residenciais e comerciais. Com mais de 15 anos de experiência no mercado, garantimos um
                  trabalho de qualidade, segurança e eficiência em cada projeto.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Nossa equipa é formada por profissionais qualificados e comprometidos em oferecer as melhores soluções
                  para as necessidades dos nossos clientes, sempre com preços justos e transparentes.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-sky-400 rounded-full"></div>
                  <span className="text-white font-semibold">Profissionais qualificados e experientes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-sky-400 rounded-full"></div>
                  <span className="text-white font-semibold">Atendimento rápido e eficiente</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-sky-400 rounded-full"></div>
                  <span className="text-white font-semibold">Materiais de alta qualidade</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-sky-400 rounded-full"></div>
                  <span className="text-white font-semibold">Garantia nos serviços prestados</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-sky-400 rounded-full"></div>
                  <span className="text-white font-semibold">Orçamentos sem compromisso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out;
        }
      `}</style>
    </section>
  )
}
