import { React } from 'react'

import { XCircleIcon } from '@heroicons/react/solid'

import save_img from '../../images/save-white.png'

export const ParagraphEditor = ({ mostrarInput, setMostrarInput, parrafoCambiado, setParrafoCambiado, parrafoACambiar, setParrafoACambiar, cambios, setCambios, setOpacity }) => {
    const nuevoCambio = () => {
        if (parrafoCambiado !== parrafoACambiar) {
            let myObj = {
                'id': Date.now(),
                'parrafoAntiguo': parrafoACambiar,
                'parrafoNuevo': parrafoCambiado
            }
            setCambios([...cambios, myObj])
        }
        setMostrarInput(false)
        setParrafoACambiar('')
        setParrafoCambiado('')
        setOpacity('opacity-100');
    }

    return <>
        {
            mostrarInput
                ?
                <div className='z-10 flex flex-col justify-center fixed w-10/12 m-60 bg-white p-8 shadow-lg border-4 gap-4'>
                    <textarea className='border border-blue-green bg-white min-h-textarea' value={parrafoCambiado} onChange={(e) => setParrafoCambiado(e.target.value)} />
                    <div className='flex justify-center gap-2 cursor-default'>
                        <button onClick={nuevoCambio} className='focus:outline-none flex text-md items-center justify-center gap-2 self-center align-center px-4 py-4 bg-green-500 hover:bg-green-600 w-60 text-white font-semibold cursor-pointer'>
                            <img src={save_img} alt="gardar" className='h-6 text-white' />
                            <span>Gardar cambios</span>
                        </button>
                        <button onClick={() => { setMostrarInput(false); setOpacity('opacity-100'); }} className='focus:outline-none flex text-md items-center justify-center gap-2 self-center align-center px-4 py-4 bg-red-500 hover:bg-red-600 w-60 text-white font-semibold cursor-pointer'>
                            <XCircleIcon className='h-6 text-white' />
                            <span>Rexeitar</span>
                        </button>
                    </div>
                </div>
                :
                <></>
        }
    </>
}