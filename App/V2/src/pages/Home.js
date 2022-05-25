import { SaveIcon } from '@heroicons/react/solid'
import { React, useState } from 'react'
import { SearchField, SearchFieldDOG } from '../components/search-page'

export default function Home() {
    const [modal, setModal] = useState(false)
    return <div className='flex flex-col ml-20 items-center w-full screen-min5:ml-10'>
        <button className="fixed text-white bottom-4 left-3" title="Importar documento do DOG a lex.gal" onClick={() => setModal(!modal)}>
            <SaveIcon className="h-10" />
        </button>
        {
            modal
                ?
                <div className='w-11/12'>
                    <div className='opacity-40 w-full'>
                        <SearchField />
                    </div>
                    <div className='h-5/6 bg-white p-8 shadow-lg border-4 fixed top-16 left-28 w-11/12 overflow-y-scroll'>
                        <SearchFieldDOG />
                    </div>
                </div>
                :
                <SearchField />
        }
    </div>
}