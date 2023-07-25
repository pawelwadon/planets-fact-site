/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./components/*.jsx",
  "./pages/*.jsx"],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
  extend: {
      keyframes:{
        facts:{
          '0%':{transform: 'translateY(100%)', opacity: '0'},
          '100%':{transform: 'translateY(0%)', opacity: '1'}
        },
        general:{
          '0%':{transform: 'translateX(100%)', opacity:'0'},
          '100%':{transform: 'translateX(0%)', opacity:'1'},
        },
        image:{
          '0%':{
            opacity: '0',
            transform: 'translateY(100px) scale(0.5) rotate(180deg)',
        },
          '100%':{
            opacity: '1',
            transform: 'translateX(0) scale(1) rotate(0)',
        },
        },
        hamburger:{
          '0%' :{ transform: 'translateX(100%)'},
          '100%' :{ transform: 'translateX(0%)'},
      },
        hamburgerClose:{
          '0%':{transform:'translateX(0%)'},
          '100%':{transform:'translateX(100%)'},
      },
      }
    },
      animation:{
        'facts-display' : 'facts 1.4s',
        'general-display': 'general 1.4s',
        'image-display': 'image 1.4s',
        'hamburger-menu-open':'hamburger 1s',
      }
  },
  plugins: [],
}

