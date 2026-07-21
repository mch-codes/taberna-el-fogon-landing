/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#a8532a',
          50: '#fdf5ef',
          100: '#faeadd',
          200: '#f3d0b3',
          300: '#e9ae7e',
          400: '#dd8a52',
          500: '#c96b34',
          600: '#a8532a',
          700: '#854225',
          800: '#6c3620',
          900: '#1a1512', // ponytail: darkest step = near-black for dark sections/headings (PDF), not brown
        },
        acento: {
          DEFAULT: '#e0562a',
          50: '#fdf3ee',
          100: '#fbe4d8',
          200: '#f6c4ab',
          300: '#ef9e77',
          400: '#e87548',
          500: '#f26a3a',
          600: '#e0562a',
          700: '#bd4420',
          800: '#98371b',
          900: '#7c2f19',
        },
        crema: {
          DEFAULT: '#faf1de',
          100: '#f2e2bf',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
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
