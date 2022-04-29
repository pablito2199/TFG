import React from "react"

export const Comment = ({ data, getStringDate }) => {
    return <div className='mb-4 w-11/12'>
        <div className="flex w-full">
            <span className="font-semibold">{data.usuario}</span>
            <span className="flex flex-1 justify-end italic font-semibold text-gray-600">({getStringDate(data.fecha)})</span>
        </div>
        <p className='break-words mt-1'>{data.contenido}</p>
    </div>
}