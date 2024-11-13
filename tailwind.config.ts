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
      'lg': '0.5rem',
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
              1: '#f9fafb',
              2: '#f3f4f6',
            },
            'primary': {
              1: '#a21caf',
              2: '#7e22ce',
              // foreground: "#a21caf",
              DEFAULT: "#a21caf",


            },
            'secondary': {
              1: '#701a75',
              2: '#581c87',
            },
            'heading-text': '#111827',
            'p-text': '#374151',
            'muted-text': '#6b7280',
            'link-text': '#374151',
            'card': '#fff',
            'border-color': '#cbd5e1',
            'ring-color': '#cbd5e1',
          },
          
        },
        dark: {
          layout: {},
          colors: {
            'background': {
              1: '#030712',
              2: '#111827',
            },
            'primary': {
              1: '#a21caf',
              2: '#7e22ce',
              DEFAULT: "#a21caf",
            },
            'secondary': {
              1: '#701a75',
              2: '#581c87',
            },
            'heading-text': '#d1d5db',
            'p-text': '#9ca3af',
            'muted-text': '#4b5563',
            'link-text': '#d4d4d4',

            'card': '#111827',
            'border-color': '#1f2937',
            'ring-color': '#1f2937',
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

