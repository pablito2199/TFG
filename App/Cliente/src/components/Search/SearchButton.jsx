import React from 'react';
import { useNavigate } from 'react-router-dom'

export const SearchButton = ({ texto, soloTitulo, fraseExacta, dogDesde, dogHasta, criterioOrdenacion, colectivo, organizacion, rango, seccion, tematica, pagina }) => {
    const navigate = useNavigate()
    let render = []

    const cambiarPagina = () => {
        pagina === undefined ? pagina = '' : pagina = pagina + ''
        navigate(`/search?texto=${texto}&soloTitulo=${soloTitulo}&fraseExacta=${fraseExacta}&dogDesde=${dogDesde}&dogHasta=${dogHasta}&criterioOrdenacion=${criterioOrdenacion}&listado_colectivo=${colectivo}&listado_taxorga=${organizacion}&listado_rangos=${rango}&listado_seccion=${seccion}&listado_tematica=${tematica}&pagina=${pagina}`)
    }

    if (texto === '') {
        render = <button className='font-semibold px-6 py-2.5 bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center' type="button" id="button-addon2">
            <span>Buscar</span>
        </button>
    } else {
        render = <button onClick={cambiarPagina} className='font-semibold px-6 py-2.5 bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center' type="button" id="button-addon2">
            <span>Buscar</span>
        </button >
    }

    return render
}