/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // A sintaxe "rgb(from var(...) r g b / <alpha-value>)" permite usar
        // utilitários de opacidade do Tailwind (ex: text-white/90) mantendo as
        // variáveis de cor em formato hexadecimal simples no index.css.
        background: 'rgb(from var(--color-background) r g b / <alpha-value>)',
        primary: 'rgb(from var(--color-primary) r g b / <alpha-value>)',
        secondary: 'rgb(from var(--color-secondary) r g b / <alpha-value>)',
        text: 'rgb(from var(--color-text) r g b / <alpha-value>)',
        white: 'rgb(from var(--color-white) r g b / <alpha-value>)',
      },
      fontFamily: {
        heading: 'var(--font-heading)',
        body: 'var(--font-body)',
      },
    },
  },
  plugins: [],
}
