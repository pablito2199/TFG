import { React } from 'react'

import { EyeIcon, ThumbUpIcon, XCircleIcon } from '@heroicons/react/solid';

export const PrincipalButtons = () => {
    return <div className=' fixed left-0 bottom-0 w-screen border-t-2 bg-white z-1 flex justify-center gap-20 py-4'>
        <button className='focus:outline-none flex text-md items-center justify-center gap-2 self-center align-center px-4 py-4 bg-green-500 hover:bg-green-600 w-60 text-white font-semibold cursor-pointer'>
            <ThumbUpIcon className='h-6 text-white' />
            <span>Validar e publicar</span>
        </button>
        <button className='focus:outline-none flex text-md items-center justify-center gap-2 self-center align-center px-4 py-4 bg-gray-500 hover:bg-gray-600 w-60 text-white font-semibold cursor-pointer'>
            <EyeIcon className='h-6 text-white' />
            <span>Previsualizar</span>
        </button>
        <button className='focus:outline-none flex text-md items-center justify-center gap-2 self-center align-center px-4 py-4 bg-red-500 hover:bg-red-600 w-60 text-white font-semibold cursor-pointer'>
            <XCircleIcon className='h-6 text-white' />
            <span>Rexeitar</span>
        </button>
    </div>
}