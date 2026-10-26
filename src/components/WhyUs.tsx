import { Award, BadgeDollarSign, Boxes, Globe2, HardHat, Medal } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const reasons = [
  {
    icon: Award,
    title: 'Más de 25 años de experiencia',
    text: 'Trayectoria comprobada en el mercado de materiales de construcción.',
  },
  {
    icon: Globe2,
    title: 'Cobertura nacional',
    text: 'Presencia en todo el Perú para atender tus proyectos donde los necesites.',
  },
  {
    icon: Medal,
    title: 'Marcas líderes',
    text: 'Trabajamos con los mejores proveedores y marcas reconocidas del mercado.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Precios competitivos',
    text: 'La mejor relación calidad-precio del mercado para tu proyecto.',
  },
  {
    icon: HardHat,
    title: 'Asesoría profesional',
    text: 'Equipo técnico especializado para guiarte en cada etapa de tu obra.',
  },
  {
    icon: Boxes,
    title: 'Soluciones integrales',
    text: 'Todo lo que necesitas para tu proyecto en un solo lugar.',
  },
]

export default function WhyUs() {
  return (
    <section className="section relative overflow-hidden bg-navy-900">
      <div className="bg-blueprint absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-amber-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <SectionHeading
          tone="dark"
          eyebrow="Por qué elegirnos"
          title="Somos tu mejor aliado en la construcción"
          description="Respaldo, experiencia y un equipo comprometido con el éxito de cada obra."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 80} className="h-full">
              <div className="group h-full bg-navy-900 p-8 transition-colors duration-300 hover:bg-navy-800 sm:p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-navy-950 transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
                <p className="mt-2 leading-relaxed text-navy-100/75">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
