import { React } from 'react'

import { Tooltip } from '@mui/material'
import { QuestionMarkCircleIcon } from '@heroicons/react/solid'
import { DogContent } from './DogContent'
import { useDogDocument } from '../../../hooks'

export const LinkedDocuments = ({ claseLeftSide, leiSeleccionada, setLeiSeleccionada, cambiosVinculadas, setCambiosVinculadas }) => {
    const documentos = [
        useDogDocument(`https://www.xunta.gal/dog/Publicados/excepcional/2021/20211021/2794/AnuncioC3K1-211021-1_gl.html`),
        useDogDocument(`https://www.xunta.gal/dog/Publicados/excepcional/2021/20211022/2796/AnuncioC3K1-221021-2_gl.html`),
        useDogDocument(`https://www.xunta.gal/dog/Publicados/excepcional/2021/20211028/2801/AnuncioC3K1-261021-6_gl.html`),
        useDogDocument(`https://www.xunta.gal/dog/Publicados/excepcional/2021/20210914/2760/AnuncioC3K1-140921-1_gl.html`),
        useDogDocument(`https://www.xunta.gal/dog/Publicados/excepcional/2021/20211008/2785/AnuncioC3K1-061021-13_gl.html`),
        useDogDocument(`https://www.xunta.gal/dog/Publicados/excepcional/2021/20211125/2825/AnuncioC3K1-251121-5_gl.html`),
        useDogDocument(`https://www.xunta.gal/dog/Publicados/excepcional/2021/20211216/2842/AnuncioC3K1-151221-4_gl.html`),
        useDogDocument(`https://www.xunta.gal/dog/Publicados/2021/20211230/AnuncioG0599-291221-0002_gl.html`),
        useDogDocument(`https://www.xunta.gal/dog/Publicados/excepcional/2022/20220114/2868/AnuncioC3K1-120122-1_gl.html`),
        useDogDocument(`https://www.xunta.gal/dog/Publicados/excepcional/2022/20220211/2891/AnuncioC3K1-110222-2_gl.html`),
        useDogDocument(`https://www.xunta.gal/dog/Publicados/excepcional/2021/20210930/2775/AnuncioC3K1-300921-1_gl.html`),
        useDogDocument(`https://www.xunta.gal/dog/Publicados/excepcional/2022/20220225/2903/AnuncioC3K1-240222-3_gl.html`),
        useDogDocument(`https://www.xunta.gal/dog/Publicados/excepcional/2022/20220311/2914/AnuncioC3K1-090322-1_gl.html`)
    ]

    return <section className={claseLeftSide}>
        <nav className='flex text-lg items-center'>
            <select className='w-96 text-center bg-black text-white cursor-pointer p-3' onChange={(e) => setLeiSeleccionada(e.target.value)} defaultValue={leiSeleccionada}>
                <option value={0}>Resolución do 21 de outubro de 2021</option>
                <option value={1}>Orde do 22 de outubro de 2021</option>
                <option value={2}>Orde do 26 de outubro de 2021</option>
                <option value={3}>Orde do 14 de setembro de 2021</option>
                <option value={4}>Orde do 6 de outubro de 2021</option>
                <option value={5}>Orde do 25 de novembro de 2021</option>
                <option value={6}>Orde do 15 de decembro de 2021</option>
                <option value={7}>Orde do 29 de decembro de 2021</option>
                <option value={8}>Orde do 13 de xaneiro de 2022</option>
                <option value={9}>Orde do 11 de febreiro de 2022</option>
                <option value={10}>Orde do 29 de setembro de 2021</option>
                <option value={11}>Orde do 24 de febreiro de 2022</option>
                <option value={12}>Orde do 9 de marzo de 2022</option>
            </select>
            <div className='flex flex-1 justify-end items-center gap-2 mr-2 w-full'>
                <Tooltip title="Escolla a lei vinculada que queres modificar no seleccionable." placement="top" arrow>
                    <QuestionMarkCircleIcon className='h-8 text-orange' />
                </Tooltip>
            </div>
        </nav>
        <div className="text-justify p-4 w-full resize-none border-2 border-black min-h-texto-principal max-h-texto-principal overflow-y-scroll">
            {
                documentos[leiSeleccionada]
                    ?
                    <DogContent
                        data={documentos[leiSeleccionada]}
                        leiSeleccionada={leiSeleccionada}
                        cambiosVinculadas={cambiosVinculadas}
                        setCambiosVinculadas={setCambiosVinculadas}
                    />
                    :
                    <></>
            }
        </div>
    </section >
}