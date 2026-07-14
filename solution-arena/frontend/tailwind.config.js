/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Atmospheric Surface Palette
        'console-bg': '#0A0E14',
        'ibm-blue': '#0F62FE',
        'ibm-blue-hover': '#0353E9',
        'ibm-purple': '#8A3FFC',
        'ibm-green': '#24A148',
        'ibm-red': '#DA1E28',
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
        'glow-drift-blue': 'glowDriftBlue 20s ease-in-out infinite',
        'glow-drift-purple': 'glowDriftPurple 25s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
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
        glowDriftBlue: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: '0.05'
          },
          '33%': {
            transform: 'translate(30px, -20px) scale(1.1)',
            opacity: '0.08'
          },
          '66%': {
            transform: 'translate(-20px, 30px) scale(0.9)',
            opacity: '0.06'
          },
        },
        glowDriftPurple: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: '0.05'
          },
          '33%': {
            transform: 'translate(-30px, 20px) scale(1.1)',
            opacity: '0.08'
          },
          '66%': {
            transform: 'translate(20px, -30px) scale(0.9)',
            opacity: '0.06'
          },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
      },
      transitionDuration: {
        '150': '150ms',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}

// Made with Bob
