import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@heroicons/react/solid';
import { React, useState } from 'react';
import { Select } from '../Select'

import organismos from "../../data/listadoOrganismos.json"
import colectivos from "../../data/listadoColectivos.json"
import rangos from "../../data/listadoRangos.json"
import secciones from "../../data/listadoSecciones.json"
import tematicas from "../../data/listadoTematicas.json"

export const SearchFilters = ({ soloTitulo, setSoloTitulo, fraseExacta, setFraseExacta, dogDesde, setDogDesde, dogHasta, setDogHasta, criterioOrdenacion, setCriterioOrdenacion, organizacion, setOrganizacion, rango, setRango, colectivo, setColectivo, seccion, setSeccion, tematica, setTematica }) => {
    const [mostrar, setMostrar] = useState(false)

    return (
        <>
            {
                !mostrar
                    ?
                    <div className='flex text-white text-center mt-4'>
                        <button onClick={() => setMostrar(!mostrar)} className="bg-black focus:outline-none relative inline-flex items-center font-medium cursor-pointer">
                            <span className='p-2'>Amosar filtros avanzados</span>
                            <ChevronDoubleDownIcon className="bg-black h-5 w-5 mr-2" aria-hidden="true" />
                        </button>
                    </div>
                    :
                    <div>
                        <div className='flex text-white text-center mt-4'>
                            <button onClick={() => setMostrar(!mostrar)} className="bg-black focus:outline-none relative inline-flex items-center font-medium cursor-pointer">
                                <span className='p-2'>Agochar filtros avanzados</span>
                                <ChevronDoubleUpIcon className="bg-black h-5 w-5 mr-2" aria-hidden="true" />
                            </button>
                        </div>
                        <div className='flex flex-col bg-white-lex-gal p-2 font-semibold'>
                            <div className='flex justify-center gap-24 border-b border-blue-400'>
                                <div className='p-2 flex items-center justify-center gap-1'>
                                    <span className='ml-1 text-lg italic mr-1'>Buscar só no título</span>
                                    <input defaultChecked onClick={() => setSoloTitulo(!soloTitulo)} type="checkbox" className='rounded-xl form-checkbox h-4 w-4 text-green-600 cursor-pointer' />
                                </div>
                                <div className='p-2 flex items-center justify-center gap-1'>
                                    <span className='ml-1 text-lg italic mr-1'>Buscar por frase exacta</span>
                                    <input defaultChecked onClick={() => setFraseExacta(!fraseExacta)} type="checkbox" className='rounded-xl form-checkbox h-4 w-4 text-green-600 cursor-pointer' />
                                </div>
                            </div>
                            <div className='flex w-full'>
                                <div className='w-1/3 flex flex-col text-left align-top m-2 px-3'>
                                    <span className='ml-1 text-lg italic mb-1'>Número DOG dende</span>
                                    <input onChange={(e) => setDogDesde(e.target.value)} min="1" type="number" value={dogDesde} className='text-lg text-black border-blue-300 py-2 px-2 leading-tight focus:outline-none focus:border-gray-500' />
                                </div>
                                <div className='w-1/3 flex flex-col text-left align-top m-2 px-3'>
                                    <span className='ml-1 text-lg italic mb-1'>Número DOG ata</span>
                                    <input onChange={(e) => setDogHasta(e.target.value)} type="number" value={dogHasta} className='text-lg text-black border-blue-300 py-2 px-2 leading-tight focus:outline-none focus:border-gray-500' />
                                </div>
                                <div className='w-1/3 flex flex-col text-left align-top m-2 px-3'>
                                    <span className='ml-1 text-lg italic mb-1'>Criterio de ordenación</span>
                                    <select defaultValue={criterioOrdenacion} onChange={(e) => setCriterioOrdenacion(e.target.value)} name="numberPages" className='text-lg text-black border-blue-300 py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 cursor-pointer'>
                                        <option value="ORDENACION_FECHA">Data diario</option>
                                        <option value="ORDENACION_NUMERO">Número diario</option>
                                        <option value="ORDENACION_RELEVANCIA">Relevancia</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex w-full'>
                                <div className='w-1/3'>
                                    <Select texto="Colectivo" firstOption={true} elements={colectivos} element={colectivo} setElements={setColectivo} opcion="Calquera" />
                                </div>
                                <div className='w-1/3'>
                                    <Select texto="Organización" firstOption={true} elements={organismos} element={organizacion} setElements={setOrganizacion} opcion="Calquera" />
                                </div>
                                <div className='w-1/3'>
                                    <Select texto="Rango" firstOption={true} elements={rangos} element={rango} setElements={setRango} opcion="Calquera" />
                                </div>
                            </div>
                            <div className='flex w-full mb-4'>
                                <div className='w-1/2'>
                                    <Select texto="Sección" firstOption={true} elements={secciones} element={seccion} setElements={setSeccion} opcion="Calquera" />
                                </div>
                                <div className='w-1/2'>
                                    <Select texto="Áreas temáticas" firstOption={true} elements={tematicas} element={tematica} setElements={setTematica} opcion="Calquera" />
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}