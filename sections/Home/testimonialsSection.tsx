import SectionTitle from "@/components/sectionTitle"
import { Star } from "lucide-react"

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "João Silva",
      location: "Oliveira de Azeméis",
      rating: 5,
      text: "Excelente serviço! O Claudio resolveu um problema elétrico complexo na minha casa com rapidez e profissionalismo. Recomendo vivamente.",
    },
    {
      id: 2,
      name: "Maria Santos",
      location: "São João da Madeira",
      rating: 5,
      text: "Contratei os serviços para renovação da casa de banho e fiquei extremamente satisfeita. Trabalho impecável, dentro do prazo e do orçamento.",
    },
    {
      id: 3,
      name: "António Ferreira",
      location: "Santa Maria da Feira",
      rating: 5,
      text: "Profissional de confiança! Já utilizei os serviços várias vezes para problemas de canalização e sempre com resultados excelentes.",
    },
    {
      id: 4,
      name: "Carla Oliveira",
      location: "Ovar",
      rating: 4,
      text: "Serviço de qualidade na instalação elétrica da minha cozinha. Pontual, organizado e deixou tudo limpo após o trabalho.",
    },
  ]

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Testemunhos" subtitle="O que os nossos clientes dizem sobre nós" center light />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i + testimonial.rating} size={20} className="text-yellow-400" />
                ))}
              </div>

              <p className="text-lg italic mb-6">"{testimonial.text}"</p>

              <div>
                <p className="font-bold text-xl">{testimonial.name}</p>
                <p className="text-white/80">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
