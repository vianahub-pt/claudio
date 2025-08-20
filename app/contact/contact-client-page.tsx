"use client"

import type React from "react"
import { useState } from "react"
import Footer from "@/components/footer"
import SectionTitle from "@/components/sectionTitle"
import { Send, CheckCircle } from "lucide-react"

export default function ContactClientPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.name.trim()) {
      newErrors.name = "O nome é obrigatório"
    }

    if (!formData.email.trim()) {
      newErrors.email = "O email é obrigatório"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Por favor, insira um email válido"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "O telefone é obrigatório"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "O assunto é obrigatório"
    }

    if (!formData.message.trim()) {
      newErrors.message = "A mensagem é obrigatória"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    if (hasSubmitted && errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setHasSubmitted(true)

    if (!validateForm()) {
      // Focar no primeiro campo com erro
      const firstErrorField = Object.keys(errors)[0]
      const element = document.getElementById(firstErrorField)
      element?.focus()
      return
    }

    setIsSubmitting(true)

    try {
      // Simular envio de email
      const emailBody = `
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Assunto: ${formData.subject}

Mensagem: ${formData.message}
`

      // Aqui você pode adicionar a lógica para enviar o email
      console.log(emailBody)

      setSubmitStatus("success")
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <SectionTitle title="Contato" />

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nome *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  hasSubmitted && errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Digite seu nome completo"
              />
              {hasSubmitted && errors.name && <span className="text-red-500 text-sm mt-1 block">{errors.name}</span>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  hasSubmitted && errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Digite seu email"
              />
              {hasSubmitted && errors.email && <span className="text-red-500 text-sm mt-1 block">{errors.email}</span>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Telefone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  hasSubmitted && errors.phone ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Digite seu telefone"
              />
              {hasSubmitted && errors.phone && <span className="text-red-500 text-sm mt-1 block">{errors.phone}</span>}
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Assunto *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  hasSubmitted && errors.subject ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Digite o assunto"
              />
              {hasSubmitted && errors.subject && (
                <span className="text-red-500 text-sm mt-1 block">{errors.subject}</span>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical ${
                  hasSubmitted && errors.message ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Digite sua mensagem"
              />
              {hasSubmitted && errors.message && (
                <span className="text-red-500 text-sm mt-1 block">{errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Send className="w-5 h-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </>
              )}
            </button>

            {submitStatus === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Formulário enviado com sucesso!
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                Erro ao enviar o formulário. Tente novamente.
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
