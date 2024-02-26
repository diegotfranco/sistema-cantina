/** @type {import('tailwindcss').Config} */
export default {
  important: '#root',
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './index.html'
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'Helvetica Neue', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        "img-primary": "url('./src/assets/espetinho.webp')",
        "img-secondary": "url('./src/assets/janta.webp')",
      },
      colors: {
        main: '#f97316',
        dark: '#28282B',
      },
      fontFamily:{
        'open-sans': ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [require("tailwindcss-radix")({
    variantPrefix: "rdx"
  })],
};
