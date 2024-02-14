/** @type {import('tailwindcss').Config} */
export default {
  important: '#root',
  // corePlugins: {
  //   preflight: false
  // },
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./index.html"
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto", "Helvetica Neue", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'main-img': "url('./src/assets/espetinho.jpg')",
        'secondary-img': "url('./src/assets/janta.jpg')"
      },
      colors: {
        'main': '#f97316',
        'dark': '#28282B'
      }
    },
  },
  plugins: [],
}

