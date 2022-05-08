import { React, useEffect, useState } from 'react'

export const DogContent = ({ data, cambios, handleContextMenu }) => {
    return <div>
        {
            Array.prototype.slice.call(data.getElementsByClassName('story')[0].children).map((parrafo, index) =>
                <Parrafo cambios={cambios} parrafo={parrafo.innerText} handleContextMenu={handleContextMenu} clase="mt-3" key={index} />
            )
        }
    </div>
}

const Parrafo = ({ parrafo, handleContextMenu, cambios, clase }) => {
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
                <p className={clase + ' bg-red-200'} onContextMenu={(e) => handleContextMenu(e, parrafo)}>{parrafo}</p>
                :
                <p className={clase} onContextMenu={(e) => handleContextMenu(e, parrafo)}>{parrafo}</p>
        }
    </div>
}