import { React } from 'react'

export const Anexo = ({ data, handleContextMenu }) => {
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