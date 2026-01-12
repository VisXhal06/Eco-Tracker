/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        card: '#111111', // The dark gray card color
        border: '#222222',
        primary: '#8B5CF6', // Purple
        secondary: '#10B981', // Green
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}