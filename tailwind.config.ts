import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFFFFF',
          dark: '#0A0A0A',
        },
        secondary: {
          light: '#F8F6F3',
          dark: '#1A1A1A',
        },
        accent: {
          light: '#8B4513',
          dark: '#A0522D',
        },
        text: {
          light: '#2C2C2C',
          dark: '#E8E8E8',
        },
        border: {
          light: 'rgba(139, 69, 19, 0.2)',
          dark: 'rgba(160, 82, 45, 0.3)',
        }
      },
      fontFamily: {
        'display': ['Tiempos Text', 'serif'],
        'body': ['Suisse Int\'l', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'aurora': 'aurora 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'typewriter': 'typewriter 2s steps(20) 1s forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config