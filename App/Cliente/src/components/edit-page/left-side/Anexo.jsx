import { React, useEffect } from 'react'

export const Anexo = ({ data, handleContextMenu, leisVinculadas, setLeisVinculadas, regex }) => {

    useEffect(() => {
        let resultado = (data.anexo?.titulo._text).match(regex)
        if (resultado !== null && resultado?.length !== 0) {
            setLeisVinculadas([...leisVinculadas, resultado])
        }

        data.anexo?.p.forEach((parrafo) => {
            resultado = (parrafo?._text).match(regex)
            if (resultado !== null && resultado?.length !== 0) {
                setLeisVinculadas([...leisVinculadas, resultado])
            }
        })

    }, [data])

    return <div>
        <p onContextMenu={(e) => handleContextMenu(e, data.anexo?.titulo._text)} className='mt-8 font-bold text-center'>{data.anexo?.titulo._text}</p>
        {
            data.anexo?.p.map((parrafo, index) =>
                <div key={index}>
                    <p onContextMenu={(e) => handleContextMenu(e, parrafo?._text)}>{parrafo?._text}</p>
                </div>
            )
        }
    </div>
}