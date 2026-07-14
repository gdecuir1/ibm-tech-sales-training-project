/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mission Console Palette
        'console-bg': '#0A0E14',
        'console-surface': '#161B22',
        'console-surface-light': '#21262D',
        'ibm-blue': '#0F62FE',
        'ibm-blue-hover': '#0353E9',
        'ibm-purple': '#8A3FFC',
        'ibm-green': '#24A148',
        'ibm-green-dark': '#198038',
        'console-text': '#F4F4F4',
        'console-text-dim': '#8D8D8D',
      },
      fontFamily: {
        'sans': ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
      },
      letterSpacing: {
        'console': '-0.02em',
      },
      animation: {
        'slide-in': 'slideIn 0.15s ease-out',
        'count-up': 'countUp 0.3s ease-out',
        'progress-fill': 'progressFill 0.4s ease-out',
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        progressFill: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      transitionDuration: {
        '150': '150ms',
      },
    },
  },
  plugins: [],
}

// Made with Bob
