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
        <div className='flex flex-row font-bitter'>
            <div className='bg-black pt-6 pr-4 h-screen w-16 fixed'>
                <Link to="/" className='ml-4 flex cursor-pointer'>
                    <img alt="Páxina de inicio" src="https://www.lex.gal/lexgal-theme/images/plantilla/lexgal-vertical.png" />
                </Link>
            </div>
            <div className='flex flex-col ml-20 items-center w-full'>
                <SearchField initialText={initialText} pagina={actualPage + 1} />
                {
                    data
                        ?
                        <>
                            <Tabla data={data.response?.listas.datos_informe} />
                            <Pages query={querySinPagina} actualPage={actualPage} setActualPage={setActualPage} elements={data.response?.resultSize} numberElementsPerPage={8} />
                        </>
                        :
                        <></>
                }
            </div>
        </div>
    );
};

function Tabla({ data }) {
    return <table className='px-1 flex w-11/12 mt-8 flex flex-col text-left font-medium'>
        <tbody className='border border-white text-center'>
            <tr className='flex'>
                <th className='w-1/12 p-2 border-2 border-white bg-black text-white'>DOG nº</th>
                <th className='w-7/12 p-2 border-2 border-white bg-black text-white screen-min3:w-6/12 screen-min2:w-4/12'>Título</th>
                <th className='w-2/12 p-2 border-2 border-white bg-black text-white screen-min3:w-2/12 screen-min2:w-3/12'>Departamento</th>
                <th className='w-1/12 p-2 border-2 border-white bg-black text-white screen-min2:w-2/12'>Data</th>
                <th className='w-1/12 p-2 border-2 border-white bg-black text-white screen-min3:w-2/12 screen-min2:w-3/12'>Accións</th>
            </tr>
            {
                data?.map((norma, index) =>
                    <tr key={index} className='flex font-semibold border-b border-gray-300 items-center'>
                        <td className='w-1/12 px-2 py-4'>{norma.numeroDog}</td>
                        <td className='w-7/12 text-left px-2 py-4 screen-min3:w-6/12 screen-min2:w-4/12'>{norma.sumario}</td>
                        <td className='w-2/12 px-2 py-4 text-left screen-min3:w-2/12 screen-min2:w-3/12'>{norma.publicador}</td>
                        <td className='w-1/12 px-2 py-4 screen-min2:w-2/12'>{norma.fechaDogFormateada}</td>
                        <td className='w-1/12 screen-min3:w-2/12 screen-min2:w-3/12'>
                            <div className='flex gap-2 justify-center items-center py-4'>
                                <a title="Previsualizar" href={`https://www.xunta.gal/${norma.rutaHtml}`} target="_blank" rel='noreferrer' className='focus:outline-none text-md text-center self-center align-center px-4 py-4 hover:bg-gray-200 border cursor-pointer'>
                                    <img alt="Previsualizar" src={visualization} className='h-5 w-5' />
                                </a>
                                <button title="Importar" className='focus:outline-none text-md text-center self-center align-center px-4 py-4 bg-black hover:bg-gray-600 text-indigo-50 font-semibold cursor-pointer'>
                                    <img alt="Importar" src={import_img} className='h-5 w-5' />
                                </button>
                            </div>
                        </td>
                    </tr>
                )
            }
        </tbody>
    </table >
}