/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#132442",
        brillantblue: "#008CFF",
        lightblue: "#8FD7F7",
        offwhite: "#E9E9E9",
      }
    },
  },
  plugins: [],
}

