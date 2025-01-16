'use client'

import { useState } from 'react'
import FloatingForm from './FloatingForm'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/translations/content'

export default function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const { language } = useLanguage()
  const t = content[language].floating

  const handleContactClick = () => {
    // Ganti nomor WhatsApp
    window.open('https://wa.me/6281222620835', '_blank')
  }

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-8 right-8 z-40">
        {/* Menu Pilihan */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 mb-2 flex flex-col gap-2">
            <button
              onClick={handleContactClick}
              className="bg-primary-green text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-700 transition-colors whitespace-nowrap"
            >
              {t.contactUs}
            </button>
            <button
              onClick={() => {
                setShowForm(true)
                setIsOpen(false)
              }}
              className="bg-primary-orange text-white px-4 py-2 rounded-lg shadow-lg hover:bg-orange-600 transition-colors whitespace-nowrap"
            >
              {t.specialMessage}
            </button>
          </div>
        )}

        {/* Tombol Utama */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary-green text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-green-700 transition-colors"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Floating Form */}
      <FloatingForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </>
  )
} 