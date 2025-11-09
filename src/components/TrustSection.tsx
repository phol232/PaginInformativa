'use client'

export default function TrustSection() {
  return (
    <section className="w-full bg-azul-institucional px-6 md:px-12 py-12 border-t border-azul-tecnico">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-4">
        {/* Icon */}
        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
          <span className="text-white text-xl font-bold">N</span>
        </div>
        
        {/* Text */}
        <p className="text-white text-lg md:text-xl font-light tracking-wider uppercase">
          SEGURIDAD Y CONFIANZA
        </p>
      </div>
    </section>
  )
}

