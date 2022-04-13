import React from 'react';

export const Button = ({ accion, color, colorHover, anchura, texto, url }) => {
    return (
        <a onClick={accion} className={`focus:outline-none text-md text-center self-center align-center px-4 py-4 rounded-md ${color} hover:${colorHover} text-indigo-50 font-semibold cursor-pointer w-${anchura}`} href={url} target="_blank" rel="noreferrer">{texto}</a>
    )
}