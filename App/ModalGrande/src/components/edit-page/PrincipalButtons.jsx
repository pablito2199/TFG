import { React } from 'react'
import { useNavigate } from 'react-router-dom'

import { LogoutOutline, ThumbUpOutline, XCircleOutline } from '@graywolfai/react-heroicons'
import { useFinalDocument } from '../../hooks'
import { BookmarkIcon } from '@heroicons/react/solid'

export const PrincipalButtons = ({ leiModificada, leiModificadaData, idDb, htmlDoc, newHtmlDoc, notas, cambios, leyes, cambiosVinculadas, publicador, sumario, dpub, refpub, ano, version, referencia, fechaDog, dvl_desde, estadoSeleccionado, nomfic, colectivoSeleccionado, organismoSeleccionado, rangoSeleccionado, seccionSeleccionada, tematicaSeleccionada, numDog }) => {
    const { put, patch, deleteNorma } = useFinalDocument()
    const navigate = useNavigate()

    const submit = async (borrador) => {
        if (window.confirm('Os seus cambios serán gardados. Desexa continuar?')) {
            let documento = ''
            if (cambios && cambios.length !== 0) {
                cambios.forEach(cambio => {
                    newHtmlDoc.getElementsByClassName('story')[0].children[cambio.parrafo].innerText = cambio.parrafoNuevo
                })
                documento = new XMLSerializer().serializeToString(newHtmlDoc)
            } else {
                documento = htmlDoc
            }

            try {
                put({
                    id: idDb,
                    sumario: sumario,
                    htmlDoc: htmlDoc,
                    newHtmlDoc: documento,
                    borrador: borrador,
                    notes: notas,
                    changes: cambios,
                    laws: leyes,
                    headerItems: {
                        publicador: publicador,
                        dpub: dpub,
                        refpub: refpub,
                        ano: ano,
                        version: version,
                        referencia: referencia,
                        fechaDog: fechaDog,
                        dvl_desde: dvl_desde,
                        estadoSeleccionado: estadoSeleccionado,
                        nomfic: nomfic,
                        colectivoSeleccionado: colectivoSeleccionado,
                        organismoSeleccionado: organismoSeleccionado,
                        rangoSeleccionado: rangoSeleccionado,
                        seccionSeleccionada: seccionSeleccionada,
                        tematicaSeleccionada: tematicaSeleccionada,
                        numDog: numDog
                    },
                    linkedChanges: cambiosVinculadas
                })

                if (leiModificada) {
                    patch({ sumario: leiModificada, borrador: borrador })
                }

                if (leiModificadaData) {
                    leiModificadaData.borrador = borrador
                    if (!leiModificadaData.newHtmlDoc) {
                        leiModificadaData.newHtmlDoc = leiModificadaData.htmlDoc
                    }
                    if (cambiosVinculadas && cambiosVinculadas.length !== 0) {
                        cambiosVinculadas.forEach(cambio => {
                            documento = new DOMParser().parseFromString(leiModificadaData.newHtmlDoc, "text/xml")
                            documento.getElementsByClassName('story')[0].children[cambio.posicion].innerText = cambio.parrafoCambiado
                        })
                        leiModificadaData.newHtmlDoc = new XMLSerializer().serializeToString(documento)
                    } else {
                        leiModificadaData.newHtmlDoc = ""
                    }

                    put(leiModificadaData)
                }

                navigate('/save', {
                    state: {
                        mensajeAviso: 'Os seus cambios foron gardados correctamente.',
                    }
                })
            } catch (err) {
                console.log(err)
            }
        }
    }

    const deleteLei = async () => {
        if (window.confirm('A lei será eliminada definitivamente de lex.gal. Desexa continuar?')) {
            try {
                deleteNorma(idDb)

                navigate('/save', {
                    state: {
                        mensajeAviso: 'A lei foi eliminada correctamente.',
                    }
                })
            } catch (err) {
                console.log(err)
            }
        }
    }

    return <div className='fixed left-0 bottom-0 w-screen border-t-2 bg-white z-1 flex justify-center gap-20 py-2'>
        <button onClick={() => submit(false)} className='focus:outline-none flex text-md items-center justify-center gap-2 self-center align-center px-4 py-2 bg-green-500 hover:bg-green-600 w-60 text-white font-semibold cursor-pointer'>
            <ThumbUpOutline className='h-6 text-white' />
            <span>Validar e publicar</span>
        </button>
        <button onClick={() => submit(true)} className='focus:outline-none flex text-md items-center justify-center gap-2 self-center align-center px-4 py-2 bg-blue-green hover:bg-blue-700 w-60 text-white font-semibold cursor-pointer'>
            <BookmarkIcon className='h-6 text-white' />
            <span>Gardar como borrador</span>
        </button>
        <button onClick={deleteLei} className='focus:outline-none flex text-md items-center justify-center gap-2 self-center align-center px-4 py-2 bg-red-500 hover:bg-red-600 w-60 text-white font-semibold cursor-pointer'>
            <XCircleOutline className='h-6 text-white' />
            <span>Eliminar de lex.gal</span>
        </button>
        <button onClick={() => { if (window.confirm('Os seus cambios non serán gardados. Desexa saír?')) navigate('/') }} className='focus:outline-none flex text-md items-center justify-center gap-2 self-center align-center px-4 py-2 bg-gray-500 hover:bg-gray-600 w-60 text-white font-semibold cursor-pointer'>
            <LogoutOutline className='h-6 text-white' />
            <span>Saír sen gardar</span>
        </button>
    </div>
}