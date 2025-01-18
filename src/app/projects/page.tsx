'use client'

import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Project, projects } from '@/utils/projectsData'
import ProjectModal from '@/components/ProjectModal'
import Navbar from '@/components/Navbar'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/translations/content'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function ProjectsPage() {
  const { language } = useLanguage()
  const t = content[language].projectsPage
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <Navbar listenScroll={false} />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src="/images/hero-bg-vid.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-lg md:text-xl">{t.subtitle}</p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    {mounted ? (
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
                        className="w-full h-full project-swiper"
                      >
                        {project.images.map((image, imgIndex) => (
                          <SwiperSlide key={imgIndex}>
                            <img 
                              src={image} 
                              alt={`${project.title} - Image ${imgIndex + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    ) : (
                      <img 
                        src={project.images[0]} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-primary-green">{project.title}</h3>
                    <p className="text-gray-600 mb-2">
                      <span className="font-semibold">{t.client}:</span> {project.client}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <span className="font-semibold">{t.location}:</span> {project.location}
                    </p>
                    <p className="text-gray-600 mb-4">
                      <span className="font-semibold">{t.scope}:</span> {project.scope}
                    </p>
                    <button
                      onClick={() => openModal(project)}
                      className="w-full bg-primary-green text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-200"
                    >
                      {t.viewGallery}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProjectModal 
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </main>
    </>
  )
} 