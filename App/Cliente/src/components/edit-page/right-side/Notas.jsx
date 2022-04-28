import React, { useState } from "react";

import { Button } from "../../Button";
import { Comment } from "./notas/Comment";
import { CreateComment } from "./notas/CreateComment";
import { CreateNote } from "./notas/CreateNote";

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
        setNotas(notas.filter(nota => notasSeleccionadas.indexOf(nota.id) < 0));
    }

    return <div className='border-2 border-black'>
        <CreateNote notas={notas} setNotas={setNotas} />
        <div className='flex flex-col border-b-2 border-black min-h-leis-vinculadas max-h-leis-vinculadas overflow-y-scroll'>
            {
                notas?.map(nota =>
                    <div key={nota.id} className='p-2'>
                        <div className='flex flex-col border-2 border-gray-400'>
                            <div className="m-4 border-b-2 border-gray items-center flex">
                                <div className='flex flex-col'>
                                    <div className="flex w-full">
                                        <span className="mx-4 font-bold">{nota.usuario}</span>
                                        <div className="flex flex-1 justify-end italic font-semibold text-gray-600 w-full"><span>({getStringDate(nota.fecha)})</span></div>
                                    </div>
                                    <p className='mt-2 mx-4 mb-4'>{nota.contenido}</p>
                                </div>
                                <input className='ml-auto mr-0 cursor-pointer rounded-xl text-green-600 focus:outline-none' type="checkbox" onChange={(e) => anadirNotaSeleccionada(e, nota.id)} />
                            </div>
                            <div className='ml-8 mb-4 flex flex-col flex-auto'>
                                <div>
                                    {
                                        nota.comentarios?.map((com, i) =>
                                            <Comment data={com} getStringDate={getStringDate} key={i} />
                                        )
                                    }
                                </div>
                                <CreateComment notas={notas} setNotas={setNotas} nota={nota} />
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
        <div className='m-2 flex text-center justify-center items-center gap-4'>
            <Button accion={eliminarNotasSeleccionadas} titulo="Resolver selección" color="bg-green-500" colorHover="bg-green-600" anchura="42" texto="Resolver selección" />
            <Button accion={() => setNotas([])} titulo="Resolver todas" color="bg-green-500" colorHover="bg-green-600" anchura="42" texto="Resolver todas" />
        </div>
    </div >
};