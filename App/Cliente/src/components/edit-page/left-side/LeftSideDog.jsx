import { React, useCallback, useEffect } from 'react'

import { Tooltip } from '@mui/material'
import { QuestionMarkCircleIcon } from '@heroicons/react/solid'
import { DogContent } from './DogContent'

export const LeftSideDog = ({ data, cambios, setParrafoACambiar, setParrafoCambiado, setAnchorPoint, show, setShow, claseLeftSide }) => {
    const handleContextMenu = (event, text) => {
        event.preventDefault()
        setAnchorPoint({ x: event.pageX, y: event.pageY })
        setShow(true)
        setParrafoACambiar(text)
        setParrafoCambiado(text)
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
            <button className='focus:outline-none p-2 w-32 bg-black text-white border-2 border-black cursor-default'>Norma</button>
            <div className='flex flex-1 justify-end items-center mr-2 w-full'>
                <Tooltip title="Para propoñer un cambio faga click dereito sobre calquer parágrafo e pinche en 'Propoñer cambio'." placement="top" arrow>
                    <QuestionMarkCircleIcon className='h-8 text-orange' />
                </Tooltip>
            </div>
        </nav>
        <div className="text-justify p-4 w-full resize-none border-2 border-black min-h-texto-principal max-h-texto-principal overflow-y-scroll">
            <DogContent data={data} cambios={cambios} handleContextMenu={handleContextMenu} />
        </div>
    </section >
}