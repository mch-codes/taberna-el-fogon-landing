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
          900: '#592d1c',
        },
        acento: {
          DEFAULT: '#82232c',
          50: '#fbf1f1',
          100: '#f6dbdd',
          200: '#eab3b8',
          300: '#d8828b',
          400: '#c05560',
          500: '#a13540',
          600: '#82232c',
          700: '#671b23',
          800: '#55191f',
          900: '#48181d',
        },
        crema: {
          DEFAULT: '#faf1de',
          100: '#f2e2bf',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
}
