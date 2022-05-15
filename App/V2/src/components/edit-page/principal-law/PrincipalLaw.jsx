import { React } from 'react'

import { DogContent } from './DogContent'

export const PrincipalLaw = ({ data }) => {
    return <section className='z-0 flex-1 mx-10 screen-min1:mt-8 screen-min1:ml-2 screen-min1:w-11/12'>
        <nav className='flex text-lg items-center gap-2'>
            <button className='w-96 focus:outline-none p-2 w-32 bg-black text-white border-2 border-black cursor-default'>Anuncio do 5 de maio de 2022</button>
        </nav>
        <div className="text-justify p-4 w-full resize-none border-2 border-black min-h-texto-principal max-h-texto-principal overflow-y-scroll">
            <DogContent data={data} />
        </div>
    </section >
}