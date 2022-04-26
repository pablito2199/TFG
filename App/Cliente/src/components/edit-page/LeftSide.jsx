import { React, useState } from 'react'

import { QuestionMarkCircleIcon, XCircleIcon } from '@heroicons/react/solid';

import add_img from '../../images/add.png'

export const LeftSide = ({ data, setParrafoACambiar, setParrafoCambiado, setMostrarInput }) => {
    const [estado, setEstado] = useState(false)
    const [mostrarInfo, setMostrarInfo] = useState(false)

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

    const eliminarLeiVinculada = (lei) => {
        setLeis(leis.filter(leiAux => lei !== leiAux.id))
    }

    return <section className='z-0 flex-1 ml-2 screen-min4:w-5/6'>
        <nav className='flex text-lg items-center gap-2'>
            {
                !estado
                    ?
                    <div className='flex'>
                        <button className='focus:outline-none p-2 w-32 bg-black text-white border-2 border-black hover:underline cursor-pointer'>Norma</button>
                        <button className='focus:outline-none p-2 w-32 border-2 border-black hover:underline cursor-pointer' onClick={() => setEstado(true)}>Leis vinc.</button>
                    </div>
                    :
                    <div className='flex'>
                        <button className='focus:outline-none p-2 w-32 border-2 border-black hover:underline cursor-pointer' onClick={() => setEstado(false)}>Norma</button>
                        <button className='focus:outline-none p-2 w-32 bg-black text-white border-2 border-black hover:underline cursor-pointer'>Leis vinc.</button>
                    </div>
            }
            <div className='flex flex-1 justify-end items-center gap-2 mr-2 w-full'>
                {
                    mostrarInfo
                        ?
                        <p className='border p-1'>Para propoñer un cambio pinche en calquer parágrafo e garde.</p>
                        :
                        <></>
                }
                <QuestionMarkCircleIcon className='h-8 text-orange' onMouseOver={() => setMostrarInfo(true)} onMouseOut={() => setMostrarInfo(false)} />
            </div>
        </nav>
        {
            !estado
                ?
                <div className="text-justify p-4 w-full resize-none border-2 border-black min-h-texto-principal max-h-texto-principal overflow-y-scroll cursor-pointer">
                    {
                        data.intro.p.map((parrafo, index) =>
                            <div>
                                <p className='indent-8' onClick={() => { setParrafoACambiar(parrafo?._text); setParrafoCambiado(parrafo?._text); setMostrarInput(true) }} key={index}>{parrafo?._text}</p>
                            </div>
                        )
                    }
                    {
                        data.est_lei.art.map((articulo, index) =>
                            <div className='mt-4'>
                                <p onClick={() => { setParrafoACambiar(articulo?.titulo?._text); setParrafoCambiado(articulo?.titulo?._text); setMostrarInput(true) }} key={index}>{articulo?.titulo?._text}</p>
                                {
                                    articulo.p !== undefined
                                        ?
                                        articulo.p.length
                                            ?
                                            <>
                                                {
                                                    articulo.p.map((parrafo, index2) =>
                                                        <div>
                                                            <p onClick={() => { setParrafoACambiar(parrafo?._text); setParrafoCambiado(parrafo?._text); setMostrarInput(true) }} key={index + "artp" + index2}>{parrafo?._text}</p>
                                                        </div>
                                                    )
                                                }
                                            </>
                                            :
                                            <div>
                                                <p onClick={() => { setParrafoACambiar(articulo.p._text); setParrafoCambiado(articulo.p._text); setMostrarInput(true) }} key={index + "artpp"}>{articulo.p._text}</p>
                                            </div>
                                        :
                                        <></>
                                }
                            </div>
                        )
                    }
                    {
                        data.est_lei.firma?.p.map((parrafo, index) =>
                            <div className='mt-4'>
                                <p key={index} onClick={() => { setParrafoACambiar(parrafo?._text); setParrafoCambiado(parrafo?._text); setMostrarInput(true) }} className='text-center'>{parrafo?._text}</p>
                            </div>
                        )
                    }
                    <p onClick={() => { setParrafoACambiar(data.anexo?.titulo._text); setParrafoCambiado(data.anexo?.titulo._text); setMostrarInput(true) }} className='mt-8 font-bold text-center'>{data.anexo?.titulo._text}</p>
                    {
                        data.anexo?.p.map((parrafo, index) =>
                            <div>
                                <p onClick={() => { setParrafoACambiar(parrafo?._text); setParrafoCambiado(parrafo?._text); setMostrarInput(true) }} key={index}>{parrafo?._text}</p>
                            </div>
                        )
                    }
                </div>
                :
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
        }
    </section >
}