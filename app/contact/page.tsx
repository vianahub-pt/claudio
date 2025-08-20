import SectionTitle from "@/components/sectionTitle"
import { Mail, MapPin, Clock } from "lucide-react"

export default function Contact() {
  const phoneNumber = "351924243818" // Sem o "+" para o WhatsApp
  const emailAddress = "claudioantunessil@gmail.com"

  return (
    <>
      <main id="main-content">
        {/* Banner */}
        <section className="hero-section text-white py-20" role="banner">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-blue-700">Contacto</span>
              </h1>
              <p className="text-gray-900 text-xl">
                Entre em contacto connosco para solicitar um orçamento gratuito ou esclarecer qualquer dúvida.
              </p>
            </div>
          </div>
        </section>

        {/* Informações de Contacto */}
        <section className="py-20 bg-white" aria-labelledby="contact-info-heading">
          <div className="container mx-auto px-4">
            <SectionTitle title="Fale Connosco" subtitle="Estamos aqui para ajudar" level={2} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-lg mb-4 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="#2563eb"
                    className="flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <h3 className="text-blue-700 font-semibold text-lg mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-2">
                  <a
                    href={`https://wa.me/${phoneNumber}`}
                    className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    aria-label="Contactar via WhatsApp: +351 924 243 818"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +351 924 243 818
                  </a>
                </p>
                <p className="text-sm text-gray-500">Resposta rápida via WhatsApp</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-lg mb-4 inline-block">
                  <Mail className="text-blue-600" size={32} />
                </div>
                <h3 className="text-blue-700 font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-600 mb-2">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    aria-label="Enviar email para claudioantunessil@gmail.com"
                  >
                    {emailAddress}
                  </a>
                </p>
                <p className="text-sm text-gray-500">Resposta em até 24 horas</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-lg mb-4 inline-block">
                  <MapPin className="text-blue-600" size={32} />
                </div>
                <h3 className="text-blue-700 font-semibold text-lg mb-2">Morada</h3>
                <address className="text-gray-600 not-italic">
                  Av. António José de Almeida 70
                  <br />
                  3720-239 Oliveira de Azeméis
                </address>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-lg mb-4 inline-block">
                  <Clock className="text-blue-600" size={32} />
                </div>
                <h3 className="text-blue-700 font-semibold text-lg mb-2">Horário de Funcionamento</h3>
                <div className="text-gray-600">
                  <p>Segunda a Sexta: 8h - 18h</p>
                  <p>Sábado: Fechado</p>
                  <p>Domingo: Atendimento de emergência</p>
                </div>
              </div>
            </div>

            <div className="max-w-2xl mx-auto mt-16 text-center">
              <h3 className="text-2xl font-bold mb-6">Entre em Contacto</h3>
              <p className="text-gray-600 mb-8">Escolha a forma mais conveniente para entrar em contacto connosco:</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${phoneNumber}?text=Olá! Gostaria de solicitar um orçamento.`}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-semibold transition-colors inline-flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Contactar via WhatsApp
                </a>

                <a
                  href={`mailto:${emailAddress}?subject=Pedido de Orçamento&body=Olá! Gostaria de solicitar um orçamento para:`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold transition-colors inline-flex items-center justify-center"
                >
                  <Mail size={20} className="mr-2" />
                  Enviar Email
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600 text-white" aria-labelledby="emergency-heading">
          <div className="container mx-auto px-4 text-center">
            <h2 id="emergency-heading" className="text-3xl font-bold mb-4">
              Precisa de Ajuda Urgente?
            </h2>
            <p className="text-xl mb-8">Estamos disponíveis de segunda à sextas feiras.</p>
            <a
              href={`https://wa.me/${phoneNumber}`}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors inline-flex items-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              aria-label="Contactar via WhatsApp: +351 924 243 818"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp: +351 924 243 818
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
