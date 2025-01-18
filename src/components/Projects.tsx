'use client'

import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Link from 'next/link'
import { Project, projects } from '@/utils/projectsData'
import ProjectModal from './ProjectModal'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [randomProjects, setRandomProjects] = useState<Project[]>([])

  useEffect(() => {
    setMounted(true)
    // Mengacak dan mengambil 6 proyek
    const shuffled = [...projects].sort(() => 0.5 - Math.random())
    setRandomProjects(shuffled.slice(0, 6))
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

  const renderContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {randomProjects.map((project, index) => (
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
            <p className="text-gray-600 mb-2"><span className="font-semibold">Klien:</span> {project.client}</p>
            <p className="text-gray-600 mb-4"><span className="font-semibold">Lokasi:</span> {project.location}</p>
            <button
              onClick={() => openModal(project)}
              className="w-full bg-primary-green text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-200"
            >
              Lihat Galeri
            </button>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pengalaman Proyek</h2>
        {renderContent()}
        <div className="mt-12 text-center">
          <Link 
            href="/projects" 
            className="inline-block bg-primary-orange text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-200"
          >
            Lihat Semua Proyek
          </Link>
        </div>
      </div>
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
} 