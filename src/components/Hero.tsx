import Image from 'next/image'
import { ArrowRight, Award, BadgeCheck, Headset, MapPinned, ShoppingCart, Truck } from 'lucide-react'
import { site } from '@/lib/site'

const highlights = [
  { icon: Award, value: '+25 años', label: 'de trayectoria en el sector' },
  { icon: MapPinned, value: 'Nacional', label: 'cobertura en todo el Perú' },
  { icon: BadgeCheck, value: 'Marcas líderes', label: 'calidad garantizada' },
  { icon: Headset, value: 'Asesoría', label: 'técnica personalizada' },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate z-10 bg-navy-950">
      <Image
        src="/construction-mana.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center]"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-900/70 lg:to-navy-900/30"
        aria-hidden="true"
      />
      <div className="bg-blueprint absolute inset-0 -z-10 opacity-60" aria-hidden="true" />

      <div className="container-page pb-36 pt-20 sm:pt-28 lg:pb-44 lg:pt-32">
        <div className="max-w-2xl">
          <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-400 backdrop-blur-sm">
            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
            Más de 25 años de experiencia
          </span>

          <h1
            className="mt-6 animate-fade-up text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            style={{ animationDelay: '80ms' }}
          >
            Construye tus sueños
            <span className="mt-2 block text-amber-500">con calidad profesional</span>
          </h1>

          <p
            className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-navy-100/85 sm:text-xl"
            style={{ animationDelay: '160ms' }}
          >
            Todo lo que necesitas para tu proyecto de construcción, remodelación o reparación:
            herramientas, materiales y asesoría experta.
          </p>

          <div
            className="mt-10 flex animate-fade-up flex-col gap-3 sm:flex-row"
            style={{ animationDelay: '240ms' }}
          >
            <a href={site.storeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary px-7 py-4">
              <ShoppingCart className="h-5 w-5" aria-hidden="true" />
              Ir a Tienda Online
            </a>
            <a href="#productos" className="btn-ghost-light group px-7 py-4">
              Ver Catálogo
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>

          <p
            className="mt-8 flex animate-fade-up items-center gap-2 text-sm text-navy-100/70"
            style={{ animationDelay: '320ms' }}
          >
            <Truck className="h-4 w-4 text-amber-500" aria-hidden="true" />
            Atendemos proyectos en todo el territorio nacional
          </p>
        </div>
      </div>

      {/* Franja de indicadores */}
      <div className="absolute inset-x-0 bottom-0 translate-y-1/2">
        <div className="container-page">
          <ul className="grid grid-cols-2 overflow-hidden rounded-2xl bg-white shadow-card-hover ring-1 ring-slate-200 lg:grid-cols-4">
            {highlights.map(({ icon: Icon, value, label }, i) => (
              <li
                key={value}
                className={`flex items-center gap-4 p-5 sm:p-6 ${i % 2 === 1 ? 'border-l border-slate-100' : ''} ${
                  i > 1 ? 'border-t border-slate-100 lg:border-t-0' : ''
                } ${i === 2 ? 'lg:border-l' : ''}`}
              >
                <span className="icon-tile hidden sm:flex">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-navy-900 sm:text-xl">{value}</p>
                  <p className="text-sm text-slate-500">{label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
