import React, { useState } from "react"

import { Button } from "../../../Button"
import { CreateNote } from "./CreateNote"
import { Note } from "./Note"

export const Notas = ({ notas, setNotas }) => {
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
    }

    return <div className='border-2 border-black'>
        <CreateNote notas={notas} setNotas={setNotas} />
        <div className='flex flex-col border-b-2 border-black min-h-leis-vinculadas max-h-leis-vinculadas overflow-y-scroll'>
            {
                notas?.map(nota =>
                    <Note nota={nota} anadirNotaSeleccionada={anadirNotaSeleccionada} notas={notas} setNotas={setNotas} key={nota.id} />
                )
            }
        </div>
        <div className='m-2 flex text-center justify-center items-center gap-4'>
            <Button accion={eliminarNotasSeleccionadas} titulo="Resolver selección" color="bg-green-500" colorHover="bg-green-600" anchura="42" texto="Resolver selección" />
            <Button accion={() => setNotas([])} titulo="Resolver todas" color="bg-green-500" colorHover="bg-green-600" anchura="42" texto="Resolver todas" />
        </div>
    </div >
}