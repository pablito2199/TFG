import React from 'react';

export const Button = ({ color, colorHover, anchura, texto, url }) => {
    return (
        <a className={`text-md text-center px-8 py-4 rounded-md ${color} hover:${colorHover} text-indigo-50 font-semibold cursor-pointer w-${anchura}`} href={url} target="_blank" rel="noreferrer">{texto}</a>
    )
}