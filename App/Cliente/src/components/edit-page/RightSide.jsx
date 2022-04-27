import { React, useState } from 'react'
import ReactDiffViewer from 'react-diff-viewer'

import { XCircleIcon } from '@heroicons/react/solid';

import { Button } from "../Button";

import add_img from '../../images/add.png'

export const RightSide = ({ cambios, setCambios }) => {
    const [estado, setEstado] = useState('c')

    const [leis, setLeis] = useState([
        { id: '00000A', modificacion: 'Modificación realizada a lei A.' },
        { id: '00000B', modificacion: 'Modificación realizada a lei B.' },
        { id: '00000C', modificacion: 'Modificación realizada a lei C.' },
        { id: '00000D', modificacion: 'Modificación realizada a lei D.' },
        { id: '00000E', modificacion: 'Modificación realizada a lei E.' },
        { id: '00000F', modificacion: 'Modificación realizada a lei F.' },
        { id: '00000G', modificacion: 'Modificación realizada a lei G.' },
        { id: '00000H', modificacion: 'Modificación realizada a lei H.' },
        { id: '00000I', modificacion: 'Modificación realizada a lei I.' },
    ])

    const [notas, setNotas] = useState([
        { id: Date.now(), contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [{ 'contenido': 'Bienasdasdasdasdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdasdsdadsadsdasdasdasdsasdasdas', 'fecha': '12/05/2021' }, { 'contenido': 'Mal', 'fecha': '12/05/2021' }] },
        { id: Date.now() + 1, contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [{ 'contenido': 'Comentario', 'fecha': '06/11/2022' }] },
        { id: Date.now() + 2, contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
        { id: Date.now() + 3, contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
        { id: Date.now() + 4, contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
        { id: Date.now() + 5, contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
        { id: Date.now() + 6, contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
        { id: Date.now() + 7, contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
    ])

    const [notasSeleccionadas, setNotasSeleccionadas] = useState([])
    const [cambiosSeleccionados, setCambiosSeleccionados] = useState([])

    const eliminarLeiVinculada = (lei) => {
        setLeis(leis.filter(leiAux => lei !== leiAux.id))
    }

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

    return <section className='z-0 w-1/3 mx-10 screen-min4:w-5/6 screen-min4:mx-2 screen-min4:mt-4'>
        {
            estado === 'c'
                ?
                <nav className='flex text-lg text-center'>
                    <button className='focus:outline-none p-2 w-32 bg-black text-white border-2 border-black hover:underline cursor-pointer'>Cambios</button>
                    <button className='focus:outline-none p-2 w-32 border-t-2 border-b border-black hover:underline cursor-pointer' onClick={() => setEstado('l')}>Leis vinc.</button>
                    <button className='focus:outline-none p-2 w-32 border-2 border-b border-black hover:underline cursor-pointer' onClick={() => setEstado('n')}>Notas</button>
                </nav>
                :
                estado === 'l'
                    ?
                    <nav className='flex text-lg text-center'>
                        <button className='focus:outline-none p-2 w-32 border-2 border-b border-black hover:underline cursor-pointer' onClick={() => setEstado('c')}>Cambios</button>
                        <button className='focus:outline-none p-2 w-32 bg-black text-white border-2 border-black hover:underline cursor-pointer'>Leis vinc.</button>
                        <button className='focus:outline-none p-2 w-32 border-2 border-b border-black hover:underline cursor-pointer' onClick={() => setEstado('n')}>Notas</button>
                    </nav>
                    :
                    <nav className='flex text-lg text-center'>
                        <button className='focus:outline-none p-2 w-32 border-2 border-b border-black hover:underline cursor-pointer' onClick={() => setEstado('c')}>Cambios</button>
                        <button className='focus:outline-none p-2 w-32 border-t-2 border-b border-black hover:underline cursor-pointer' onClick={() => setEstado('l')}>Leis vinc.</button>
                        <button className='focus:outline-none p-2 w-32 bg-black text-white border-2 border-black hover:underline cursor-pointer'>Notas</button>
                    </nav>
        }
        {
            estado === 'c'
                ?
                <div className='border-2 border-black'>
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
                :
                estado === 'l'
                    ?
                    <div className='p-4 flex flex-col border-2 border-black'>
                        <div className='border-2 border-black max-h-leis-vinculadas-top overflow-y-scroll'>
                            {
                                leis?.map(lei =>
                                    <div className='m-4 flex flex-col border-b-2 border-gray-lex-gal w-12/13' key={lei.id}>
                                        <div className='flex flex-row items-center'>
                                            <span className='font-bold'>Lei {lei.id}</span>
                                            <button title="Eliminar lei vinculada" onClick={() => eliminarLeiVinculada(lei.id)} className='focus:outline-none py-2 flex justify-end items-center text-red-500 flex-auto text-right text-sm cursor-pointer gap-1'>
                                                <XCircleIcon className='h-4 text-red-500' />
                                                <span>Eliminar</span>
                                            </button>
                                        </div>
                                        <p className='m-4'>{lei.modificacion}</p>
                                    </div>)
                            }
                        </div>
                        <button title="Engadir nova lei vinculada manualmente" className='py-2 flex focus:outline-none mt-2 items-center justify-center gap-2'>
                            <img alt="engadir" src={add_img} className='h-8 w-8' />
                            <span>Engadir nova lei vinculada manualmente</span>
                        </button>
                    </div>
                    :
                    <div className='border-2 border-black'>
                        <div className='flex flex-col border-b-2 border-black min-h-leis-vinculadas max-h-leis-vinculadas overflow-y-scroll'>
                            {
                                notas?.map((nota, index) =>
                                    <div key={nota.id} className='p-2'>
                                        <div className='flex flex-col border-2 border-gray-400'>
                                            <div className='m-4 flex items-center border-b-2 border-gray w-11/12'>
                                                <p className='m-4'><span className='font-bold min-w-fit'>Nota {index + 1}: </span>{nota.contenido}</p>
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
                        <CrearNota notas={notas} setNotas={setNotas} />
                        <div className='m-2 flex text-center justify-center items-center gap-4'>
                            <Button accion={eliminarNotasSeleccionadas} titulo="Resolver selección" color="bg-green-500" colorHover="bg-green-600" anchura="42" texto="Resolver selección" />
                            <Button accion={() => setNotas([])} titulo="Resolver todas" color="bg-green-500" colorHover="bg-green-600" anchura="42" texto="Resolver todas" />
                        </div>
                    </div>
        }
    </section >
}

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

    return <div className='border-b-2 border-black'>
        <div className='mb-4 flex flex-col w-full items-center'>
            {
                !mostrar
                    ?
                    <button title="Engadir nova nota" onClick={() => setMostrar(true)} className='flex focus:outline-none mt-2 items-center gap-2'>
                        <img alt="engadir" src={add_img} className='h-8 w-8' />
                        <span>Engadir nova nota</span>
                    </button>
                    :
                    <>
                        <button title="Eliminar lei vinculada" onClick={() => { setMostrar(false); setNota('') }} className='w-full mr-8 focus:outline-none py-2 flex justify-end items-center text-red-500 flex-auto text-right text-sm cursor-pointer gap-1'>
                            <XCircleIcon className='h-4 text-red-500' />
                            <span>Descartar nova nota</span>
                        </button>
                        <textarea value={nota} onChange={(event) => setNota(event.target.value)} className='my-2 w-11/12 h-20 p-2 border border-black focus:outline-none focus:border-gray-500 resize-none' name="note" placeholder="Nova nota..."></textarea>
                        <div className='flex gap-4'>
                            <button title="Engadir nota" onClick={submit} className='focus:outline-none px-3 py-3 text-sm text-white bg-blue-green hover:bg-blue-700 font-semibold text-center w-40 cursor-pointer'>Engadir nota</button>
                        </div>
                    </>
            }
        </div>
    </div >
}