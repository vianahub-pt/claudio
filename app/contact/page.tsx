import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Footer from "@/components/footer"

export default function ContactoSection() {
  const generateStaticCorrelationId = () => {
    const timestamp = Date.now().toString(36)
    const random = Math.floor(Math.random() * 1000000).toString(36)
    return `contact-${timestamp}-${random}`
  }

  return (
    <>
      <main>
        {/* Banner */}
        <section className="hero-section text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Entre em <span className="text-blue-700">Contacto</span>
              </h1>
              <p className="text-gray-900 text-xl">
                Tem alguma dúvida ou quer saber mais sobre os nossos serviços? Entre em contacto connosco e
                responderemos o mais rapidamente possível.
              </p>
            </div>
          </div>
        </section>

        <section id="contacto" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Informações de Contacto */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">Informações de Contacto</CardTitle>
                    <CardDescription>Entre em contacto através dos seguintes meios</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-orange-500" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">claudioantunessil@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-orange-500" />
                      <div>
                        <p className="font-medium">Telefone</p>
                        <p className="text-gray-600">+351 924 243 818</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-orange-500" />
                      <div>
                        <p className="font-medium">Morada</p>
                        <p className="text-gray-600">Av. António José de Almeida 70 3720-239 Oliveira de Azeméis</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-orange-500" />
                      <div>
                        <p className="font-medium">Horário</p>
                        <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Envie-nos uma Mensagem</CardTitle>
                  <CardDescription>Preencha o formulário abaixo e entraremos em contacto consigo</CardDescription>
                </CardHeader>
                <CardContent>
                  <form action="https://www.mail.vianahub.pt/contacts/send-mail" method="POST" className="space-y-4">
                    {/* Hidden fields for API */}
                    <input type="hidden" name="from" value="vianahub@vianahub.pt" />
                    <input type="hidden" name="to" value="vianahub@vianahub.pt" />
                    <input type="hidden" name="templateCode" value="ClaudioEletricistaContact" />
                    <input type="hidden" name="x-user" value="Portal Promo" />
                    <input type="hidden" name="x-channel" value="Portal Promo" />
                    <input type="hidden" name="x-correlationid" value={generateStaticCorrelationId()} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome *</Label>
                        <Input id="name" name="metadata[0].Name" type="text" placeholder="O seu nome" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="metadata[0].Email"
                          type="email"
                          placeholder="o.seu.email@exemplo.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input id="phone" name="metadata[0].Phone" type="tel" placeholder="+351 xxx xxx xxx" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Empresa</Label>
                        <Input id="company" name="metadata[0].Company" type="text" placeholder="Nome da empresa" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea
                        id="message"
                        name="metadata[0].Message"
                        placeholder="Descreva o seu projeto ou dúvida..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
