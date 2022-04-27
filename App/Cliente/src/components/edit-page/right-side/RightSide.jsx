import { React, useState } from 'react'

import { LeisVinculadas } from './LeisVinculadas';
import { Cambios } from './Cambios';
import { Notas } from './Notas';

export const RightSide = ({ cambios, setCambios }) => {
    const [estado, setEstado] = useState('c')

    return <section className='z-0 w-1/3 mx-10 screen-min4:w-5/6 screen-min4:mx-2 screen-min4:mt-4'>
        {
            estado === 'c'
                ?
                <nav className='flex text-lg text-center'>
                    <button className='focus:outline-none p-2 w-32 bg-black text-white border-2 border-black hover:underline cursor-pointer'>Cambios</button>
                    <button className='focus:outline-none p-2 w-32 border-t-2 border-b border-black hover:underline cursor-pointer' onClick={() => setEstado('l')}>Leis vinc.</button>
                    <button className='focus:outline-none p-2 w-32 border-2 border-b border-black hover:underline cursor-pointer' onClick={() => setEstado('n')}>Notas</button>
                </nav>
                :
                estado === 'l'
                    ?
                    <nav className='flex text-lg text-center'>
                        <button className='focus:outline-none p-2 w-32 border-2 border-b border-black hover:underline cursor-pointer' onClick={() => setEstado('c')}>Cambios</button>
                        <button className='focus:outline-none p-2 w-32 bg-black text-white border-2 border-black hover:underline cursor-pointer'>Leis vinc.</button>
                        <button className='focus:outline-none p-2 w-32 border-2 border-b border-black hover:underline cursor-pointer' onClick={() => setEstado('n')}>Notas</button>
                    </nav>
                    :
                    <nav className='flex text-lg text-center'>
                        <button className='focus:outline-none p-2 w-32 border-2 border-b border-black hover:underline cursor-pointer' onClick={() => setEstado('c')}>Cambios</button>
                        <button className='focus:outline-none p-2 w-32 border-t-2 border-b border-black hover:underline cursor-pointer' onClick={() => setEstado('l')}>Leis vinc.</button>
                        <button className='focus:outline-none p-2 w-32 bg-black text-white border-2 border-black hover:underline cursor-pointer'>Notas</button>
                    </nav>
        }
        {
            estado === 'c'
                ?
                <Cambios cambios={cambios} setCambios={setCambios} />
                :
                estado === 'l'
                    ?
                    <LeisVinculadas />
                    :
                    <Notas />
        }
    </section >
}