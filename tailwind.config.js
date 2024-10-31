/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       primary: "#0F0F10",
      },
      backgroundImage: {  
        'banner-liner': 'linear-gradient(268.91deg, #FF9500 -6.67%, #FFD600 112.08%);',  
      },  
      borderWidth: {
        1: "1px"
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.container-fluid': {
          width: '100%',
          maxWidth: '100%',
          paddingLeft: '5rem',
          paddingRight: '5rem',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
        '.container-none': {
          width: '100%',
          maxWidth: '100%',
          paddingLeft: '2.5rem',
          paddingRight: '2.5rem',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      });
    },

  ],
};
