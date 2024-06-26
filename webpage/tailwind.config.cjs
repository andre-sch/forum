/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "*.{html,js}"
  ],
  theme: {
    colors: {
      'shark': {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#1e1e1e',
      },
      'silver-chalice': {
        '50': '#f7f7f7',
        '100': '#ededed',
        '200': '#dfdfdf',
        '300': '#c8c8c8',
        '400': '#a6a6a6',
        '500': '#999999',
        '600': '#888888',
        '700': '#7b7b7b',
        '800': '#676767',
        '900': '#545454',
        '950': '#363636',
      },
      'serenade': {
        '50': '#fff6ec',
        '100': '#ffecd5',
        '200': '#fed5aa',
        '300': '#fdb674',
        '400': '#fb8c3c',
        '500': '#f96c16',
        '600': '#ea520c',
        '700': '#c23c0c',
        '800': '#9a3012',
        '900': '#7c2a12',
        '950': '#431207',
      },
      'olive-drab': {
        '50': '#feffe4',
        '100': '#faffc4',
        '200': '#f4ff90',
        '300': '#e8ff50',
        '400': '#d8fe1d',
        '500': '#b9e500',
        '600': '#90b800',
        '700': '#6d8c00',
        '800': '#556d07',
        '900': '#485c0b',
        '950': '#253400',
      },
      'orient': {
        '50': '#effaff',
        '100': '#def4ff',
        '200': '#b6ebff',
        '300': '#76dcff',
        '400': '#2dcbff',
        '500': '#02b6f5',
        '600': '#0091d2',
        '700': '#0074aa',
        '800': '#00628c',
        '900': '#075073',
        '950': '#04344d',
      },
    },
    fontFamily: {
      'serif': '\'Source Serif 4\'',
      'roboto': '\'Roboto\'' 
    },
    letterSpacing: {
      tightest: '-.05em',
      wider: '.05em',
    },
    extend: {
      'fontSize': {
        '3.5xl': '2rem'
      }
    },
  },
  plugins: [],
}