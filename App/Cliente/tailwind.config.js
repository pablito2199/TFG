module.exports = {
    plugins: [require('@tailwindcss/forms'),],
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            colors: {
                'gray-lex-gal': '#333',
                'link': '#0000FF',
                'blue-lex-gal': 'rgba(63,169,245,0.7)',
            },
            fontFamily: {
                'bitter': 'Bitter'
            },
            screens: {
                'screen-min1': { 'max': '850px' },
                'screen-min2': { 'max': '1055px' },
            },
            minHeight: {
                'textarea': '7rem',
                'texto-principal': '60rem',
                'leis-vinculadas': '40rem'
            },
            maxHeight: {
                'texto-principal': '60rem',
                'leis-vinculadas': '40rem'
            }
        }
    }
}