// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                teal: '#66E2DC',
                salmon: '#FA7453',
                orange: '#FFB964',
                light: '#FCFAF9',
                dark: '#191826',
            },
            fontSize: {
                base: ['16px', '26px'],
                lg: ['20px', '34px'],
                '3xl': ['32px', '40px'],
                '4xl': ['40px', '48px'],
                '7xl': ['88px', '1'],
            },
            fontFamily: {
                sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
            },
        },
        screens: {
            ...defaultTheme.screens,
            lg: '1440px',
        },
    },
    plugins: [],
}
