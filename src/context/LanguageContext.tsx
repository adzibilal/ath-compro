'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'id' | 'en'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
}

// Berikan nilai default untuk context
const LanguageContext = createContext<LanguageContextType>({
  language: 'id',
  setLanguage: () => null
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('id')

  const value = {
    language,
    setLanguage
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 