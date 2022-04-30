import React from "react"

export const Select = ({ texto, firstOption, elements, element, setElements, opcion, disabled = false }) => {
    return <div className='flex flex-col text-left align-top m-4 px-3'>
        <span className="font-serif ml-1 text-lg italic mr-1">{texto}</span>
        <select defaultValue={element} onChange={(e) => setElements(e.target.value)} className="text-lg text-black border-blue-300 py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 cursor-pointer" disabled={disabled}>
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
}