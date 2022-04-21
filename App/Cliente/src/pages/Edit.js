import { React, useState } from 'react'

import colectivos from "../data/listadoColectivos.json"
import organismos from "../data/listadoOrganismos.json"
import rangos from "../data/listadoRangos.json"
import secciones from "../data/listadoSecciones.json"
import tematicas from "../data/listadoTematicas.json"

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Textarea } from "../components/Textarea";
import { Select } from "../components/Select";
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@heroicons/react/solid';

import add from '../images/add.png'
import remove from '../images/remove.png'
import save from '../images/save.png'

export default function Edit() {
    return (
        <div className='flex flex-col ml-20 items-center w-full screen-min3:ml-4'>
            <Header />

            <main className='w-full mt-6 flex screen-min4:flex-col'>
                <ParteIzquierda />
                <ParteDerecha />
            </main>

            <BotonesPrincipales />
        </div >
    );
};

function Header() {
    const [mostrar, setMostrar] = useState(false)
    const estados = [
        { id: 1, descripcion: 'En vigor' },
        { id: 2, descripcion: 'Derrogada' }
    ]

    const [estadoSeleccionado, setEstadoSeleccionado] = useState('')
    const [colectivoSeleccionado, setColectivoSeleccionado] = useState('')
    const [tematicaSeleccionada, setTematicaSeleccionada] = useState('')
    const [seccionSeleccionada, setSeccionSeleccionada] = useState('')
    const [organismoSeleccionado, setOrganismoSeleccionado] = useState('')
    const [rangoSeleccionado, setRangoSeleccionado] = useState('')

    return <section className='z-0 w-full font-medium mt-5 pr-10 flex flex-col px-2 screen-min3:w-10/12 screen-min1:w-9/12'>
        {
            !mostrar
                ?
                <div className='flex w-80 p-1 bg-blue-lex-gal text-center items-center'>
                    <span className='text-white ml-4 text-2xl py-3'>Datos de cabeceira</span>
                    <ChevronDoubleDownIcon onClick={() => setMostrar(!mostrar)} className="flex-1 h-8 w-8 text-white cursor-pointer" aria-hidden="true" />
                </div>
                :
                <div>
                    <div className='flex w-80 p-1 bg-blue-lex-gal text-center items-center'>
                        <span className='text-white ml-4 text-2xl py-3'>Datos de cabeceira</span>
                        <ChevronDoubleUpIcon onClick={() => setMostrar(!mostrar)} className="flex-1 h-8 w-8 text-white cursor-pointer" aria-hidden="true" />
                    </div>
                    <div className='flex flex-row bg-blue-lex-gal font-semibold italic screen-min1:flex-col'>
                        <div className='w-1/2 screen-min1:w-full'>
                            <Input texto="Título" tipo="text" placeholder="Título da norma..." />
                            <Textarea texto="Sumario" placeholder="Escriba o sumario da norma..." />
                            <Input texto="Data de publicación" tipo="date" />
                            <Input texto="Referencia da publicación" tipo="text" placeholder="Referencia de publicación..." />
                            <Input texto="Ano" tipo="text" placeholder="Ano..." />
                            <Input texto="Versión" tipo="text" placeholder="Versión da norma..." />
                            <Input texto="Referencia" tipo="text" placeholder="Referencia da norma..." />
                        </div>
                        <div className='w-1/2 screen-min1:w-full'>
                            <Input texto="Data de entrada en vigor" tipo="date" />
                            <Select texto="Estado" elements={estados} element={estadoSeleccionado} setElements={setEstadoSeleccionado} opcion="-- Seleccione unha opción --" />
                            <Input texto="Nome ficheiro" tipo="text" placeholder="Ej: ficheiro.pdf" />
                            <Select texto="Colectivo" firstOption={false} elements={colectivos} element={colectivoSeleccionado} setElements={setColectivoSeleccionado} opcion="-- Seleccione unha opción --" />
                            <Select texto="Organización" firstOption={false} elements={organismos} element={organismoSeleccionado} setElements={setOrganismoSeleccionado} opcion="-- Seleccione unha opción --" />
                            <Select texto="Rango" firstOption={false} elements={rangos} element={rangoSeleccionado} setElements={setRangoSeleccionado} opcion="-- Seleccione unha opción --" />
                            <Select texto="Sección" firstOption={false} elements={secciones} element={seccionSeleccionada} setElements={setSeccionSeleccionada} opcion="-- Seleccione unha opción --" />
                            <Select texto="Área temática" firstOption={false} elements={tematicas} element={tematicaSeleccionada} setElements={setTematicaSeleccionada} opcion="-- Seleccione unha opción --" />
                        </div>
                    </div>
                </div>
        }
    </section >
}

function ParteIzquierda() {
    const [estado, setEstado] = useState(false)

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

    const [text, setText] = useState('Texto da lei ')

    const eliminarLeiVinculada = (lei) => {
        setLeis(leis.filter(leiAux => lei !== leiAux.id))
    }

    return <section className='z-0 flex-1 ml-2 screen-min4:w-5/6'>
        {
            !estado
                ?
                <nav className='flex text-lg text-center'>
                    <button className='focus:outline-none p-2 w-32 bg-black text-white border-2 border-black hover:underline cursor-pointer'>Texto</button>
                    <button className='focus:outline-none p-2 w-32 border-2 border-black hover:underline cursor-pointer' onClick={() => setEstado(true)}>Leis vinc.</button>
                    <button className='focus:outline-none flex flex-1 justify-end'>
                        <div className='h-full px-4 flex border border-black bg-gray-200 hover:bg-gray-300 items-center gap-2 cursor-pointer'>
                            <img alt="gardar" src={save} className='h-6' />
                            <span className='font-medium'>Gardar cambios</span>
                        </div>
                    </button>
                </nav>
                :
                <nav className='flex text-lg text-center'>
                    <button className='focus:outline-none p-2 w-32 border-2 border-black hover:underline cursor-pointer' onClick={() => setEstado(false)}>Texto</button>
                    <button className='focus:outline-none p-2 w-32 bg-black text-white border-2 border-black hover:underline cursor-pointer'>Leis vinc.</button>
                </nav>
        }
        {
            !estado
                ?
                <textarea className="p-4 w-full resize-none border-2 border-black min-h-texto-principal max-h-texto-principal overflow-y-scroll" type="text" value={text} onChange={(e) => setText(e.target.value)} />
                :
                <div className='p-4 flex flex-col border-2 border-black'>
                    <div className='border-2 border-black max-h-leis-vinculadas overflow-y-scroll'>
                        {
                            leis?.map(lei =>
                                <div className='m-4 flex flex-col border-b-2 border-gray-lex-gal w-12/13' key={lei.id}>
                                    <div className='flex flex-row items-center'>
                                        <span className='font-bold'>Lei {lei.id}</span>
                                        <button title="Eliminar lei vinculada" onClick={() => eliminarLeiVinculada(lei.id)} className='focus:outline-none py-2 flex justify-end items-center text-red-500 flex-auto text-right text-sm cursor-pointer gap-1'>
                                            <img alt="eliminar" src={remove} className='h-4 w-4' />
                                            <span>Eliminar</span>
                                        </button>
                                    </div>
                                    <p className='m-4'>{lei.modificacion}</p>
                                </div>)
                        }
                    </div>
                    <button title="Engadir nova lei vinculada manualmente" className='py-2 flex focus:outline-none mt-2 items-center justify-center gap-2'>
                        <img alt="engadir" src={add} className='h-8 w-8' />
                        <span>Engadir nova lei vinculada manualmente</span>
                    </button>
                </div>
        }
    </section>
}

function ParteDerecha() {
    const [estado, setEstado] = useState(false)
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

    return <section className='z-0 w-1/4 mx-10 screen-min4:w-5/6 screen-min2:mt-4'>
        {
            !estado
                ?
                <nav className='flex text-lg text-center'>
                    <button className='focus:outline-none p-2 w-32 border-2 border-black hover:underline cursor-pointer' style={{ backgroundColor: "#000000", color: "white" }}>Notas</button>
                    <button className='focus:outline-none p-2 w-32 border-2 border-black hover:underline cursor-pointer' onClick={() => setEstado(true)}>Cambios</button>
                </nav>
                :
                <nav className='flex text-lg text-center'>
                    <button className='focus:outline-none p-2 w-32 border-2 border-black hover:underline cursor-pointer' onClick={() => setEstado(false)}>Notas</button>
                    <button className='focus:outline-none p-2 w-32 border-2 border-black hover:underline cursor-pointer' style={{ backgroundColor: "#000000", color: "white" }}>Cambios</button>
                </nav>
        }
        {
            !estado
                ?
                <div className='border-2 border-black'>
                    <div className='flex flex-col border-b-2 border-black min-h-leis-vinculadas max-h-leis-vinculadas overflow-y-scroll'>
                        {
                            notas?.map((nota) =>
                                <div key={nota.id} className='flex flex-col border-b-2 border-gray-300'>
                                    <div className='m-4 flex items-center border-b-2 border-gray w-11/12'>
                                        <p className='m-4'><span className='font-bold min-w-fit'>Nota {nota.id}: </span>{nota.contenido}</p>
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
                            )
                        }
                    </div>
                    <CrearNota notas={notas} setNotas={setNotas} />
                    <div className='m-2 flex text-center justify-center items-center gap-4'>
                        <Button accion={eliminarNotasSeleccionadas} titulo="Resolver selección" color="bg-green-500" colorHover="bg-green-600" anchura="42" texto="Resolver selección" />
                        <Button accion={() => setNotas([])} titulo="Resolver todas" color="bg-green-500" colorHover="bg-green-600" anchura="42" texto="Resolver todas" />
                    </div>
                </div>
                :
                <div className='border-2 border-black'>
                    <div className='border-b-2 border-black min-h-leis-vinculadas max-h-leis-vinculadas overflow-y-scroll'></div>
                    <div className='m-2 flex text-center justify-center items-center gap-4'>
                        <Button accion={eliminarNotasSeleccionadas} titulo="Descartar selección" color="bg-red-500" colorHover="bg-red-600" anchura="42" texto="Descartar selección" />
                        <Button accion={() => setNotas([])} titulo="Descartar todos" color="bg-red-500" colorHover="bg-red-600" anchura="42" texto="Descartar todos" />
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
                        <img alt="engadir" src={add} className='h-8 w-8' />
                        <span>Engadir nova nota</span>
                    </button>
                    :
                    <>
                        <textarea value={nota} onChange={(event) => setNota(event.target.value)} className='my-2 w-11/12 h-20 p-2 border border-black focus:outline-none focus:border-gray-500 resize-none' name="note" placeholder="Nova nota..."></textarea>
                        <div className='flex gap-4'>
                            <button title="Engadir nota" onClick={submit} className='focus:outline-none px-3 py-3 text-sm text-white bg-blue-green hover:bg-blue-700 font-semibold text-center w-40 cursor-pointer'>Engadir nota</button>
                            <button title="Engadir nota" onClick={() => { setMostrar(false); setNota('') }} className='focus:outline-none px-3 py-3 text-sm text-white bg-red-600 hover:bg-red-700 font-semibold text-center w-40 cursor-pointer'>Descartar nota</button>
                        </div>
                    </>
            }
        </div>
    </div >
}

function BotonesPrincipales() {
    return <div className=' fixed left-0 bottom-0 w-screen border-t-2 bg-white z-1 flex justify-center gap-20 py-4'>
        <Button color="bg-green-500" colorHover="bg-green-600" anchura="60" texto="Validar e publicar" />
        <Button color="bg-gray-500" colorHover="bg-gray-600" anchura="60" texto="Previsualizar" />
        <Button color="bg-red-500" colorHover="bg-red-600" anchura="60" texto="Rexeitar" />
    </div>
}