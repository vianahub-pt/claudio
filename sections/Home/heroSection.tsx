import Link from "next/link"

const HeroSection = () => {
  const phoneNumber = "351924243818"

  return (
    <section className="relative text-gray-800 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_xh0yl6E6l7214VUEyE7t83o4cWiN/eBJxjkjHfCzPZ2D3BpY9gU/public/claudio-hero.mp4" type="video/mp4" />
        </video>
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Claudio <br />
              <span className="text-blue-300">Eletricista e</span>
              <br />
              <span className="text-white">Picheleiro</span>
            </h1>

            <p className="text-xl mb-8 text-white drop-shadow-md">
              Soluções profissionais para instalações elétricas, canalização e remodelação.
            </p>

            <div className="flex justify-center">
              <Link
                href={`https://wa.me/${phoneNumber}`}
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-md transition-all text-center flex items-center justify-center shadow-lg"
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
