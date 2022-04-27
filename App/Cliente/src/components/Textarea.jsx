import React from "react";

export const Textarea = ({ valor, setNuevoValor, texto, placeholder }) => {
    return <div className='flex flex-col text-left align-top m-4 px-3'>
        <span className="font-serif ml-1 text-lg italic mr-1">{texto}</span>
        <textarea
            value={valor}
            onChange={(e) => setNuevoValor(e.target.value)}
            className='resize-none min-h-textarea text-lg text-black border-blue-300 py-2 px-2 leading-tight focus:outline-none focus:border-gray-500'
            placeholder={placeholder}
        />
    </div>
};