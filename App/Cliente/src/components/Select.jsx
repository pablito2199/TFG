import React from "react";

export const Select = ({ texto, elements, setElements }) => {
    return (
        <div className='flex flex-col text-left align-top m-2 px-3'>
            <span>{texto}</span>
            <select defaultValue='DEFAULT' onChange={(e) => setElements(e.target.value)} className='flex-auto border rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 cursor-pointer hover:underline'>
                <option key="not_selected" className='text-gray-400' value='DEFAULT' disabled> -- Seleccione unha opción -- </option>
                {
                    elements?.map((e, index) => <option key={index}>{e.id} - {e.descripcion}</option>)
                }
            </select>
        </div>
    );
};
