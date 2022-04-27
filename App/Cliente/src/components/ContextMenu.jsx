import React from "react";
import { PencilAltOutline } from "@graywolfai/react-heroicons";

import copy_img from '../images/copy-white.png'
import paste_img from '../images/paste-white.png'

export const ContextMenu = ({ anchorPoint, show, selectedText, setOpacity, setMostrarInput }) => {
    if (show) {
        return <div className="flex flex-col bg-gray-700 text-white w-80 h-auto m-0 absolute list-none py-2" style={{ top: anchorPoint.y, left: anchorPoint.x }}>
            <button onClick={() => navigator.clipboard.writeText(selectedText)} className='focus:outline-none flex py-1 px-5 cursor-pointer hover:bg-gray-800'>
                <div className="flex items-center gap-1">
                    <img alt="copiar" src={copy_img} className="h-5" />
                    <span>Copiar</span>
                </div>
                <div className="w-full flex justify-end">
                    <span className="text-gray-300 text-sm">Ctrl + C</span>
                </div>
            </button>
            <button onClick={() => navigator.clipboard.readText()} className='focus:outline-none flex py-1 px-5 cursor-pointer hover:bg-gray-800 items-center gap-1'>
                <div className="flex items-center gap-1">
                    <img alt="pegar" src={paste_img} className="h-5" />
                    <span>Pegar</span>
                </div>
                <div className="w-full flex justify-end">
                    <span className="text-gray-300 text-sm">Ctrl + V</span>
                </div>
            </button>
            <div className='border border-gray-300 w-full my-2' />
            <button onClick={() => { setOpacity('opacity-50'); setMostrarInput(true) }} className='focus:outline-none flex py-1 px-5 cursor-pointer hover:bg-gray-800 items-center gap-1'>
                <PencilAltOutline className="text-white h-5" />
                <span>Propoñer cambio</span>
            </button>
        </div>
    }
    return <></>;
};