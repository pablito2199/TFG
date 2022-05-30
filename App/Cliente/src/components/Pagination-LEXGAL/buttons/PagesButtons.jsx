import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PagesNotSeen } from './PagesNotSeen'

export const PagesButtons = ({ initialText, actualPage, setActualPage, numberElements, numberElementsPerPage }) => {
    let paginas = []
    let numeroBotones = Math.ceil(numberElements / numberElementsPerPage)
    const numeroMaximoPaginas = Math.ceil(numberElements / numberElementsPerPage)
    const navigate = useNavigate()

    const cambiarPagina = async (i) => {
        navigate(`/search?text=${initialText}&page=${i}`, { state: { initialText: initialText, page: i } })
        setActualPage(i)
    }

    if (numeroBotones > 5) {
        // Más de 5 páginas
        numeroBotones = 5

        if (parseInt(actualPage) >= 0 && parseInt(actualPage) < 5) {
            // Las 5 primeras páginas
            for (let i = 1; i <= numeroBotones; i++) {
                if (i === parseInt(actualPage)) {
                    paginas.push(<button title={`Páxina ${i + 1}`} key={i} className='focus:outline-none bg-black border-black text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium'>{i}</button>);
                } else {
                    paginas.push(<button title={`Páxina ${i + 1}`} key={i} className='focus:outline-none bg-white border-black text-gray-500 hover:bg-blue-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer' onClick={() => { cambiarPagina(i) }}>{i}</button>);
                }
            }
            paginas.push(<PagesNotSeen key="more" />)
        } else if (numeroMaximoPaginas - parseInt(actualPage) < 5 && actualPage !== 5) {
            // Las 5 últimas páginas 
            paginas.push(<PagesNotSeen key="more" />)
            for (let i = numeroMaximoPaginas - 4; i <= numeroMaximoPaginas; i++) {
                if (i === parseInt(actualPage)) {
                    paginas.push(<button title={`Páxina ${i + 1}`} key={i} className='focus:outline-none bg-black border-black text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium'>{i}</button>);
                } else {
                    paginas.push(<button title={`Páxina ${i + 1}`} key={i} className='focus:outline-none bg-white border-black text-gray-500 hover:bg-blue-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer' onClick={() => { cambiarPagina(i) }}>{i}</button>);
                }
            }
        } else {
            // 5 páginas por el medio
            paginas.push(<PagesNotSeen key="more-izq" />)
            for (let i = parseInt(actualPage) - 2; i < numeroBotones + parseInt(actualPage) - 2; i++) {
                if (i === parseInt(actualPage)) {
                    paginas.push(<button title={`Páxina ${i + 1}`} key={i} className='focus:outline-none bg-black border-black text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium'>{i}</button>);
                } else {
                    paginas.push(<button title={`Páxina ${i + 1}`} key={i} className='focus:outline-none bg-white border-black text-gray-500 hover:bg-blue-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer' onClick={() => { cambiarPagina(i) }}>{i}</button>);
                }
            }
            paginas.push(<PagesNotSeen key="more-der" />)
        }
    } else {
        // 5 páginas o menos
        for (let i = 1; i <= numeroMaximoPaginas; i++) {
            if (i === parseInt(actualPage)) {
                paginas.push(<button title={`Páxina ${i}`} key={i} className='focus:outline-none bg-black border-black text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium'>{i}</button>);
            } else {
                paginas.push(<button title={`Páxina ${i}`} key={i} className='focus:outline-none bg-white border-black text-gray-500 hover:bg-blue-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer' onClick={() => { cambiarPagina(i) }}>{i}</button>);
            }
        }
    }

    return paginas
}