/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'azul-institucional': '#174287',
        'amarillo-constructor': '#f5aa10',
        'verde-equilibrio': '#4b7f52',
        'gris-claro': '#f2f2f2',
        'azul-tecnico': '#6b9bbd',
        'arena-neutro': '#d6bfa6',
        navy: {
          50: '#eef3fb',
          100: '#d9e3f4',
          200: '#b3c6e8',
          600: '#1d4f9e',
          700: '#174287',
          800: '#12346b',
          900: '#0d264f',
          950: '#081833',
        },
        amber: {
          50: '#fff8e8',
          100: '#feedc4',
          400: '#f7b938',
          500: '#f5aa10',
          600: '#d98f04',
          700: '#b47006',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(8,24,51,0.04), 0 8px 24px -12px rgba(8,24,51,0.12)',
        'card-hover': '0 2px 4px rgba(8,24,51,0.06), 0 24px 48px -16px rgba(8,24,51,0.22)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
