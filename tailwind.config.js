/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bf: {
          pink: '#e60064',
          pinkHot: '#ff007a',
          pinkLight: '#ffe5f0',
          dark: '#111111',
          darkMuted: '#2a2a2a',
          gray: '#555555',
          lightGray: '#f4f5f7',
          border: '#e5e7eb',
          blackSection: '#08080a',
          cardDark: '#121216',
          yellow: '#fbbf24',
          blue: '#2563eb',
        }
      },
      fontFamily: {
        body: ['"Plus Jakarta Sans"', 'Roboto', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Space Grotesk"', 'sans-serif'],
        condensed: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'fadeIn': 'fadeIn 0.2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      }
    },
  },
  plugins: [],
}
