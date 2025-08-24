export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Claudio Eletricista e Picheleiro</h3>
            <p className="text-gray-400 text-sm">
              Serviços profissionais de eletricidade e pichelaria com qualidade e confiança.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Instalações Elétricas</li>
              <li>Reparações</li>
              <li>Pichelaria</li>
              <li>Manutenção</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Telefone: +351 XXX XXX XXX</p>
              <p>Email: info@claudioeletricista.pt</p>
              <p>Portugal</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Claudio Eletricista e Picheleiro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
