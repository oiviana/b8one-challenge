/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-green-100': '#A3F9B9',
        'c-green-400': '#40B25C',
        'c-green-600': '#1C6C3E',
        'c-red-500': '#DA4B4F',
        'c-red-600': '#C22539',
        'c-pink-100': '#FEE5EC',
        'c-grayscale-0': '#FFFFFF',
        'c-grayscale-200': '#F2F3F6',
        'c-grayscale-600': '#B5B5B6',
        'c-grayscale-700': '#848587',
        'c-grayscale-900': '#1C1C1C',
      },
    },
  },
  plugins: [],
}
