import React from "react"
import { PencilAltOutline } from "@graywolfai/react-heroicons"
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'

export const ContextMenu = ({ anchorPoint, show, selectedText, setOpacity, setMostrarInput }) => {
    if (show) {
        return <div className="flex flex-col bg-gray-700 text-white w-80 h-auto m-0 absolute list-none py-2" style={{ top: anchorPoint.y, left: anchorPoint.x }}>
            <button onClick={() => navigator.clipboard.writeText(selectedText)} className='focus:outline-none flex py-1 px-5 cursor-pointer hover:bg-gray-800'>
                <div className="flex items-center gap-1">
                    <ContentCopyIcon className="h-5 text-gray-300" />
                    <span>Copiar</span>
                </div>
                <div className="w-full flex justify-end">
                    <span className="text-gray-300 text-sm">Ctrl + C</span>
                </div>
            </button>
            <button onClick={() => navigator.clipboard.readText()} className='focus:outline-none flex py-1 px-5 cursor-pointer hover:bg-gray-800 items-center gap-1'>
                <div className="flex items-center gap-1">
                    <ContentPasteIcon className="h-5 text-gray-300" />
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
    return <></>
}