import { React, useEffect } from 'react'

export const Intro = ({ data, handleContextMenu, leisVinculadas, setLeisVinculadas, regex }) => {
    useEffect(() => {
        data.intro?.p.forEach((parrafo) => {
            const resultado = (parrafo?._text).match(regex)
            if (resultado !== null && resultado?.length !== 0) {
                setLeisVinculadas([...leisVinculadas, resultado])
            }
        })
    }, [data])

    return <div>
        {
            data.intro?.p.map((parrafo, index) =>
                <div key={index}>
                    <p className='indent-8' onContextMenu={(e) => handleContextMenu(e, parrafo?._text)}>{parrafo?._text}</p>
                </div>
            )
        }
    </div>
}