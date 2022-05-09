import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useDogDocument, useFinalDocument } from '../hooks'
import { LeftSideDog, ParagraphEditor, PrincipalButtons, RightSide } from '../components/edit-page'
import { ContextMenu } from '../components/edit-page'
import { HeaderDog } from '../components/edit-page/HeaderDog'

export default function EditDog() {
    const id = useParams()
    let selectedText = window.getSelection()
    const htmlCode = useDogDocument(`https://www.xunta.gal/${id.id1}/${id.id2}/${id.id3}/${id.id4}/${id.id5}`)
    let documentAdditionalData = useFinalDocument(id.id5).data

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
        if (documentAdditionalData) {
            if (documentAdditionalData.changes) {
                setCambios(documentAdditionalData.changes)
            }
            if (documentAdditionalData.laws) {
                setLeisVinculadas(documentAdditionalData.laws)
            }
            if (documentAdditionalData.notes) {
                setNotas(documentAdditionalData.notes)
            }
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
                    htmlCode
                        ?
                        <>
                            <HeaderDog data={htmlCode} />

                            <main className='z-0 w-full mt-6 flex screen-min5:flex-col screen-min3:w-11/12 screen-min1:9/12 mb-24'>
                                <LeftSideDog
                                    data={htmlCode}
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
                                    data={htmlCode}
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
                        </>
                        :
                        <></>
                }

                <PrincipalButtons idDb={id.id5} enlace={'https://www.xunta.gal/' + id.id1 + '/' + id.id2 + '/' + id.id3 + '/' + id.id4 + '/' + id.id5} notas={notas} cambios={cambios} leyes={leisVinculadas} />
            </div>

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