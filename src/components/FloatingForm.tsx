'use client'

import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/translations/content'

interface FloatingFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function FloatingForm({ isOpen, onClose }: FloatingFormProps) {
  const { language } = useLanguage()
  const t = content[language].floating.form

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    
    // Mengambil nilai dari form
    const nama = formData.get('nama')
    const email = formData.get('email')
    const pesan = formData.get('pesan')
    
    // Membuat pesan untuk WhatsApp
    const greeting = language === 'id' ? 'Halo, saya' : 'Hello, I am'
    const waMessage = `${greeting} ${nama}%0A%0AEmail: ${email}%0A%0A${language === 'id' ? 'Pesan' : 'Message'}:%0A${pesan}`
    
    // Ganti nomor WhatsApp
    window.open(`https://wa.me/6281222620835?text=${waMessage}`, '_blank')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">{t.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
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
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {t.name}
            </label>
            <input
              name="nama"
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
              required
              placeholder={t.namePlaceholder}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {t.email}
            </label>
            <input
              name="email"
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
              required
              placeholder={t.emailPlaceholder}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {t.message}
            </label>
            <textarea
              name="pesan"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
              rows={4}
              required
              placeholder={t.messagePlaceholder}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-primary-green text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            {t.submit}
          </button>
        </form>
      </div>
    </div>
  )
} 