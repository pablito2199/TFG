import { EyeIcon, PencilAltIcon } from '@heroicons/react/solid'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Content = ({ data }) => {
    const navigate = useNavigate()
    return <table className='px-1 flex w-11/12 mt-4 flex flex-col text-left font-medium screen-min3:w-10/12 screen-min1:w-9/12'>
        <tbody className='border border-white text-center'>
            <tr className='flex'>
                <th className='w-1/12 p-2 border-2 border-white bg-black text-white screen-min1:break-words'>DOG nº</th>
                <th className='w-7/12 p-2 border-2 border-white bg-black text-white screen-min3:w-6/12 screen-min2:w-4/12 screen-min1:break-words'>Título</th>
                <th className='w-2/12 p-2 border-2 border-white bg-black text-white screen-min3:w-2/12 screen-min2:w-3/12 screen-min1:break-words'>Departamento</th>
                <th className='w-1/12 p-2 border-2 border-white bg-black text-white screen-min2:w-2/12 screen-min1:break-words'>Data</th>
                <th className='w-1/12 p-2 border-2 border-white bg-black text-white screen-min3:w-2/12 screen-min2:w-3/12 screen-min1:break-words'>Accións</th>
            </tr>
            {
                data?.map((norma, index) =>
                    <tr key={index} className='flex font-semibold border-b border-gray-300 items-center'>
                        <td className='w-1/12 px-2 py-4'>{norma.numeroDog}</td>
                        <td className='w-7/12 text-left px-2 py-4 screen-min3:w-6/12 screen-min2:w-4/12'>{norma.sumario}</td>
                        <td className='w-2/12 px-2 py-4 text-left screen-min3:w-2/12 screen-min2:w-3/12 screen-min1:break-words'>{norma.publicador}</td>
                        <td className='w-1/12 px-2 py-4 screen-min2:w-2/12 screen-min1:break-words'>{norma.fechaDogFormateada}</td>
                        <td className='w-1/12 screen-min3:w-2/12 screen-min2:w-3/12'>
                            <div className='flex gap-2 justify-center items-center py-4 screen-min1:flex-col'>
                                <a title="Previsualizar" href={`https://www.xunta.gal/${norma.rutaHtml}`} target="_blank" rel='noreferrer' className='focus:outline-none text-md text-center self-center align-center px-4 py-4 hover:bg-gray-200 border cursor-pointer'>
                                    <EyeIcon className='h-3' />
                                </a>
                                <button onClick={() => navigate(`/edit/xunta/${norma.id}`, { state: { norma: norma } })} title="Importar" className='focus:outline-none text-md text-center self-center align-center px-4 py-4 bg-black hover:bg-gray-600 text-indigo-50 font-semibold cursor-pointer' >
                                    <PencilAltIcon className='h-3' />
                                </button>
                            </div>
                        </td>
                    </tr>
                )
            }
        </tbody>
    </table >
}