import { React, useCallback, useEffect, useState } from 'react'

import { QuestionMarkCircleIcon } from '@heroicons/react/solid';
import { Anexo } from './Anexo';
import { EstLei } from './EstLei';
import { Intro } from './Intro';

export const LeftSide = ({ data, setParrafoACambiar, setParrafoCambiado, setAnchorPoint, show, setShow }) => {
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
            <Intro data={data} handleContextMenu={handleContextMenu} />
            <EstLei data={data} handleContextMenu={handleContextMenu} />
            <Anexo data={data} handleContextMenu={handleContextMenu} />
        </div>
    </section >
}