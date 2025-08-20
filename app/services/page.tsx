import Footer from "@/components/footer"
import SectionTitle from "@/components/sectionTitle"
import { Zap, Droplet, ShowerHead, Wrench, Home, Building, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      id: "electrical",
      title: "Instalações Elétricas",
      description: "Serviços completos de instalação e manutenção elétrica para residências e empresas.",
      icon: "Zap",
      items: [
        "Instalação de quadros elétricos",
        "Instalação de tomadas e interruptores",
        "Instalação de iluminação",
        "Reparação de curto-circuitos",
        "Substituição de cabos elétricos",
        "Instalação de sistemas de segurança",
        "Certificação de instalações elétricas",
        "Projetos elétricos para novas construções",
      ],
    },
    {
      id: "plumbing",
      title: "Canalizações",
      description: "Serviços profissionais de canalização para resolver qualquer problema hidráulico.",
      icon: "Droplet",
      items: [
        "Instalação de sistemas de canalização",
        "Reparação de fugas de água",
        "Desentupimento de canos",
        "Instalação de torneiras e misturadoras",
        "Reparação de autoclismos",
        "Instalação de sistemas de aquecimento de água",
        "Manutenção preventiva",
        "Deteção de fugas",
      ],
    },
    {
      id: "bathroom",
      title: "Casas de Banho",
      description: "Renovação completa ou parcial de casas de banho com qualidade e profissionalismo.",
      icon: "ShowerHead",
      items: [
        "Renovação completa de casas de banho",
        "Instalação de sanitários",
        "Instalação de chuveiros e banheiras",
        "Instalação de móveis de casa de banho",
        "Aplicação de azulejos e pavimentos",
        "Instalação de sistemas de ventilação",
        "Instalação de acessórios",
        "Adaptações para mobilidade reduzida",
      ],
    },
    {
      id: "repairs",
      title: "Reparações Gerais",
      description: "Serviços de reparação e manutenção para problemas elétricos, canalização e remodelação.",
      icon: "Wrench",
      items: [
        "Reparações elétricas",
        "Reparações de canalização",
        "Substituição de componentes danificados",
        "Manutenção preventiva",
        "Resolução de problemas de pressão de água",
        "Instalação de equipamentos",
        "Consultoria técnica",
      ],
    },
    {
      id: "residential",
      title: "Projetos Residenciais",
      description: "Soluções completas para projetos elétricos e hidráulicos em residências.",
      icon: "Home",
      items: [
        "Projetos elétricos para novas construções",
        "Projetos hidráulicos para novas construções",
        "Renovações completas",
        "Ampliações",
        "Instalação de sistemas de energia solar",
        "Instalação de sistemas de aquecimento",
        "Consultoria técnica",
        "Certificação de instalações",
      ],
    },
    {
      id: "commercial",
      title: "Projetos Comerciais",
      description: "Serviços especializados para empresas, lojas e escritórios.",
      icon: "Building",
      items: [
        "Instalações elétricas comerciais",
        "Sistemas hidráulicos para empresas",
        "Manutenção preventiva",
        "Iluminação comercial",
        "Sistemas de segurança",
        "Redes de dados",
        "Consultoria técnica",
        "Certificação de instalações",
      ],
    },
  ]

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap size={40} className="text-blue-600" />
      case "Droplet":
        return <Droplet size={40} className="text-blue-600" />
      case "ShowerHead":
        return <ShowerHead size={40} className="text-blue-600" />
      case "Wrench":
        return <Wrench size={40} className="text-blue-600" />
      case "Home":
        return <Home size={40} className="text-blue-600" />
      case "Building":
        return <Building size={40} className="text-blue-600" />
      default:
        return <Zap size={40} className="text-blue-600" />
    }
  }

  return (
    <>
      <main>
        {/* Banner */}
        <section className="hero-section text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nossos <span className="text-blue-700">Serviços</span>
              </h1>
              <p className="text-xl">Soluções completas em eletricidade e canalização para residências e empresas.</p>
            </div>
          </div>
        </section>

        {/* Serviços Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle title="O que Oferecemos" subtitle="Conheça nossos serviços especializados" center />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-gray-50 rounded-lg p-6 shadow-lg">
                  <div className="flex justify-center mb-4">{getIcon(service.icon)}</div>
                  <h2 className="text-blue-700 text-xl font-bold mb-3 text-center">{service.title}</h2>
                  <p className="text-gray-900 mb-4 text-center">{service.description}</p>

                  <h3 className="text-gray-900 text-lg font-semibold mb-3">O que incluímos:</h3>
                  <ul className="space-y-2 mb-6">
                    {service.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle size={16} className="text-blue-600 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-blue-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-center">
                    <Link
                      href="/contact"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold transition-colors inline-block"
                      aria-label={`Solicitar Orçamento para ${service.title}`}
                    >
                      Solicitar Orçamento
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
