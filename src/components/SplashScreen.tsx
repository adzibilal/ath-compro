'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
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