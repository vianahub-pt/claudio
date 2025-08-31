import type { Metadata } from "next"
import ContactoClientPage from "./contacto-client-page"

export const metadata: Metadata = {
  title: "Contacto - Claudio Eletricista e Picheleiro",
  description: "Entre em contacto connosco para orçamentos e informações",
}

export default function ContactoPage() {
  return <ContactoClientPage />
}
