"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Footer from "@/components/footer"

export default function ContactoSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const generateCorrelationId = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0
      const v = c == "x" ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Criar FormData para multipart/form-data
      const formDataToSend = new FormData()

      // Headers serão enviados como headers HTTP
      const headers = {
        "x-user": "Portal Promo",
        "x-channel": "Portal Promo",
        "x-correlationid": generateCorrelationId(),
      }

      // Dados do formulário
      formDataToSend.append("from", "vianahub@vianahub.pt")
      formDataToSend.append("to", "vianahub@vianahub.pt")
      formDataToSend.append("cc", "contato@outlook.com")
      formDataToSend.append("subject", `Novo contato do site - ${formData.name}`)
      formDataToSend.append("body", `Nova mensagem recebida através do formulário de contacto do site.`)
      formDataToSend.append("templateCode", "PromoContact")

      // Metadata
      formDataToSend.append("metadata[0].Name", formData.name)
      formDataToSend.append("metadata[0].Email", formData.email)
      formDataToSend.append("metadata[0].Phone", formData.phone || "")
      formDataToSend.append("metadata[0].Company", formData.company || "")
      formDataToSend.append("metadata[0].Message", formData.message)

      const response = await fetch("https://www.mail.vianahub.pt/contacts/send-mail", {
        method: "POST",
        headers: headers,
        body: formDataToSend,
      })

      if (response.ok) {
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Obrigado pelo seu contacto. Responderemos em breve.",
          duration: 5000,
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        })
      } else {
        throw new Error("Erro no envio")
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error)
      toast({
        title: "Erro ao enviar mensagem",
        description: "Ocorreu um erro ao enviar a sua mensagem. Tente novamente ou contacte-nos diretamente.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
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

              {/* Formulário de Contacto */}
              <Card>
                <CardHeader>
                  <CardTitle>Envie-nos uma Mensagem</CardTitle>
                  <CardDescription>Preencha o formulário abaixo e entraremos em contacto consigo</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="O seu nome"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="o.seu.email@exemplo.com"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+351 xxx xxx xxx"
                          value={formData.phone}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Empresa</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Nome da empresa"
                          value={formData.company}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Descreva o seu projeto ou dúvida..."
                        className="min-h-[120px]"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </>
                      ) : (
                        "Enviar Mensagem"
                      )}
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
