'use client'

import { useEffect, useState } from 'react'
import { ArrowUp, ShoppingCart } from 'lucide-react'
import { site } from '@/lib/site'

export default function FloatingEcommerceButton() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Volver arriba"
        tabIndex={showTop ? 0 : -1}
        className={`flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy-700 shadow-card-hover ring-1 ring-slate-200 transition-all duration-300 hover:bg-navy-50 ${
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <ArrowUp className="h-5 w-5" aria-hidden="true" />
      </button>
      <a
        href={site.storeUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ir a la tienda online"
        className="group relative flex items-center gap-2.5 rounded-full bg-amber-500 px-5 py-3.5 font-semibold text-navy-950 shadow-[0_12px_32px_-8px_rgba(245,170,16,0.75)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-400"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-amber-500/40 [animation-duration:2.5s]" aria-hidden="true" />
        <ShoppingCart className="h-5 w-5" aria-hidden="true" />
        <span className="hidden sm:inline">Comprar ahora</span>
      </a>
    </div>
  )
}
