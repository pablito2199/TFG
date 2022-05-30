import { React, useEffect, useState } from 'react'

export const EstLei = ({ data, cambios, handleContextMenu }) => {
    return <div>
        {
            data.est_lei?.art.map((articulo, index) =>
                <div className='mt-4' key={index}>
                    <Parrafo cambios={cambios} parrafo={articulo?.titulo?._text} handleContextMenu={handleContextMenu} clase="mt-3" />
                    {
                        articulo.p !== undefined
                            ?
                            articulo.p.length
                                ?
                                <>
                                    {
                                        articulo.p.map((parrafo, index2) =>
                                            <div key={index + "artp" + index2}>
                                                <Parrafo cambios={cambios} parrafo={parrafo?._text} handleContextMenu={handleContextMenu} clase="mt-3" />
                                            </div>
                                        )
                                    }
                                </>
                                :
                                <div key={index + "artpp"}>
                                    <Parrafo cambios={cambios} parrafo={articulo.p._text} handleContextMenu={handleContextMenu} clase="mt-3" />
                                </div>
                            :
                            <></>
                    }
                </div>
            )
        }
        {
            data.est_lei.firma?.p.map((parrafo, index) =>
                <div className='mt-4' key={index}>
                    <Parrafo cambios={cambios} parrafo={parrafo?._text} handleContextMenu={handleContextMenu} clase="text-center" />
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