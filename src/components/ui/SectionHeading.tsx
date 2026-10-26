import type { ReactNode } from 'react'
import Reveal from './Reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'center' | 'left'
  tone?: 'light' | 'dark'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
}: SectionHeadingProps) {
  const centered = align === 'center'
  const dark = tone === 'dark'

  return (
    <Reveal className={`mb-14 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      <span className={`eyebrow ${dark ? 'text-amber-400' : ''}`}>
        <span className="h-px w-6 bg-current" aria-hidden="true" />
        {eyebrow}
        {centered && <span className="h-px w-6 bg-current" aria-hidden="true" />}
      </span>
      <h2
        className={`mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem] ${
          dark ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-navy-100/80' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
