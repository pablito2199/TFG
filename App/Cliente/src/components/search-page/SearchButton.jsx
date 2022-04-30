import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SearchButton = ({ texto, soloTitulo, fraseExacta, dogDesde, dogHasta, criterioOrdenacion, colectivo, organizacion, rango, seccion, tematica, pagina }) => {
    const navigate = useNavigate()

    const cambiarPagina = () => {
        pagina === undefined ? pagina = '' : pagina = pagina + ''
        navigate(`/search?texto=${texto}&soloTitulo=${soloTitulo}&fraseExacta=${fraseExacta}&dogDesde=${dogDesde}&dogHasta=${dogHasta}&criterioOrdenacion=${criterioOrdenacion}&listado_colectivo=${colectivo}&listado_taxorga=${organizacion}&listado_rangos=${rango}&listado_seccion=${seccion}&listado_tematica=${tematica}&pagina=${pagina}`)
    }

    return <button onClick={cambiarPagina} className='focus:outline-none font-semibold px-6 py-2.5 bg-blue-green text-white hover:bg-blue-700 hover:shadow-lg transition duration-150 ease-in-out flex items-center' type="button" id="button-addon2">
        <span>Buscar</span>
    </button >
}