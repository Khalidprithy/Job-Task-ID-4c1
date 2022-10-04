/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#4a69a8",

          "secondary": "#0756b7",

          "accent": "#541fd1",

          "neutral": "#1B242D",

          "base-100": "#FCFCFD",

          "info": "#96C4F8",

          "success": "#43D07C",

          "warning": "#DB940F",

          "error": "#F66A86",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}