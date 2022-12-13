/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
},
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        pm: ["Permanent Marker", "sans-serif"],
      },
    },
  },
  plugins: [],
}



