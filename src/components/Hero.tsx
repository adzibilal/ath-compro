'use client'

import { useLanguage } from "@/context/LanguageContext"
import { content } from "@/translations/content"

export default function Hero() {
  const { language } = useLanguage()
  const t = content[language].hero

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">{t.title}</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          {t.description}
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
          {t.cta}
        </button>
      </div>
    </section>
  )
} 