import React from "react";

export const Input = ({ texto, tipo, placeholder }) => {
    return (
        <div className='flex flex-col text-left align-top m-2 px-3'>
            <span>{texto}</span>
            <input
                type={tipo}
                className='flex-auto border rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500'
                placeholder={placeholder}
                required
            />
        </div>
    );
};
