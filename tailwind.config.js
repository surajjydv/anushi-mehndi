/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        henna: {
          50: '#fdf6f4',
          100: '#fbe9e7',
          200: '#f7d5cf',
          300: '#f0b4a8',
          400: '#e38573',
          500: '#c54933',
          600: '#a3311f',
          700: '#872314',
          800: '#6d1c10',
          900: '#581910',
          950: '#320b06',
        },
        champagne: {
          50: '#faf8f3',
          100: '#f4ede0',
          200: '#e7d8be',
          300: '#d7be94',
          400: '#c59f6b',
          500: '#b8894d',
          600: '#a3713f',
          700: '#835433',
          800: '#6c442e',
          900: '#5a3928',
        },
        surface: {
          light: '#fdfcf9',
          muted: '#f6f3ee',
          card: '#ffffff',
          dark: '#141210',
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.02)',
        'lift': '0 4px 12px -2px rgba(60, 20, 10, 0.06), 0 2px 4px -2px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
};
