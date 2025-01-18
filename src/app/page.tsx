import Hero from '@/components/Hero'
import About from '@/components/About'
import Values from '@/components/Values'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import SplashScreen from '@/components/SplashScreen'
import Navbar from '@/components/Navbar'
import FloatingButton from '@/components/FloatingButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <SplashScreen />
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Values />
      <Projects />
      <Footer />
      <FloatingButton />
    </main>
  )
}
