/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'yellow-light': '#F1E9C9',
      yellow: '#DBAC2C',
      'yellow-dark': '#C47F17',

      'purple-light': '#EBE5F9',
      purple: '#8047F8',
      'purple-dark': '#4B2995',

      'base-title': '#272221',
      'base-subtitle': '#403937',
      'base-text': '#574F4D',
      'base-label': '#8D8686',
      'base-hover': '#D7D5D5',
      'base-button': '#E6E5E5',
      'base-input': '#EDEDED',
      'base-card': '#F3F2F2',

      background: '#FAFAFA',
      white: '#FFFFFF',
    },
    fontFamily: {
      text: ['Roboto', 'sans-serif'],
      title: ["'Baloo 2'", 'sans-serif'],
    },
    fontSize: {
      xs: [
        '0.75rem',
        {
          lineHeight: '130%',
          fontWeight: '700',
        },
      ],
      s: [
        '0.875rem',
        {
          lineHeight: '130%',
          fontWeight: '400',
        },
      ],
      m: [
        '1rem',
        {
          lineHeight: '130%',
          fontWeight: '400',
        },
      ],
      l: [
        '1.25rem',
        {
          lineHeight: '130%',
          fontWeight: '400',
        },
      ],

      'title-xs': [
        '1.125rem',
        {
          lineHeight: '130%',
          fontWeight: '700',
        },
      ],
      'title-s': [
        '1.25rem',
        {
          lineHeight: '130%',
          fontWeight: '700',
        },
      ],
      'title-m': [
        '1.5rem',
        {
          lineHeight: '130%',
          fontWeight: '700',
        },
      ],
      'title-l': [
        '2rem',
        {
          lineHeight: '130%',
          fontWeight: '800',
        },
      ],
      'title-xl': [
        '3rem',
        {
          lineHeight: '130%',
          fontWeight: '800',
        },
      ],
    },
    extend: {
      backgroundImage: {
        intro: "url('./src/assets/background.png')",
      },
    },
  },
  plugins: [],
}
