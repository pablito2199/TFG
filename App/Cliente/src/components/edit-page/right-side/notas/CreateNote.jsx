import React, { useState } from "react"

import { XCircleIcon } from '@heroicons/react/solid'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'

export const CreateNote = ({ notas, setNotas }) => {
    const [nota, setNota] = useState('')
    const [mostrar, setMostrar] = useState(false)

    const submit = () => {
        if (nota !== '') {
            let myObj = {
                'id': Date.now(),
                'fecha': new Date(),
                'usuario': 'Nome Apelido',
                'contenido': nota,
                'comentarios': []
            }
            setNotas([...notas, myObj])
            setNota('')
            setMostrar(false)
        }
    }

    return <div>
        <div className='pt-1 pb-2 flex flex-col w-full items-center border-b-2 border-black'>
            {
                !mostrar
                    ?
                    <button title="Engadir nova nota" onClick={() => setMostrar(true)} className='flex focus:outline-none mt-2 items-center gap-2'>
                        <AddCircleOutlineOutlinedIcon sx={{ fontSize: 35 }} />
                        <span>Engadir nova nota</span>
                    </button>
                    :
                    <div className='w-full flex flex-col pb-4'>
                        <button title="Eliminar lei vinculada" onClick={() => { setMostrar(false); setNota('') }} className='w-full pr-4 focus:outline-none py-2 flex justify-end items-center text-red-500 flex-auto text-right text-sm cursor-pointer gap-1'>
                            <XCircleIcon className='h-4 text-red-500' />
                            <span>Descartar nova nota</span>
                        </button>
                        <div className='flex flex-col items-center'>
                            <textarea value={nota} onChange={(event) => setNota(event.target.value)} className='my-2 w-11/12 h-20 p-2 border border-black focus:outline-none focus:border-gray-500 resize-none' name="note" placeholder="Nova nota..." />
                            <div className='flex gap-4 justify-center'>
                                <button title="Engadir nota" onClick={submit} className='focus:outline-none px-3 py-3 text-sm text-white bg-blue-green hover:bg-blue-700 font-semibold text-center w-40 cursor-pointer'>Engadir nota</button>
                            </div>
                        </div>
                    </div>
            }
        </div>
    </div>
}