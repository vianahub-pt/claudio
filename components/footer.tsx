export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg text-sky-400 mb-4">
              Claudio Eletricista e Picheleiro
            </h3>
            <p className="text-white text-sm">
              Serviços profissionais de eletricidade e pichelaria com qualidade
              e confiança.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sky-400 mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>Instalações Elétricas</li>
              <li>Reparações</li>
              <li>Pichelaria</li>
              <li>Manutenção</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sky-400 mb-4">Contacto</h4>
            <div className="space-y-2 text-sm text-white">
              <p>Telefone: +351 924 243 818</p>
              <p>Portugal</p>
            </div>
          </div>
          <p />
        </div>

        <div className="border-t border-metallic-gray/30 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-0">
            <p className="text-metallic-gray text-xs sm:text-sm text-center sm:text-left">
              © 2024 Claudio Eletricista e Picheleiro. Todos os direitos
              reservados.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-blood-red text-xs sm:text-sm font-punk">
              <a
                href="https://www.promo.vianahub.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-300 hover:text-blood-red transition-colors text-sm sm:text-base"
              >
                By VianaHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
