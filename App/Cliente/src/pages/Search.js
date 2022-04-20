import { React, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useNormas } from '../hooks';

import { SearchField } from '../components/Search';
import { Pages } from '../components/Pagination';

import import_img from '../images/import.png'
import visualization from '../images/vision.png'

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
        <div className='flex flex-row'>
            <div className='bg-black pt-6 pr-4 h-screen w-16 fixed'>
                <Link to="/" className='ml-4 flex cursor-pointer'>
                    <img src="https://www.lex.gal/lexgal-theme/images/plantilla/lexgal-vertical.png" />
                </Link>
            </div>
            <div className='flex flex-col ml-20 items-center w-full'>
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
        </div>
    );
};

function Content({ data }) {
    return <section className='w-11/12 mt-4 flex flex-col'>
        {
            data?.map((norma, index) =>
                <div key={index}>
                    <div className='flex m-4 items-center'>
                        <div className='flex flex-col font-serif w-11/12 mt-0 mb-auto'>
                            <span className='font-bold italic text-gray-500'>Diario nº <span className='font-bold text-blue-400'>{norma.numeroDog}</span> da data <span className='text-black font-bold'>{norma.fechaDogFormateada}</span></span>
                            <p className='mt-2'>{norma.sumario}</p>
                        </div>
                        <div className='flex ml-4 flex-auto gap-2 text-center items-center'>
                            <button className='flex focus:outline-none text-md text-center self-center align-center px-4 py-4 rounded-md bg-gray-300 hover:bg-gray-400 text-indigo-50 font-semibold cursor-pointer'>
                                <img alt="Page not found" src={import_img} className='h-5 w-5' />
                            </button>
                            <a href={`https://www.xunta.gal/${norma.rutaHtml}`} target="_blank" className='flex focus:outline-none text-md text-center self-center align-center px-4 py-4 rounded-md bg-gray-300 hover:bg-gray-400 text-indigo-50 font-semibold cursor-pointer'>
                                <img alt="Page not found" src={visualization} className='h-5 w-5' />
                            </a>
                        </div>
                    </div>
                    <div className='border-b-2 border-gray-300 ml-2 mr-6' />
                </div>
            )
        }
    </section >
}