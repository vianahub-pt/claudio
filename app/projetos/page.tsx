import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Projetos - Claudio Eletricista e Picheleiro",
  description: "Veja alguns dos nossos projetos realizados",
}

export default function ProjetosPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/kitchen.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Nossos <span className="text-sky-400">Projetos</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Descubra alguns dos nossos trabalhos realizados com qualidade, dedicação e profissionalismo em cada detalhe
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-700 overflow-hidden">
                <img
                  src="/residential-electrical.jpg"
                  alt="Instalação Elétrica Residencial"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Instalação Elétrica Residencial</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Instalação elétrica completa numa moradia de 3 pisos, incluindo quadro elétrico e sistema de
                  iluminação LED.
                </p>
                <span className="text-sky-400 text-sm font-medium">Projeto Residencial</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-700 overflow-hidden">
                <img
                  src="/projeto-casa-banho.jpg"
                  alt="Remodelação de Casa de Banho"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Remodelação de Casa de Banho</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Remodelação completa incluindo nova canalização, instalação sanitária e sistema de aquecimento.
                </p>
                <span className="text-sky-400 text-sm font-medium">Projeto de Pichelaria</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-700 overflow-hidden">
                <img src="/projeto-comercial.jpg" alt="Instalação Comercial" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Instalação Comercial</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Projeto elétrico para espaço comercial com iluminação especializada e sistemas de segurança.
                </p>
                <span className="text-sky-400 text-sm font-medium">Projeto Comercial</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-700 overflow-hidden">
                <img
                  src="/servico-aquecimento.jpg"
                  alt="Sistema de Aquecimento Central"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Sistema de Aquecimento Central</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Instalação completa de sistema de aquecimento central com radiadores em toda a habitação.
                </p>
                <span className="text-sky-400 text-sm font-medium">Projeto de Aquecimento</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-700 overflow-hidden">
                <img src="/projeto-industrial.jpg" alt="Manutenção Industrial" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Manutenção Industrial</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Serviços de manutenção elétrica e hidráulica em instalações industriais com certificação.
                </p>
                <span className="text-sky-400 text-sm font-medium">Projeto Industrial</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-700 overflow-hidden">
                <img
                  src="/projeto-iluminacao-exterior.jpg"
                  alt="Iluminação Exterior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Iluminação Exterior</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Projeto de iluminação exterior para jardim e fachada com sistema automatizado e eficiente.
                </p>
                <span className="text-sky-400 text-sm font-medium">Projeto de Iluminação</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">
              Estes são apenas alguns exemplos dos nossos trabalhos. Cada projeto é único e adaptado às necessidades
              específicas de cada cliente.
            </p>
            <Link
              href="/contacto"
              className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Fale Connosco
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
