import React from "react";

export const Select = ({ texto, elements, element, setElements, opcion, posicionSpan, clase }) => {
    return (
        <div className='flex flex-col text-left align-top m-2 px-3'>
            <span className={posicionSpan}>{texto}</span>
            <select defaultValue={element} onChange={(e) => setElements(e.target.value)} className={clase}>
                <option key="not_selected" className='text-gray-400' value=''>{opcion} </option>
                {
                    elements?.map((e, index) => <option key={index} value={e.id}>{e.id} - {e.descripcion}</option>)
                }
            </select>
        </div>
    );
};
