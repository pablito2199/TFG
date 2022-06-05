import { React } from 'react'

import { Tooltip } from '@mui/material'
import { QuestionMarkCircleIcon } from '@heroicons/react/solid'
import { DogContent } from './DogContent'
import { useHtmlDoc } from '../../../hooks'

import listadoMeses from '../../../data/listadoMeses.json'

export const LinkedDocuments = ({ sumario, contentVinculada, parrafosAModificar, leiSeleccionada, setLeiSeleccionada, cambiosVinculadas, setCambiosVinculadas, setCambiosLocales }) => {
    let titulo = ''
    const { data: documento } = useHtmlDoc(sumario)

    let mesesRegex = "("
    listadoMeses.forEach(mes => mesesRegex += mes.name + "|")
    mesesRegex = mesesRegex.substring(0, mesesRegex.length - 1)
    mesesRegex += ")"
    const tituloRegex = new RegExp("Orde do [0-9]{1,2} de " + mesesRegex + " de [0-9]{4}", "gi")
    let resultado = (sumario).match(tituloRegex)
    if (resultado !== null && resultado?.length !== 0) {
        titulo = resultado[0]
    }

    return <section className='z-0 flex-1 mx-10 screen-min1:mt-8 screen-min1:ml-2 screen-min1:w-11/12'>
        <nav className='flex text-lg items-center'>
            <select className='w-96 text-center bg-black text-white cursor-pointer p-3' onChange={(e) => setLeiSeleccionada(e.target.value)} defaultValue={leiSeleccionada}>
                <option value={titulo}>{titulo}</option>
            </select>
            <div className='flex flex-1 justify-end items-center gap-2 mr-2 w-full'>
                <Tooltip title="Escolla a lei vinculada que queres modificar no seleccionable. Os cambios propostos serán mostrados cun fondo azul. Os cambios gardados mostraránse cun fondo verde." placement="top" arrow>
                    <QuestionMarkCircleIcon className='h-8 text-orange' />
                </Tooltip>
            </div>
        </nav>
        <div className="text-justify p-4 w-full resize-none border-2 border-black min-h-texto-principal max-h-texto-principal overflow-y-scroll">
            {
                documento
                    ?
                    <DogContent
                        contentVinculada={contentVinculada}
                        parrafosAModificar={parrafosAModificar}
                        data={documento}
                        leiSeleccionada={leiSeleccionada}
                        cambiosVinculadas={cambiosVinculadas} setCambiosVinculadas={setCambiosVinculadas}
                        setCambiosLocales={setCambiosLocales}
                    />
                    :
                    <></>
            }
        </div>
    </section >
}