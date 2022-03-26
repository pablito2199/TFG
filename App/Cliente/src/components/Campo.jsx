import React from 'react';
import '../style/campo.css';

export const Campo = ({identificador, texto, tipo}) => {
    return(
        <div className="campo">
            <label for={identificador}>{texto}</label>
            {
                tipo === "textarea"
                ?
                <textarea className={identificador} />
                :
                <input type={tipo} className={identificador} name={identificador} required />
            }
        </div>
    )
}