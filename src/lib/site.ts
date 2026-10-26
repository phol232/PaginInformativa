export const site = {
  name: 'Socio Constructor',
  legalName: 'Socio Constructor S.A.C.',
  url: 'https://socioconstructor.pe',
  tagline: 'Seguridad y Confianza',
  description:
    'Comercializadora de materiales de construcción con más de 25 años de experiencia y cobertura a nivel nacional. Materiales, herramientas profesionales y asesoría técnica.',
  emails: {
    admin: 'administracion@socioconstructor.pe',
    sales: 'ventas@socioconstructor.pe',
  },
  phone: { label: '+51 999 999 999', href: 'tel:+51999999999' },
  address: 'Av. Principal 123, Lima, Perú',
  social: {
    facebook: '#',
    instagram: '#',
    handle: '@SocioConstructor',
  },
}

export const navItems = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#productos', label: 'Productos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
] as const
