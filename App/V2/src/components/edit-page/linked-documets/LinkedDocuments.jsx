import { React } from 'react'

import { Tooltip } from '@mui/material'
import { QuestionMarkCircleIcon } from '@heroicons/react/solid'
import { DogContent } from './DogContent'
import { useHtmlDoc } from '../../../hooks'

export const LinkedDocuments = ({ leiSeleccionada, setLeiSeleccionada, cambiosVinculadas, setCambiosVinculadas }) => {
    const documentos = [
        useHtmlDoc(10549190)
    ]

    return <section className='z-0 flex-1 mx-10 screen-min1:mt-8 screen-min1:ml-2 screen-min1:w-11/12'>
        <nav className='flex text-lg items-center'>
            <select className='w-96 text-center bg-black text-white cursor-pointer p-3' onChange={(e) => setLeiSeleccionada(e.target.value)} defaultValue={leiSeleccionada}>
                <option value={0}>Orde do 31 de decembro de 2021</option>
                <option value={1}>Resolución do 29 de abril de 2021</option>
            </select>
            <div className='flex flex-1 justify-end items-center gap-2 mr-2 w-full'>
                <Tooltip title="Escolla a lei vinculada que queres modificar no seleccionable." placement="top" arrow>
                    <QuestionMarkCircleIcon className='h-8 text-orange' />
                </Tooltip>
            </div>
        </nav>
        <div className="text-justify p-4 w-full resize-none border-2 border-black min-h-texto-principal max-h-texto-principal overflow-y-scroll">
            {
                documentos[leiSeleccionada]
                    ?
                    <DogContent
                        data={documentos[leiSeleccionada]}
                        leiSeleccionada={leiSeleccionada}
                        cambiosVinculadas={cambiosVinculadas}
                        setCambiosVinculadas={setCambiosVinculadas}
                    />
                    :
                    <></>
            }
        </div>
    </section >
}