'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const products = [
  {
    name: 'Cemento Portland',
    category: 'Materiales',
    description: 'Cemento de alta calidad para construcción',
    image: '🏗️',
  },
  {
    name: 'Ladrillos',
    category: 'Materiales',
    description: 'Ladrillos de arcilla para muros y estructuras',
    image: '🧱',
  },
  {
    name: 'Varillas de Acero',
    category: 'Materiales',
    description: 'Varillas corrugadas para refuerzo estructural',
    image: '🔩',
  },
  {
    name: 'Arena y Piedra',
    category: 'Materiales',
    description: 'Agregados para concreto y mortero',
    image: '⛰️',
  },
  {
    name: 'Taladro Percutor',
    category: 'Herramientas',
    description: 'Herramienta eléctrica profesional',
    image: '🔧',
  },
  {
    name: 'Martillo Demoledor',
    category: 'Herramientas',
    description: 'Equipo pesado para demolición',
    image: '⚒️',
  },
  {
    name: 'Nivel Láser',
    category: 'Herramientas',
    description: 'Equipo de precisión para nivelación',
    image: '📐',
  },
  {
    name: 'Andamios',
    category: 'Equipamiento',
    description: 'Sistemas modulares de seguridad',
    image: '🪜',
  },
  {
    name: 'Pinturas y Barnices',
    category: 'Acabados',
    description: 'Productos de acabado y protección',
    image: '🎨',
  },
  {
    name: 'Tuberías PVC',
    category: 'Instalaciones',
    description: 'Sistemas de conducción de agua',
    image: '🚰',
  },
  {
    name: 'Cables Eléctricos',
    category: 'Instalaciones',
    description: 'Conductores para instalaciones eléctricas',
    image: '⚡',
  },
  {
    name: 'Cerámicos y Porcelanato',
    category: 'Acabados',
    description: 'Revestimientos de alta calidad',
    image: '🔲',
  },
]

export default function Products() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="productos" 
      className={`relative w-full bg-white px-6 md:px-12 py-16 md:py-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Background Pattern - Diamond shapes */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(23,66,135,0.05) 50px, rgba(23,66,135,0.05) 51px, transparent 51px, transparent 100px)`,
          backgroundSize: '100px 100px'
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 50px, rgba(23,66,135,0.05) 50px, rgba(23,66,135,0.05) 51px, transparent 51px, transparent 100px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-azul-institucional mb-4">
            Nuestros Productos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo que necesitas para tu proyecto de construcción
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-amarillo-constructor hover:shadow-lg transition-all"
            >
              {/* Product Icon/Image */}
              <div className="w-20 h-20 bg-amarillo-constructor rounded-xl flex items-center justify-center mb-4 text-4xl">
                {product.image}
              </div>

              {/* Category Badge */}
              <span className="inline-block bg-azul-institucional text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {product.category}
              </span>

              {/* Product Name */}
              <h3 className="text-xl font-bold text-azul-institucional mb-2">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-block bg-amarillo-constructor text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all"
          >
            Consultar Disponibilidad
          </a>
        </div>
      </div>
    </section>
  )
}

