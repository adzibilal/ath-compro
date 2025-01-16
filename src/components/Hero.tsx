'use client'

import { useLanguage } from "@/context/LanguageContext"
import { content } from "@/translations/content"

export default function Hero() {
  const { language } = useLanguage()
  const t = content[language].hero

  return (
    <section className="min-h-screen relative flex items-center justify-center text-white pt-20">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/images/hero-bg-vid.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay gelap untuk meningkatkan keterbacaan teks */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Konten hero */}
      <div className="container mx-auto px-4 text-center relative z-20">
        <h1 className="text-5xl font-bold mb-6">{t.title}</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          {t.description}
        </p>
        <button className="bg-white text-primary-green px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          {t.cta}
        </button>
      </div>
    </section>
  )
} 