/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['Press Start 2P', 'cursive'],
      },
      colors: {
        neon: {
          yellow: '#FFFF33',
        }
      }
    }
  },
  plugins: [],
}

