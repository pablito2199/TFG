import { React } from 'react'

export const Intro = ({ data, handleContextMenu, leisVinculadas, regex }) => {
    return <div>
        {
            data.intro.p.map((parrafo, index) => {
                if ((parrafo?._text).match(regex) !== null && (parrafo?._text).match(regex)?.length !== 0) {
                    (parrafo?._text).match(regex)?.forEach(norma => leisVinculadas.push(norma))
                }
                return <div key={index}>
                    <p className='indent-8' onContextMenu={(e) => handleContextMenu(e, parrafo?._text)}>{parrafo?._text}</p>
                </div>
            })
        }
    </div>
}