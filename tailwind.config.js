/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ponytail: flat named palette, no 50–900 scales — six colors is the whole system
      colors: {
        pizarra: '#262321', // chalkboard: dark sections, headings, body text
        verde: {
          DEFAULT: '#3F5C4E', // persiana verde: buttons, dominant accent
          700: '#334B40', // hover only
        },
        papel: '#EDE6D6', // page background
        oro: '#C9A227', // prices, small highlights — dark backgrounds only (1.9:1 on papel)
        almagre: '#A13D2B', // eyebrow labels, small accents
        barra: '#9AA39C', // borders, dividers, secondary text
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
        hand: ['var(--font-hand)', 'Comic Sans MS', 'cursive'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
}
