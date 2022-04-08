import React from "react";

export const Campo = ({
    identificador,
    texto,
    tipo,
    placeholder,
    elements,
    setElements
}) => {
    return (
        <div className='flex flex-col text-left align-top m-2 px-3'>
            <label for={identificador}>{texto}</label>
            {
                tipo === "textarea"
                    ?
                    (<textarea className='flex-auto min-h-fit resize-none border rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 min-h-textarea' placeholder={placeholder} />)
                    :
                    tipo === "autocomplete"
                        ?
                        (
                            <select className='flex-auto border rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 cursor-pointer hover:underline'>
                                <option className='text-gray-400' disabled selected value> -- Seleccione unha opción -- </option>
                                {
                                    elements?.map(org => <option key={org.id} onClick={setElements(org.id)}>{org.id} - {org.descripcion}</option>)
                                }
                            </select>
                        )
                        :
                        (
                            <input
                                type={tipo}
                                className='flex-auto border rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500'
                                nombre={identificador}
                                placeholder={placeholder}
                                required
                            />
                        )}
        </div>
    );
};
