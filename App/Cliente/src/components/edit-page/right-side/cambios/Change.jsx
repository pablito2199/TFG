import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from "@heroicons/react/solid"
import React, { useState } from "react"

import ReactDiffViewer from 'react-diff-viewer'

export const Change = ({ cambio, anadirCambioSeleccionado, claseLeftSide }) => {
    const [mostrar, setMostrar] = useState(false)

    return <div className='p-2 shadow-inner border-b-2'>
        {
            !mostrar
                ?
                <div className="flex mr-2 h-6 w-full cursor-default">
                    <p className="text-ellipsis overflow-hidden">{cambio.parrafoNuevo}</p>
                    <div className="flex flex-1 justify-end">
                        <ChevronDoubleDownIcon className="cursor-pointer hover:bg-gray-300" onClick={() => setMostrar(true)} />
                    </div>
                </div>
                :
                <div className='flex flex-col'>
                    <div className="flex flex-1 w-full justify-end">
                        <ChevronDoubleUpIcon className="w-6 cursor-pointer hover:bg-gray-300" onClick={() => setMostrar(false)} />
                    </div>
                    <div className='m-4 flex items-center w-11/12 gap-2'>
                        <div className='text-justify flex flex-col gap-2'>
                            {
                                claseLeftSide === 'z-0 w-2/12 ml-2 screen-min4:w-5/6'
                                    ?
                                    <ReactDiffViewer oldValue={cambio.parrafoAntiguo} newValue={cambio.parrafoNuevo} hideLineNumbers={true} compareMethod="diffWords" />
                                    :
                                    <ReactDiffViewer oldValue={cambio.parrafoAntiguo} newValue={cambio.parrafoNuevo} splitView={false} hideLineNumbers={true} compareMethod="diffWords" />
                            }
                        </div>
                        <input className='ml-auto mr-0 cursor-pointer rounded-xl text-green-600 focus:outline-none' type="checkbox" onChange={(e) => anadirCambioSeleccionado(e, cambio.id)} />
                    </div>
                </div>
        }
    </div>
}