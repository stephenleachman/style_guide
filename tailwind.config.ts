import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */

const config: Config = {

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      backgroundImage: { },
      screens: { 
        
       },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
    borderRadius: {
      'lg': '0.8rem',
      'full': '9999px',
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: false,
       prefix: "nextui",
      themes: {
        light: {
          layout: {},
          colors: {
            'background': {
              1: '#fafafa',
              2: '#f4f4f5',
            },
            'primary': {
              1: '#e11d48',
              2: '#f43f5e',
              // foreground: "#a21caf",
              DEFAULT: "#e11d48",
            },
            'secondary': {
              1: '#701a75',
              2: '#581c87',
            },
            'heading-text': '#4c0519',
            'p-text': '#3f3f46',
            'muted-text': '#71717a',
            'link-text': '#71717a',
            'card': '#fff',
            'border-color': '#e4e4e7',
            'ring-color': '#e4e4e7',
          },
          
        },
        dark: {
          layout: {},
          colors: {
            'background': {
              1: '#09090b',
              2: '#18181b',
            },
            'primary': {
              1: '#e11d48',
              2: '#f43f5e',
              DEFAULT: "#e11d48",
            },
            'secondary': {
              1: '#701a75',
              2: '#581c87',
            },
            'heading-text': '#fff1f2',
            'p-text': '#a3a3a3',
            'muted-text': '#52525b',
            'link-text': '#d4d4d4',

            'card': '#18181b',
            'border-color': '#27272a',
            'ring-color': '#27272a',
          },
        },
        // ... // custom themes
      },
    }),
  ],
}

export default config
function themes(arg0: string) {
  throw new Error('Function not implemented.');
}

