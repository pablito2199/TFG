import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { SearchButton } from '../components/SearchButton';

export default function Search() {
    return (
        <div className='flex flex-col items-center'>
            <SearchField />
        </div>
    );
};

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
    </section>
}