import Link from "next/link"

export default function CtaSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Pronto para o Seu Próximo Projeto?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Entre em contacto connosco hoje mesmo e receba um orçamento gratuito e sem compromisso para o seu projeto.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contacto"
            className="bg-sky-400 hover:bg-sky-500 text-black px-10 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Solicitar Orçamento Gratuito
          </Link>
          <a
            href="tel:+351123456789"
            className="border-2 border-sky-400 hover:bg-sky-400 hover:text-black text-sky-400 px-10 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Ligar Agora
          </a>
        </div>
      </div>
    </section>
  )
}
