import { React } from 'react'
import { useNavigate } from 'react-router-dom'

import { EyeOutline, ThumbUpOutline, XCircleOutline } from '@graywolfai/react-heroicons'
import { useFinalDocument } from '../../hooks'

export const PrincipalButtons = ({ idDb, enlace, notas, cambios, leyes }) => {
    const { put } = useFinalDocument()
    const navigate = useNavigate()

    const submit = async () => {
        console.log(leyes)
        try {
            put({
                id: idDb,
                notes: notas,
                changes: cambios,
                laws: leyes
            })

            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }

    return <div className=' fixed left-0 bottom-0 w-screen border-t-2 bg-white z-1 flex justify-center gap-20 py-4'>
        <button onClick={submit} className='focus:outline-none flex text-md items-center justify-center gap-2 self-center align-center px-4 py-4 bg-green-500 hover:bg-green-600 w-60 text-white font-semibold cursor-pointer'>
            <ThumbUpOutline className='h-6 text-white' />
            <span>Validar e publicar</span>
        </button>
        <a href={enlace} target="_blank" rel='noreferrer' className='focus:outline-none flex text-md items-center justify-center gap-2 self-center align-center px-4 py-4 bg-gray-500 hover:bg-gray-600 w-60 text-white font-semibold cursor-pointer'>
            <EyeOutline className='h-6 text-white' />
            <span>Previsualizar</span>
        </a>
        <button onClick={() => navigate('/')} className='focus:outline-none flex text-md items-center justify-center gap-2 self-center align-center px-4 py-4 bg-red-500 hover:bg-red-600 w-60 text-white font-semibold cursor-pointer'>
            <XCircleOutline className='h-6 text-white' />
            <span>Rexeitar</span>
        </button>
    </div>
}