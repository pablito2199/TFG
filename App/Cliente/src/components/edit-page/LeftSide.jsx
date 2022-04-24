import { React, useState } from 'react'

import { XCircleIcon } from '@heroicons/react/solid';

import add_img from '../../images/add.png'
import save_img from '../../images/save.png'

export const LeftSide = ({ data }) => {
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
                    <div className='flex flex-1 justify-end'>
                        <button className='focus:outline-none h-full px-4 flex border border-black bg-gray-200 hover:bg-gray-300 items-center gap-2 cursor-pointer'>
                            <img alt="gardar" src={save_img} className='h-6' />
                            <span className='font-medium'>Gardar cambios</span>
                        </button>
                    </div>
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
                <div className="p-4 w-full resize-none border-2 border-black min-h-texto-principal max-h-texto-principal overflow-y-scroll">
                    {
                        data.intro.p.map((parrafo, index) => <textarea key={index} className="w-full resize-none border-0 h-fit" type="text" value={parrafo?._text} />)
                    }
                    {
                        data.est_lei.art.map((articulo, index) =>
                            <>
                                <textarea key={index} className="w-full resize-none border-0 h-fit" type="text" value={articulo?.titulo?._text} />
                                {
                                    articulo.p !== undefined
                                        ?
                                        articulo.p.length
                                            ?
                                            <div>
                                                {
                                                    articulo.p.map((parrafo, index) =>
                                                        <textarea key={index} className="w-full resize-none border-0 h-fit" type="text" value={parrafo._text} />
                                                    )
                                                }
                                            </div>
                                            :
                                            <textarea key={index} className="w-full resize-none border-0 h-fit" type="text" value={articulo.p._text} />
                                        :
                                        <></>
                                }
                            </>
                        )
                    }
                    <textarea className="w-full resize-none border-0 h-fit" type="text" value={data.anexo?.titulo._text} />
                    {
                        data.anexo?.p.map((parrafo, index) =>
                            <textarea key={index} className="w-full resize-none border-0 h-fit" type="text" value={parrafo._text} />
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
    </section>
}