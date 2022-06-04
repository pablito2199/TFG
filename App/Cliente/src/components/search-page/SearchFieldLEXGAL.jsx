import { React, useEffect, useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom'
import { SearchButton } from "./SearchButton"

export const SearchFieldLEXGAL = () => {
    const [texto, setTexto] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (location.state) {
            setTexto(location.state.initialText)
        }
    }, [location])

    const cambiarPagina = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search?text=${texto}`, { state: { initialText: texto, page: 1, size: 8 } })
        }
    }

    return <section className='w-11/12 font-medium mt-5 flex flex-col rounded-xl px-2 screen-min3:w-10/12 screen-min1:w-9/12'>
        <div className='w-80 p-4 bg-blue-lex-gal text-center'>
            <span className='text-white text-2xl py-3 rounded-xl'>Búsqueda en lex.gal</span>
        </div>
        <div className='p-6 bg-blue-lex-gal'>
            <span className="font-serif ml-1 text-lg font-semibold italic">Insira o texto da búsqueda...</span>
            <input value={texto} onKeyDown={cambiarPagina} type="search" onChange={(event) => { setTexto(event.target.value) }} className=' mt-1 w-full font-normal text-gray-700 border border-solid border-gray-300 transition ease-in-out py-2 px-2 focus:outline-none focus:border-gray-500' placeholder="Búsqueda de normas..." aria-label="Search" aria-describedby="button-addon2" />
            <div className='w-full mt-4 flex gap-4 justify-end'>
                <button onClick={() => setTexto('')} className='px-6 py-2.5 focus:outline-none' type="button" id="button-addon2">
                    <span className="font-semibold">Limpar</span>
                </button>
                <SearchButton initialText={texto} />
            </div>
        </div>
    </section >
}