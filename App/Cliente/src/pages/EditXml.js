import { React, useEffect, useState } from 'react'

import { useXmlDocument, useFinalDocument } from '../hooks'
import { HeaderXml, LeftSideXml, ParagraphEditor, PrincipalButtons, RightSide } from '../components/edit-page'
import { ContextMenu } from '../components/edit-page'

export default function EditXml() {
    let selectedText = window.getSelection()
    const data = useXmlDocument(1)
    let documentAdditionalData = useFinalDocument(1651743500014).data

    const [parrafoACambiar, setParrafoACambiar] = useState('')
    const [parrafoCambiado, setParrafoCambiado] = useState('')
    const [mostrarInput, setMostrarInput] = useState(false)
    const [cambios, setCambios] = useState([])
    const [leisVinculadas, setLeisVinculadas] = useState([])
    const [notas, setNotas] = useState([])
    const [opacity, setOpacity] = useState('opacity-100')
    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 })
    const [show, setShow] = useState(false)
    const [claseLeftSide, setClaseLeftSide] = useState('z-0 w-7/12 ml-2 screen-min5:w-5/6')

    useEffect(() => {
        if (documentAdditionalData.changes) {
            setCambios(documentAdditionalData.changes)
        }
        if (documentAdditionalData.laws) {
            setLeisVinculadas(documentAdditionalData.laws)
        }
        if (documentAdditionalData.notes) {
            setNotas(documentAdditionalData.notes)
        }
    }, [documentAdditionalData])

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
                        <HeaderXml data={data.cab} />
                        :
                        <></>
                }

                {
                    data?.corpo !== undefined
                        ?
                        <main className='z-0 w-full mt-6 flex screen-min5:flex-col screen-min3:w-11/12 screen-min1:9/12 mb-24'>
                            <LeftSideXml
                                data={data.corpo}
                                cambios={cambios}
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
                                data={data.corpo}
                                cambios={cambios}
                                setCambios={setCambios}
                                claseLeftSide={claseLeftSide}
                                setClaseLeftSide={setClaseLeftSide}
                                notas={notas}
                                setNotas={setNotas}
                                leisVinculadas={leisVinculadas}
                                setLeisVinculadas={setLeisVinculadas}
                            />
                        </main>
                        :
                        <></>
                }

                <PrincipalButtons id={documentAdditionalData.id} notas={notas} cambios={cambios} leyes={leisVinculadas} />
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