'use client'

export default function Maps() {
  return (
    <section className="pt-20">
      <div className="w-full">
        <h2 className="text-3xl font-bold text-center mb-12">Lokasi Kami</h2>
        <div className="w-full overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.68989916702!2d106.87675877573089!3d-6.172258160486383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f56f7c514d63%3A0x94f170e98dc72f3f!2sPulomas%20Office%20Park!5e0!3m2!1sid!2sid!4v1737207841490!5m2!1sid!2sid" 
            width="100%" 
            height="600" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
} 