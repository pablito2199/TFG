module.exports = {
    plugins: [require('@tailwindcss/forms')],
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            colors: {
                'blue-green': 'rgb(0, 113, 189)',
                'blue-lex-gal': 'rgba(63,169,245,0.7)',
                'gray-lex-gal': '#333',
                'lime': 'rgb(132 204 22)',
                'link': '#0000FF',
                'orange': 'rgb(234 88 12)',
                'white-lex-gal': 'rgba(255,255,255,0.3)'
            },
            fontFamily: {
                'bitter': 'Bitter'
            },
            maxHeight: {
                'leis-vinculadas': '40rem',
                'leis-vinculadas-top': '42.7rem',
                'texto-principal': '60rem'
            },
            minHeight: {
                'leis-vinculadas': '40rem',
                'leis-vinculadas-top': '44rem',
                'textarea': '7.8rem',
                'texto-principal': '60rem'
            },
            screens: {
                'screen-min1': { 'max': '970px' },
                'screen-min2': { 'max': '1055px' },
                'screen-min3': { 'max': '1500px' },
                'screen-min4': { 'max': '1300px' }
            }
        }
    }
}