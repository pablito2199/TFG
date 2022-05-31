import React from "react"

export const Comment = ({ data }) => {
    function convertirFecha(fecha) {
        if (fecha) {
            fecha = fecha.split('/')
            fecha = fecha[0].padStart(2, "0") + '/' + fecha[1].padStart(2, "0") + '/' + fecha[2]
        }
        return fecha
    }

    return <div className='mb-4 w-11/12'>
        <div className="flex w-full">
            <span className="font-semibold">{data.usuario}</span>
            <span className="flex flex-1 justify-end italic font-semibold text-gray-600">({convertirFecha(data.fecha)})</span>
        </div>
        <p className='break-words mt-1'>{data.contenido}</p>
    </div>
}