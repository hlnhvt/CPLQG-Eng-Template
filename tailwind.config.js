/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0a348b',
        'brand-light-blue': '#1657D9',
        'brand-red': '#cc0000',
      }
    },
  },
  plugins: [],
}
