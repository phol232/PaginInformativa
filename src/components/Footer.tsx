import { ChevronRight, Facebook, Instagram, Mail, MapPin, MessageSquareText, Phone } from 'lucide-react'
import { navItems, site } from '@/lib/site'

const serviceLinks = [
  { href: '#productos', label: 'Materiales de construcción' },
  { href: '#servicios', label: 'Herramientas profesionales' },
  { href: '#servicios', label: 'Asesoría técnica' },
  { href: '#servicios', label: 'Proyectos personalizados' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-navy-700 text-navy-100/80">
      <div className="bg-blueprint absolute inset-0" aria-hidden="true" />
      <div className="container-page relative">
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt={site.name} width={888} height={264} className="h-14 w-auto" />
            <p className="mt-6 max-w-sm leading-relaxed">
              Tu aliado confiable en construcción con más de 25 años de experiencia y cobertura a nivel nacional.
            </p>
            <a
              href="#contacto"
              className="btn-primary mt-6 px-5 py-2.5 text-sm"
            >
              <MessageSquareText className="h-4 w-4" aria-hidden="true" />
              Solicitar información
            </a>
          </div>

          <nav className="lg:col-span-2" aria-label="Navegación del pie">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">Navegación</h3>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="group inline-flex items-center gap-1.5 text-sm transition-colors hover:text-white">
                    <ChevronRight className="h-3.5 w-3.5 text-amber-500 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">Servicios</h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="group inline-flex items-center gap-1.5 text-sm transition-colors hover:text-white">
                    <ChevronRight className="h-3.5 w-3.5 text-amber-500 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">Contacto</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
                <div className="min-w-0 break-words">
                  <a href={`mailto:${site.emails.admin}`} className="block transition-colors hover:text-white">{site.emails.admin}</a>
                  <a href={`mailto:${site.emails.sales}`} className="block transition-colors hover:text-white">{site.emails.sales}</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
                <a href={site.phone.href} className="transition-colors hover:text-white">{site.phone.label}</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
                <span>{site.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 sm:flex-row">
          <p className="text-sm">
            &copy; {year} {site.legalName} Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <a
              href={site.social.facebook}
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-amber-500 hover:text-navy-950"
            >
              <Facebook className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
            <a
              href={site.social.instagram}
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-amber-500 hover:text-navy-950"
            >
              <Instagram className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
