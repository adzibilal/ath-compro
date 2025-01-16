'use client'

import { useLanguage } from "@/context/LanguageContext"
import { content } from "@/translations/content"
import Image from "next/image"

export default function Hero() {
  const { language } = useLanguage()
  const t = content[language].hero

  const handleContactClick = () => {
    // Menggunakan nomor yang sama dengan floating button
    window.open('https://wa.me/6281222620835', '_blank')
  }

  return (
    <section className="min-h-screen relative flex items-center justify-center text-white pt-20">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-x-[-1]"
      >
        <source src="/images/hero-bg-vid.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay gelap untuk meningkatkan keterbacaan teks */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Konten hero */}
      <div className="container mx-auto px-4 grid md:grid-cols-[2fr_1fr] gap-8 items-center relative z-20">
        {/* Teks Kiri */}
        <div className="text-left">
          <div className="inline-block bg-primary-green/20 text-primary-green font-medium px-4 py-2 rounded-full mb-6">
            {t.badge}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t.title}
          </h1>
          <p className="text-lg mb-8 text-gray-200 max-w-xl">
            {t.description}
          </p>
          <div className="flex items-center gap-6">
            <button 
              onClick={handleContactClick}
              className="bg-primary-orange hover:bg-primary-orange/90 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              {t.cta}
            </button>
            <div className="flex -space-x-4">
              {[1,2,3,4].map((_, i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                  <Image
                    src={`/images/avatar-${i + 1}.jpg`}
                    alt={`Trusted Partner ${i + 1}`}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-sm font-medium">
                17K+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 