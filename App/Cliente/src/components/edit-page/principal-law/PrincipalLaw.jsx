import { React } from 'react'

import { DogContent } from './DogContent'

export const PrincipalLaw = ({ contentVinculada, data, nome }) => {
    return <section className='z-0 w-1/2 ml-2'>
        <nav className='flex text-lg items-center gap-2'>
            <button className='w-96 focus:outline-none p-2 w-32 bg-black text-white border-2 border-black cursor-default'>{nome}</button>
        </nav>
        <div className="text-justify p-4 w-full resize-none border-2 border-black min-h-pantalla-lei max-h-pantalla-lei overflow-y-scroll">
            <DogContent
                contentVinculada={contentVinculada}
                data={data}
            />
        </div>
    </section>
}