import { BsLightbulb } from 'react-icons/bs'
import { FaHandHoldingHeart, FaHandshake } from 'react-icons/fa'
import { RiShieldStarFill } from 'react-icons/ri'
import { MdStar } from 'react-icons/md'

export default function Values() {
  const values = [
    {
      title: "Smart Work",
      description: "Kami mendorong seluruh karyawan untuk bekerja lebih cerdas dan cepat, mengedepankan inovasi dan efisiensi.",
      icon: BsLightbulb
    },
    {
      title: "Caring",
      description: "Kami menjaga hubungan yang saling menghormati dengan klien, mitra, pemasok, dan karyawan.",
      icon: FaHandHoldingHeart
    },
    {
      title: "Loyalty",
      description: "Kami berkolaborasi dengan semua pihak untuk memecahkan masalah dan mencapai tujuan bersama.",
      icon: FaHandshake
    },
    {
      title: "Integrity",
      description: "Kami menunjukkan kejujuran dan integritas dalam setiap tindakan kami.",
      icon: RiShieldStarFill
    },
    {
      title: "Commitment",
      description: "Kami berdedikasi untuk kesuksesan klien, mitra, dan karyawan kami.",
      icon: MdStar
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nilai-Nilai Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <value.icon className="text-3xl text-primary-green" />
                <h3 className="text-xl font-bold text-primary-green">{value.title}</h3>
              </div>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 