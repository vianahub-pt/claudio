import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto - Claudio Eletricista e Picheleiro",
  description: "Entre em contacto connosco para orçamentos e informações",
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-gray-900 pt-16 page-transition">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Contacto</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Entre em Contacto</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Telefone</h3>
                  <p className="text-gray-300">+351 XXX XXX XXX</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Email</h3>
                  <p className="text-gray-300">info@claudioeletricista.pt</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Localização</h3>
                  <p className="text-gray-300">Portugal</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Horário de Atendimento</h3>
                  <div className="text-gray-300 space-y-1">
                    <p>Segunda a Sexta: 08:00 - 18:00</p>
                    <p>Sábado: 09:00 - 13:00</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Solicitar Orçamento</h2>

              <form className="space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-white mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-sky-400 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-sky-400 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-white mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="servico" className="block text-sm font-medium text-white mb-2">
                    Tipo de Serviço
                  </label>
                  <select
                    id="servico"
                    name="servico"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-sky-400 transition-colors"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="eletricidade">Serviços Elétricos</option>
                    <option value="pichelaria">Serviços de Pichelaria</option>
                    <option value="manutencao">Manutenção</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-white mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-sky-400 transition-colors"
                    placeholder="Descreva o seu projeto ou necessidade..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Enviar Pedido
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
