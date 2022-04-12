import React from 'react';

export const SelectNumberPages = ({ text, posibilities, setNumberElementsPerPage, setActualPage }) => {
    return (
        <div className='flex m-2 p-2 bg-blue-500 text-white items-center gap-4 mt-5 ml-auto mr-16 border rounded '>
            <span>{text}</span>
            <select onChange={(e) => { setNumberElementsPerPage(e.target.value); setActualPage(0) }} className='flex-auto text-black border rounded py-2 px-2 leading-tight focus:outline-none focus:border-gray-500 cursor-pointer w-16'>
                {
                    posibilities.map(p => <option key={p}>{p}</option>)
                }
            </select>
        </div>
    )
}