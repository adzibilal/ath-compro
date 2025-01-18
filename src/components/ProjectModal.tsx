'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Project } from '@/utils/projectsData'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/translations/content'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const { language } = useLanguage()
  const t = content[language].projectsPage

  if (!project) return null

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}>
      <div className="absolute inset-0 bg-black bg-opacity-75" onClick={onClose}></div>
      <div className="relative w-full max-w-4xl p-4 mx-4">
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 z-50 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="h-[70vh]">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="w-full h-full modal-swiper"
            >
              {project.images.map((image, imgIndex) => (
                <SwiperSlide key={imgIndex}>
                  <img 
                    src={image} 
                    alt={`${project.title} - Image ${imgIndex + 1}`}
                    className="w-full h-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-primary-green">{project.title}</h3>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">{t.client}:</span> {project.client}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">{t.location}:</span> {project.location}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">{t.scope}:</span> {project.scope}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 