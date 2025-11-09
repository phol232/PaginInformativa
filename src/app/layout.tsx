import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Socio Constructor - Seguridad y Confianza',
  description: 'Más de 25 años de experiencia en construcción, herramientas profesionales y asesoría experta.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

