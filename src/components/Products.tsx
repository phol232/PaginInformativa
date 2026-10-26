'use client'

import { useMemo, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BrickWall,
  Cable,
  Columns3,
  Construction,
  Crosshair,
  Drill,
  Droplets,
  Hammer,
  LayoutGrid,
  Mountain,
  Package,
  PaintRoller,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

type Product = { name: string; category: string; description: string; icon: LucideIcon }

const products: Product[] = [
  { name: 'Cemento Portland', category: 'Materiales', description: 'Cemento de alta calidad para construcción.', icon: Package },
  { name: 'Ladrillos', category: 'Materiales', description: 'Ladrillos de arcilla para muros y estructuras.', icon: BrickWall },
  { name: 'Varillas de Acero', category: 'Materiales', description: 'Varillas corrugadas para refuerzo estructural.', icon: Columns3 },
  { name: 'Arena y Piedra', category: 'Materiales', description: 'Agregados para concreto y mortero.', icon: Mountain },
  { name: 'Taladro Percutor', category: 'Herramientas', description: 'Herramienta eléctrica profesional.', icon: Drill },
  { name: 'Martillo Demoledor', category: 'Herramientas', description: 'Equipo pesado para demolición.', icon: Hammer },
  { name: 'Nivel Láser', category: 'Herramientas', description: 'Equipo de precisión para nivelación.', icon: Crosshair },
  { name: 'Andamios', category: 'Equipamiento', description: 'Sistemas modulares de seguridad.', icon: Construction },
  { name: 'Pinturas y Barnices', category: 'Acabados', description: 'Productos de acabado y protección.', icon: PaintRoller },
  { name: 'Tuberías PVC', category: 'Instalaciones', description: 'Sistemas de conducción de agua.', icon: Droplets },
  { name: 'Cables Eléctricos', category: 'Instalaciones', description: 'Conductores para instalaciones eléctricas.', icon: Cable },
  { name: 'Cerámicos y Porcelanato', category: 'Acabados', description: 'Revestimientos de alta calidad.', icon: LayoutGrid },
]

const ALL = 'Todos'
const categories = [ALL, ...Array.from(new Set(products.map((p) => p.category)))]

export default function Products() {
  const [category, setCategory] = useState(ALL)
  const visible = useMemo(
    () => (category === ALL ? products : products.filter((p) => p.category === category)),
    [category]
  )

  return (
    <section id="productos" className="section relative bg-white dark:bg-navy-950">
      <div className="container-page">
        <SectionHeading
          eyebrow="Catálogo"
          title="Nuestros productos"
          description="Todo lo que necesitas para tu proyecto de construcción, de las marcas líderes del mercado."
        />

        <Reveal>
          <div
            role="tablist"
            aria-label="Filtrar por categoría"
            className="-mx-5 mb-10 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
          >
            {categories.map((cat) => {
              const selected = cat === category
              const count = cat === ALL ? products.length : products.filter((p) => p.category === cat).length
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setCategory(cat)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    selected
                      ? 'border-navy-700 bg-navy-700 text-white shadow-card'
                      : 'border-slate-200 dark:border-white/10 bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-400 hover:border-navy-200 hover:text-navy-700'
                  }`}
                >
                  {cat}
                  <span
                    className={`rounded-full px-1.5 text-xs ${selected ? 'bg-white/15 text-white' : 'bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400'}`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" aria-live="polite">
          {visible.map(({ name, category: cat, description, icon: Icon }) => (
            <li key={name} className="animate-fade-up">
              <article className="card group relative flex h-full flex-col overflow-hidden p-6 hover:-translate-y-1 hover:border-amber-500/60 hover:shadow-card-hover">
                <span
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-amber-500 transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <div className="flex items-start justify-between">
                  <span className="icon-tile h-14 w-14 group-hover:bg-amber-500 group-hover:text-navy-950 group-hover:ring-amber-500">
                    <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-slate-100 dark:bg-white/10 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-400">{cat}</span>
                </div>
                <h3 className="mt-6 text-lg font-bold">{name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{description}</p>
              </article>
            </li>
          ))}
        </ul>

        <Reveal className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-slate-600 dark:text-slate-400">¿No encuentras lo que buscas? Contamos con una amplia gama de productos.</p>
          <a href="#contacto" className="btn-secondary group">
            Consultar disponibilidad
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
