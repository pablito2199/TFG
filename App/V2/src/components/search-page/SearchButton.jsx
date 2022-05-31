import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SearchButton = ({ setTextoBuscado, initialText, setData, modal, texto, soloTitulo, fraseExacta, dogDesde, dogHasta, criterioOrdenacion, colectivo, organizacion, rango, seccion, tematica, setPagina }) => {
    const navigate = useNavigate()

    const cambiarPagina = async () => {
        if (!modal) {
            navigate(`/search?text=${initialText}`, { state: { initialText: initialText, page: 1, size: 8 } })
            if (setPagina) {
                setPagina(1)
            }
        } else {
            const url = `/xunta?texto=${texto}&soloTitulo=${soloTitulo}&fraseExacta=${fraseExacta}&dogDesde=${dogDesde}&dogHasta=${dogHasta}&criterioOrdenacion=${criterioOrdenacion}&listado_colectivo=${colectivo}&listado_taxorga=${organizacion}&listado_rangos=${rango}&listado_seccion=${seccion}&listado_tematica=${tematica}&pagina=1`
            const response = await fetch(url)
            const jsonData = await response.json()
            setData(jsonData)
            setTextoBuscado(texto)
            setPagina(1)
        }
    }

    return <button onClick={cambiarPagina} className='focus:outline-none font-semibold px-6 py-2.5 bg-blue-green text-white hover:bg-blue-700 hover:shadow-lg transition duration-150 ease-in-out flex items-center' type="button" id="button-addon2">
        <span>Buscar</span>
    </button >
}