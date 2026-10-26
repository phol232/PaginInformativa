'use client'

import { useEffect, useState } from 'react'
import { Menu, ShoppingCart, X } from 'lucide-react'
import { navItems, site } from '@/lib/site'
import ThemeToggle from './ui/ThemeToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [active, setActive] = useState<string>('#inicio')

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Resalta el enlace de la sección visible
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isMenuOpen])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? 'border-white/10 bg-navy-700/95 shadow-[0_8px_30px_-12px_rgba(8,24,51,0.5)] backdrop-blur-md'
          : 'border-transparent bg-navy-700'
      }`}
    >
      <div
        className={`container-page flex items-center justify-between gap-6 transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}
      >
        <a href="#inicio" className="flex shrink-0 items-center" aria-label={`${site.name}, ir al inicio`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt={site.name}
            width={888}
            height={264}
            className={`w-auto transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`}
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {navItems.map((item) => {
            const isActive = active === item.href
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'location' : undefined}
                className={`relative rounded-md px-3.5 py-2 text-[15px] font-medium transition-colors ${
                  isActive ? 'text-white' : 'text-navy-100/80 hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-amber-500 transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                  aria-hidden="true"
                />
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={site.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden px-5 py-2.5 text-sm sm:inline-flex"
          >
            <ShoppingCart className="h-4 w-4" aria-hidden="true" />
            Tienda Online
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            aria-controls="menu-movil"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        id="menu-movil"
        className={`overflow-hidden border-t border-white/10 bg-navy-800 transition-[max-height,opacity] duration-300 lg:hidden ${
          isMenuOpen ? 'max-h-[32rem] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <nav className="container-page flex flex-col py-4" aria-label="Móvil">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                active === item.href ? 'bg-white/10 text-white' : 'text-navy-100/85 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.label}
              {active === item.href && <span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden="true" />}
            </a>
          ))}
          <a
            href={site.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-3 w-full sm:hidden"
          >
            <ShoppingCart className="h-4 w-4" aria-hidden="true" />
            Ir a Tienda Online
          </a>
        </nav>
      </div>
    </header>
  )
}
