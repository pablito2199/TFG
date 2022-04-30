import React from "react"

import { XCircleIcon } from "@heroicons/react/solid"
import { CreateLei } from "./CreateLei"

export const LeisVinculadas = ({ leis, setLeis, leisEliminadas, setLeisEliminadas, leisAnadidasManualmente, setLeisAnadidasManualmente }) => {
    const eliminarLeiVinculada = (lei) => {
        setLeis(leis.filter(leiAux => lei !== leiAux.id))
        setLeisEliminadas([...leisEliminadas, lei])
    }

    return <div className='p-4 flex flex-col border-2 border-black'>
        <CreateLei
            leis={leis}
            setLeis={setLeis}
            leisAnadidasManualmente={leisAnadidasManualmente}
            setLeisAnadidasManualmente={setLeisAnadidasManualmente}
        />
        <div className='border border-black max-h-leis-vinculadas-top overflow-y-scroll'>
            {
                leis?.map(lei =>
                    <div className='m-4 flex flex-col border-b border-gray-lex-gal w-12/13' key={lei.id}>
                        <div className='flex flex-row items-center'>
                            <span className='font-semibold'>{lei.name}</span>
                            <button title="Eliminar lei vinculada" onClick={() => eliminarLeiVinculada(lei.id)} className='focus:outline-none py-2 flex justify-end items-center text-red-500 flex-auto text-right text-sm cursor-pointer gap-1'>
                                <XCircleIcon className='h-4 text-red-500' />
                                <span>Eliminar</span>
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
}