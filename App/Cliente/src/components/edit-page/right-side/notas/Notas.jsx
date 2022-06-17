import React, { useState } from "react"

import { Button } from "../../../Button"
import { Note } from "./Note"

export const Notas = ({ content, notas, setNotas, setCambiosLocales }) => {
    const [notasSeleccionadas, setNotasSeleccionadas] = useState([])

    const anadirNotaSeleccionada = (event, nota) => {
        if (event.target.checked) {
            setNotasSeleccionadas([...notasSeleccionadas, nota])
        } else if (!event.target.checked) {
            setNotasSeleccionadas(notasSeleccionadas.filter(id => nota !== id))
        }
    }

    const eliminarNotasSeleccionadas = () => {
        setNotas(notas.filter(nota => notasSeleccionadas.indexOf(nota.id) < 0))
        setCambiosLocales(true)
    }

    return <div className='border-2 border-black'>
        <div className='flex flex-col border-b-2 border-black min-h-leis-vinculadas-top max-h-leis-vinculadas-top overflow-y-scroll'>
            {
                notas?.map(nota =>
                    <Note content={content} nota={nota} anadirNotaSeleccionada={anadirNotaSeleccionada} notas={notas} setNotas={setNotas} setCambiosLocales={setCambiosLocales} key={nota.id} />
                )
            }
        </div>
        <div className='m-2 flex text-center justify-center items-center gap-4'>
            <Button accion={eliminarNotasSeleccionadas} titulo="Resolver selección" color="bg-green-500" colorHover="bg-green-600" anchura="42" texto="Resolver selección" />
            <Button accion={() => { setNotas([]); setCambiosLocales(true) }} titulo="Resolver todas" color="bg-green-500" colorHover="bg-green-600" anchura="42" texto="Resolver todas" />
        </div>
    </div >
}