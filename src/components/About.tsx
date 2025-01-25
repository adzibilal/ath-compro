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
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-1 gap-16">
            {/* CEO Profile */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8">
              <div className="w-full md:w-1/3">
                <img src="/images/CEO.png" alt="CEO" className="w-full max-w-[300px] mx-auto" />
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left space-y-4">
                <p className="text-3xl font-light leading-relaxed">"{t.profiles.ceo.quote}"</p>
                <h4 className="text-xl font-semibold">{t.profiles.ceo.name}</h4>
                <p className="text-primary-green font-medium">{t.profiles.ceo.position}</p>
              </div>
            </div>

            {/* COO Profile */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8">
              <div className="w-full md:w-1/3">
                <img src="/images/COO.png" alt="COO" className="w-full max-w-[300px] mx-auto" />
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left space-y-4">
                <p className="text-3xl font-light leading-relaxed">"{t.profiles.coo.quote}"</p>
                <h4 className="text-xl font-semibold">{t.profiles.coo.name}</h4>
                <p className="text-primary-green font-medium">{t.profiles.coo.position}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 