'use client'

import { BsLightbulb } from 'react-icons/bs'
import { FaHandHoldingHeart, FaHandshake } from 'react-icons/fa'
import { RiShieldStarFill } from 'react-icons/ri'
import { MdStar } from 'react-icons/md'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/translations/content'

export default function Values() {
  const { language } = useLanguage()
  const t = content[language].values

  const icons = {
    "Smart Work": BsLightbulb,
    "Caring": FaHandHoldingHeart,
    "Loyalty": FaHandshake,
    "Integrity": RiShieldStarFill,
    "Commitment": MdStar
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((value, index) => {
            const Icon = icons[value.title as keyof typeof icons]
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-3xl text-primary-green" />
                  <h3 className="text-xl font-bold text-primary-green">{value.title}</h3>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 