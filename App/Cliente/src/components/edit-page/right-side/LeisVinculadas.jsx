import React, { useState } from "react";

import { XCircleIcon } from "@heroicons/react/solid";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export const LeisVinculadas = () => {
    const [leis, setLeis] = useState([
        { id: '00000A', modificacion: 'Modificación realizada a lei A.' },
        { id: '00000B', modificacion: 'Modificación realizada a lei B.' },
        { id: '00000C', modificacion: 'Modificación realizada a lei C.' },
        { id: '00000D', modificacion: 'Modificación realizada a lei D.' },
        { id: '00000E', modificacion: 'Modificación realizada a lei E.' },
        { id: '00000F', modificacion: 'Modificación realizada a lei F.' },
        { id: '00000G', modificacion: 'Modificación realizada a lei G.' },
        { id: '00000H', modificacion: 'Modificación realizada a lei H.' },
        { id: '00000I', modificacion: 'Modificación realizada a lei I.' },
    ])

    const eliminarLeiVinculada = (lei) => {
        setLeis(leis.filter(leiAux => lei !== leiAux.id))
    }

    return <div className='p-4 flex flex-col border-2 border-black'>
        <button title="Engadir nova lei vinculada manualmente" className='pb-4 flex focus:outline-none items-center justify-center gap-2'>
            <AddCircleOutlineOutlinedIcon sx={{ fontSize: 35 }} />
            <span>Engadir nova lei vinculada manualmente</span>
        </button>
        <div className='border-2 border-black max-h-leis-vinculadas-top overflow-y-scroll'>
            {
                leis?.map(lei =>
                    <div className='m-4 flex flex-col border-b-2 border-gray-lex-gal w-12/13' key={lei.id}>
                        <div className='flex flex-row items-center'>
                            <span className='font-bold'>Lei {lei.id}</span>
                            <button title="Eliminar lei vinculada" onClick={() => eliminarLeiVinculada(lei.id)} className='focus:outline-none py-2 flex justify-end items-center text-red-500 flex-auto text-right text-sm cursor-pointer gap-1'>
                                <XCircleIcon className='h-4 text-red-500' />
                                <span>Eliminar</span>
                            </button>
                        </div>
                        <p className='m-4'>{lei.modificacion}</p>
                    </div>
                )
            }
        </div>
    </div>
};