import { ArrowRight, Building2, CalendarDays, Droplets, GraduationCap, Hospital, Hotel, Zap } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const projects = [
  {
    title: 'Hospital Regional',
    category: 'Salud',
    description: 'Suministro de materiales para construcción de hospital de 5 pisos.',
    icon: Hospital,
    year: '2024',
  },
  {
    title: 'Universidad Nacional',
    category: 'Educación',
    description: 'Materiales y herramientas para edificio de aulas modernas.',
    icon: GraduationCap,
    year: '2023',
  },
  {
    title: 'Hotel 5 Estrellas',
    category: 'Hotelería',
    description: 'Acabados de lujo y materiales premium para hotel boutique.',
    icon: Hotel,
    year: '2024',
  },
  {
    title: 'Represa Hidroeléctrica',
    category: 'Energía',
    description: 'Suministro de concreto y acero para infraestructura energética.',
    icon: Zap,
    year: '2023',
  },
  {
    title: 'Edificio Corporativo',
    category: 'Comercial',
    description: 'Torre de oficinas de 20 pisos en zona financiera.',
    icon: Building2,
    year: '2024',
  },
  {
    title: 'Sistema de Saneamiento',
    category: 'Infraestructura',
    description: 'Tuberías y materiales para red de agua potable municipal.',
    icon: Droplets,
    year: '2023',
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="section bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Proyectos"
          title="Experiencia en obras de gran envergadura"
          description="Hemos participado en proyectos de diversos sectores a nivel nacional."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, category, description, icon: Icon, year }, i) => (
            <Reveal key={title} delay={(i % 3) * 80} className="h-full">
              <article className="card group flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:shadow-card-hover">
                <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-navy-700 to-navy-950">
                  <div className="bg-blueprint absolute inset-0" aria-hidden="true" />
                  <Icon
                    className="absolute -bottom-6 -right-6 h-40 w-40 text-white/[0.06] transition-transform duration-500 group-hover:scale-110"
                    strokeWidth={1}
                    aria-hidden="true"
                  />
                  <span className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-amber-400 ring-1 ring-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-10 w-10" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className="absolute left-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-navy-950">
                    {category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex items-center gap-1.5 text-sm font-medium text-slate-500">
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                    {year}
                  </p>
                  <h3 className="mt-2 text-xl font-bold transition-colors group-hover:text-navy-600">{title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <a href="#contacto" className="btn-secondary group">
            Cuéntanos tu proyecto
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
