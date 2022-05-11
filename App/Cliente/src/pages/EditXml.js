import { React, useEffect, useState } from 'react'

import { useXmlDocument, useFinalDocument } from '../hooks'
import { HeaderXml, LeftSideXml, ParagraphEditor, PrincipalButtons, RightSideXml } from '../components/edit-page'
import { ContextMenu } from '../components/edit-page'
import { useParams } from 'react-router-dom'

export default function EditXml() {
    const id = useParams().id
    let selectedText = window.getSelection()
    const data = useXmlDocument(id)
    let documentAdditionalData = useFinalDocument("norma.xml").data

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

    return <div className='flex flex-col ml-20 items-center w-full screen-min3:ml-20'>
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
                        <RightSideXml
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

            <PrincipalButtons id={id} enlace={'https://www.xunta.gal//dog/Publicados/excepcional/2022/20220325/2925/AnuncioC3K1-240322-2_gl.html'} notas={notas} cambios={cambios} leyes={leisVinculadas} />
        </div >

        <ContextMenu
            show={show}
            anchorPoint={anchorPoint}
            selectedText={selectedText.toString()}
            setOpacity={setOpacity}
            setMostrarInput={setMostrarInput}
        />
    </div>
}