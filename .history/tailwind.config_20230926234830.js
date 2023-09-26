/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        coffeeTheme: {
          primary: '#ED5E68',
          secondary: '#45A29E',
          accent: '#0B0C10',
          neutral: '#1F2833',
          info: '#F9FAFB',
          warning: '#F0FDFA',
          error: '#444B53'

        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

