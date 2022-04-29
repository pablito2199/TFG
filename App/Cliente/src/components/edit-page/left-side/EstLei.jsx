import { React } from 'react'

export const EstLei = ({ data, handleContextMenu, leisVinculadas, regex }) => {
    return <div>
        {
            data.est_lei.art.map((articulo, index) => {
                if (articulo?.titulo && (articulo?.titulo?._text).match(regex) !== null && (articulo?.titulo?._text).match(regex)?.length !== 0) {
                    (articulo?.titulo?._text).match(regex)?.forEach(norma => leisVinculadas.push(norma))
                }
                /*if (articulo?.p && (articulo?.p?._text)?.match(regex) !== null && (articulo?.p?._text)?.match(regex)?.length !== 0) {
                    (articulo?.p?._text).match(regex)?.forEach(norma => leisVinculadas.push(norma))
                }*/
                return <div className='mt-4' key={index}>
                    <p onContextMenu={(e) => handleContextMenu(e, articulo?.titulo?._text)}>{articulo?.titulo?._text}</p>
                    {
                        articulo.p !== undefined
                            ?
                            articulo.p.length
                                ?
                                <>
                                    {
                                        articulo.p.map((parrafo, index2) => {
                                            if ((parrafo?._text).match(regex) !== null && (parrafo?._text).match(regex)?.length !== 0) {
                                                (parrafo?._text).match(regex)?.forEach(norma => leisVinculadas.push(norma))
                                            }
                                            return <div key={index + "artp" + index2}>
                                                <p onContextMenu={(e) => handleContextMenu(e, parrafo?._text)}>{parrafo?._text}</p>
                                            </div>
                                        })
                                    }
                                </>
                                :
                                <div key={index + "artpp"}>
                                    <p onContextMenu={(e) => handleContextMenu(e, articulo.p._text)}>{articulo.p._text}</p>
                                </div>
                            :
                            <></>
                    }
                </div>
            })
        }
        {
            data.est_lei.firma?.p.map((parrafo, index) => {
                if ((parrafo?._text).match(regex) !== null && (parrafo?._text).match(regex)?.length !== 0) {
                    (parrafo?._text).match(regex)?.forEach(norma => leisVinculadas.push(norma))
                }
                return <div className='mt-4' key={index}>
                    <p onContextMenu={(e) => handleContextMenu(e, parrafo?._text)} className='text-center'>{parrafo?._text}</p>
                </div>
            })
        }
    </div>
}