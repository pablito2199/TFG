import { React, useEffect, useState } from 'react'

export const Anexo = ({ data, cambios, handleContextMenu }) => {
    return <div>
        <Parrafo cambios={cambios} parrafo={data.anexo?.titulo._text} handleContextMenu={handleContextMenu} clase="mt-8 font-bold text-center" />
        {
            data.anexo?.p.map((parrafo, index) =>
                <div key={index}>
                    <Parrafo cambios={cambios} parrafo={parrafo?._text} handleContextMenu={handleContextMenu} clase="mt-3" />
                </div>
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
                <p className={clase + ' bg-green-200'} onContextMenu={(e) => handleContextMenu(e, parrafo)}>{parrafo}</p>
                :
                <p className={clase} onContextMenu={(e) => handleContextMenu(e, parrafo)}>{parrafo}</p>
        }
    </div>
}