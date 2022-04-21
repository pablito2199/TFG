module.exports = {
    plugins: [require('@tailwindcss/forms'),],
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            colors: {
                'gray-lex-gal': '#333',
                'link': '#0000FF',
                'blue-lex-gal': 'rgba(63,169,245,0.7)',
                'white-lex-gal': 'rgba(255,255,255,0.3)',
                'blue-green': 'rgb(0, 113, 189)'
            },
            fontFamily: {
                'bitter': 'Bitter'
            },
            screens: {
                'screen-min1': { 'max': '970px' },
                'screen-min2': { 'max': '1055px' },
                'screen-min3': { 'max': '1500px' },
                'screen-min4': { 'max': '1300px' }
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