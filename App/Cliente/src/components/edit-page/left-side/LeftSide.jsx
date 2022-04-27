import { React, useCallback, useEffect, useState } from 'react'

import { QuestionMarkCircleIcon } from '@heroicons/react/solid';

export const LeftSide = ({ data, setParrafoACambiar, setParrafoCambiado, setAnchorPoint, show, setShow, selectedText }) => {
    const [mostrarInfo, setMostrarInfo] = useState(false)

    const handleContextMenu = (event, text) => {
        event.preventDefault()
        setAnchorPoint({ x: event.pageX, y: event.pageY })
        setShow(true)
        setParrafoACambiar(text)
        setParrafoCambiado(text)
    }

    const handleClick = useCallback(() => (show ? setShow(false) : null), [show, setShow]);

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    });

    return <section className='z-0 flex-1 ml-2 screen-min4:w-5/6'>
        <nav className='flex text-lg items-center gap-2'>
            <button className='focus:outline-none p-2 w-32 bg-black text-white border-2 border-black hover:underline cursor-pointer'>Norma</button>
            <div className='flex flex-1 justify-end items-center gap-2 mr-2 w-full'>
                {
                    mostrarInfo
                        ?
                        <p className='border p-1'>Para propoñer un cambio pinche dúas veces en calquer parágrafo e garde.</p>
                        :
                        <></>
                }
                <QuestionMarkCircleIcon className='h-8 text-orange' onMouseOver={() => setMostrarInfo(true)} onMouseOut={() => setMostrarInfo(false)} />
            </div>
        </nav>
        <div className="text-justify p-4 w-full resize-none border-2 border-black min-h-texto-principal max-h-texto-principal overflow-y-scroll">
            {
                data.intro.p.map((parrafo, index) =>
                    <div key={index}>
                        <p className='indent-8' onContextMenu={(e) => handleContextMenu(e, parrafo?._text)}>{parrafo?._text}</p>
                    </div>
                )
            }
            {
                data.est_lei.art.map((articulo, index) =>
                    <div className='mt-4' key={index}>
                        <p onContextMenu={(e) => handleContextMenu(e, articulo?.titulo?._text)}>{articulo?.titulo?._text}</p>
                        {
                            articulo.p !== undefined
                                ?
                                articulo.p.length
                                    ?
                                    <>
                                        {
                                            articulo.p.map((parrafo, index2) =>
                                                <div key={index + "artp" + index2}>
                                                    <p onContextMenu={(e) => handleContextMenu(e, parrafo?._text)}>{parrafo?._text}</p>
                                                </div>
                                            )
                                        }
                                    </>
                                    :
                                    <div key={index + "artpp"}>
                                        <p onContextMenu={(e) => handleContextMenu(e, articulo.p._text)}>{articulo.p._text}</p>
                                    </div>
                                :
                                <></>
                        }
                    </div>
                )
            }
            {
                data.est_lei.firma?.p.map((parrafo, index) =>
                    <div className='mt-4' key={index}>
                        <p onContextMenu={(e) => handleContextMenu(e, parrafo?._text)} className='text-center'>{parrafo?._text}</p>
                    </div>
                )
            }
            <p onContextMenu={(e) => handleContextMenu(e, data.anexo?.titulo)} className='mt-8 font-bold text-center'>{data.anexo?.titulo._text}</p>
            {
                data.anexo?.p.map((parrafo, index) =>
                    <div key={index}>
                        <p onContextMenu={(e) => handleContextMenu(e, parrafo?._text)}>{parrafo?._text}</p>
                    </div>
                )
            }
        </div>
    </section >
}