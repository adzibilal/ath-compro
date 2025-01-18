'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Cek apakah ini pertama kali user mengakses website
    const hasVisited = localStorage.getItem('hasVisited')
    const lastVisitTime = localStorage.getItem('lastVisitTime')
    const currentTime = new Date().getTime()
    
    // Cek apakah sudah lewat 5 menit sejak kunjungan terakhir
    if (lastVisitTime && currentTime - parseInt(lastVisitTime) > 5 * 60 * 1000) {
      // Jika sudah lewat 5 menit, hapus localStorage
      localStorage.removeItem('hasVisited')
      localStorage.removeItem('lastVisitTime')
    }
    
    if (hasVisited) {
      // Jika sudah pernah mengakses dalam 5 menit terakhir, langsung sembunyikan splash screen
      setIsVisible(false)
    } else {
      // Jika baru pertama kali atau sudah lewat 5 menit, tampilkan splash screen selama 2 detik
      const timer = setTimeout(() => {
        setIsVisible(false)
        // Simpan ke localStorage bahwa user sudah mengakses dan waktu kunjungan
        localStorage.setItem('hasVisited', 'true')
        localStorage.setItem('lastVisitTime', currentTime.toString())
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="relative h-32 w-32 animate-pulse">
        <Image
          src="/images/logo.png"
          alt="Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  )
}

export default SplashScreen 