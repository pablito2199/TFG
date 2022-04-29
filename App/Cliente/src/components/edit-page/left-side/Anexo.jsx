import { React } from 'react'

export const Anexo = ({ data, handleContextMenu, leisVinculadas, regex }) => {
    if (data.anexo?.titulo._text !== null && (data.anexo?.titulo._text).match(regex)?.length !== 0) {
        (data.anexo?.titulo._text).match(regex)?.forEach(norma => leisVinculadas.push(norma))
    }

    return <div>
        <p onContextMenu={(e) => handleContextMenu(e, data.anexo?.titulo._text)} className='mt-8 font-bold text-center'>{data.anexo?.titulo._text}</p>
        {
            data.anexo?.p.map((parrafo, index) => {
                if ((parrafo?._text).match(regex) !== null && (parrafo?._text).match(regex).length !== 0) {
                    (parrafo?._text).match(regex)?.forEach(norma => leisVinculadas.push(norma))
                }
                return <div key={index}>
                    <p onContextMenu={(e) => handleContextMenu(e, parrafo?._text)}>{parrafo?._text}</p>
                </div>
            })
        }
    </div>
}