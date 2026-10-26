'use client'

import { ArrowRight, ArrowUpRight, BrickWall, Cable, Drill, Headset, PaintRoller, ShieldCheck, Truck } from 'lucide-react'
import { PRODUCT_FILTER_EVENT } from './Products'

const categories = [
  { name: 'Materiales', text: 'Cemento, acero, ladrillos', icon: BrickWall },
  { name: 'Herramientas', text: 'Equipos profesionales', icon: Drill },
  { name: 'Acabados', text: 'Pinturas y porcelanatos', icon: PaintRoller },
  { name: 'Instalaciones', text: 'Tuberías y cableado', icon: Cable },
]

function openCategory(category: string) {
  window.dispatchEvent(new CustomEvent(PRODUCT_FILTER_EVENT, { detail: category }))
  document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function HeroPanel() {
  return (
    <div className="relative animate-fade-up" style={{ animationDelay: '200ms' }}>
      {/* Insignias flotantes */}
      <div className="absolute -top-5 right-6 z-10 flex items-center gap-2.5 rounded-xl bg-white px-4 py-2.5 shadow-card-hover dark:bg-navy-900 dark:ring-1 dark:ring-white/10">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
          <ShieldCheck className="h-[18px] w-[18px]" aria-hidden="true" />
        </span>
        <span className="text-sm font-semibold text-navy-900 dark:text-white">Calidad garantizada</span>
      </div>

      <div className="rounded-3xl border border-white/15 bg-navy-950/55 p-7 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">Catálogo</p>
        <h2 className="mt-2 text-2xl font-bold text-white">¿Qué necesitas para tu obra?</h2>
        <p className="mt-1 text-sm text-navy-100/70">Explora nuestros productos por categoría.</p>

        <ul className="mt-6 grid grid-cols-2 gap-3">
          {categories.map(({ name, text, icon: Icon }) => (
            <li key={name}>
              <button
                type="button"
                onClick={() => openCategory(name)}
                className="group flex h-full w-full flex-col items-start rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-500/50 hover:bg-white/10"
              >
                <span className="flex w-full items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-navy-950">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-navy-100/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-400"
                    aria-hidden="true"
                  />
                </span>
                <span className="mt-4 font-display text-base font-bold text-white">{name}</span>
                <span className="mt-0.5 text-xs leading-snug text-navy-100/65">{text}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-4 rounded-2xl bg-white p-4 dark:bg-navy-900 dark:ring-1 dark:ring-white/10">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-700 text-white">
            <Headset className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-display text-[15px] font-bold leading-tight text-navy-900 dark:text-white">
              ¿Necesitas asesoría técnica?
            </p>
            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">Te ayudamos a elegir los materiales correctos.</p>
          </div>
          <a
            href="#contacto"
            aria-label="Solicitar cotización"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 text-navy-950 transition-transform hover:translate-x-0.5 hover:bg-amber-400"
          >
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="absolute -bottom-5 -right-4 flex items-center gap-2.5 rounded-xl bg-amber-500 px-4 py-2.5 shadow-card-hover">
        <Truck className="h-[18px] w-[18px] text-navy-950" aria-hidden="true" />
        <span className="text-sm font-semibold text-navy-950">Cobertura nacional</span>
      </div>
    </div>
  )
}
