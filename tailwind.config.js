/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    // ...
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily:{
        'Russo-One':['Russo One', 'sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin','tw-elements/dist/plugin.cjs'),

    ],
  darkMode: "class"
}
