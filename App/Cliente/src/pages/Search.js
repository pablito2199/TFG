import { React, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { useNormas } from '../hooks'

import { SearchFieldDOG, SearchFieldLEXGAL } from '../components/search-page'
import { Pages } from '../components/Pagination-LEXGAL'

import { ContentLEXGAL } from '../components/search-page/ContentLEXGAL'
import { SaveIcon, XIcon } from '@heroicons/react/solid'

export default function Search() {
    const location = useLocation()
    let data = useNormas('?text=' + location.state.initialText + '&page=' + (location.state.page - 1))
    const [actualPage, setActualPage] = useState(location.state.page)
    const [modal, setModal] = useState(false)

    return <div className='flex flex-col ml-20 items-center w-full screen-min5:ml-10'>
        <button className="z-10 fixed text-white bottom-24 left-2" title="Importar documento do DOG a lex.gal" onClick={() => setModal(true)}>
            <SaveIcon className="h-12" />
        </button>
        {
            modal
                ?
                <div className='w-11/12'>
                    <div className='opacity-40 w-full'>
                        <>
                            <SearchFieldLEXGAL />
                            {
                                data?.content
                                    ?
                                    <>
                                        <p className='self-end mt-8 mr-28 text-gray-600 text-lg font-semibold italic'>Atopáronse <span className='text-black font-bold'>{data.totalElements}</span> resultados para <span className='text-blue-green font-bold'>"{location.state.initialText}"</span></p>
                                        <Pages initialText={location.state.initialText} actualPage={actualPage} setActualPage={setActualPage} elements={data.totalElements} numberElementsPerPage={8} />
                                        <ContentLEXGAL data={data.content} />
                                        <div className='m-4' />
                                        <Pages initialText={location.state.initialText} actualPage={actualPage} setActualPage={setActualPage} elements={data.totalElements} numberElementsPerPage={8} />
                                        <div className='m-4' />
                                    </>
                                    :
                                    <p className='py-4 text-red-600 font-semibold italic'>Non se atoparon resultados para "{location.state.initialText}". Por favor, inténteo de novo.</p>
                            }
                        </>
                    </div>
                    <div className='flex flex-col h-5/6 bg-white p-8 shadow-lg border-4 fixed top-16 left-28 w-11/12 overflow-y-scroll'>
                        <XIcon className='fixed self-end h-5 cursor-pointer border border-black bg-white' onClick={() => { setModal(false); window.location.reload(false) }} />
                        <SearchFieldDOG />
                    </div>
                </div>
                :
                <>
                    <SearchFieldLEXGAL />
                    {
                        data?.content
                            ?
                            <>
                                <p className='self-end mt-8 mr-28 text-gray-600 text-lg font-semibold italic'>Atopáronse <span className='text-black font-bold'>{data.totalElements}</span> resultados para <span className='text-blue-green font-bold'>"{location.state.initialText}"</span></p>
                                <Pages initialText={location.state.initialText} actualPage={actualPage} setActualPage={setActualPage} elements={data.totalElements} numberElementsPerPage={8} />
                                <ContentLEXGAL data={data.content} />
                                <div className='m-4' />
                                <Pages initialText={location.state.initialText} actualPage={actualPage} setActualPage={setActualPage} elements={data.totalElements} numberElementsPerPage={8} />
                                <div className='m-4' />
                            </>
                            :
                            <p className='py-4 text-red-600 font-semibold italic'>Non se atoparon resultados para "{location.state.initialText}". Por favor, inténteo de novo.</p>
                    }
                </>
        }
    </div>
}