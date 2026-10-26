import { Check, Eye, Flame, Handshake, Lightbulb, Scale, Target, Users } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const commitments = [
  'Contar con una amplia gama de productos acorde a las necesidades de nuestros clientes.',
  'Contar con un equipo competente y así brindar la mejor solución integral a nuestros clientes y sus proyectos.',
  'Contar con una estructura operativa, eficaz y eficiente, que permita la cobertura a nivel nacional enfocada en cumplir con los requisitos de nuestros clientes y los legales y reglamentarios.',
  'Promover la mejora continua de nuestro SGC, así como en nuestras partes interesadas (clientes, legales y reglamentarios).',
]

const values = [
  { icon: Scale, name: 'Integridad', text: 'Actuando con honestidad y transparencia.' },
  { icon: Lightbulb, name: 'Innovación', text: 'Enfocados en mejorar nuestros procesos.' },
  { icon: Flame, name: 'Pasión', text: 'Por lo que hacemos.' },
  { icon: Handshake, name: 'Compromiso', text: 'Cada día un nuevo reto.' },
  { icon: Users, name: 'Trabajo en equipo', text: 'Juntos en cada desafío.' },
]

const sectors = ['Hospitales', 'Universidades', 'Hoteles', 'Represas', 'Hidroeléctricas', 'Edificios', 'Saneamiento', 'Entidades técnicas']

export default function About() {
  return (
    <section id="nosotros" className="section relative bg-slate-50 dark:bg-navy-900/40 pt-40 lg:pt-44">
      <div className="bg-blueprint-light absolute inset-0" aria-hidden="true" />
      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="Quiénes somos"
              title="Política de Gestión de Calidad"
              description={
                <>
                  Somos <strong className="font-semibold text-navy-800 dark:text-white">Socio Constructor S.A.C.</strong>, empresa
                  comercializadora de materiales de construcción a precios competitivos, con cobertura a nivel nacional.
                </>
              }
            />
            <Reveal>
              <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                Trabajamos con las marcas y productos líderes del mercado, priorizando la máxima calidad, permitiendo
                que nuestros clientes lleven a cabo proyectos exitosos en diversas áreas:
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {sectors.map((sector) => (
                  <li
                    key={sector}
                    className="rounded-full border border-navy-100 dark:border-white/10 bg-white dark:bg-navy-900 px-3.5 py-1.5 text-sm font-medium text-navy-700 dark:text-navy-100"
                  >
                    {sector}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-7" delay={100}>
            <div className="card h-full p-8 sm:p-10">
              <h3 className="text-2xl font-bold">Nuestro compromiso con la excelencia</h3>
              <ul className="mt-8 space-y-6">
                {commitments.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500 text-navy-950">
                      <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <p className="leading-relaxed text-slate-600 dark:text-slate-400">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Misión, visión y valores */}
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          <Reveal>
            <article className="card group h-full p-8 hover:-translate-y-1 hover:shadow-card-hover">
              <span className="icon-tile group-hover:bg-navy-700 group-hover:text-white">
                <Target className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-2xl font-bold">Misión</h3>
              <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
                Ser un aliado estratégico para cubrir y concretar proyectos mediante la comercialización de materiales
                de construcción con la mejor calidad, garantía y al mejor precio. Brindando soluciones integrales, con
                asesoría personalizada y profesional para nuestros clientes.
              </p>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="card group h-full p-8 hover:-translate-y-1 hover:shadow-card-hover">
              <span className="icon-tile group-hover:bg-navy-700 group-hover:text-white">
                <Eye className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-2xl font-bold">Visión</h3>
              <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
                En 2030, ser reconocidos a nivel nacional generando la confianza y referencia en la industria de la
                construcción, apoyados por un excelente grupo de proveedores, el compromiso de nuestros colaboradores y
                fidelidad de los clientes.
              </p>
            </article>
          </Reveal>

          <Reveal delay={200}>
            <article className="relative h-full overflow-hidden rounded-2xl bg-navy-700 p-8 text-white shadow-card">
              <div className="bg-blueprint absolute inset-0" aria-hidden="true" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-white">Valores</h3>
                <ul className="mt-6 space-y-4">
                  {values.map(({ icon: Icon, name, text }) => (
                    <li key={name} className="flex gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-amber-400">
                        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                      </span>
                      <p className="text-sm leading-relaxed text-navy-100/85">
                        <strong className="block font-semibold text-white">{name}</strong>
                        {text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
