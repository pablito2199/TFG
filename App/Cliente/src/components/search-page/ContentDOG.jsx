import { EyeIcon, SaveIcon } from '@heroicons/react/solid'
import React from 'react'

export const ContentDOG = ({ data }) => {
    const token = localStorage.getItem('token') || null

    const anadirDoc = async (norma) => {
        const requestOptions = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify({
                id: norma.id,
                urlDog: 'https://www.xunta.gal' + norma.rutaHtml,
                borrador: true,
                headerItems: {
                    sumario: norma.sumario,
                    publicador: norma.publicador,
                    colectivoSeleccionado: norma.taxcolectivo,
                    organismoSeleccionado: norma.taxorganizativa,
                    rangoSeleccionado: norma.idTipo,
                    seccionSeleccionada: norma.idSeccion,
                    fechaDog: norma.fechaDogFormateada,
                    numDog: norma.numeroDog
                }
            })
        }

        fetch(`/local/${norma.id}`, requestOptions);
        alert('O documento foi importado a lex.gal correctamente.')
    }

    return <table className='px-1 flex mt-4 flex flex-col text-left font-medium screen-min3:w-10/12 screen-min1:w-9/12'>
        <tbody className='border border-white text-center'>
            <div className='flex'>
                <div className='w-1/12 p-2 border-2 border-white bg-black text-white screen-min1:break-words'>DOG nº</div>
                <div className='w-7/12 p-2 border-2 border-white bg-black text-white screen-min3:w-6/12 screen-min2:w-4/12 screen-min1:break-words'>Título</div>
                <div className='w-2/12 p-2 border-2 border-white bg-black text-white screen-min3:w-2/12 screen-min2:w-3/12 screen-min1:break-words'>Departamento</div>
                <div className='w-1/12 p-2 border-2 border-white bg-black text-white screen-min2:w-2/12 screen-min1:break-words'>Data</div>
                <div className='w-1/12 p-2 border-2 border-white bg-black text-white screen-min3:w-2/12 screen-min2:w-3/12 screen-min1:break-words'>Accións</div>
            </div>
            {
                data?.map((norma, index) =>
                    <div key={index} className='flex font-semibold border-b border-gray-300 items-center'>
                        <div className='w-1/12 px-2 py-4'>{norma.numeroDog}</div>
                        <div className='w-7/12 text-left px-2 py-4 screen-min3:w-6/12 screen-min2:w-4/12'>{norma.sumario}</div>
                        <div className='w-2/12 px-2 py-4 text-left screen-min3:w-2/12 screen-min2:w-3/12 screen-min1:break-words'>{norma.publicador}</div>
                        <div className='w-1/12 px-2 py-4 screen-min2:w-2/12 screen-min1:break-words'>{norma.fechaDogFormateada}</div>
                        <div className='w-1/12 screen-min3:w-2/12 screen-min2:w-3/12'>
                            <div className='flex gap-2 justify-center items-center py-4 screen-min1:flex-col'>
                                <a title="Previsualizar" href={`https://www.xunta.gal/${norma.rutaHtml}`} target="_blank" rel='noreferrer' className='focus:outline-none text-md text-center self-center align-center px-4 py-4 hover:bg-gray-200 border cursor-pointer'>
                                    <EyeIcon className='h-4' />
                                </a>
                                <button onClick={() => anadirDoc(norma)} title="Importar" className='focus:outline-none text-md text-center self-center align-center px-4 py-4 bg-black hover:bg-gray-600 text-indigo-50 font-semibold cursor-pointer' >
                                    <SaveIcon className='h-4' />
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </tbody>
    </table >
}