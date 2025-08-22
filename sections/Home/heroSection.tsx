import Link from "next/link"

const HeroSection = () => {
  const phoneNumber = "351924243818"

  return (
    <section className="relative text-gray-800 bg-sky-100">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-r from-blue-600/20 to-blue-800/20"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Claudio <br />
              <span className="text-blue-700">Eletricista e</span>
              <br />
              <span className="text-gray-900">Picheleiro</span>
            </h1>

            <p className="text-xl mb-8 text-gray-900">
              Soluções profissionais para instalações elétricas, canalização e remodelação.
            </p>

            <div className="flex justify-center">
              <Link
                href={`https://wa.me/${phoneNumber}`}
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-md transition-all text-center flex items-center justify-center shadow-md"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicitar Orçamento via WhatsApp: +351 924 243 818"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
