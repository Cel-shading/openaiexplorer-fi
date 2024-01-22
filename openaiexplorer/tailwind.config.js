/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx', './src/**/*.js'],
  theme: {
    fontFamily: {
      roboto: ['roboto', 'sans-serif']
    },
    extend: {
      colors: {
      'dragon1': '#F5F2FF',
      'dragon2': '#CEC7FF',
      'dragon3': '#A29BFD',
      'dragon4': '#706FF7',
      'dragon5': '#424BED',
      'dragon6': '#1F30BB',
      'dragon7': '#0E238A',
      'dragon8': '#071958',
      'dragon9': '#030D26',
      'juice1': '#F2FFF5',
      'juice2': '#C4FFCB',
      'juice3': '#94FD9B',
      'juice4': '#64F965',
      'juice5': '#3EF035',
      'juice6': '#26BD14',
      'juice7': '#1C8B06',
      'juice8': '#165902',
      'juice9': '#0B2601',
      'neutral1': '#FBFAFC',
      'neutral2': '#EAE9EE',
      'neutral3': '#D9D9E0',
      'neutral4': '#C9C8D2',
      'neutral5': '#B9B9C4',
      'neutral6': '#92929D',
      'neutral7': '#6C6D75',
      'neutral8': '#47484E',
      'neutral9': '#222326',
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
