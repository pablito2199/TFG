import { React, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useNormas } from '../hooks';

import { SearchField } from '../components/Search';
import { Pages } from '../components/Pagination';

import import_img from '../images/import.png'
import visualization from '../images/vision.png'

import organizaciones from '../data/listadoOrganismos.json'

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
                    <img src="https://www.lex.gal/lexgal-theme/images/plantilla/lexgal-vertical.png" />
                </Link>
            </div>
            <div className='flex flex-col ml-20 items-center w-full'>
                <SearchField initialText={initialText} pagina={actualPage + 1} />
                {
                    data
                        ?
                        <>
                            <Tabla data={data.response?.listas.datos_informe} />
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

function Tabla({ data }) {

    return <table className='flex w-11/12 mt-8 px-2 flex flex-col text-left font-medium'>
        <tbody className='border border-white text-center'>
            <tr className='flex'>
                <th className='w-1/12 p-2 border-2 border-white bg-black text-white'>DOG nº</th>
                <th className='w-8/12 p-2 border-2 border-white bg-black text-white screen-min3:w-6/12 screen-min2:w-4/12'>Título</th>
                <th className='w-1/12 p-2 border-2 border-white bg-black text-white screen-min3:w-2/12 screen-min2:w-3/12'>Departamento</th>
                <th className='w-1/12 p-2 border-2 border-white bg-black text-white'>Data</th>
            </tr>
            {
                data?.map((norma, index) =>
                    <tr key={index} className='flex font-semibold border-b border-gray-300 items-center'>
                        <td className='w-1/12 py-4'>{norma.numeroDog}</td>
                        <td className='w-8/12 text-left py-4 screen-min3:w-6/12 screen-min2:w-4/12'>{norma.sumario}</td>
                        <td className='w-1/12 py-4 text-left screen-min3:w-2/12 screen-min2:w-3/12'>{norma.publicador}</td>
                        <td className='w-1/12 py-4 screen-min2:w-2/12'>{norma.fechaDogFormateada}</td>
                        <td className='w-1/12 screen-min3:w-2/12 screen-min2:w-3/12'>
                            <div className='flex gap-2 justify-center items-center py-4'>
                                <button title="Importar" className='focus:outline-none text-md text-center self-center align-center px-4 py-4 bg-black hover:bg-gray-600 text-indigo-50 font-semibold cursor-pointer'>
                                    <img alt="Importar" src={import_img} className='h-5 w-5' />
                                </button>
                                <a title="Previsualizar" href={`https://www.xunta.gal/${norma.rutaHtml}`} target="_blank" className='focus:outline-none text-md text-center self-center align-center px-4 py-4 bg-black hover:bg-gray-600 text-indigo-50 font-semibold cursor-pointer'>
                                    <img alt="Previsualizar" src={visualization} className='h-5 w-5' />
                                </a>
                            </div>
                        </td>
                    </tr>
                )
            }
        </tbody>
    </table >
}

function Content({ data }) {
    return <section className='w-11/12 mt-8 flex flex-col'>
        {
            data?.map((norma, index) =>
                <div key={index}>
                    <div className='flex m-4 items-center'>
                        <div className='flex flex-col w-11/12 mt-0 mb-auto'>
                            <span className='font-bold italic text-lg text-gray-500'>Diario nº <span className='font-bold text-blue-400'>{norma.numeroDog}</span> da data <span className='text-black font-bold'>{norma.fechaDogFormateada}</span></span>
                            <p className='mt-2'>{norma.sumario}</p>
                        </div>
                        <div className='flex ml-4 flex-auto gap-2 text-center items-center'>
                            <button title="Importar" className='flex focus:outline-none text-md text-center self-center align-center px-4 py-4 bg-black hover:bg-gray-600 text-indigo-50 font-semibold cursor-pointer'>
                                <img alt="Importar" src={import_img} className='h-5 w-5' />
                            </button>
                            <a title="Previsualizar" href={`https://www.xunta.gal/${norma.rutaHtml}`} target="_blank" className='flex focus:outline-none text-md text-center self-center align-center px-4 py-4 bg-black hover:bg-gray-600 text-indigo-50 font-semibold cursor-pointer'>
                                <img alt="Previsualizar" src={visualization} className='h-5 w-5' />
                            </a>
                        </div>
                    </div>
                    <div className='border-b-2 border-gray-300 ml-2 mr-6' />
                </div>
            )
        }
    </section >
}