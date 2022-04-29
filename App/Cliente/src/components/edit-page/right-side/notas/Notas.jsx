import React, { useState } from "react"

import { Button } from "../../../Button"
import { CreateNote } from "./CreateNote"
import { Note } from "./Note"

export const Notas = () => {
    const [notas, setNotas] = useState([
        { id: Date.now(), fecha: new Date(), usuario: 'Nome Apelido', contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [{ 'contenido': 'Comentario 1', 'fecha': new Date(), usuario: 'Nome Apelido' }, { 'contenido': 'Comentario 2', 'fecha': new Date(), usuario: 'Nome Apelido' }] },
        { id: Date.now() + 1, fecha: new Date(), usuario: 'Nome Apelido', contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [{ 'contenido': 'Comentario', 'fecha': new Date(), usuario: 'Nome Apelido' }] },
        { id: Date.now() + 2, fecha: new Date(), usuario: 'Nome Apelido', contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
        { id: Date.now() + 3, fecha: new Date(), usuario: 'Nome Apelido', contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
        { id: Date.now() + 4, fecha: new Date(), usuario: 'Nome Apelido', contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
        { id: Date.now() + 5, fecha: new Date(), usuario: 'Nome Apelido', contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
        { id: Date.now() + 6, fecha: new Date(), usuario: 'Nome Apelido', contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
        { id: Date.now() + 7, fecha: new Date(), usuario: 'Nome Apelido', contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
    ])

    const getStringDate = (data) => {
        return String(data.getDate()).padStart(2, '0') + '/' + String(data.getMonth() + 1).padStart(2, '0') + '/' + data.getFullYear()
    }

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
                    <Note nota={nota} getStringDate={getStringDate} anadirNotaSeleccionada={anadirNotaSeleccionada} notas={notas} setNotas={setNotas} key={nota.id} />
                )
            }
        </div>
        <div className='m-2 flex text-center justify-center items-center gap-4'>
            <Button accion={eliminarNotasSeleccionadas} titulo="Resolver selección" color="bg-green-500" colorHover="bg-green-600" anchura="42" texto="Resolver selección" />
            <Button accion={() => setNotas([])} titulo="Resolver todas" color="bg-green-500" colorHover="bg-green-600" anchura="42" texto="Resolver todas" />
        </div>
    </div >
}