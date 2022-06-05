import { React, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useFinalDocument } from '../hooks'

import listadoSecciones from '../data/listadoSecciones.json'

export default function Preview() {
    const ref = useRef(null)
    const { pathname } = useLocation()
    const { data } = useFinalDocument(pathname.split('/')[2], 2)
    const htmlCode = new DOMParser().parseFromString(data.htmlDoc, "text/xml")

    return <div className='flex flex-col ml-32 mr-16 items-center w-full z-0 text-justify font-bitter'>
        {
            data && data.headerItems
                ?
                <div className='flex flex-col mt-10 gap-8'>
                    <div className='flex bg-blue-200 text-blue-green p-2 font-bold text-xl'>
                        <span>DOG núm. {data.headerItems.numDog}</span>
                        <span className='flex flex-1 justify-end'>{data.headerItems.fechaDog}</span>
                    </div>
                    <div className='flex flex-col gap-4'>
                        {
                            listadoSecciones.map(seccion => {
                                if (seccion.id === parseInt(data.headerItems.seccionSeleccionada)) {
                                    return <p className='text-blue-green font-semibold text-xl'>{seccion.descripcion}</p>
                                }
                                return <></>
                            })
                        }
                        <p className='text-gray-600 font-semibold text-xl'>{data.headerItems.publicador}</p>
                    </div>
                    <p className='text-lg italic mx-20'>{data.sumario}</p>
                    <div className='flex flex-col gap-3 text-sm' ref={ref}>
                        {
                            Array.prototype.slice.call(htmlCode.getElementsByClassName('story')[0].children).map((parrafo, index) => {
                                let clase = ''
                                if (parrafo.className === "dog-firma-centrada") {
                                    clase = "text-center"
                                } else if (parrafo.className === "dog-anexo-encabezado") {
                                    clase = "text-center font-bold mt-6"
                                } else {
                                    clase = "indent-sm"
                                }

                                return <p className={clase} key={index}>{parrafo.innerText}</p>
                            })
                        }
                    </div>
                </div>
                :
                <></>
        }
    </div>
}