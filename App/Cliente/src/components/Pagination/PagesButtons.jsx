import React from 'react';
import { PagesNotSeen } from './PagesNotSeen';

export const PagesButtons = ({ actualPage, setActualPage, numberElements, numberElementsPerPage }) => {
    let paginas = []
    let numeroBotones = numberElements / numberElementsPerPage
    const numeroMaximoPaginas = numberElements / numberElementsPerPage

    if (numeroBotones > 5) {
        numeroBotones = 5

        if (actualPage >= 0 && actualPage < 5) {
            for (let i = 0; i < numeroBotones; i++) {
                if (i === actualPage) {
                    paginas.push(<a key={i} className='bg-blue-500 border-blue-500 text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium'>{i + 1}</a>);
                } else {
                    paginas.push(<a key={i} className='bg-white border-blue-500 text-gray-500 hover:bg-blue-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer' onClick={() => setActualPage(i)}>{i + 1}</a>);
                }
            }
            paginas.push(<PagesNotSeen key="more" />)
        } else if (numeroMaximoPaginas - actualPage < 5) {
            paginas.push(<PagesNotSeen key="more" />)
            for (let i = numeroMaximoPaginas - 5; i < numeroMaximoPaginas; i++) {
                if (i === actualPage) {
                    paginas.push(<a key={i} className='bg-blue-500 border-blue-500 text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium'>{i + 1}</a>);
                } else {
                    paginas.push(<a key={i} className='bg-white border-blue-500 text-gray-500 hover:bg-blue-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer' onClick={() => setActualPage(i)}>{i + 1}</a>);
                }
            }
        } else {
            paginas.push(<PagesNotSeen key="more" />)
            for (let i = actualPage - 2; i < numeroBotones + actualPage - 2; i++) {
                if (i === actualPage) {
                    paginas.push(<a key={i} className='bg-blue-500 border-blue-500 text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium'>{i + 1}</a>);
                } else {
                    paginas.push(<a key={i} className='bg-white border-blue-500 text-gray-500 hover:bg-blue-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer' onClick={() => setActualPage(i)}>{i + 1}</a>);
                }
            }
            paginas.push(<PagesNotSeen key="more" />)
        }
    } else {
        for (let i = 0; i < numeroMaximoPaginas; i++) {
            if (i === actualPage) {
                paginas.push(<a key={i} className='bg-blue-500 border-blue-500 text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium'>{i + 1}</a>);
            } else {
                paginas.push(<a key={i} className='bg-white border-blue-500 text-gray-500 hover:bg-blue-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer' onClick={() => setActualPage(i)}>{i + 1}</a>);
            }
        }
    }

    return paginas
}