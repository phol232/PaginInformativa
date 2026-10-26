import type { Metadata, Viewport } from 'next'
import { Barlow, Inter } from 'next/font/google'
import { site } from '@/lib/site'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const barlow = Barlow({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Materiales de construcción con cobertura nacional`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'materiales de construcción',
    'herramientas profesionales',
    'ferretería',
    'acero',
    'cemento',
    'asesoría técnica',
    'Perú',
    'Socio Constructor',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [{ url: '/construction-mana.jpg', width: 2220, height: 1099, alt: 'Obra en construcción' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ['/construction-mana.jpg'],
  },
  alternates: { canonical: '/' },
}

export const viewport: Viewport = {
  themeColor: '#174287',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.legalName,
  url: site.url,
  logo: `${site.url}/logo.png`,
  description: site.description,
  email: site.emails.sales,
  areaServed: 'PE',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${barlow.variable}`}>
      <body>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-amber-500 focus:px-4 focus:py-2 focus:font-semibold focus:text-navy-950"
        >
          Saltar al contenido
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
