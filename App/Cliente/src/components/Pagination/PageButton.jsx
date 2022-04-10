import React from 'react';

export const PageButton = ({ actualPage, setActualPage, numberPages, numberElementsPerPage }) => {
    let paginas = []
    for (let i = 0; i < numberPages / numberElementsPerPage; i++) {
        if (i === actualPage) {
            paginas.push(<a className='bg-blue-500 border-blue-500 text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium'>{i + 1}</a>);
        } else {
            paginas.push(<a className='bg-white border-blue-500 text-gray-500 hover:bg-blue-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer' onClick={() => setActualPage(i)}>{i + 1}</a>);
        }
    }
    return paginas;
}