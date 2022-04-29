import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PagesNotSeen } from './PagesNotSeen'

export const PagesButtons = ({ query, actualPage, setActualPage, numberElements, numberElementsPerPage }) => {
    let paginas = []
    let numeroBotones = Math.ceil(numberElements / numberElementsPerPage)
    const numeroMaximoPaginas = Math.ceil(numberElements / numberElementsPerPage)
    const navigate = useNavigate()

    if (numeroBotones > 5) {
        numeroBotones = 5

        if (actualPage >= 0 && actualPage < 5) {
            for (let i = 1; i <= numeroBotones; i++) {
                if (i === actualPage) {
                    paginas.push(<button title={`Páxina ${i}`} key={i} className='focus:outline-none bg-black border-black text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium'>{i}</button>);
                } else {
                    paginas.push(<button title={`Páxina ${i}`} key={i} className='focus:outline-none bg-white border-black text-gray-500 hover:bg-blue-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer' onClick={() => { navigate(`/search?${query}${i}`); setActualPage(i) }}>{i}</button>);
                }
            }
            paginas.push(<PagesNotSeen key="more" />)
        } else if (numeroMaximoPaginas - actualPage < 5) {
            paginas.push(<PagesNotSeen key="more" />)
            for (let i = numeroMaximoPaginas - 5; i <= numeroMaximoPaginas - 1; i++) {
                if (i === actualPage) {
                    paginas.push(<button title={`Páxina ${i}`} key={i} className='focus:outline-none bg-black border-black text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium'>{i}</button>);
                } else {
                    paginas.push(<button title={`Páxina ${i}`} key={i} className='focus:outline-none bg-white border-black text-gray-500 hover:bg-blue-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer' onClick={() => { navigate(`/search?${query}${i}`); setActualPage(i) }}>{i}</button>);
                }
            }
        } else {
            paginas.push(<PagesNotSeen key="more-izq" />)
            for (let i = actualPage - 2; i < numeroBotones + actualPage - 2; i++) {
                if (i === actualPage) {
                    paginas.push(<button title={`Páxina ${i}`} key={i} className='focus:outline-none bg-black border-black text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium'>{i}</button>);
                } else {
                    paginas.push(<button title={`Páxina ${i}`} key={i} className='focus:outline-none bg-white border-black text-gray-500 hover:bg-blue-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer' onClick={() => { navigate(`/search?${query}${i}`); setActualPage(i) }}>{i}</button>);
                }
            }
            paginas.push(<PagesNotSeen key="more-der" />)
        }
    } else {
        for (let i = 1; i <= numeroMaximoPaginas; i++) {
            if (i === actualPage) {
                paginas.push(<button title={`Páxina ${i}`} key={i} className='focus:outline-none bg-black border-black text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium'>{i}</button>);
            } else {
                paginas.push(<button title={`Páxina ${i}`} key={i} className='focus:outline-none bg-white border-black text-gray-500 hover:bg-blue-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer' onClick={() => { navigate(`/search?${query}${i}`); setActualPage(i) }}>{i}</button>);
            }
        }
    }

    return paginas
}