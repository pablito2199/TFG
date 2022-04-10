import React from "react";

export const Textarea = ({ identificador, texto, placeholder }) => {
    return (
        <div className='flex flex-col text-left align-top m-2 px-3'>
            <label for={identificador}>{texto}</label>
            <textarea className='flex-auto min-h-fit resize-none border rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 min-h-textarea' placeholder={placeholder} />
        </div>
    )
};
