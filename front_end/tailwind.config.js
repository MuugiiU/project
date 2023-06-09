/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin","tailwind-scrollbar-hide")],
};
