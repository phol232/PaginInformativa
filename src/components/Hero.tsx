'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full bg-gradient-to-br from-azul-institucional to-blue-900 px-6 md:px-12 py-16 md:py-24">
      {/* Background Pattern - Diamond shapes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px, transparent 51px, transparent 100px)`,
          backgroundSize: '100px 100px'
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px, transparent 51px, transparent 100px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Content */}
        <div>
          {/* Experience Badge */}
          <div className="mb-8 inline-block border-2 border-amarillo-constructor text-amarillo-constructor px-6 py-2 rounded-lg font-semibold">
            Más de 25 años de experiencia
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Construye tus sueños
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amarillo-constructor mb-8 leading-tight">
            CON CALIDAD PROFESIONAL
          </h2>

          {/* Descriptive Text */}
          <p className="text-white text-lg md:text-xl mb-4">
            Todo lo que necesitas para tu proyecto de construcción, remodelación o reparación.
          </p>
          <p className="text-white text-lg md:text-xl mb-8 md:mb-12">
            Herramientas, materiales y asesoría experta.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-0">
            <a 
              href="#productos"
              className="bg-amarillo-constructor text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all"
            >
              Ver Productos
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-azul-institucional transition-all">
              Más Información
            </button>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative">
          <div className="relative w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-amarillo-constructor">
            <Image
              src="/construction-mana.jpg"
              alt="Construcción profesional"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-amarillo-constructor rounded-full opacity-20 blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amarillo-constructor rounded-full opacity-20 blur-xl"></div>
        </div>
      </div>

      {/* About Section - Política de Calidad */}
      <div className="relative max-w-7xl mx-auto mt-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Política de Gestión de Calidad
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Somos <span className="font-bold text-amarillo-constructor">Socio Constructor S.A.C</span>, empresa comercializadora de materiales de construcción a precios competitivos, con cobertura a nivel nacional.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12 border-2 border-white/20">
          <p className="text-white text-lg leading-relaxed mb-8">
            Trabajamos con las marcas y productos líderes del mercado, priorizando la máxima calidad, permitiendo que nuestros clientes lleven a cabo proyectos exitosos en diversas áreas como hospitales, universidades, hoteles, represas, hidroeléctricas, edificios, saneamiento, entidades técnicas y otros.
          </p>

          <h3 className="text-2xl font-bold text-amarillo-constructor mb-6">
            Nuestro compromiso con la excelencia:
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-amarillo-constructor rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-white">
                Contar con una amplia gama de productos acorde a las necesidades de nuestros clientes.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-amarillo-constructor rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-white">
                Contar con un equipo competente y así brindar la mejor solución integral a nuestros clientes y sus proyectos.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-amarillo-constructor rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-white">
                Contar con una estructura operativa, eficaz y eficiente, la cual permita la cobertura a nivel nacional enfocada en cumplir con los requisitos de nuestros clientes y los legales y reglamentarios.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-amarillo-constructor rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-white">
                Promover la mejora continua de nuestro SGC, así como en nuestras partes interesadas (clientes, legales y reglamentarios).
              </p>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Misión */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="w-16 h-16 bg-amarillo-constructor rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-azul-institucional mb-4">Misión</h3>
            <p className="text-gray-700 leading-relaxed">
              Ser un aliado estratégico para cubrir y concretar proyectos mediante la comercialización de materiales de construcción con la mejor calidad, garantía y al mejor precio. Brindando soluciones integrales, con asesoría personalizada y profesional para nuestros clientes.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="w-16 h-16 bg-amarillo-constructor rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-azul-institucional mb-4">Visión</h3>
            <p className="text-gray-700 leading-relaxed">
              En 2030, ser reconocidos a nivel nacional generando la confianza y referencia en la industria de la construcción, apoyados por un excelente grupo de proveedores, el compromiso de nuestros colaboradores y fidelidad de los clientes.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="w-16 h-16 bg-amarillo-constructor rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-azul-institucional mb-4">Valores</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="font-bold text-amarillo-constructor">•</span>
                <span><strong>Integridad:</strong> Actuando con honestidad y transparencia.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-amarillo-constructor">•</span>
                <span><strong>Innovación:</strong> Enfocados en mejorar nuestros procesos.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-amarillo-constructor">•</span>
                <span><strong>Pasión:</strong> Por lo que hacemos.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-amarillo-constructor">•</span>
                <span><strong>Compromiso:</strong> Cada día un nuevo reto.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-amarillo-constructor">•</span>
                <span><strong>Trabajo en Equipo:</strong> Juntos en cada desafío.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

