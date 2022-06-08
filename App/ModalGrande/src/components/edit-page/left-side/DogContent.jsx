import { React, useEffect, useState } from 'react'

export const DogContent = ({ data, cambios, handleContextMenu, content, notas }) => {
    return <div ref={content}>
        {
            Array.prototype.slice.call(data.getElementsByClassName('story')[0].children).map((parrafo, index) => {
                let clase = "mt-3"
                if (parrafo.className === "dog-firma-centrada") {
                    clase += " text-center"
                } else if (parrafo.className === "dog-anexo-encabezado") {
                    clase += " text-center font-bold mt-6"
                } else {
                    clase += " indent-sm"
                }
                notas.forEach(nota => { if (parseInt(nota.parrafo) === index) clase += " bg-yellow-500" })

                return <Parrafo
                    cambios={cambios}
                    parrafo={parrafo.innerText}
                    handleContextMenu={handleContextMenu}
                    clase={clase}
                    posicion={index}
                    key={index}
                />
            }
            )
        }
    </div>
}

const Parrafo = ({ parrafo, handleContextMenu, cambios, clase, posicion }) => {
    const [newP, setNewP] = useState('')
    useEffect(() => {
        let show = false

        cambios.forEach(cambio => {
            if (cambio.parrafoAntiguo === parrafo) {
                setNewP(cambio.parrafoNuevo)
                show = true
            }
        })

        if (!show) {
            setNewP('')
        }
    }, [cambios, parrafo])

    return <div>
        {
            newP
                ?
                <p className={clase + ' bg-green-200'} onContextMenu={(e) => handleContextMenu(e, parrafo, posicion)}>{newP}</p>
                :
                <p className={clase} onContextMenu={(e) => handleContextMenu(e, parrafo, posicion)}>{parrafo}</p>
        }
    </div>
}