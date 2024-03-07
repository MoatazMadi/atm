/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,vue,jsx,tsx}",
      ],
      darkMode: 'selector',
  theme: {
    container : {
        center : true ,
        padding: '2rem',
    },
    extend: {
        colors : {
            atm : {
                yellow : "#f5be36" ,
                blue : "#144d5e"
            }
        },
        dropShadow: {
            '3xlB': '4px 4px 5px black',
            '3xATM': '1px 1px 2px rgb(20,77,94)',
            '3xlW': '4px 4px 5px white',
            '4xl': [
                '0 35px 35px rgba(0, 0, 0, 0.25)',
                '0 45px 65px rgba(0, 0, 0, 0.15)'
            ]
          }
    },
  },
  plugins: [],
}

