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
        "img-primary": "url('./src/assets/espetinho.jpg')",
        "img-secondary": "url('./src/assets/janta.jpg')",
      },
      colors: {
        main: '#f97316',
        dark: '#28282B',
      },
    },
  },
  plugins: [require("tailwindcss-radix")({
    variantPrefix: "rdx"
  })],
};
