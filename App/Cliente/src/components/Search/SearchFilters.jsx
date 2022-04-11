import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@heroicons/react/solid';
import { React, useState } from 'react';

export const SearchFilters = ({ soloTitulo, setSoloTitulo, fraseExacta, setFraseExacta, dogDesde, setDogDesde, dogHasta, setDogHasta, criterioOrdenacion, setCriterioOrdenacion }) => {
    const [mostrar, setMostrar] = useState(false)

    return (
        <>
            {
                !mostrar
                    ?
                    <div className='flex text-white text-center justify-end'>
                        <button onClick={() => setMostrar(!mostrar)} className="bg-black focus:outline-none relative inline-flex items-center rounded-md font-medium cursor-pointer">
                            <span className='p-2'>Mostrar filtros avanzados</span>
                            <ChevronDoubleDownIcon className="bg-black h-5 w-5 mr-2" aria-hidden="true" />
                        </button>
                    </div>
                    :
                    <div>
                        <div className='flex text-white text-center justify-end'>
                            <button onClick={() => setMostrar(!mostrar)} className="bg-black focus:outline-none relative inline-flex items-center rounded-md font-medium cursor-pointer">
                                <span className='p-2'>Mostrar filtros avanzados</span>
                                <ChevronDoubleUpIcon className="bg-black h-5 w-5 mr-2" aria-hidden="true" />
                            </button>
                        </div>
                        <div className='flex flex-col bg-gray-200 items-center rounded font-bold text-center'>
                            <div className='flex'>
                                <div className='p-2 flex items-center justify-center gap-1'>
                                    <span className='ml-2 text-gray-700'>Solo título</span>
                                    <input onClick={() => setSoloTitulo(!soloTitulo)} type="checkbox" className='rounded form-checkbox h-4 w-4 text-blue-600 cursor-pointer' />

                                </div>
                                <div className='p-2 flex items-center justify-center gap-1'>
                                    <span className='ml-2 text-gray-700'>Frase exacta</span>
                                    <input onClick={() => setFraseExacta(!fraseExacta)} type="checkbox" className='rounded form-checkbox h-4 w-4 text-blue-600 cursor-pointer' />
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='p-2 flex flex-col items-center justify-center'>
                                    <span className='text-gray-700'>Número DOG desde</span>
                                    <input onChange={(e) => setDogDesde(e.target.value)} min="1" type="number" value={dogDesde} className='flex-auto text-black border rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500' />
                                </div>
                                <div className='p-2 flex flex-col items-center justify-center'>
                                    <span className='text-gray-700'>Número DOG hasta</span>
                                    <input onChange={(e) => setDogHasta(e.target.value)} type="number" value={dogHasta} className='flex-auto text-black border rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500' />
                                </div>
                                <div className='p-2 flex flex-col items-center justify-center'>
                                    <span className='text-gray-700'>Criterio de ordenación</span>
                                    <select onChange={(e) => setCriterioOrdenacion(e.target.value)} name="numberPages" className='w-40 text-black border rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 cursor-pointer'>
                                        <option value="ORDENACION_ALFABETICA">Alfabéticamente</option>
                                        <option value="ORDENACION_FECHA" selected>Fecha</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}