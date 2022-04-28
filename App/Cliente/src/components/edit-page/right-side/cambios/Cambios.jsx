import React, { useState } from "react";

import { Button } from "../../../Button";
import { Change } from "./Change";

export const Cambios = ({ cambios, setCambios, claseLeftSide }) => {
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
                cambios?.map(cambio =>
                    <Change
                        cambio={cambio}
                        anadirCambioSeleccionado={anadirCambioSeleccionado}
                        claseLeftSide={claseLeftSide}
                        key={cambio.id}
                    />
                )
            }
        </div>
        <div className='m-2 flex text-center justify-center items-center gap-4'>
            <Button accion={eliminarCambiosSeleccionados} titulo="Descartar selección" color="bg-red-500" colorHover="bg-red-600" anchura="42" texto="Descartar selección" />
            <Button accion={() => setCambios([])} titulo="Descartar todos" color="bg-red-500" colorHover="bg-red-600" anchura="42" texto="Descartar todos" />
        </div>
    </div>
};