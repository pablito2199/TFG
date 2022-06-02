import { React, useEffect, useState } from 'react'

export const DogContent = ({ data, cambios, handleContextMenu, content, notas }) => {
    return <div ref={content}>
        {
            Array.prototype.slice.call(data.getElementsByClassName('story')[0].children).map((parrafo, index) => {
                let clase = "mt-3"
                if (parrafo.className === "dog-firma-centrada") {
                    clase += " text-center"
                }
                if (parrafo.className === "dog-anexo-encabezado") {
                    clase += " text-center font-bold mt-6"
                }
                notas.forEach(nota => { if (parseInt(nota.parrafo) === index) clase += " bg-yellow-500" })
                return <Parrafo cambios={cambios} parrafo={parrafo.innerText} handleContextMenu={handleContextMenu} clase={clase} posicion={index} key={index} />
            }
            )
        }
    </div>
}

const Parrafo = ({ parrafo, handleContextMenu, cambios, clase, posicion }) => {
    const [claseAntiguo, setClaseAntiguo] = useState(false)
    useEffect(() => {
        let show = false
        cambios.forEach(cambio => cambio.parrafoAntiguo === parrafo ? show = true : null)
        if (show) {
            setClaseAntiguo(true)
        } else {
            setClaseAntiguo(false)
        }
    }, [cambios, parrafo]);

    return <div>
        {
            claseAntiguo
                ?
                <p className={clase + ' bg-green-200'} onContextMenu={(e) => handleContextMenu(e, parrafo, posicion)}>{parrafo}</p>
                :
                <p className={clase} onContextMenu={(e) => handleContextMenu(e, parrafo, posicion)}>{parrafo}</p>
        }
    </div>
}