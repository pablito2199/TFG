import { React } from 'react'
import { useNavigate } from 'react-router-dom'

import { EyeOutline, ThumbUpOutline, XCircleOutline } from '@graywolfai/react-heroicons'
import { useFinalDocument } from '../../hooks'

export const PrincipalButtons = ({ idDb, enlace, notas, cambios, leyes, dpub, refpub, ano, version, referencia, fechaDog, dvl_desde, estadoSeleccionado, nomfic, colectivoSeleccionado, organismoSeleccionado, rangoSeleccionado, seccionSeleccionada, tematicaSeleccionada, numDog }) => {
    const { put } = useFinalDocument()
    const navigate = useNavigate()

    const submit = async () => {
        if (window.confirm('Os cambios serán gardados. Desexa continuar?')) {
            try {
                put({
                    id: idDb,
                    notes: notas,
                    changes: cambios,
                    laws: leyes,
                    headerItems: {
                        dpub: dpub,
                        refpub: refpub,
                        ano: ano,
                        version: version,
                        referencia: referencia,
                        fechaDog, fechaDog,
                        dvl_desde: dvl_desde,
                        estadoSeleccionado: estadoSeleccionado,
                        nomfic: nomfic,
                        colectivoSeleccionado: colectivoSeleccionado,
                        organismoSeleccionado: organismoSeleccionado,
                        rangoSeleccionado: rangoSeleccionado,
                        seccionSeleccionada: seccionSeleccionada,
                        tematicaSeleccionada: tematicaSeleccionada,
                        numDog: numDog
                    }
                })

                navigate('/', {
                    state: {
                        mensajeAviso: true,
                    }
                })
            } catch (err) {
                console.log(err)
            }
        }
    }

    return <div className=' fixed left-0 bottom-0 w-screen border-t-2 bg-white z-1 flex justify-center gap-20 py-4'>
        <button onClick={submit} className='focus:outline-none flex text-md items-center justify-center gap-2 self-center align-center px-4 py-4 bg-green-500 hover:bg-green-600 w-60 text-white font-semibold cursor-pointer'>
            <ThumbUpOutline className='h-6 text-white' />
            <span>Validar e publicar</span>
        </button>
        <a href={enlace} target="_blank" rel='noreferrer' className='focus:outline-none flex text-md items-center justify-center gap-2 self-center align-center px-4 py-4 bg-gray-500 hover:bg-gray-600 w-60 text-white font-semibold cursor-pointer'>
            <EyeOutline className='h-6 text-white' />
            <span>Previsualizar</span>
        </a>
        <button onClick={() => navigate('/')} className='focus:outline-none flex text-md items-center justify-center gap-2 self-center align-center px-4 py-4 bg-red-500 hover:bg-red-600 w-60 text-white font-semibold cursor-pointer'>
            <XCircleOutline className='h-6 text-white' />
            <span>Rexeitar</span>
        </button>
    </div>
}