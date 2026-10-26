import { ArrowRight, Mail, ShoppingCart } from 'lucide-react'
import { site } from '@/lib/site'
import Reveal from './ui/Reveal'

export default function CallToAction() {
  return (
    <section className="bg-white dark:bg-navy-950 pb-20 md:pb-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-amber-500 px-8 py-12 sm:px-14 sm:py-16">
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(-45deg, #081833 0 18px, transparent 18px 36px)',
              }}
              aria-hidden="true"
            />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-extrabold text-navy-950 sm:text-4xl">¿Tienes un proyecto en mente?</h2>
                <p className="mt-3 text-lg text-navy-900/80">
                  Cotiza con nosotros y recibe asesoría profesional para elegir los materiales correctos.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <a href="#contacto" className="btn group bg-navy-950 text-white hover:bg-navy-800">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  Solicitar cotización
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
                <a
                  href={site.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border border-navy-950/20 bg-white/40 text-navy-950 hover:bg-white/70"
                >
                  <ShoppingCart className="h-5 w-5" aria-hidden="true" />
                  Tienda Online
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
