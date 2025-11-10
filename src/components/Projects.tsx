'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const projects = [
  {
    title: 'Hospital Regional',
    category: 'Salud',
    description: 'Suministro de materiales para construcción de hospital de 5 pisos.',
    image: '🏥',
    year: '2024',
  },
  {
    title: 'Universidad Nacional',
    category: 'Educación',
    description: 'Materiales y herramientas para edificio de aulas modernas.',
    image: '🎓',
    year: '2023',
  },
  {
    title: 'Hotel 5 Estrellas',
    category: 'Hotelería',
    description: 'Acabados de lujo y materiales premium para hotel boutique.',
    image: '🏨',
    year: '2024',
  },
  {
    title: 'Represa Hidroeléctrica',
    category: 'Energía',
    description: 'Suministro de concreto y acero para infraestructura energética.',
    image: '⚡',
    year: '2023',
  },
  {
    title: 'Edificio Corporativo',
    category: 'Comercial',
    description: 'Torre de oficinas de 20 pisos en zona financiera.',
    image: '🏢',
    year: '2024',
  },
  {
    title: 'Sistema de Saneamiento',
    category: 'Infraestructura',
    description: 'Tuberías y materiales para red de agua potable municipal.',
    image: '💧',
    year: '2023',
  },
]

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="proyectos"
      className={`relative w-full bg-gray-50 px-6 md:px-12 py-16 md:py-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(23,66,135,0.05) 50px, rgba(23,66,135,0.05) 51px, transparent 51px, transparent 100px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-azul-institucional mb-4">
            Nuestros Proyectos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hemos participado en proyectos de gran envergadura a nivel nacional
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-azul-institucional to-blue-900 flex items-center justify-center text-8xl">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-amarillo-constructor text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-500 font-semibold">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-azul-institucional mb-3 group-hover:text-amarillo-constructor transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-azul-institucional font-semibold mb-6">
            ¿Tienes un proyecto en mente?
          </p>
          <a
            href="#contacto"
            className="inline-block bg-amarillo-constructor text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            Cuéntanos tu Proyecto
          </a>
        </div>
      </div>
    </section>
  )
}
