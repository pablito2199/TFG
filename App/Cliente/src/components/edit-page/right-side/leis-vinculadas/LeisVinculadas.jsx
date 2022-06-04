import React from "react"

import { Tooltip } from '@mui/material'
import { QuestionMarkCircleIcon, XCircleIcon } from "@heroicons/react/solid"
import { CreateLei } from "./CreateLei"

export const LeisVinculadas = ({ leiModificada, setCambiosLocales, updateParrafosAModificar, leis, setLeis, leisEliminadas, setLeisEliminadas, leisAnadidasManualmente, setLeisAnadidasManualmente, setLeiSeleccionada }) => {
    const eliminarLeiVinculada = (lei) => {
        setLeis(leis.filter(leiAux => lei !== leiAux.id))
        setLeisEliminadas([...leisEliminadas, lei])
        setCambiosLocales(true)
    }

    return <div className='p-4 flex flex-col border-2 border-black'>
        <CreateLei
            leis={leis} setLeis={setLeis}
            leisAnadidasManualmente={leisAnadidasManualmente} setLeisAnadidasManualmente={setLeisAnadidasManualmente}
            setCambiosLocales={setCambiosLocales}
        />
        {
            leis.length !== 0
                ?
                <div>
                    <div className='flex flex-1 justify-end items-center mr-2 w-full'>
                        <Tooltip title="Prema en calquera lei para acceder ao modo de edición das leis vinculadas." placement="top" arrow>
                            <QuestionMarkCircleIcon className='h-8 text-orange' />
                        </Tooltip>
                    </div>
                    <div className='border border-black min-h-leis-vinculadas-top max-h-leis-vinculadas-top overflow-y-scroll'>
                        {
                            leis?.map((lei, index) =>
                                <div className='m-4 flex flex-col border-b border-gray-lex-gal w-12/13' key={lei.id}>
                                    <div className='flex flex-row items-center'>
                                        {
                                            leiModificada.includes(lei.name.replace('Orde', 'ORDE'))
                                                ?
                                                <button className='font-semibold' onClick={() => { updateParrafosAModificar(); setLeiSeleccionada(lei.name) }}>{lei.name}</button>
                                                :
                                                <span className='font-semibold'>{lei.name}</span>
                                        }
                                        <div className="flex flex-auto justify-end">
                                            <button title="Eliminar lei vinculada" onClick={() => eliminarLeiVinculada(lei.id)} className='focus:outline-none flex py-2 items-center text-red-500 text-right text-sm cursor-pointer gap-1'>
                                                <XCircleIcon className='h-4 text-red-500' />
                                                <span>Eliminar</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                :
                <div className='min-h-leis-vinculadas-top max-h-leis-vinculadas-top overflow-y-scroll'></div>
        }
    </div>
}