import { React, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useNormas } from '../hooks';

import { Button } from "../components/Button";
import { SearchField } from '../components/Search';
import { Pages } from '../components/Pagination';
import { HomeIcon } from '@heroicons/react/solid';

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
        <div className='flex flex-col items-center'>
            <Link to="/" className='ml-4 flex items-center cursor-pointer'>
                <HomeIcon className='flex-1 h-20 w-20' />
            </Link>
            <SearchField initialText={initialText} pagina={actualPage + 1} />
            {
                data
                    ?
                    <>
                        <Content data={data.response?.listas.datos_informe} />
                        <Pages query={querySinPagina} actualPage={actualPage} setActualPage={setActualPage} elements={data.response?.resultSize} numberElementsPerPage={8} />
                    </>
                    :
                    <></>
            }
        </div>
    );
};

function Content({ data }) {
    return <section className='w-10/12 mt-4 flex flex-col'>
        {
            data?.map((norma, index) =>
                <div key={index}>
                    <div className='flex m-4 items-center'>
                        <div className='flex flex-col font-serif w-9/12 mt-0 mb-auto'>
                            <span className='font-bold italic text-gray-500'>Diario nº <span className='font-bold text-blue-400'>{norma.numeroDog}</span> da data <span className='font-bold'>{norma.fechaDogFormateada}</span></span>
                            <p className='mt-2'>{norma.sumario}</p>
                        </div>
                        <div className='flex flex-col ml-4 mr-0 flex-auto gap-2 text-center items-center'>
                            <Button color="bg-gray-500" colorHover="bg-gray-600" anchura="60" texto="Importar norma" />
                            <Button color="bg-gray-500" colorHover="bg-gray-600" anchura="60" texto="Previsualizar" url={`https://www.xunta.gal/${norma.rutaHtml}`} />
                        </div>
                    </div>
                    <div className='border-b-2 border-gray-300 mr-20' />
                </div>
            )
        }
    </section >
}