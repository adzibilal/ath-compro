export default function Projects() {
  const projects = [
    {
      title: "Instalasi Fiber Optik (OSP - FO)",
      client: "PT. Telkom Indonesia",
      location: "Lampung dan Kediri"
    },
    {
      title: "Revitalisasi FTM",
      client: "PT. Telkom Indonesia",
      location: "Medan, Sumatera Utara"
    },
    {
      title: "Aktivasi Fiber Optik",
      client: "PT. Telkom Indonesia",
      location: "Jakarta Selatan dan sekitarnya"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pengalaman Proyek</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-primary-green">{project.title}</h3>
              <p className="text-gray-600 mb-2"><span className="font-semibold">Klien:</span> {project.client}</p>
              <p className="text-gray-600"><span className="font-semibold">Lokasi:</span> {project.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 