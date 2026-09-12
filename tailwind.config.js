/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            50: '#F0F5FC',
            100: '#E1ECFA',
            200: '#C2DAF5',
            300: '#94BEED',
            400: '#5F9CE2',
            500: '#387BD4',
            600: '#2360B8',
            700: '#1B4D95',
            800: '#194383', // Exact Brand Blue from Logo
            900: '#143567',
            950: '#0C203E',
          },
          orange: {
            50: '#FFF7ED',
            100: '#FFEDD5',
            200: '#FED7AA',
            300: '#FDBA74',
            400: '#FB923C',
            500: '#E87722', // Exact Brand Orange from Logo
            600: '#D56213',
            700: '#B24B11',
            800: '#8E3C14',
            900: '#733314',
            950: '#3E1707',
          },
          navy: {
            800: '#0F274E',
            900: '#0A1C38',
            950: '#061326',
          }
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      boxShadow: {
        'subtle': '0 2px 8px -2px rgba(15, 39, 78, 0.05), 0 1px 4px -1px rgba(15, 39, 78, 0.04)',
        'premium': '0 12px 32px -8px rgba(25, 67, 131, 0.08), 0 4px 12px -2px rgba(25, 67, 131, 0.04)',
        'card-hover': '0 20px 40px -12px rgba(25, 67, 131, 0.14), 0 8px 16px -4px rgba(232, 119, 34, 0.08)',
        'glow-orange': '0 0 24px -4px rgba(232, 119, 34, 0.35)',
        'glow-blue': '0 0 28px -4px rgba(25, 67, 131, 0.3)',
      },
    },
  },
  plugins: [],
}
