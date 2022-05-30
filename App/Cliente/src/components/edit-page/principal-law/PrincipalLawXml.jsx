import { React } from 'react'

export const PrincipalLawXml = ({ data }) => {
    return <section className='z-0 flex-1 mx-10 screen-min1:mt-8 screen-min1:ml-2 screen-min1:w-11/12'>
        <nav className='flex text-lg items-center gap-2'>
            <button className='w-96 focus:outline-none p-2 w-32 bg-black text-white border-2 border-black cursor-default'>Anuncio do 5 de maio de 2022</button>
        </nav>
        <div className="text-justify p-4 w-full resize-none border-2 border-black min-h-texto-principal max-h-texto-principal overflow-y-scroll">
            <div>
                {
                    data.intro?.p.map((parrafo, index) =>
                        <Parrafo parrafo={parrafo?._text} clase="mt-3" key={index} />
                    )
                }
            </div>

            <div>
                {
                    data.est_lei?.art.map((articulo, index) =>
                        <div className='mt-4' key={index}>
                            <Parrafo parrafo={articulo?.titulo?._text} clase="mt-3" />
                            {
                                articulo.p !== undefined
                                    ?
                                    articulo.p.length
                                        ?
                                        <>
                                            {
                                                articulo.p.map((parrafo, index2) =>
                                                    <div key={index + "artp" + index2}>
                                                        <Parrafo parrafo={parrafo?._text} clase="mt-3" />
                                                    </div>
                                                )
                                            }
                                        </>
                                        :
                                        <div key={index + "artpp"}>
                                            <Parrafo parrafo={articulo.p._text} clase="mt-3" />
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
                            <Parrafo parrafo={parrafo?._text} clase="text-center" />
                        </div>
                    )
                }
            </div>

            <div>
                <Parrafo parrafo={data.anexo?.titulo._text} clase="mt-8 font-bold text-center" />
                {
                    data.anexo?.p.map((parrafo, index) =>
                        <div key={index}>
                            <Parrafo parrafo={parrafo?._text} clase="mt-3" />
                        </div>
                    )
                }
            </div>
        </div>
    </section>
}

const Parrafo = ({ parrafo, clase }) => {
    return <div>
        <p className={clase}>{parrafo}</p>
    </div>
}