import React from 'react';
import '../style/boton.css';

export const Boton = ({color, texto}) => {
    return(
        <a className={color} target="_blank" rel="noreferrer">{texto}</a>
    )
}