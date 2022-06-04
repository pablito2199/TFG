import { React, useCallback, useEffect } from 'react'

import { Tooltip } from '@mui/material'
import { QuestionMarkCircleIcon } from '@heroicons/react/solid'
import { DogContent } from './DogContent'

export const LeftSide = ({ titulo, notas, content, data, cambios, setParrafoACambiar, setParrafoCambiado, setAnchorPoint, show, setShow, claseLeftSide, setPosicionParrafo }) => {
    const handleContextMenu = (event, text, posicion) => {
        event.preventDefault()
        setAnchorPoint({ x: event.pageX, y: event.pageY })
        setShow(true)
        setParrafoACambiar(text)
        setParrafoCambiado(text)
        setPosicionParrafo(posicion)
    }

    const handleClick = useCallback(() => (show ? setShow(false) : null), [show, setShow])

    useEffect(() => {
        document.addEventListener("click", handleClick)
        return () => {
            document.removeEventListener("click", handleClick)
        }
    })

    return <section className={claseLeftSide}>
        <nav className='flex text-lg items-center gap-2'>
            <button className='focus:outline-none py-2 px-4 bg-black text-white border-2 border-black cursor-default'>{titulo}</button>
            <div className='flex flex-1 justify-end items-center mr-2 w-full'>
                <Tooltip title="Para propoñer un cambio ou unha anotación faga click dereito sobre calquer parágrafo e pinche en 'Propoñer cambio'/'Engadir anotación ao parágrafo'." placement="top" arrow>
                    <QuestionMarkCircleIcon className='h-8 text-orange' />
                </Tooltip>
            </div>
        </nav>
        <div className="text-justify p-4 w-full resize-none border-2 border-black min-h-texto-principal max-h-texto-principal overflow-y-scroll">
            <DogContent
                notas={notas}
                content={content}
                data={data}
                cambios={cambios}
                handleContextMenu={handleContextMenu}
            />
        </div>
    </section >
}