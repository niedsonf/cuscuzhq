import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#fff',

        'gray': {
          100: '#E1E1E6',
          300: '#C4C4CC',
          400: '#8D8D99',
          500: '#7C7C8A',
          600: '#323238',
          700: '#29292E',
          800: '#202024',
          900: '#121214',
        },

        'green': {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },

        'red': {
          'main': '#ed3237',
          300: '#F75A68',
          500: '#AB222E',
          700: '#7A1921',
        },

        'yellow': {
          'low': '#fff688',
          300: '#E8E337',
          500: '#E5DE00',
          700: '#E6CC00',
        },
      },
      keyframes: {
        moveGradient: {
          '0% ': { backgroundPosition: '0% 0% ' },
          '25%': { backgroundPosition: '0% 200%' },
          '50% ': { backgroundPosition: '200% 0%' },
          '100% ': { backgroundPosition: '0% 0%' }
        },
      },
      //[#ffdd59]
      animation: {
        'animate-gradient': 'moveGradient 300ms infinite ease-out',
      }
    },
  },
  plugins: [],
};
export default config;
