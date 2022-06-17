import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from "@heroicons/react/solid"
import React, { useState } from "react"

import ReactDiffViewer from 'react-diff-viewer'

export const Change = ({ content, cambio, anadirCambioSeleccionado, claseLeftSide }) => {
    const [mostrar, setMostrar] = useState(false)

    function convertirFecha(fecha) {
        if (fecha) {
            fecha = fecha.split('/')
            fecha = fecha[0].padStart(2, "0") + '/' + fecha[1].padStart(2, "0") + '/' + fecha[2]
        }
        return fecha
    }

    return <div className='p-2 shadow-inner border-b-2'>
        {
            !mostrar
                ?
                <div className="flex mr-2 h-6 w-full cursor-default">
                    <input className='cursor-pointer rounded-xl text-green-600 focus:outline-none self-center mr-2' type="checkbox" onChange={(e) => anadirCambioSeleccionado(e, cambio.id)} />
                    <span className="flex font-semibold">{cambio.usuario}</span>
                    <div className="flex flex-1 justify-end gap-6">
                        <span className="flex italic font-semibold text-gray-600 font-semibold">({convertirFecha(cambio.fecha)})</span>
                        <ChevronDoubleDownIcon className="cursor-pointer hover:bg-gray-300" onClick={() => setMostrar(true)} />
                    </div>
                </div>
                :
                <div className='flex flex-col'>
                    <div className="flex flex-1 w-full justify-end">
                        <ChevronDoubleUpIcon className="w-6 cursor-pointer hover:bg-gray-300" onClick={() => setMostrar(false)} />
                    </div>
                    <button
                        className="flex flex-1 w-full justify-end text-blue-green underline font-semibold"
                        onClick={() => content.current.children[parseInt(cambio.parrafo)].scrollIntoView()}
                    >
                        Ir ao parágrafo
                    </button>
                    <div className='m-4 flex items-center w-11/12 gap-2'>
                        <input className='cursor-pointer rounded-xl text-green-600 focus:outline-none' type="checkbox" onChange={(e) => anadirCambioSeleccionado(e, cambio.id)} />
                        <div className='text-justify flex flex-col gap-2'>
                            <div className="flex w-full">
                                <span className="mx-4 font-semibold">{cambio.usuario}</span>
                                <div className="flex flex-1 justify-end italic font-semibold text-gray-600 w-full">({convertirFecha(cambio.fecha)})</div>
                            </div>
                            {
                                claseLeftSide === 'z-0 w-2/12 ml-2 screen-min5:w-5/6'
                                    ?
                                    <ReactDiffViewer
                                        oldValue={cambio.parrafoAntiguo}
                                        newValue={cambio.parrafoNuevo}
                                        hideLineNumbers={true}
                                        compareMethod="diffWords"
                                    />
                                    :
                                    <ReactDiffViewer
                                        oldValue={cambio.parrafoAntiguo}
                                        newValue={cambio.parrafoNuevo}
                                        splitView={false}
                                        hideLineNumbers={true}
                                        compareMethod="diffWords"
                                    />
                            }
                        </div>
                    </div>
                </div>
        }
    </div>
}