import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from "@heroicons/react/solid"
import React, { useState } from "react"
import { Comment } from "./Comment"
import { CreateComment } from "./CreateComment"

export const Note = ({ nota, anadirNotaSeleccionada, notas, setNotas }) => {
    const [mostrar, setMostrar] = useState(false)

    function convertirFecha(fecha) {
        if (fecha) {
            fecha = fecha.split('/')
            fecha = fecha[0].padStart(2, "0") + '/' + fecha[1].padStart(2, "0") + '/' + fecha[2]
        }
        return fecha
    }

    return <div key={nota.id} className='shadow-inner p-2 border-b-2'>
        {
            !mostrar
                ?
                <div className="flex mr-2 h-6 w-full">
                    <div className="flex cursor-default flex-1">
                        <span className="flex w-1/3 font-semibold">{nota.usuario}</span>
                        <p className="flex flex-1 text-ellipsis overflow-hidden">{nota.contenido}</p>
                    </div>
                    <ChevronDoubleDownIcon className="cursor-pointer hover:bg-gray-300" onClick={() => setMostrar(true)} />
                    <input className='cursor-pointer rounded-xl text-green-600 focus:outline-none self-center' type="checkbox" onChange={(e) => anadirNotaSeleccionada(e, nota.id)} />
                </div>
                :
                <div className='flex flex-col w-full'>
                    <div className="flex flex-1 w-full justify-end">
                        <ChevronDoubleUpIcon className="w-6 cursor-pointer hover:bg-gray-300" onClick={() => setMostrar(false)} />
                    </div>
                    <div className="m-4 border-b-2 border-gray items-center flex">
                        <div className='flex flex-col w-full'>
                            <div className="flex w-full">
                                <span className="mx-4 font-semibold">{nota.usuario}</span>
                                <div className="flex flex-1 justify-end italic font-semibold text-gray-600 w-full">({convertirFecha(nota.fecha)})</div>
                            </div>
                            <p className='mt-2 mx-4 mb-4'>{nota.contenido}</p>
                        </div>
                        <input className='ml-auto mr-0 cursor-pointer rounded-xl text-green-600 focus:outline-none' type="checkbox" onChange={(e) => anadirNotaSeleccionada(e, nota.id)} />
                    </div>
                    <div className='ml-8 mb-4 flex flex-col flex-auto'>
                        <div>
                            {
                                nota.comentarios?.map((com, i) =>
                                    <Comment data={com} key={i} />
                                )
                            }
                        </div>
                        <CreateComment notas={notas} setNotas={setNotas} nota={nota} />
                    </div>
                </div>
        }
    </div>
}