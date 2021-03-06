import { React, useState } from 'react'

import listadoMeses from '../../../data/listadoMeses.json'
import listadoRangos from '../../../data/listadoRangos.json'

import { LeisVinculadas } from './leis-vinculadas/LeisVinculadas'
import { Cambios } from './cambios/Cambios'
import { Notas } from './notas/Notas'
import { ZoomInOutline, ZoomOutOutline } from '@graywolfai/react-heroicons'

export const RightSide = ({ leiModificada, content, setCambiosLocales, updateParrafosAModificar, data, cambios, setCambios, claseLeftSide, setClaseLeftSide, notas, setNotas, leisVinculadas, setLeisVinculadas, setLeiSeleccionada }) => {
    const [estado, setEstado] = useState('c')
    const [leisEliminadas, setLeisEliminadas] = useState([])
    const [leisAnadidasManualmente, setLeisAnadidasManualmente] = useState([])

    const updateLeisVinculadas = () => {
        if (leisVinculadas.length === 0) {
            let auxiliar = []
            let resultado = []
            let mesesRegex = "("
            listadoMeses.forEach(mes => mesesRegex += mes.name + "|")
            mesesRegex = mesesRegex.substring(0, mesesRegex.length - 1)
            mesesRegex += ")"
            let rangosRegex = "("
            listadoRangos.forEach(rango => rangosRegex += rango.descripcion + "|")
            rangosRegex = rangosRegex.substring(0, rangosRegex.length - 1)
            rangosRegex += ")"
            const regex = new RegExp(rangosRegex + " do [0-9]{1,2} de " + mesesRegex + " de [0-9]{4}", "gi")

            // Búsqueda en todos los párrafos
            Array.prototype.slice.call(data.getElementsByClassName('story')[0].children).forEach(parrafo => {
                resultado = (parrafo.innerText).match(regex)
                if (resultado !== null && resultado?.length !== 0) {
                    resultado.forEach(res => auxiliar.push(res))
                }
            })

            //Eliminar leis duplicadas
            auxiliar = [...new Set(auxiliar)]
            resultado = []

            auxiliar.forEach(lei => resultado.push({ "id": resultado.length, "name": lei }))
            leisAnadidasManualmente.forEach(lei => resultado.push({ "id": lei.id, "name": lei.name }))
            leisEliminadas.forEach(lei => resultado = resultado.filter(aux => lei !== aux.id))
            setLeisVinculadas([...leisVinculadas, ...resultado])
        }
    }

    return <section className='z-0 flex-1 mx-10 screen-min5:w-5/6 screen-min4:mx-2 screen-min5:mt-4'>
        {
            estado === 'c'
                ?
                <nav className='flex text-lg text-center'>
                    <button className='focus:outline-none p-2 w-32 bg-black text-white border-2 border-black hover:underline cursor-pointer transition-all'>Cambios</button>
                    <button className='focus:outline-none p-2 w-32 border-t-2 border-b border-black hover:underline cursor-pointer transition-all' onClick={() => { setEstado('l'); updateLeisVinculadas() }}>Leis vinc.</button>
                    <button className='focus:outline-none p-2 w-32 border-2 border-b border-black hover:underline cursor-pointer transition-all' onClick={() => setEstado('n')}>Notas</button>
                    <div className='flex flex-1 self-end justify-end h-5'>
                        {
                            claseLeftSide === 'z-0 w-2/12 ml-2 screen-min5:w-5/6'
                                ?
                                <ZoomOutOutline className='cursor-pointer border border-black hover:bg-gray-300' onClick={() => setClaseLeftSide('z-0 w-7/12 ml-2 screen-min5:w-5/6')} />
                                :
                                <ZoomInOutline className='cursor-pointer border border-black hover:bg-gray-300' onClick={() => setClaseLeftSide('z-0 w-2/12 ml-2 screen-min5:w-5/6')} />
                        }
                    </div>
                </nav>
                :
                estado === 'l'
                    ?
                    <nav className='flex text-lg text-center'>
                        <button className='focus:outline-none p-2 w-32 border-2 border-b border-black hover:underline cursor-pointer transition-all' onClick={() => { setEstado('c') }}>Cambios</button>
                        <button className='focus:outline-none p-2 w-32 bg-black text-white border-2 border-black hover:underline cursor-pointer transition-all'>Leis vinc.</button>
                        <button className='focus:outline-none p-2 w-32 border-2 border-b border-black hover:underline cursor-pointer transition-all' onClick={() => { setEstado('n') }}>Notas</button>
                        <div className='flex flex-1 self-end justify-end h-5'>
                            {
                                claseLeftSide === 'z-0 w-2/12 ml-2 screen-min5:w-5/6'
                                    ?
                                    <ZoomOutOutline className='cursor-pointer border border-black hover:bg-gray-300' onClick={() => setClaseLeftSide('z-0 w-7/12 ml-2 screen-min5:w-5/6')} />
                                    :
                                    <ZoomInOutline className='cursor-pointer border border-black hover:bg-gray-300' onClick={() => setClaseLeftSide('z-0 w-2/12 ml-2 screen-min5:w-5/6')} />
                            }
                        </div>
                    </nav>
                    :
                    <nav className='flex text-lg text-center'>
                        <button className='focus:outline-none p-2 w-32 border-2 border-b border-black hover:underline cursor-pointer transition-all' onClick={() => setEstado('c')}>Cambios</button>
                        <button className='focus:outline-none p-2 w-32 border-t-2 border-b border-black hover:underline cursor-pointer transition-all' onClick={() => { setEstado('l'); updateLeisVinculadas() }}>Leis vinc.</button>
                        <button className='focus:outline-none p-2 w-32 bg-black text-white border-2 border-black hover:underline cursor-pointer transition-all'>Notas</button>
                        <div className='flex flex-1 self-end justify-end h-5'>
                            {
                                claseLeftSide === 'z-0 w-2/12 ml-2 screen-min5:w-5/6'
                                    ?
                                    <ZoomOutOutline className='cursor-pointer border border-black hover:bg-gray-300' onClick={() => setClaseLeftSide('z-0 w-7/12 ml-2 screen-min5:w-5/6')} />
                                    :
                                    <ZoomInOutline className='cursor-pointer border border-black hover:bg-gray-300' onClick={() => setClaseLeftSide('z-0 w-2/12 ml-2 screen-min5:w-5/6')} />
                            }
                        </div>
                    </nav>
        }
        {
            estado === 'c'
                ?
                <Cambios
                    content={content}
                    cambios={cambios} setCambios={setCambios}
                    claseLeftSide={claseLeftSide}
                    setCambiosLocales={setCambiosLocales}
                />
                :
                estado === 'l'
                    ?
                    <LeisVinculadas
                        updateParrafosAModificar={updateParrafosAModificar}
                        leis={leisVinculadas} setLeis={setLeisVinculadas}
                        leisEliminadas={leisEliminadas} setLeisEliminadas={setLeisEliminadas}
                        leisAnadidasManualmente={leisAnadidasManualmente} setLeisAnadidasManualmente={setLeisAnadidasManualmente}
                        setLeiSeleccionada={setLeiSeleccionada}
                        setCambiosLocales={setCambiosLocales}
                        leiModificada={leiModificada}
                    />
                    :
                    <Notas
                        content={content}
                        notas={notas} setNotas={setNotas}
                        setCambiosLocales={setCambiosLocales}
                    />
        }
    </section >
}