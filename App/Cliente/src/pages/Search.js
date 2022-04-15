import { React, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useNormas } from '../hooks';

import { Button } from "../components/Button";
import { SearchField } from '../components/Search';
import { Pages, SelectNumberElementsPerPage } from '../components/Pagination';
import { HomeIcon } from '@heroicons/react/solid';

export default function Search() {
    const query = useLocation().search.replace('?', '')
    const data = useNormas(query)
    console.log(data)

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
    const [numeroNormasPagina, setNumeroNormasPagina] = useState(8)

    return (
        <div className='flex flex-col items-center'>
            <div className='flex gap-10 w-full items-center'>
                <Link to="/" className='ml-4 flex items-center cursor-pointer'>
                    <HomeIcon className='flex-1 h-20 w-20' />
                </Link>
                <SearchField initialText={initialText} pagina={actualPage + 1} />
            </div>
            <SelectNumberElementsPerPage text="Número de normas por página" posibilities={[8/*, 15, 20*/]} setNumberElementsPerPage={setNumeroNormasPagina} setActualPage={setActualPage} />
            {
                data
                    ?
                    <>
                        <Content data={data.response?.listas.datos_informe} actualPage={actualPage} numberElementsPerPage={numeroNormasPagina} />
                        <Pages query={querySinPagina} actualPage={actualPage} setActualPage={setActualPage} elements={data.response?.resultSize} numberElementsPerPage={numeroNormasPagina} />
                    </>
                    :
                    <></>
            }
        </div>
    );
};

function Content({ data, actualPage, numberElementsPerPage }) {
    return <section className='mt-4 flex flex-col w-11/12'>
        {
            data?.map((norma, index) =>
                //(index >= numberElementsPerPage * actualPage && index < actualPage * numberElementsPerPage + numberElementsPerPage)
                //    ?
                <div key={index} className=' border-b-2 border-gray-300' >
                    <div className='flex m-4 items-center'>
                        <div className='font-serif w-9/12 mt-0 mb-auto'>
                            <div className='flex'>
                                <span className='font-bold'>Norma {norma.id}</span>
                                <span className='ml-auto mr-0 italic text-gray-500'>Diario nº <span className='font-bold text-blue-400'>{norma.numeroDog}</span> da data <span className='font-bold'>{norma.fechaDogFormateada}</span></span>
                            </div>
                            <p className='mt-2'>{norma.sumario}</p>
                        </div>
                        <div className='flex flex-col ml-4 mr-0 flex-auto gap-2 text-center items-center'>
                            <Button color="bg-gray-500" colorHover="bg-gray-600" anchura="60" texto="Importar norma" />
                            <Button color="bg-gray-500" colorHover="bg-gray-600" anchura="60" texto="Previsualizar" url={`https://www.xunta.gal/${norma.rutaHtml}`} />
                        </div>
                    </div>
                </div>
                //    :
                //    <div key={index}></div>
            )
        }
    </section >
}