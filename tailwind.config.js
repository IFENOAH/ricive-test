/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
    //extra paths here
    './pages/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    colors: {
      ricive: {
        graylight: '#F9FAFB',
        darkgray: '#657084',
        lightgray: '#F3F4F8',
        stroke: '#E4E6EB',
        stroke2: '#EAECF0',
        black: '#1D1D1D',
        white: '#FFFFFF',
        red: '#FF0000',
        lightgreen: '#ECFDF3',
        green: '#7BC068',
        darkgreen: '#1B895A',
        overlay: '#455162',
        dashgreen: '#ECFDF3',
        primaryGreen: '#4E903C',
        bgblue: '#EFF8FF',
        rblue: '#175CD3',
        bgpink: '#FDF2FA',
        rpink: '#C11574',
        rpurp: '#6172F3',
        bgpurp: '#EEF4FF',
      },
    },
    extend: {
      boxShadow: {
        sb: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F4EBFF',
        danger: ' 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FEE4E2',
        gray: 'box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/line-clamp'),
    // require("daisyui"),
  ],
}