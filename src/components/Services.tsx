import { ClipboardList, Cog, MessageSquareText, PackageCheck, Ruler, Store, Truck, Wrench } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const services = [
  {
    icon: Store,
    title: 'Venta de materiales',
    text: 'Amplio catálogo de materiales de construcción de las mejores marcas del mercado.',
  },
  {
    icon: Wrench,
    title: 'Herramientas profesionales',
    text: 'Equipamiento especializado para profesionales de la construcción.',
  },
  {
    icon: Cog,
    title: 'Asesoría técnica',
    text: 'Expertos en construcción te guían en cada etapa de tu proyecto.',
  },
  {
    icon: Ruler,
    title: 'Proyectos personalizados',
    text: 'Soluciones adaptadas a las necesidades específicas de tu obra.',
  },
]

const steps = [
  { icon: MessageSquareText, title: 'Cuéntanos tu proyecto', text: 'Escríbenos con los detalles y requerimientos de tu obra.' },
  { icon: ClipboardList, title: 'Recibe tu cotización', text: 'Te asesoramos y preparamos una propuesta a tu medida.' },
  { icon: PackageCheck, title: 'Confirmamos el pedido', text: 'Validamos productos, cantidades y plazos contigo.' },
  { icon: Truck, title: 'Entrega en tu obra', text: 'Coordinamos el despacho con cobertura a nivel nacional.' },
]

export default function Services() {
  return (
    <section id="servicios" className="section relative bg-slate-50 dark:bg-navy-900/40">
      <div className="bg-blueprint-light absolute inset-0" aria-hidden="true" />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Servicios"
          title="Soluciones integrales para la construcción"
          description="Acompañamos a profesionales, empresas y particulares desde la planificación hasta la entrega."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80} className="h-full">
              <article className="card group h-full p-7 hover:-translate-y-1 hover:shadow-card-hover">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-700 text-white transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-navy-950">
                  <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600 dark:text-slate-400">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Proceso de trabajo */}
        <Reveal className="mt-20">
          <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-navy-900 p-8 shadow-card sm:p-12">
            <h3 className="text-center text-2xl font-bold sm:text-3xl">¿Cómo trabajamos?</h3>
            <ol className="relative mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
              <span
                className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px border-t-2 border-dashed border-navy-100 dark:border-white/10 md:block"
                aria-hidden="true"
              />
              {steps.map(({ icon: Icon, title, text }, i) => (
                <li key={title} className="relative flex gap-4 md:flex-col md:items-center md:text-center">
                  <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white dark:bg-navy-900 text-navy-700 dark:text-navy-100 ring-2 ring-navy-100 dark:ring-white/15">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 font-display text-xs font-bold text-navy-950">
                      {i + 1}
                    </span>
                  </span>
                  <div>
                    <h4 className="text-lg font-bold md:mt-5">{title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
