import { React, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { useNormas } from '../hooks'

import { SearchField } from '../components/search-page'
import { Pages } from '../components/Pagination'

import { Content } from '../components/search-page/Content'

export default function Search() {
    const query = useLocation().search.replace('?', '')
    const data = useNormas(query)

    let querySinPagina
    if (query.match(/.*(?=pagina=[0-9]+)/gs)) {
        querySinPagina = query.match(/.*(?=pagina=[0-9]+)/gs)[0] + 'pagina='
    } else {
        querySinPagina = query
    }
    let paginaQuery
    if (query?.match(/(?<=pagina\s*=)[0-9]+/gs)) {
        paginaQuery = query?.match(/(?<=pagina\s*=)[0-9]+/gs)
    } else {
        paginaQuery = 1
    }
    let initialText
    if (query.match(/(?<=texto\s*=).*(?=&soloTitulo)/g)) {
        initialText = decodeURIComponent(query.match(/(?<=texto\s*=).*(?=&soloTitulo)/g)[0])
    } else {
        initialText = ''
    }

    const [actualPage, setActualPage] = useState(paginaQuery[0])

    return (
        <div className='flex flex-col ml-20 items-center w-full screen-min5:ml-10'>
            <SearchField initialText={initialText} pagina={actualPage + 1} setPagina={setActualPage} />
            {
                data.response?.listas.datos_informe
                    ?
                    data.response?.listas.datos_informe.length !== 0
                        ?
                        <>
                            <p className='self-end mt-8 mr-28 text-gray-600 font-semibold italic'>Atopáronse {data?.response.resultSize} resultados para "{initialText}"</p>
                            <Pages query={querySinPagina} actualPage={actualPage} setActualPage={setActualPage} elements={data.response?.resultSize} numberElementsPerPage={8} />
                            <Content data={data.response?.listas.datos_informe} />
                            <div className='m-4' />
                            <Pages query={querySinPagina} actualPage={actualPage} setActualPage={setActualPage} elements={data.response?.resultSize} numberElementsPerPage={8} />
                            <div className='m-4' />
                        </>
                        :
                        <p className='py-4 text-red-600 font-semibold italic'>Non se atoparon resultados para "{initialText}". Por favor, inténteo de novo.</p>
                    :
                    <p className='py-4 text-gray-600 font-semibold italic'>Por favor, insire algún texto para realizar a búsqueda...</p>
            }
        </div>
    )
}