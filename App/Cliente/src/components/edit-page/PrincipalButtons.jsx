import { React } from 'react'
import { useNavigate } from 'react-router-dom'

import { EyeOutline, ThumbUpOutline, XCircleOutline } from '@graywolfai/react-heroicons'

export const PrincipalButtons = () => {
    const navigate = useNavigate()

    return <div className=' fixed left-0 bottom-0 w-screen border-t-2 bg-white z-1 flex justify-center gap-20 py-4'>
        <button className='focus:outline-none flex text-md items-center justify-center gap-2 self-center align-center px-4 py-4 bg-green-500 hover:bg-green-600 w-60 text-white font-semibold cursor-pointer'>
            <ThumbUpOutline className='h-6 text-white' />
            <span>Validar e publicar</span>
        </button>
        <a href='https://www.xunta.gal/dog/Publicados/excepcional/2021/20210930/2775/AnuncioC3K1-300921-1_gl.html' target="_blank" rel='noreferrer' className='focus:outline-none flex text-md items-center justify-center gap-2 self-center align-center px-4 py-4 bg-gray-500 hover:bg-gray-600 w-60 text-white font-semibold cursor-pointer'>
            <EyeOutline className='h-6 text-white' />
            <span>Previsualizar</span>
        </a>
        <button onClick={() => navigate('/')} className='focus:outline-none flex text-md items-center justify-center gap-2 self-center align-center px-4 py-4 bg-red-500 hover:bg-red-600 w-60 text-white font-semibold cursor-pointer'>
            <XCircleOutline className='h-6 text-white' />
            <span>Rexeitar</span>
        </button>
    </div>
}