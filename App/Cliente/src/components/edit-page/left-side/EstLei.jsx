import { React } from 'react'

export const EstLei = ({ data, handleContextMenu }) => {
    return <div>
        {
            data.est_lei?.art.map((articulo, index) =>
                <div className='mt-4' key={index}>
                    <p onContextMenu={(e) => handleContextMenu(e, articulo?.titulo?._text)}>{articulo?.titulo?._text}</p>
                    {
                        articulo.p !== undefined
                            ?
                            articulo.p.length
                                ?
                                <>
                                    {
                                        articulo.p.map((parrafo, index2) =>
                                            <div key={index + "artp" + index2}>
                                                <p onContextMenu={(e) => handleContextMenu(e, parrafo?._text)}>{parrafo?._text}</p>
                                            </div>
                                        )
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
            )
        }
        {
            data.est_lei.firma?.p.map((parrafo, index) =>
                <div className='mt-4' key={index}>
                    <p onContextMenu={(e) => handleContextMenu(e, parrafo?._text)} className='text-center'>{parrafo?._text}</p>
                </div>
            )
        }
    </div>
}