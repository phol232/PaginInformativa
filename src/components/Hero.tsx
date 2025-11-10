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
              href="https://www.promart.pe/?srsltid=AfmBOoqe2NP-W0iLFtWyhdCS1EnmIfqEqKuiGp0hCTAZRExSpeQ9ufza"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amarillo-constructor text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              Ir a Tienda Online
            </a>
            <a 
              href="#productos"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-azul-institucional transition-all"
            >
              Ver Catálogo
            </a>
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

        {/* Por Qué Elegirnos Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Somos tu mejor aliado en la construcción
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all group">
              <div className="w-20 h-20 bg-amarillo-constructor rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Más de 25 Años de Experiencia
              </h3>
              <p className="text-gray-200 leading-relaxed">
                Trayectoria comprobada en el mercado de materiales de construcción.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all group">
              <div className="w-20 h-20 bg-amarillo-constructor rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Cobertura Nacional
              </h3>
              <p className="text-gray-200 leading-relaxed">
                Presencia en todo el Perú para atender tus proyectos donde los necesites.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all group">
              <div className="w-20 h-20 bg-amarillo-constructor rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Marcas Líderes
              </h3>
              <p className="text-gray-200 leading-relaxed">
                Trabajamos con los mejores proveedores y marcas reconocidas del mercado.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all group">
              <div className="w-20 h-20 bg-amarillo-constructor rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Precios Competitivos
              </h3>
              <p className="text-gray-200 leading-relaxed">
                La mejor relación calidad-precio del mercado para tu proyecto.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all group">
              <div className="w-20 h-20 bg-amarillo-constructor rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Asesoría Profesional
              </h3>
              <p className="text-gray-200 leading-relaxed">
                Equipo técnico especializado para guiarte en cada etapa de tu obra.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all group">
              <div className="w-20 h-20 bg-amarillo-constructor rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Soluciones Integrales
              </h3>
              <p className="text-gray-200 leading-relaxed">
                Todo lo que necesitas para tu proyecto en un solo lugar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

