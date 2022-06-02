import { React, useRef, useState } from 'react'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import { XCircleOutline } from '@graywolfai/react-heroicons'

export const DogContent = ({ parrafosAModificar, data, leiSeleccionada, cambiosVinculadas, setCambiosVinculadas, setCambiosLocales }) => {
    return <div>
        {
            Array.prototype.slice.call(data.getElementsByClassName('story')[0].children).map((parrafo, index) => {
                return <Parrafo
                    parrafosAModificar={parrafosAModificar}
                    key={index}
                    parrafo={parrafo.innerText}
                    leiSeleccionada={leiSeleccionada}
                    cambiosVinculadas={cambiosVinculadas} setCambiosVinculadas={setCambiosVinculadas}
                    setCambiosLocales={setCambiosLocales}
                    posicion={index}
                />
            })
        }
    </div>
}

const Parrafo = ({ parrafosAModificar, parrafo, leiSeleccionada, cambiosVinculadas, setCambiosVinculadas, setCambiosLocales, posicion }) => {
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
    let BreakException = {}

    if (parrafosAModificar && parrafosAModificar.length !== 0) {
        try {
            parrafosAModificar.forEach(par => {
                if (parrafo.match(new RegExp("^" + par + ". ", "gi"))) {
                    clase += " bg-blue-green text-white py-2 opacity-100"
                    throw BreakException
                } else {
                    clase += " opacity-40"
                    return true
                }
            })
        } catch (e) {
            if (e !== BreakException) throw e;
        }
    }

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
            setCambiosLocales(true)
        }
        setMostrarBotones(false)
    }

    const descartarCambio = () => {
        ref.current.innerText = parrafo
        setCambiosVinculadas(cambiosVinculadas.filter(cambio => id.indexOf(cambio.id) < 0))
        setMostrarBotones(false)
        setCambiosLocales(true)
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