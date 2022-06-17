import { React, useState } from 'react'

import { XCircleIcon } from '@heroicons/react/solid'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import { useUser } from '../../hooks'

export const NoteEditor = ({ mostrarInputNota, setMostrarInputNota, notas, setNotas, setOpacity, setCambiosLocales, posicionParrafo }) => {
    const { user } = useUser()
    const [nota, setNota] = useState('')

    const engadirNota = () => {
        if (nota !== '') {
            let myObj = {
                'id': Date.now(),
                'fecha': new Date().toLocaleDateString(),
                'usuario': user.nome + " " + user.apelidos,
                'contenido': nota,
                'parrafo': posicionParrafo,
                'comentarios': []
            }
            setNotas([...notas, myObj])
            setNota('')
            setMostrarInputNota(false)
            setOpacity('opacity-100')
            setCambiosLocales(true)
        }
    }

    if (mostrarInputNota) {
        return <div className='z-10 flex flex-col justify-center fixed w-10/12 m-60 bg-white p-8 shadow-lg border-4 gap-4'>
            <textarea className='border border-blue-green bg-white min-h-textarea' onChange={(e) => setNota(e.target.value)} />
            <div className='flex justify-center gap-2 cursor-default'>
                <button onClick={engadirNota} className='focus:outline-none flex text-md items-center justify-center gap-2 self-center align-center px-4 py-4 bg-green-500 hover:bg-green-600 w-60 text-white font-semibold cursor-pointer'>
                    <SaveOutlinedIcon className='text-green-100' sx={{ fontSize: 25 }} />
                    <span>Gardar nota</span>
                </button>
                <button onClick={() => { setMostrarInputNota(false); setOpacity('opacity-100') }} className='focus:outline-none flex text-md items-center justify-center gap-2 self-center align-center px-4 py-4 bg-red-500 hover:bg-red-600 w-60 text-white font-semibold cursor-pointer'>
                    <XCircleIcon className='h-6 text-white' />
                    <span>Rexeitar</span>
                </button>
            </div>
        </div>
    }

    return <></>
}