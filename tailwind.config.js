/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./node_modules/preline/dist/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#F59E0B",
        accent: "#10B981"
      },
    },
  },
  plugins: [require("@preline/theme-switch")],
}
