/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'tiktok-pink': '#fe2c55',
          'tiktok-blue': '#25f4ee',
        }
      },
    },
    plugins: [],
  };