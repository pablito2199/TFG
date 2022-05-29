import { SaveIcon, XIcon } from '@heroicons/react/solid'
import { React, useState } from 'react'
import { SearchFieldDOG, SearchFieldLEXGAL } from '../components/search-page'

export default function Home() {
    const [modal, setModal] = useState(false)

    return <div className='flex flex-col ml-20 items-center w-full screen-min5:ml-10'>
        <button className="fixed text-white bottom-4 left-3" title="Importar documento do DOG a lex.gal" onClick={() => setModal(true)}>
            <SaveIcon className="h-10" />
        </button>
        {
            modal
                ?
                <div className='w-11/12'>
                    <div className='opacity-40 w-full'>
                        <SearchFieldLEXGAL />
                    </div>
                    <div className='flex flex-col h-5/6 bg-white p-8 shadow-lg border-4 fixed top-16 left-28 w-11/12 overflow-y-scroll'>
                        <XIcon className='fixed self-end h-5 cursor-pointer border border-black' onClick={() => { setModal(false); window.location.reload(false) }} />
                        <SearchFieldDOG modal={modal} />
                    </div>
                </div>
                :
                <SearchFieldLEXGAL />
        }
    </div>
}