import { React, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { useNormas } from '../hooks';

import { SearchField } from '../components/search-page';
import { Pages } from '../components/Pagination';

import { Content } from '../components/search-page/Content';

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
        initialText = query.match(/(?<=texto\s*=).*(?=&soloTitulo)/g)[0]
    } else {
        initialText = ''
    }

    const [actualPage, setActualPage] = useState(paginaQuery)
    return (
        <div className='flex flex-col ml-20 items-center w-full'>
            <SearchField initialText={initialText} pagina={actualPage + 1} />
            {
                data.response?.listas.datos_informe
                    ?
                    data.response?.listas.datos_informe.length !== 0
                        ?
                        <>
                            <Content data={data.response?.listas.datos_informe} />
                            <Pages query={querySinPagina} actualPage={actualPage} setActualPage={setActualPage} elements={data.response?.resultSize} numberElementsPerPage={8} />
                        </>
                        :
                        <div className='mt-4 text-gray-600 font-semibold italic'>
                            <p>Non se atoparon resultados na súa búsqueda. Por favor, inténteo de novo.</p>
                        </div>
                    :
                    <div className='mt-4 text-gray-600 font-semibold italic'>
                        <p>Por favor, insire algún texto para realizar a búsqueda...</p>
                    </div>
            }
        </div>
    );
};