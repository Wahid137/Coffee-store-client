/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          //"primary": "#570df8",

          //"secondary": "#f000b8",

          //"accent": "#1dcdbc",

          //"neutral": "#2b3440",

          "base-100": "#ffffff",

          //"info": "#3abff8",

          //"success": "#36d399",

          //"warning": "#fbbd23",

          "error": "#431407",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

