
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       fontFamily : {
//         "poppins" : ['poppins'],
//         "Montserrat" : ['Montserrat'],
//         "Allura" : ['Allura'],
//          netflix: ['"Bebas Neue"', 'sans-serif'],
//           playfair: ["Playfair Display", "serif"],
//       },
//       colors : {
//         "putih" : "#FFFFFF",
//         "pinkw"  :"#F0BCE3",
//         'darkgold': '#B8860B',
//         'goldenyellow': '#FDB813',
//         'gold': '#FDB813',
//         netral:{
//           600:'#6B7280'
//         },
//         orchid: {
//           500: '#DA70D6',  
//           300: '#A40781'
//         },   
//       },
//        boxShadow: { 
//         '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
//         '4xl': '0 100px 200px rgba(182, 97, 176, 0.8)',
//       },
  
//     },
  


//   keyframes: {
//     spinBorder: {
//       from: {
//         transform: "rotate(0deg)",
//       },
//       to: {
//         transform: "rotate(360deg)",
//       },
//     },
//   },
//   animation: {
//     spinBorder: "spinBorder 1s linear infinite",
//   },

    
 
    
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        Montserrat: ["Montserrat"],
        Allura: ["Allura"],
        netflix: ['"Bebas Neue"', "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },

      colors: {
        putih: "#FFFFFF",
        pinkw: "#F0BCE3",
        darkgold: "#B8860B",
        goldenyellow: "#FDB813",
        gold: "#FDB813",

        netral: {
          600: "#6B7280",
        },

        orchid: {
          500: "#DA70D6",
          300: "#A40781",
        },
      },

      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        "4xl": "0 100px 200px rgba(182, 97, 176, 0.8)",
      },

      keyframes: {
        spinBorder: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },

      animation: {
        spinBorder: "spinBorder 8s linear infinite",
      },
    },
  },

  plugins: [],
};
