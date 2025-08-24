import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - Claudio Site",
  description: "Get in touch with Claudio",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Contact</h1>
          <p className="text-lg text-muted-foreground">Let's get in touch</p>
        </header>

        <section className="max-w-md mx-auto">
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-medium text-foreground">Email</h3>
                <p>contact@claudio-site.com</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">Location</h3>
                <p>Portugal</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
