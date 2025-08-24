import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - Claudio Site",
  description: "Learn more about Claudio",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">About</h1>
          <p className="text-lg text-muted-foreground">Get to know more about this project</p>
        </header>

        <section className="max-w-2xl mx-auto">
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This website is built using modern web technologies with a focus on static site generation for optimal
              performance and SEO.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Next.js with App Router</li>
              <li>Static Site Generation (SSG)</li>
              <li>Tailwind CSS for styling</li>
              <li>TypeScript for type safety</li>
              <li>Responsive design</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}
