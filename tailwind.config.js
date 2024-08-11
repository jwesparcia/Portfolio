module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(38,5,60,1) 0%, rgba(88,16,16,1) 50%, rgba(52,39,20,1) 100%)',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#64ffda' },
        },
      },
      animation: {
        typing: 'typing 4s steps(40, end), blink-caret 0.75s step-end infinite',
      },
    },
  },
  plugins: [],
};