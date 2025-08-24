import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Serviços - Claudio Eletricista e Picheleiro",
  description: "Conheça todos os nossos serviços de eletricidade e pichelaria",
}

export default function ServicosPage() {
  const servicosEletricos = [
    {
      titulo: "Instalações Elétricas",
      descricao: "Instalações completas para residências e comércios",
      imagem: "/servico-instalacoes-eletricas.jpg",
    },
    {
      titulo: "Quadros Elétricos",
      descricao: "Montagem e manutenção de quadros elétricos",
      imagem: "/servico-quadros-eletricos.jpg",
    },
    {
      titulo: "Iluminação",
      descricao: "Projetos de iluminação interior e exterior",
      imagem: "/servico-iluminacao.jpg",
    },
    {
      titulo: "Reparações Elétricas",
      descricao: "Diagnóstico e reparação de avarias elétricas",
      imagem: "/servico-reparacoes-eletricas.jpg",
    },
  ]

  const servicosPichelaria = [
    {
      titulo: "Instalações Sanitárias",
      descricao: "Montagem completa de casas de banho",
      imagem: "/servico-instalacoes-sanitarias.jpg",
    },
    {
      titulo: "Canalização",
      descricao: "Instalação e reparação de canalizações",
      imagem: "/servico-canalizacao.jpg",
    },
    {
      titulo: "Aquecimento Central",
      descricao: "Sistemas de aquecimento central e radiadores",
      imagem: "/servico-aquecimento.jpg",
    },
    {
      titulo: "Manutenção Hidráulica",
      descricao: "Manutenção preventiva de sistemas hidráulicos",
      imagem: "/servico-manutencao.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-900">
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/tradespeople-working.jpg"
          alt="Serviços de eletricidade e pichelaria"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Nossos <span className="text-sky-400">Serviços</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Soluções completas em eletricidade e pichelaria com qualidade, segurança e profissionalismo garantidos
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Serviços </span>
              <span className="text-sky-400">Elétricos</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicosEletricos.map((servico, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className="relative h-48">
                    <Image
                      src={servico.imagem || "/placeholder.svg"}
                      alt={servico.titulo}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{servico.titulo}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{servico.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Serviços de </span>
              <span className="text-sky-400">Pichelaria</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicosPichelaria.map((servico, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className="relative h-48">
                    <Image
                      src={servico.imagem || "/placeholder.svg"}
                      alt={servico.titulo}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{servico.titulo}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{servico.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-sky-600 to-sky-500 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Precisa de um Orçamento?</h3>
            <p className="text-sky-100 mb-8 text-lg max-w-2xl mx-auto">
              Contacte-nos para um orçamento gratuito e sem compromisso. Respondemos rapidamente a todas as solicitações
              com soluções personalizadas.
            </p>
            <Link
              href="/contacto"
              className="bg-white text-sky-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Solicitar Orçamento Gratuito
            </Link>
          </section>
        </div>
      </div>
    </main>
  )
}
