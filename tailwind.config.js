/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
      },
      width: '100%',
      screens: {
        DEFAULT: '100%',
      },
    },
    colors: {
      transparent: 'transparent',
      yellow: {
        50: '#fcf8ea',
        100: '#f8f0c9',
        200: '#f1de97',
        300: '#e9c55b',
        400: '#e3b23c', //default for set
        500: '#d19621',
        600: '#b4741a',
        700: '#905418',
        800: '#78431b',
        900: '#67391c',
        950: '#3b1d0d',
      },
      whiteRock: {
        50: '#f7f7ef',
        100: '#edebd7', //default for set
        200: '#dbd5ad',
        300: '#c6ba7e',
        400: '#b4a15b',
        500: '#a58f4d',
        600: '#8e7540',
        700: '#725936',
        800: '#614b32',
        900: '#54412f',
        950: '#302218',
      },
      stone: {
        50: '#f4f4f2',
        100: '#e3e3de',
        200: '#c9c9bf',
        300: '#aaa89a',
        400: '#918e7e',
        500: '#837f6f',
        600: '#706b5e',
        700: '#5b564d',
        800: '#4c4842', //default for set
        900: '#46423d',
        950: '#272421',
      },
      primary: {
        DEFAULT: '#edebd7',
        hover: '#dbd5ad',
        text: '#4c4842',
        dark: '#272421',
        ['dark-hover']: '#46423d',
      },
      secondary: {
        DEFAULT: '#e3b23c',
        hover: '#e9c55b',
        text: '#46423d',
      },
    },
    fontFamily: {
      headings: ['Figtree', 'sans-serif'],
      copy: ['Inter', 'sans-serif'],
      slanted: ['Courgette', 'serif'],
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.75rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.25rem'],
      '4xl': ['2.25rem', '2.5rem'],
      '5xl': ['3rem', '1'],
      '6xl': ['3.75rem', '1'],
      '7xl': ['4.5rem', '1'],
      '8xl': ['6rem', '1'],
      '9xl': ['8rem', '1'],
    },
    extend: {
      backgroundImage: {
        hero: "linear-gradient(to right, rgb(70, 66, 61, 0.7) 0%, rgb(39, 36, 33,0.7) 100%), url('./src/assets/backgrounds/hero.jpg')",
        cta: "linear-gradient(to right, rgb(70, 66, 61, 0.7) 0%, rgb(39, 36, 33,0.7) 100%), url('./src/assets/backgrounds/ctaBg.jpg')",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontFamily: theme('fontFamily.headings'),
          fontSize: theme('fontSize.5xl'),
          lineHeight: '120%',
          fontWeight: '700',
          margin: '2rem 0 1rem 0',
          color: theme('colors.purple.DEFAULT'),
        },
        h2: {
          fontFamily: theme('fontFamily.headings'),
          fontSize: theme('fontSize.4xl'),
          lineHeight: '120%',
          fontWeight: '700',
          margin: '2rem 0 1rem 0',
          color: theme('colors.purple.DEFAULT'),
        },
        h3: {
          fontFamily: theme('fontFamily.headings'),
          fontSize: '2rem',
          lineHeight: '120%',
          fontWeight: '700',
          margin: '2rem 0 1rem 0',
          color: theme('colors.purple.DEFAULT'),
        },
        h4: {
          fontFamily: theme('fontFamily.headings'),
          fontSize: theme('fontSize.xl'),
          lineHeight: '120%',
          fontWeight: '700',
          margin: '2rem 0 1rem 0',
        },
        h5: {
          fontFamily: theme('fontFamily.headings'),
          fontSize: theme('fontSize.lg'),
          lineHeight: '120%',
          fontWeight: '700',
          margin: '2rem 0 1rem 0',
        },
        h6: {
          fontFamily: theme('fontFamily.headings'),
          fontSize: theme('fontSize.xs'),
          lineHeight: '120%',
          fontWeight: '300',
          margin: '2rem 0 1rem 0',
          color: theme('colors.primary.DEFAULT'),
        },
        p: {
          fontSize: theme('fontSize.copy'),
          lineHeight: '120%',
          margin: '1rem 0',
        },
      })
    }),
  ],
}
