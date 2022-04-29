import { React, useState } from 'react'

import { LeisVinculadas } from './LeisVinculadas'
import { Cambios } from './cambios/Cambios'
import { Notas } from './notas/Notas'
import { ArrowsExpandOutline } from '@graywolfai/react-heroicons'

export const RightSide = ({ cambios, setCambios, claseLeftSide, setClaseLeftSide }) => {
    const [estado, setEstado] = useState('c')

    return <section className='z-0 flex-1 mx-10 screen-min4:w-5/6 screen-min4:mx-2 screen-min4:mt-4'>
        {
            estado === 'c'
                ?
                <nav className='flex text-lg text-center'>
                    <button className='focus:outline-none p-2 w-32 bg-black text-white border-2 border-black hover:underline cursor-pointer'>Cambios</button>
                    <button className='focus:outline-none p-2 w-32 border-t-2 border-b border-black hover:underline cursor-pointer' onClick={() => setEstado('l')}>Leis vinc.</button>
                    <button className='focus:outline-none p-2 w-32 border-2 border-b border-black hover:underline cursor-pointer' onClick={() => setEstado('n')}>Notas</button>
                    <div className='flex flex-1 self-end justify-end h-5'>
                        {
                            claseLeftSide === 'z-0 w-2/12 ml-2 screen-min4:w-5/6'
                                ?
                                <ArrowsExpandOutline className='cursor-pointer border border-black' onClick={() => setClaseLeftSide('z-0 w-7/12 ml-2 screen-min4:w-5/6')} />
                                :
                                <ArrowsExpandOutline className='cursor-pointer border border-black' onClick={() => setClaseLeftSide('z-0 w-2/12 ml-2 screen-min4:w-5/6')} />
                        }
                    </div>
                </nav>
                :
                estado === 'l'
                    ?
                    <nav className='flex text-lg text-center'>
                        <button className='focus:outline-none p-2 w-32 border-2 border-b border-black hover:underline cursor-pointer' onClick={() => setEstado('c')}>Cambios</button>
                        <button className='focus:outline-none p-2 w-32 bg-black text-white border-2 border-black hover:underline cursor-pointer'>Leis vinc.</button>
                        <button className='focus:outline-none p-2 w-32 border-2 border-b border-black hover:underline cursor-pointer' onClick={() => setEstado('n')}>Notas</button>
                        <div className='flex flex-1 self-end justify-end h-5'>
                            {
                                claseLeftSide === 'z-0 w-2/12 ml-2 screen-min4:w-5/6'
                                    ?
                                    <ArrowsExpandOutline className='cursor-pointer border border-black' onClick={() => setClaseLeftSide('z-0 w-7/12 ml-2 screen-min4:w-5/6')} />
                                    :
                                    <ArrowsExpandOutline className='cursor-pointer border border-black' onClick={() => setClaseLeftSide('z-0 w-2/12 ml-2 screen-min4:w-5/6')} />
                            }
                        </div>
                    </nav>
                    :
                    <nav className='flex text-lg text-center'>
                        <button className='focus:outline-none p-2 w-32 border-2 border-b border-black hover:underline cursor-pointer' onClick={() => setEstado('c')}>Cambios</button>
                        <button className='focus:outline-none p-2 w-32 border-t-2 border-b border-black hover:underline cursor-pointer' onClick={() => setEstado('l')}>Leis vinc.</button>
                        <button className='focus:outline-none p-2 w-32 bg-black text-white border-2 border-black hover:underline cursor-pointer'>Notas</button>
                        <div className='flex flex-1 self-end justify-end h-5'>
                            {
                                claseLeftSide === 'z-0 w-2/12 ml-2 screen-min4:w-5/6'
                                    ?
                                    <ArrowsExpandOutline className='cursor-pointer border border-black' onClick={() => setClaseLeftSide('z-0 w-7/12 ml-2 screen-min4:w-5/6')} />
                                    :
                                    <ArrowsExpandOutline className='cursor-pointer border border-black' onClick={() => setClaseLeftSide('z-0 w-2/12 ml-2 screen-min4:w-5/6')} />
                            }
                        </div>
                    </nav>
        }
        {
            estado === 'c'
                ?
                <Cambios cambios={cambios} setCambios={setCambios} claseLeftSide={claseLeftSide} />
                :
                estado === 'l'
                    ?
                    <LeisVinculadas />
                    :
                    <Notas />
        }
    </section >
}