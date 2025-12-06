import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#faf7f4',
          100: '#f5ede4',
          200: '#ead9c9',
          300: '#ddc0a6',
          400: '#c99d7a',
          500: '#b8825a',
          600: '#a96d4a',
          700: '#8c563e',
          800: '#734836',
          900: '#5f3d2f',
        },
        earth: {
          50: '#f6f5f3',
          100: '#e8e5df',
          200: '#d3cdc2',
          300: '#b5ab9a',
          400: '#9a8c7a',
          500: '#847765',
          600: '#6d6254',
          700: '#5a5047',
          800: '#4d443d',
          900: '#423b35',
        },
        accent: {
          orange: '#f97316',
          coral: '#ff6b6b',
          green: '#22c55e',
        },
        emblematic: {
          green: '#1a5f3f',
          gold: '#d4af37',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-crimson)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config

