import React, { useState } from "react"

import { XCircleIcon } from '@heroicons/react/solid'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'

export const CreateLei = ({ leis, setLeis, leisAnadidasManualmente, setLeisAnadidasManualmente }) => {
    const [lei, setLei] = useState('')
    const [mostrar, setMostrar] = useState(false)

    const submit = () => {
        if (lei !== '') {
            let myObj = {
                'id': Date.now(),
                'name': lei
            }
            setLeis([...leis, myObj])
            setLeisAnadidasManualmente([...leisAnadidasManualmente, myObj])
            setLei('')
            setMostrar(false)
        }
    }

    return <div>
        <div className='pt-1 flex flex-col w-full items-center'>
            {
                !mostrar
                    ?
                    <button title="Engadir nova lei vinculada manualmente" onClick={() => setMostrar(true)} className='pb-4 flex focus:outline-none items-center justify-center gap-2'>
                        <AddCircleOutlineOutlinedIcon sx={{ fontSize: 35 }} />
                        <span>Engadir nova lei vinculada manualmente</span>
                    </button>
                    :
                    <div className='w-full flex flex-col pb-4'>
                        <button title="Eliminar lei vinculada" onClick={() => { setMostrar(false); setLei('') }} className='w-full pr-4 focus:outline-none py-2 flex justify-end items-center text-red-500 flex-auto text-right text-sm cursor-pointer gap-1'>
                            <XCircleIcon className='h-4 text-red-500' />
                            <span>Descartar nova lei vinculada</span>
                        </button>
                        <div className='flex flex-col items-center'>
                            <textarea value={lei} onChange={(event) => setLei(event.target.value)} className='my-2 w-11/12 h-20 p-2 border border-black focus:outline-none focus:border-gray-500 resize-none' name="lei" placeholder="Nova lei vinculada..." />
                            <div className='flex gap-4 justify-center'>
                                <button title="Engadir nota" onClick={submit} className='focus:outline-none px-3 py-3 text-sm text-white bg-blue-green hover:bg-blue-700 font-semibold text-center w-40 cursor-pointer'>Engadir lei vinculada</button>
                            </div>
                        </div>
                    </div>
            }
        </div>
    </div>
}