'use client'

import { useState, type FormEvent } from 'react'
import { AlertCircle, CheckCircle2, Clock, Facebook, Globe, Instagram, Mail, MapPin, Phone, Send } from 'lucide-react'
import { site } from '@/lib/site'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

type Fields = { name: string; email: string; phone: string; topic: string; message: string }
type Errors = Partial<Record<keyof Fields, string>>

const initial: Fields = { name: '', email: '', phone: '', topic: 'Cotización de materiales', message: '' }
const topics = ['Cotización de materiales', 'Herramientas y equipos', 'Asesoría técnica', 'Proyecto corporativo', 'Otro']

function validate(f: Fields): Errors {
  const errors: Errors = {}
  if (f.name.trim().length < 2) errors.name = 'Ingresa tu nombre completo.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) errors.email = 'Ingresa un correo electrónico válido.'
  if (f.phone && !/^[+\d\s()-]{6,}$/.test(f.phone.trim())) errors.phone = 'Ingresa un teléfono válido.'
  if (f.message.trim().length < 10) errors.message = 'Cuéntanos un poco más (mínimo 10 caracteres).'
  return errors
}

const inputBase =
  'block w-full rounded-lg border bg-white dark:bg-navy-900 px-4 py-3 text-[15px] text-navy-950 placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500 transition-colors focus:outline-none focus:ring-4'

function inputClass(hasError: boolean) {
  return `${inputBase} ${
    hasError
      ? 'border-red-400 focus:border-red-500 focus:ring-red-100 dark:focus:ring-red-500/20'
      : 'border-slate-300 dark:border-white/15 focus:border-navy-600 focus:ring-navy-100 dark:focus:border-amber-500 dark:focus:ring-amber-500/20'
  }`
}

export default function Contact() {
  const [fields, setFields] = useState<Fields>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const update = (key: keyof Fields) => (e: { target: { value: string } }) => {
    setFields((prev) => ({ ...prev, [key]: e.target.value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const found = validate(fields)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0]
      document.getElementById(`contact-${first}`)?.focus()
      return
    }

    const details = [
      `Nombre: ${fields.name}`,
      `Correo: ${fields.email}`,
      ...(fields.phone ? [`Teléfono: ${fields.phone}`] : []),
      `Tipo de consulta: ${fields.topic}`,
    ]
    const body = `${details.join('\n')}\n\n${fields.message}`

    window.location.href = `mailto:${site.emails.sales}?subject=${encodeURIComponent(
      `${fields.topic} — ${fields.name}`
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
    setFields(initial)
  }

  const contactItems = [
    {
      icon: Mail,
      title: 'Correo electrónico',
      content: (
        <>
          <a href={`mailto:${site.emails.admin}`} className="block hover:text-navy-600">{site.emails.admin}</a>
          <a href={`mailto:${site.emails.sales}`} className="block hover:text-navy-600">{site.emails.sales}</a>
        </>
      ),
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: <a href={site.phone.href} className="hover:text-navy-600">{site.phone.label}</a>,
    },
    { icon: MapPin, title: 'Dirección', content: site.address },
    {
      icon: Globe,
      title: 'Sitio web',
      content: <a href={site.url} className="hover:text-navy-600">socioconstructor.pe</a>,
    },
  ]

  return (
    <section id="contacto" className="section relative bg-slate-50 dark:bg-navy-900/40">
      <div className="bg-blueprint-light absolute inset-0" aria-hidden="true" />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos de tu próximo proyecto"
          description="Estamos aquí para ayudarte. Escríbenos y un asesor te responderá a la brevedad."
        />

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Formulario */}
          <Reveal className="min-w-0 lg:order-2 lg:col-span-7">
            <div className="card h-full p-6 sm:p-10">
              <h3 className="text-2xl font-bold">Envíanos un mensaje</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Los campos marcados con * son obligatorios.</p>

              {sent && (
                <div
                  role="status"
                  className="mt-6 flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                  <p>
                    Abrimos tu aplicación de correo con el mensaje listo para enviar. Si no se abrió, escríbenos
                    directamente a <strong>{site.emails.sales}</strong>.
                  </p>
                </div>
              )}

              <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Nombre completo *" error={errors.name}>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    value={fields.name}
                    onChange={update('name')}
                    placeholder="Tu nombre"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    className={inputClass(!!errors.name)}
                  />
                </Field>

                <Field id="email" label="Correo electrónico *" error={errors.email}>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    value={fields.email}
                    onChange={update('email')}
                    placeholder="tu@email.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    className={inputClass(!!errors.email)}
                  />
                </Field>

                <Field id="phone" label="Teléfono" error={errors.phone}>
                  <input
                    id="contact-phone"
                    type="tel"
                    autoComplete="tel"
                    value={fields.phone}
                    onChange={update('phone')}
                    placeholder="+51 999 999 999"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                    className={inputClass(!!errors.phone)}
                  />
                </Field>

                <Field id="topic" label="Tipo de consulta">
                  <select
                    id="contact-topic"
                    value={fields.topic}
                    onChange={update('topic')}
                    className={inputClass(false)}
                  >
                    {topics.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </Field>

                <Field id="message" label="Mensaje *" error={errors.message} className="sm:col-span-2">
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={fields.message}
                    onChange={update('message')}
                    placeholder="Cuéntanos sobre tu proyecto: tipo de obra, materiales, cantidades, ubicación..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    className={`${inputClass(!!errors.message)} resize-y`}
                  />
                </Field>

                <div className="sm:col-span-2">
                  <button type="submit" className="btn-primary w-full py-4 text-base sm:w-auto sm:px-10">
                    <Send className="h-5 w-5" aria-hidden="true" />
                    Enviar mensaje
                  </button>
                </div>
              </form>
            </div>
          </Reveal>

          {/* Información */}
          <Reveal className="min-w-0 lg:order-1 lg:col-span-5" delay={100}>
            <div className="relative h-full overflow-hidden rounded-2xl bg-navy-700 p-6 text-white shadow-card sm:p-10">
              <div className="bg-blueprint absolute inset-0" aria-hidden="true" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-white">Información de contacto</h3>
                <p className="mt-2 text-navy-100/75">Atendemos consultas de empresas, contratistas y particulares.</p>

                <ul className="mt-8 space-y-6">
                  {contactItems.map(({ icon: Icon, title, content }) => (
                    <li key={title} className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-navy-950">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div className="min-w-0 break-words">
                        <p className="text-sm font-semibold uppercase tracking-wide text-navy-100/60">{title}</p>
                        <div className="mt-1 text-white [&_a]:transition-colors [&_a:hover]:text-amber-400">{content}</div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 border-t border-white/10 pt-8">
                  <p className="flex items-center gap-2 text-sm text-navy-100/75">
                    <Clock className="h-4 w-4 text-amber-400" aria-hidden="true" />
                    Respuesta en horario de oficina
                  </p>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-navy-100/60">Síguenos</p>
                  <div className="mt-3 flex items-center gap-3">
                    <a
                      href={site.social.facebook}
                      aria-label="Facebook"
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-amber-500 hover:text-navy-950"
                    >
                      <Facebook className="h-5 w-5" aria-hidden="true" />
                    </a>
                    <a
                      href={site.social.instagram}
                      aria-label="Instagram"
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-amber-500 hover:text-navy-950"
                    >
                      <Instagram className="h-5 w-5" aria-hidden="true" />
                    </a>
                    <span className="ml-1 text-sm text-navy-100/80">{site.social.handle}</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  error,
  className = '',
  children,
}: {
  id: string
  label: string
  error?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={className}>
      <label htmlFor={`contact-${id}`} className="mb-2 block text-sm font-medium text-navy-900 dark:text-white">
        {label}
      </label>
      {children}
      {error && (
        <p id={`contact-${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600 dark:text-red-400">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}
