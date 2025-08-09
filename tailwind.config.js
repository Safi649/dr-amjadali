/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5a4', // teal
        medblue: '#0f172a'
      }
    }
  },
  plugins: []
}

