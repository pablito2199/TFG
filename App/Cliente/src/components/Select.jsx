import React from "react";

export const Select = ({ texto, firstOption, elements, element, setElements, opcion, claseSpan, clase }) => {
    return (
        <div className='flex flex-col text-left align-top m-2 px-3'>
            <span className={claseSpan}>{texto}</span>
            <select defaultValue={element} onChange={(e) => setElements(e.target.value)} className={clase}>
                {
                    firstOption
                        ?
                        <option key="not_selected" className='text-gray-400' value=''>{opcion} </option>
                        :
                        <option key="not_selected" className='text-gray-400' value='' disabled>{opcion} </option>
                }
                {
                    elements?.map((e, index) => <option key={index} value={e.id}>{e.id} - {e.descripcion}</option>)
                }
            </select>
        </div>
    );
};
