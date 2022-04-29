import { React, useState } from 'react'

import { useDocument } from '../hooks'
import { Header, LeftSide, ParagraphEditor, PrincipalButtons, RightSide } from '../components/edit-page'
import { ContextMenu } from '../components/edit-page'

export default function Edit() {
    const [parrafoACambiar, setParrafoACambiar] = useState('')
    const [parrafoCambiado, setParrafoCambiado] = useState('')
    const [mostrarInput, setMostrarInput] = useState(false)
    const [cambios, setCambios] = useState([])
    const [opacity, setOpacity] = useState('opacity-100')
    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 })
    const [show, setShow] = useState(false)
    const [claseLeftSide, setClaseLeftSide] = useState('z-0 w-7/12 ml-2 screen-min4:w-5/6')

    let selectedText = window.getSelection()
    let data = useDocument(1)

    return (
        <div className='flex flex-col ml-20 items-center w-full screen-min3:ml-20'>
            <ParagraphEditor
                mostrarInput={mostrarInput}
                setMostrarInput={setMostrarInput}
                parrafoCambiado={parrafoCambiado}
                setParrafoCambiado={setParrafoCambiado}
                parrafoACambiar={parrafoACambiar}
                setParrafoACambiar={setParrafoACambiar}
                cambios={cambios}
                setCambios={setCambios}
                setOpacity={setOpacity}
            />

            <div className={opacity}>
                {
                    data?.cab !== undefined
                        ?
                        <Header data={data.cab} />
                        :
                        <></>
                }

                {
                    data?.corpo !== undefined
                        ?
                        <main className='z-0 w-full mt-6 flex screen-min4:flex-col screen-min3:w-11/12 screen-min1:9/12 mb-24'>
                            <LeftSide
                                data={data.corpo}
                                setParrafoACambiar={setParrafoACambiar}
                                setParrafoCambiado={setParrafoCambiado}
                                setMostrarInput={setMostrarInput}
                                setOpacity={setOpacity}
                                setAnchorPoint={setAnchorPoint}
                                show={show}
                                setShow={setShow}
                                claseLeftSide={claseLeftSide}
                            />
                            <RightSide
                                cambios={cambios}
                                setCambios={setCambios}
                                claseLeftSide={claseLeftSide}
                                setClaseLeftSide={setClaseLeftSide}
                            />
                        </main>
                        :
                        <></>
                }

                <PrincipalButtons />
            </div >

            <ContextMenu
                show={show}
                anchorPoint={anchorPoint}
                selectedText={selectedText.toString()}
                setOpacity={setOpacity}
                setMostrarInput={setMostrarInput}
            />
        </div>
    )
}