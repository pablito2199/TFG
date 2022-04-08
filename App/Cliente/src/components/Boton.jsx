import React from 'react';

export const Boton = ({ color, texto }) => {
    return (
        color === 'verde'
            ?
            <a className='text-md text-center px-8 py-4 rounded-md bg-green-500 hover:bg-green-600 text-indigo-50 font-semibold cursor-pointer w-60' target="_blank" rel="noreferrer">{texto}</a>
            :
            color === 'rojo'
                ?
                <a className='text-md text-center px-8 py-4 rounded-md bg-red-500 hover:bg-red-600 text-indigo-50 font-semibold cursor-pointer w-60' target="_blank" rel="noreferrer">{texto}</a>
                :
                color === 'gris-principal'
                    ?
                    <a className='text-md text-center px-8 py-4 rounded-md bg-gray-500 hover:bg-gray-600 text-indigo-50 font-semibold cursor-pointer w-60' target="_blank" rel="noreferrer">{texto}</a>
                    :
                    <a className='text-md text-center px-8 py-4 rounded-md bg-gray-500 hover:bg-gray-600 text-indigo-50 font-semibold cursor-pointer' target="_blank" rel="noreferrer">{texto}</a>
    )
}