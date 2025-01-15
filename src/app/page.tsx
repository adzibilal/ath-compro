import Hero from '@/components/Hero'
import About from '@/components/About'
import Values from '@/components/Values'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function Home() {
  return (
    <main className="min-h-screen">
      <LanguageSwitcher />
      <Hero />
      <About />
      <Values />
      <Projects />
      <Footer />
    </main>
  )
}
