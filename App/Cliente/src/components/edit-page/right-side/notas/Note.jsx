import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from "@heroicons/react/solid"
import React, { useState } from "react"
import { Comment } from "./Comment"
import { CreateComment } from "./CreateComment"

export const Note = ({ content, nota, anadirNotaSeleccionada, notas, setNotas, setCambiosLocales }) => {
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
                    <input className='cursor-pointer rounded-xl text-green-600 focus:outline-none self-center mr-2' type="checkbox" onChange={(e) => anadirNotaSeleccionada(e, nota.id)} />
                    <span className="flex font-semibold w-full">{nota.usuario}</span>
                    <div className="flex flex-1 justify-end gap-6">
                        <span className="flex italic font-semibold text-gray-600 font-semibold">({convertirFecha(nota.fecha)})</span>
                        <ChevronDoubleDownIcon className="cursor-pointer hover:bg-gray-300" onClick={() => setMostrar(true)} />
                    </div>
                </div>
                :
                <div className='flex flex-col w-full'>
                    <div className="flex flex-1 w-full justify-end">
                        <ChevronDoubleUpIcon className="w-6 cursor-pointer hover:bg-gray-300" onClick={() => setMostrar(false)} />
                    </div>
                    <button
                        className="flex flex-1 w-full justify-end text-blue-green underline font-semibold"
                        onClick={() => content.current.children[parseInt(nota.parrafo)].scrollIntoView({ behavior: "smooth" })}
                    >
                        Ir ao parágrafo
                    </button>
                    <div className="flex items-center">
                        <input className='cursor-pointer rounded-xl text-green-600 focus:outline-none' type="checkbox" onChange={(e) => anadirNotaSeleccionada(e, nota.id)} />
                        <div className="flex flex-col flex-1">
                            <div className="m-4 border-b-2 border-gray items-center flex">
                                <div className='flex flex-col w-full'>
                                    <div className="flex w-full">
                                        <span className="mx-4 font-semibold">{nota.usuario}</span>
                                        <div className="flex flex-1 justify-end italic font-semibold text-gray-600 w-full">({convertirFecha(nota.fecha)})</div>
                                    </div>
                                    <p className='mt-2 mx-4 mb-4'>{nota.contenido}</p>
                                </div>
                            </div>
                            <div className='ml-8 mb-4 flex flex-col flex-auto'>
                                <div>
                                    {
                                        nota.comentarios?.map((com, i) =>
                                            <Comment data={com} key={i} />
                                        )
                                    }
                                </div>
                                <CreateComment
                                    notas={notas} setNotas={setNotas}
                                    nota={nota}
                                    setCambiosLocales={setCambiosLocales}
                                />
                            </div>
                        </div>
                    </div>
                </div>
        }
    </div >
}