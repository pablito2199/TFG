import { React, useRef, useState } from 'react'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import { XCircleOutline } from '@graywolfai/react-heroicons'

export const DogContent = ({ data, leiSeleccionada, cambiosVinculadas, setCambiosVinculadas }) => {
    return <div>
        {
            Array.prototype.slice.call(data.getElementsByClassName('story')[0].children).map((parrafo, index) => {
                return <Parrafo
                    key={index}
                    parrafo={parrafo.innerText}
                    leiSeleccionada={leiSeleccionada}
                    cambiosVinculadas={cambiosVinculadas}
                    setCambiosVinculadas={setCambiosVinculadas}
                    posicion={index}
                />
            })
        }
    </div>
}

const Parrafo = ({ parrafo, leiSeleccionada, cambiosVinculadas, setCambiosVinculadas, posicion }) => {
    const id = leiSeleccionada + "-" + posicion
    const [mostrarBotones, setMostrarBotones] = useState(false)
    const ref = useRef(null)
    let clase = "mt-3"
    if (parrafo.className === "dog-firma-centrada") {
        clase += " text-center"
    }
    if (parrafo.className === "dog-anexo-encabezado") {
        clase += " text-center font-bold mt-6"
    }
    const claseCambiado = clase + " bg-green-200"

    const gardarCambio = () => {
        let auxiliar = []
        cambiosVinculadas.forEach(cambio => auxiliar.push(cambio))
        auxiliar = auxiliar.filter(cambio => id.indexOf(cambio.id) < 0)
        if (parrafo !== ref.current.innerText) {
            let cambio = {
                "id": id,
                "parrafoCambiado": ref.current.innerText
            }
            auxiliar.push(cambio)
            setCambiosVinculadas(auxiliar)
        }
        setMostrarBotones(false)
    }

    const descartarCambio = () => {
        ref.current.innerText = parrafo
        setCambiosVinculadas(cambiosVinculadas.filter(cambio => id.indexOf(cambio.id) < 0))
        setMostrarBotones(false)
    }

    let parrafoCambiado = ''
    for (let i = 0; i < cambiosVinculadas.length; i++) {
        if (cambiosVinculadas[i].id === id) {
            parrafoCambiado = cambiosVinculadas[i].parrafoCambiado
            break
        }
    }

    return <div>
        {
            parrafoCambiado !== ''
                ?
                <p contentEditable="true" suppressContentEditableWarning={true} ref={ref} className={claseCambiado} onFocus={() => setMostrarBotones(true)}>
                    {parrafoCambiado}
                </p>
                :
                <p contentEditable="true" suppressContentEditableWarning={true} ref={ref} className={clase} onFocus={() => setMostrarBotones(true)}>
                    {parrafo}
                </p>
        }
        {
            mostrarBotones
                ?
                <div className='mt-3 flex justify-end gap-2'>
                    <button onClick={gardarCambio} className='flex bg-blue-green text-white p-2 gap-1'>
                        <SaveOutlinedIcon className='text-white h-4' />
                        <span>Gardar cambio</span>
                    </button>
                    <button onClick={descartarCambio} className='flex bg-red-500 text-white p-2 gap-1'>
                        <XCircleOutline className='text-white h-6' />
                        <span>Descartar cambio</span>
                    </button>
                </div>
                :
                <></>
        }
    </div>
}