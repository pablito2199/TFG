import React, { useState } from "react";
import ReactDiffViewer from 'react-diff-viewer'

import { Button } from "../../Button";

export const Cambios = ({ cambios, setCambios }) => {
    const [cambiosSeleccionados, setCambiosSeleccionados] = useState([])

    const anadirCambioSeleccionado = (event, cambio) => {
        if (event.target.checked) {
            setCambiosSeleccionados([...cambiosSeleccionados, cambio])
        } else if (!event.target.checked) {
            setCambiosSeleccionados(cambiosSeleccionados.filter(id => cambio !== id))
        }
    }

    const eliminarCambiosSeleccionados = () => {
        setCambios(cambios.filter(cambio => cambiosSeleccionados.indexOf(cambio.id) < 0));
    }

    return <div className='border-2 border-black'>
        <div className='border-b-2 border-black min-h-leis-vinculadas-top max-h-leis-vinculadas-top overflow-y-scroll'>
            {
                cambios?.map((cambio, index) =>
                    <div key={cambio.id} className='p-2'>
                        <div className='flex flex-col border-2 border-gray-400'>
                            <div className='m-4 flex items-center w-11/12 gap-2'>
                                <div className='text-justify flex flex-col gap-2'>
                                    <p className='font-bold min-w-fit'>Cambio {index + 1}: </p>
                                    <ReactDiffViewer oldValue={cambio.parrafoAntiguo} newValue={cambio.parrafoNuevo} splitView={false} hideLineNumbers={true} compareMethod="diffWords" />
                                </div>
                                <input className='ml-auto mr-0 cursor-pointer rounded-xl text-green-600 focus:outline-none' type="checkbox" onChange={(e) => anadirCambioSeleccionado(e, cambio.id)} />
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
        <div className='m-2 flex text-center justify-center items-center gap-4'>
            <Button accion={eliminarCambiosSeleccionados} titulo="Descartar selección" color="bg-red-500" colorHover="bg-red-600" anchura="42" texto="Descartar selección" />
            <Button accion={() => setCambios([])} titulo="Descartar todos" color="bg-red-500" colorHover="bg-red-600" anchura="42" texto="Descartar todos" />
        </div>
    </div>
};