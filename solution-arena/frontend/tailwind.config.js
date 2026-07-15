/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // IBM Color Palette
        'ibm-blue-60': '#0F62FE',
        'ibm-blue-70': '#0043CE',
        'ibm-blue-80': '#002D9C',
        'ibm-blue-100': '#001141',
        
        // Neutral Grays
        'ibm-white': '#FFFFFF',
        'ibm-gray-10': '#F4F4F4',
        'ibm-gray-20': '#E0E0E0',
        'ibm-gray-30': '#C6C6C6',
        'ibm-gray-50': '#8D8D8D',
        'ibm-gray-70': '#525252',
        'ibm-gray-90': '#262626',
        'ibm-gray-100': '#161616',
        
        // Status Colors (used sparingly)
        'ibm-green': '#24A148',
        'ibm-red': '#DA1E28',
        'ibm-yellow': '#F1C21B',
      },
      fontFamily: {
        'sans': ['IBM Plex Sans', 'Inter', 'system-ui', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
      },
      borderRadius: {
        'sm': '2px',
        'DEFAULT': '4px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      transitionDuration: {
        '120': '120ms',
        '150': '150ms',
        '200': '200ms',
      },
      boxShadow: {
        'overlay': '0 4px 12px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}

// Made with Bob
