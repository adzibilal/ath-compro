export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PT. Arga Teknologi Handal</h3>
            <p className="text-gray-400">
              Solusi terpercaya untuk kebutuhan konstruksi dan teknologi Anda
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Alamat</h3>
            <p className="text-gray-400">
              Perkantoran Pulomas Office Park, Gedung 4, Lantai 2, Ruang 09<br />
              Jl. Jend. Ahmad Yani No. 2, Kayu Putih<br />
              Jakarta Timur - 13210
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak</h3>
            <p className="text-gray-400">Email: info@argatek.co.id</p>
            <p className="text-gray-400">Telepon: (021) XXXX-XXXX</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PT. Arga Teknologi Handal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 