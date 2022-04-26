import { React, useState } from 'react'

import { useDocument } from '../hooks'
import { Header, LeftSide, PrincipalButtons, RightSide } from '../components/edit-page';
import { XCircleIcon } from '@heroicons/react/solid';

import save_img from '../images/save-white.png'

export default function Edit() {
    const [parrafoACambiar, setParrafoACambiar] = useState('')
    const [parrafoCambiado, setParrafoCambiado] = useState('')
    const [mostrarInput, setMostrarInput] = useState(false)
    const [cambios, setCambios] = useState([])

    let data = useDocument(1)

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
    }

    return (
        <div className='flex flex-col ml-20 items-center w-full screen-min3:ml-20'>
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
                            <button onClick={() => setMostrarInput(false)} className='focus:outline-none flex text-md items-center justify-center gap-2 self-center align-center px-4 py-4 bg-red-500 hover:bg-red-600 w-60 text-white font-semibold cursor-pointer'>
                                <XCircleIcon className='h-6 text-white' />
                                <span>Rexeitar</span>
                            </button>
                        </div>
                    </div>
                    :
                    <></>
            }
            {
                data.cab !== undefined
                    ?
                    <Header data={data.cab} />
                    :
                    <></>
            }
            {
                data.corpo !== undefined
                    ?
                    <main className='z-0 w-full mt-6 flex screen-min4:flex-col screen-min3:w-11/12 screen-min1:9/12 mb-24'>
                        <LeftSide
                            data={data.corpo}
                            setParrafoACambiar={setParrafoACambiar}
                            setParrafoCambiado={setParrafoCambiado}
                            setMostrarInput={setMostrarInput}
                        />
                        <RightSide cambios={cambios} setCambios={setCambios} />
                    </main>
                    :
                    <></>
            }

            <PrincipalButtons />
        </div >
    );
};

