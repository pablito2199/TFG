import { React } from 'react'

import { DogContent } from './DogContent'

export const PrincipalLaw = ({ leiPrincipal, data }) => {
    return <section className='z-0 w-1/2 ml-2'>
        <nav className='flex text-lg items-center gap-2'>
            {

                leiPrincipal === '10549190'
                    ?
                    <button className='w-96 focus:outline-none p-2 w-32 bg-black text-white border-2 border-black cursor-default'>Orde do 5 de maio de 2022</button>
                    :
                    leiPrincipal === '10533797'
                        ?
                        <button className='w-96 focus:outline-none p-2 w-32 bg-black text-white border-2 border-black cursor-default'>Orde do 3 de xaneiro de 2022</button>
                        :
                        leiPrincipal === '10529725'
                            ?
                            <button className='w-96 focus:outline-none p-2 w-32 bg-black text-white border-2 border-black cursor-default'>Orde do 29 de novembro de 2021</button>
                            :
                            <></>
            }
        </nav>
        <div className="text-justify p-4 w-full resize-none border-2 border-black min-h-texto-principal max-h-texto-principal overflow-y-scroll">
            <DogContent data={data} />
        </div>
    </section>
}