/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  // Bootstrap ships many single-class utilities (.bg-white, .text-white, .border,
  // .top-0, spacing, …) flagged `!important`, which would otherwise beat Tailwind's
  // equally-specific utilities. Making Tailwind utilities important resolves every
  // name collision in Tailwind's favour while leaving Bootstrap's grid intact.
  important: true,
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand accent palette (indigo → violet → cyan)
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        accent: {
          cyan: '#22d3ee',
          violet: '#a78bfa',
          pink: '#f472b6',
        },
        // Neutral surface palette tuned for dark-first design
        ink: {
          950: '#070710',
          900: '#0b0b18',
          850: '#11111f',
          800: '#15152a',
          700: '#1d1d33',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(99, 102, 241, 0.55)',
        'glow-cyan': '0 0 40px -8px rgba(34, 211, 238, 0.5)',
        soft: '0 10px 40px -12px rgba(2, 6, 23, 0.25)',
        card: '0 18px 50px -20px rgba(2, 6, 23, 0.45)',
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.07) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-30px) translateX(15px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-25px, 25px) scale(0.95)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        gradientMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '80%, 100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 9s ease-in-out infinite',
        blob: 'blob 14s ease-in-out infinite',
        shimmer: 'shimmer 2.5s infinite',
        'gradient-move': 'gradientMove 6s ease infinite',
        'pulse-ring': 'pulseRing 2.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
