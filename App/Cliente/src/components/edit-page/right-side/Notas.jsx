import React, { useState } from "react";

import add_img from '../../../images/add.png'
import { XCircleIcon } from '@heroicons/react/solid';

import { Button } from "../../Button";

export const Notas = () => {

    const [notas, setNotas] = useState([
        { id: Date.now(), contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [{ 'contenido': 'Comentario 1', 'fecha': '12/05/2021' }, { 'contenido': 'Comentario 2', 'fecha': '12/05/2021' }] },
        { id: Date.now() + 1, contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [{ 'contenido': 'Comentario', 'fecha': '06/11/2022' }] },
        { id: Date.now() + 2, contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
        { id: Date.now() + 3, contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
        { id: Date.now() + 4, contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
        { id: Date.now() + 5, contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
        { id: Date.now() + 6, contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
        { id: Date.now() + 7, contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
    ])

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
        <CrearNota notas={notas} setNotas={setNotas} />
        <div className='flex flex-col border-b-2 border-black min-h-leis-vinculadas max-h-leis-vinculadas overflow-y-scroll'>
            {
                notas?.map((nota, index) =>
                    <div key={nota.id} className='p-2'>
                        <div className='flex flex-col border-2 border-gray-400'>
                            <div className='m-4 flex items-center border-b-2 border-gray w-11/12'>
                                <p className='m-4'>{nota.contenido}</p>
                                <input className='ml-auto mr-0 cursor-pointer rounded-xl text-green-600 focus:outline-none' type="checkbox" onChange={(e) => anadirNotaSeleccionada(e, nota.id)} />
                            </div>
                            <div className='ml-8 mb-4 flex flex-col flex-auto'>
                                <ul>
                                    {
                                        nota.comentarios?.map((com, i) =>
                                            <div key={i} className='my-2 w-11/12'>
                                                <li className='break-words'>{com.contenido}</li>
                                                <p className='text-gray-400'>({com.fecha})</p>
                                            </div>
                                        )
                                    }
                                </ul>
                                <CrearComentario notas={notas} setNotas={setNotas} nota={nota} />
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
    </div>
};

function CrearComentario({ notas, setNotas, nota }) {
    const [comentario, setComentario] = useState('')

    const submit = () => {
        if (comentario !== '') {
            let myObj = {
                'contenido': comentario,
                'fecha': new Date().toLocaleDateString()
            }
            setNotas(notas.map(notaAux => {
                if (nota.id === notaAux.id) {
                    notaAux.comentarios.push(myObj);
                }
                return notaAux;
            }));
            setComentario('')
        }
    }

    return <div className='mt-2 flex flex-col w-11/12'>
        <textarea value={comentario} onChange={(event) => setComentario(event.target.value)} className='mb-2 w-full h-20 p-2 border border-black focus:outline-none focus:border-gray-500 resize-none' name="comment" placeholder="Novo comentario..."></textarea>
        <button onClick={submit} className='focus:outline-none px-3 py-2 text-sm font-semibold text-white bg-blue-green hover:bg-blue-700 text-center w-40 ml-auto mr-0 cursor-pointer'>Engadir comentario</button>
    </div>
}

function CrearNota({ notas, setNotas }) {
    const [nota, setNota] = useState('')
    const [mostrar, setMostrar] = useState(false)

    const submit = () => {
        if (nota !== '') {
            let myObj = {
                'id': Date.now(),
                'contenido': nota,
                'comentarios': []
            }
            setNotas([...notas, myObj])
            setNota('')
            setMostrar(false)
        }
    }

    return <div>
        <div className='pt-1 pb-2 flex flex-col w-full items-center border-b-2 border-black'>
            {
                !mostrar
                    ?
                    <button title="Engadir nova nota" onClick={() => setMostrar(true)} className='flex focus:outline-none mt-2 items-center gap-2'>
                        <img alt="engadir" src={add_img} className='h-8 w-8' />
                        <span>Engadir nova nota</span>
                    </button>
                    :
                    <div className='w-full flex flex-col pb-4'>
                        <button title="Eliminar lei vinculada" onClick={() => { setMostrar(false); setNota('') }} className='w-full pr-4 focus:outline-none py-2 flex justify-end items-center text-red-500 flex-auto text-right text-sm cursor-pointer gap-1'>
                            <XCircleIcon className='h-4 text-red-500' />
                            <span>Descartar nova nota</span>
                        </button>
                        <div className='flex flex-col items-center'>
                            <textarea value={nota} onChange={(event) => setNota(event.target.value)} className='my-2 w-11/12 h-20 p-2 border border-black focus:outline-none focus:border-gray-500 resize-none' name="note" placeholder="Nova nota..."></textarea>
                            <div className='flex gap-4 justify-center'>
                                <button title="Engadir nota" onClick={submit} className='focus:outline-none px-3 py-3 text-sm text-white bg-blue-green hover:bg-blue-700 font-semibold text-center w-40 cursor-pointer'>Engadir nota</button>
                            </div>
                        </div>
                    </div>
            }
        </div>
    </div>
}