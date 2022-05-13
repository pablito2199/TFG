import { React, useCallback, useEffect } from 'react'

import { Tooltip } from '@mui/material'
import { QuestionMarkCircleIcon } from '@heroicons/react/solid'
import { DogContent } from './DogContent'
import { Select } from '../../Select'

export const LinkedDocuments = ({ data, cambios, setParrafoACambiar, setParrafoCambiado, setAnchorPoint, show, setShow, claseLeftSide }) => {
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
        <nav className='flex text-lg items-center'>
            <select className='w-96 text-center bg-black text-white cursor-pointer p-3'>
                <option>Anuncio do 5 de maio de 2022</option>
                <option>Anuncio do 6 de maio de 2022</option>
            </select>
            <div className='flex flex-1 justify-end items-center gap-2 mr-2 w-full'>
                <Tooltip title="Escolla calquera lei relacionada no seleccionable." placement="top" arrow>
                    <QuestionMarkCircleIcon className='h-8 text-orange' />
                </Tooltip>
            </div>
        </nav>
        <div className="text-justify p-4 w-full resize-none border-2 border-black min-h-texto-principal max-h-texto-principal overflow-y-scroll">
            <DogContent data={data} cambios={cambios} handleContextMenu={handleContextMenu} />
        </div>
    </section >
}