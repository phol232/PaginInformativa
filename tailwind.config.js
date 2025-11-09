/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
    },
  },
  plugins: [],
}

