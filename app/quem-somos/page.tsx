import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Quem Somos - Claudio Eletricista e Picheleiro",
  description: "Conheça a nossa história e experiência em serviços de eletricidade e pichelaria",
}

export default function QuemSomosPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/bathroom.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Quem <span className="text-sky-400">Somos</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-4xl mx-auto font-light">
            Conheça a nossa história, missão e valores que nos guiam na prestação de serviços de excelência.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* História Section */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-10 mb-12 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="w-1 h-12 bg-sky-400 mr-6"></div>
              <h2 className="text-3xl font-bold text-white">A Nossa História</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-200 leading-relaxed mb-6 text-lg">
                  Com mais de 15 anos de experiência no setor, o Claudio Eletricista e Picheleiro estabeleceu-se como
                  uma referência em serviços de eletricidade e pichelaria em Portugal. A nossa paixão pelo trabalho bem
                  feito e o compromisso com a excelência são os pilares que sustentam a nossa reputação.
                </p>
                <p className="text-gray-200 leading-relaxed text-lg">
                  Especializamo-nos em instalações elétricas residenciais e comerciais, reparações, manutenção e
                  serviços de pichelaria. Cada projeto é tratado com o máximo cuidado e profissionalismo, garantindo
                  sempre a satisfação dos nossos clientes.
                </p>
              </div>
              <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden">
                <Image src="/trabalho-01.jpg" alt="História da empresa" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 rounded-xl p-8 text-center border border-gray-700 hover:border-sky-400 transition-colors">
              <div className="text-4xl font-bold text-sky-400 mb-2">15+</div>
              <div className="text-gray-300 text-lg">Anos de Experiência</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 text-center border border-gray-700 hover:border-sky-400 transition-colors">
              <div className="text-4xl font-bold text-sky-400 mb-2">500+</div>
              <div className="text-gray-300 text-lg">Projetos Concluídos</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 text-center border border-gray-700 hover:border-sky-400 transition-colors">
              <div className="text-4xl font-bold text-sky-400 mb-2">100%</div>
              <div className="text-gray-300 text-lg">Satisfação dos Clientes</div>
            </div>
          </div>

          {/* Missão e Valores */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-sky-400 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">A Nossa Missão</h3>
              </div>
              <p className="text-gray-200 leading-relaxed text-lg">
                Fornecer serviços de qualidade superior em eletricidade e pichelaria, sempre com segurança, eficiência e
                total transparência, superando as expectativas dos nossos clientes.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-sky-400 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Os Nossos Valores</h3>
              </div>
              <ul className="text-gray-200 space-y-3 text-lg">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-sky-400 rounded-full mr-3"></span>
                  Qualidade e profissionalismo
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-sky-400 rounded-full mr-3"></span>
                  Pontualidade e confiança
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-sky-400 rounded-full mr-3"></span>
                  Preços justos e transparentes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-sky-400 rounded-full mr-3"></span>
                  Atendimento personalizado
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
