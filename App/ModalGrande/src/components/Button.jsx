import React from 'react'

export const Button = ({ titulo, accion, color, colorHover, anchura, texto }) => {
    return <button title={titulo} onClick={accion} className={`focus:outline-none text-md text-center self-center align-center px-4 py-4 ${color} hover:${colorHover} text-white font-semibold cursor-pointer w-${anchura}`}>{texto}</button>
}