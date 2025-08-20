import Link from "next/link"
import Image from "next/image"

const HeroSection = () => {
  const phoneNumber = "351924243818" // Sem o "+" para o WhatsApp

  return (
    <section className="relative text-gray-800" style={{ backgroundColor: "#C8E8FF" }}>
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-r from-blue-600/20 to-blue-800/20"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Texto à esquerda */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Claudio <br />
              <p className="!text-blue-700" style={{ color: "#1d4ed8" }}>
                Eletricista e
              </p>
              <p className="text-gray-900">Picheleiro</p>
            </h1>

            <p className="text-xl mb-8 text-gray-900">
              Soluções profissionais para instalações elétricas, canalização e remodelação.
            </p>

            <div className="flex justify-center sm:justify-start">
              <Link
                href={`https://wa.me/${phoneNumber}`}
                className="!bg-blue-700 hover:!bg-blue-800 !text-white font-semibold py-3 px-8 rounded-md transition-all text-center flex items-center justify-center shadow-md"
                style={{ backgroundColor: "#1d4ed8", color: "#ffffff" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicitar Orçamento via WhatsApp: +351 924 243 818"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>

          {/* Imagem à direita */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/claudio-antunes.webp"
              alt="Claudio Antunes, Eletricista e Picheleiro"
              width={400}
              height={400}
              className="rounded-lg shadow-xl w-full max-w-sm h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
