'use client'

import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/translations/content'

export default function About() {
  const { language } = useLanguage()
  const t = content[language].about

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t.title}</h2>
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-primary-green mb-4">{t.vision.title}</h3>
            <p className="text-lg text-gray-600">
              {t.vision.description}
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primary-green mb-4">{t.mission.title}</h3>
            <p className="text-lg text-gray-600">
              {t.mission.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 