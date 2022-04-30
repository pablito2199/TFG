import React from "react"

export const Input = ({ valor, setValor, texto, tipo, placeholder, disabled = false }) => {
    return <div className='flex flex-col text-left align-top m-4 px-3'>
        <span className="font-serif ml-1 text-lg italic mr-1">{texto}</span>
        <input
            type={tipo}
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            className='opacity-75 text-lg text-black border-blue-300 py-2 px-2 leading-tight focus:outline-none focus:border-gray-500'
            placeholder={placeholder}
            disabled={disabled}
            required
        />
    </div>
}