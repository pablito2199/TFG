import { React, useEffect, useState } from 'react'

export const DogContent = ({ data, cambios, handleContextMenu }) => {
    /*const ref = useRef(null);

    useEffect(() => {
        const elm = data.getElementsByClassName('story')[0]
        if (elm) {
            elm.setAttribute("class", "flex flex-col gap-y-3")
            if (ref.current)
                ref.current.appendChild(elm)
        }
    }, [data, ref]);

    return <div className='' ref={ref}></div>*/
    return <div>
        {
            Array.prototype.slice.call(data.getElementsByClassName('story')[0].children).map((parrafo, index) => {
                let clase = "mt-3"
                if (parrafo.className === "dog-firma-centrada") {
                    clase += " text-center"
                }
                if (parrafo.className === "dog-anexo-encabezado") {
                    clase += " text-center font-bold mt-6"
                }
                return <Parrafo cambios={cambios} parrafo={parrafo.innerText} handleContextMenu={handleContextMenu} clase={clase} key={index} />
            }
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