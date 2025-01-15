'use client'

import { useLanguage } from "@/context/LanguageContext"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed top-4 right-4 z-50">
      <select 
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'id' | 'en')}
        className="bg-white text-gray-800 px-4 py-2 rounded-md shadow-md"
      >
        <option value="id">Indonesia</option>
        <option value="en">English</option>
      </select>
    </div>
  )
} 