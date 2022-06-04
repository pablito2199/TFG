import { React } from 'react'

import { Tooltip } from '@mui/material'
import { QuestionMarkCircleIcon } from '@heroicons/react/solid'
import { DogContent } from './DogContent'
import { useHtmlDoc } from '../../../hooks'

export const LinkedDocuments = ({ contentVinculada, parrafosAModificar, leiPrincipal, leiSeleccionada, setLeiSeleccionada, cambiosVinculadas, setCambiosVinculadas, setCambiosLocales }) => {
    let documentos = []
    const documentos1 = [useHtmlDoc(10537856)]
    const documentos2 = [useHtmlDoc(10495028)]
    const documentos3 = [useHtmlDoc(10516813)]
    const documentos4 = [useHtmlDoc(10504934)]
    const documentos5 = [useHtmlDoc(10504934)]

    if (leiPrincipal === '10549190') {
        documentos = documentos1
    } else if (leiPrincipal === '10547141') {
        documentos = documentos2
    } else if (leiPrincipal === '10529725') {
        documentos = documentos3
    } else if (leiPrincipal === '10518541') {
        documentos = documentos4
    } else if (leiPrincipal === '10550456') {
        documentos = documentos5
    }

    return <section className='z-0 flex-1 mx-10 screen-min1:mt-8 screen-min1:ml-2 screen-min1:w-11/12'>
        <nav className='flex text-lg items-center'>
            {
                leiPrincipal === '10549190'
                    ?
                    <select className='w-96 text-center bg-black text-white cursor-pointer p-3' onChange={(e) => setLeiSeleccionada(e.target.value)} defaultValue={leiSeleccionada}>
                        <option value={0}>Orde do 31 de decembro de 2021</option>
                    </select>
                    :
                    leiPrincipal === '10547141'
                        ?
                        <select className='w-96 text-center bg-black text-white cursor-pointer p-3' onChange={(e) => setLeiSeleccionada(e.target.value)} defaultValue={leiSeleccionada}>
                            <option value={0}>Orde do 31 de decembro de 2020</option>
                        </select>
                        :
                        leiPrincipal === '10529725'
                            ?
                            <select className='w-96 text-center bg-black text-white cursor-pointer p-3' onChange={(e) => setLeiSeleccionada(e.target.value)} defaultValue={leiSeleccionada}>
                                <option value={0}>Orde do 20 de xullo de 2021</option>
                            </select>
                            :
                            leiPrincipal === '10518541'
                                ?
                                <select className='w-96 text-center bg-black text-white cursor-pointer p-3' onChange={(e) => setLeiSeleccionada(e.target.value)} defaultValue={leiSeleccionada}>
                                    <option value={0}>Orde do 16 de abril de 2021</option>
                                </select>
                                :
                                leiPrincipal === '10550456'
                                    ?
                                    <select className='w-96 text-center bg-black text-white cursor-pointer p-3' onChange={(e) => setLeiSeleccionada(e.target.value)} defaultValue={leiSeleccionada}>
                                        <option value={0}>Orde do 16 de abril de 2021</option>
                                    </select>
                                    :
                                    <select className='w-96 text-center bg-black text-white cursor-pointer p-3' onChange={(e) => setLeiSeleccionada(e.target.value)} defaultValue={leiSeleccionada}>
                                        <option value={0}></option>
                                    </select>
            }
            <div className='flex flex-1 justify-end items-center gap-2 mr-2 w-full'>
                <Tooltip title="Escolla a lei vinculada que queres modificar no seleccionable. Os cambios propostos serán mostrados cun fondo azul. Os cambios gardados mostraránse cun fondo verde." placement="top" arrow>
                    <QuestionMarkCircleIcon className='h-8 text-orange' />
                </Tooltip>
            </div>
        </nav>
        <div className="text-justify p-4 w-full resize-none border-2 border-black min-h-texto-principal max-h-texto-principal overflow-y-scroll">
            {
                documentos[leiSeleccionada]
                    ?
                    <DogContent
                        contentVinculada={contentVinculada}
                        parrafosAModificar={parrafosAModificar}
                        data={documentos[leiSeleccionada]}
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