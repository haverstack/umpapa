module.exports = {
  purge: ['./src/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.red.600'),
              '&:hover': {
                color: theme('colors.red.800'),
              },
            },
            'ul > li::before': {
              backgroundColor: theme('colors.red.300'),
            },
            hr: {
              borderColor: theme('colors.red.300'),
            },
            blockquote: {
              borderLeftColor: theme('colors.red.300'),
            },
            maxWidth: '72ch',
          },
        },
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
