import { React, useCallback, useEffect } from 'react'

import { Tooltip } from '@mui/material'
import { QuestionMarkCircleIcon } from '@heroicons/react/solid'
import { DogContent } from './DogContent'
import { Link } from 'react-router-dom'
import { EyeOutline } from '@graywolfai/react-heroicons'

export const LeftSide = ({ id, titulo, notas, content, data, cambios, setParrafoACambiar, setParrafoCambiado, setAnchorPoint, show, setShow, claseLeftSide, setPosicionParrafo }) => {
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
        {
            claseLeftSide === 'z-0 w-7/12 ml-2 screen-min5:w-5/6'
                ?
                <nav className='flex text-lg items-center gap-2'>
                    <div className='flex items-end'>
                        <button className='focus:outline-none py-2 px-4 bg-black text-white border-2 border-black cursor-text'>{titulo.substr(0, 50)} ...</button>
                        <Link to={'/preview/' + id} title="Previsualizar" target="_blank" rel='noreferrer' className='focus:outline-none flex text-md items-center gap-1 px-4 py-2 hover:underline w-60 font-semibold cursor-pointer'>
                            <EyeOutline className='h-6' />
                            <span>Previsualizar</span>
                        </Link>
                    </div>
                    <div className='flex flex-1 justify-end items-center mr-2 w-full'>
                        <Tooltip title="Para propoñer un cambio ou unha anotación faga click dereito sobre calquer parágrafo e pinche en 'Propoñer cambio'/'Engadir anotación ao parágrafo'." placement="top" arrow>
                            <QuestionMarkCircleIcon className='h-8 text-orange' />
                        </Tooltip>
                    </div>
                </nav>
                :
                <nav className='flex text-lg items-center gap-2'>
                    <button className='focus:outline-none py-2 px-4 bg-black text-white border-2 border-black cursor-text'>{titulo.substr(0, 50)} ...</button>
                    <div className='flex flex-col justify-end items-center '>
                        <Link to={'/preview/' + id} title="Previsualizar" target="_blank" rel='noreferrer' className='focus:outline-none flex text-md items-center gap-1 px-4 py-2 hover:underline font-semibold cursor-pointer'>
                            <EyeOutline className='h-6' />
                        </Link>
                        <Tooltip title="Para propoñer un cambio ou unha anotación faga click dereito sobre calquer parágrafo e pinche en 'Propoñer cambio'/'Engadir anotación ao parágrafo'." placement="top" arrow>
                            <QuestionMarkCircleIcon className='h-8 text-orange' />
                        </Tooltip>
                    </div>
                </nav>
        }
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