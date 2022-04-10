import { React, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useNormas } from '../hooks';
import normas from './data.json'

import { Button } from "../components/Button";
import { SearchButton } from '../components/SearchButton';
import { LeftPageButton, PageButton, RightPageButton } from '../components/Pagination';

export default function Search() {
    const query = useLocation().search.replace('?', '');

    //const [data, setData] = useState(useNormas(query))
    const [data, setData] = useState(normas)
    const [actualPage, setActualPage] = useState(0)
    const [numeroNormasPagina, setNumeroNormasPagina] = useState(5)

    return (
        <body className='flex flex-col items-center'>
            <SearchField />
            <SelectNumberPages setNumeroNormasPagina={setNumeroNormasPagina} setActualPage={setActualPage} />
            <Content data={data.response.listas.datos_informe} actualPage={actualPage} numeroNormasPagina={numeroNormasPagina} />
            <BotonesPaginas normas={data.response.listas.datos_informe.length} actualPage={actualPage} setActualPage={setActualPage} numeroNormasPagina={numeroNormasPagina} />
        </body>
    );
};

function SelectNumberPages({ setNumeroNormasPagina, setActualPage }) {
    return (
        <div className='flex m-2 p-2 bg-blue-500 text-white items-center gap-4 mt-5 ml-auto mr-16 border rounded '>
            <label for="numberPages">Número de normas por página</label>
            <select onChange={(e) => { setNumeroNormasPagina(e.target.value); setActualPage(0) }} name="numberPages" className='flex-auto text-black border rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 cursor-pointer'>
                <option key="p5">5</option>
                <option key="p10">10</option>
                <option key="p20">20</option>
            </select>
        </div>)
}

function SearchField() {
    const [params, setParams] = useState('')
    const navigate = useNavigate()

    const cambiarPagina = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search?${params}`)
        }
    }

    return <section className='w-3/5 bg-black font-bitter bg-blue-lex-gal mt-5 flex flex-col rounded-xl border-2 border-solid border-inherit-700 items-center'>
        <p className='bg-gray-lex-gal text-white text-2xl py-3 rounded-xl font-bold text-center w-full'>Búsqueda de normas</p>
        <div className='m-4 w-11/12'>
            <div className='input-group relative flex items-stretch w-full mb-4'>
                <input onKeyDown={cambiarPagina} type="search" onChange={(event) => { setParams(event.target.value) }} className='form-control relative flex-auto min-w-0 block w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l transition ease-in-out m-0 py-2 px-2 leading-tight focus:outline-none focus:border-gray-500' placeholder="Búsqueda de normas..." aria-label="Search" aria-describedby="button-addon2" />
                <SearchButton params={params} />
            </div>
        </div>
    </section >
}

function Content({ data, actualPage, numeroNormasPagina }) {
    return <section className='mt-4 flex flex-col w-11/12'>
        {
            data?.map((norma, index) =>
                (index >= numeroNormasPagina * actualPage && index < actualPage * numeroNormasPagina + numeroNormasPagina)
                    ?
                    <div className=' border-b-2 border-gray-300' >
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
                    :
                    <></>
            )
        }
    </section >
}

function BotonesPaginas({ normas, actualPage, setActualPage, numeroNormasPagina }) {
    return (
        <div className='m-4 flex items-center justify-center w-full'>
            <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <LeftPageButton actualPage={actualPage} setActualPage={setActualPage} />
                <PageButton actualPage={actualPage} setActualPage={setActualPage} numberPages={normas} numberElementsPerPage={numeroNormasPagina} />
                <RightPageButton actualPage={actualPage} setActualPage={setActualPage} numberPages={normas} numberElementsPerPage={numeroNormasPagina} />
            </nav>
        </div>
    )
}