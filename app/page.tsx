import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Extracurricular from "@/components/extracurricular"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Extracurricular />
      <Contact />
      <Footer />
    </main>
  )
}
