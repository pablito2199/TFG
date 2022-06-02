import { React, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import listadoMeses from '../data/listadoMeses.json'
import { useFinalDocument } from '../hooks'
import { LeftSideDog, NoteEditor, ParagraphEditor, PrincipalButtons, RightSideDog } from '../components/edit-page'
import { ContextMenu } from '../components/edit-page'
import { HeaderDog } from '../components/edit-page/HeaderDog'
import { LinkedDocuments } from '../components/edit-page/linked-documets/LinkedDocuments'
import { PrincipalLaw } from '../components/edit-page/principal-law/PrincipalLaw'
import { XIcon } from '@heroicons/react/solid'

export default function EditDog() {
    const [modal, setModal] = useState(false)
    const location = useLocation()
    const parser = new DOMParser()
    let selectedText = window.getSelection()
    const htmlCode = parser.parseFromString(location.state.norma.htmlDoc, "text/xml")
    let documentAdditionalData = useFinalDocument(location.state.norma.id).data

    function convertirFecha(fecha) {
        if (fecha) {
            new Date(fecha)
        }
        return fecha
    }

    const leiPrincipal = location.state.norma.id
    const fechaActual = new Date()
    const ano = String(fechaActual.getFullYear())
    const version = String(fechaActual.getFullYear()) + String(fechaActual.getMonth() + 1).padStart(2, "0") + String(fechaActual.getDate()).padStart(2, "0")
    const [titulo, setTitulo] = useState('')
    const [sumario, setSumario] = useState('')
    const [publicador, setPublicador] = useState('')
    const [dpub, setDpub] = useState('')
    const [refpub, setRefpub] = useState('')
    const [referencia, setReferencia] = useState('')
    const [fechaDog, setFechaDog] = useState('')
    const [dvl_desde, setDvl_desde] = useState('')
    const [estadoSeleccionado, setEstadoSeleccionado] = useState('')
    const [nomfic, setNomFic] = useState('')
    const [colectivoSeleccionado, setColectivoSeleccionado] = useState('')
    const [organismoSeleccionado, setOrganismoSeleccionado] = useState('')
    const [rangoSeleccionado, setRangoSeleccionado] = useState('')
    const [seccionSeleccionada, setSeccionSeleccionada] = useState('')
    const [tematicaSeleccionada, setTematicaSeleccionada] = useState('')
    const [numDog, setNumDog] = useState('')
    const [parrafoACambiar, setParrafoACambiar] = useState('')
    const [parrafoCambiado, setParrafoCambiado] = useState('')
    const [mostrarInput, setMostrarInput] = useState(false)
    const [mostrarInputNota, setMostrarInputNota] = useState(false)
    const [cambios, setCambios] = useState([])
    const [leisVinculadas, setLeisVinculadas] = useState([])
    const [notas, setNotas] = useState([])
    const [leiSeleccionada, setLeiSeleccionada] = useState(0)
    const [cambiosVinculadas, setCambiosVinculadas] = useState([])
    const [opacity, setOpacity] = useState('opacity-100')
    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 })
    const [show, setShow] = useState(false)
    const [claseLeftSide, setClaseLeftSide] = useState('z-0 w-7/12 ml-2 screen-min5:w-5/6')
    const [parrafosAModificar, setParrafosAModificar] = useState([])
    const [cambiosLocales, setCambiosLocales] = useState(false)

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
            if (documentAdditionalData.headerItems) {
                let mesesRegex = "("
                listadoMeses.forEach(mes => mesesRegex += mes.name + "|")
                mesesRegex = mesesRegex.substring(0, mesesRegex.length - 1)
                mesesRegex += ")"
                const tituloRegex = new RegExp("Orde do [0-9]{1,2} de " + mesesRegex + " de [0-9]{4}", "gi")
                let resultado = (documentAdditionalData.headerItems.sumario).match(tituloRegex)
                if (resultado !== null && resultado?.length !== 0) {
                    setTitulo(resultado[0])
                }
                setSumario(documentAdditionalData.headerItems.sumario)
                setPublicador(documentAdditionalData.headerItems.publicador)
                setFechaDog(documentAdditionalData.headerItems.fechaDog)
                setNumDog(documentAdditionalData.headerItems.numDog)
                setDpub(convertirFecha(documentAdditionalData.headerItems.dpub))
                setRefpub(documentAdditionalData.headerItems.refpub)
                setReferencia(documentAdditionalData.headerItems.referencia)
                setDvl_desde(convertirFecha(documentAdditionalData.headerItems.dvl_desde))
                setEstadoSeleccionado(documentAdditionalData.headerItems.estadoSeleccionado)
                setNomFic(documentAdditionalData.headerItems.nomfic)
                if (documentAdditionalData.headerItems.colectivoSeleccionado) {
                    setColectivoSeleccionado(documentAdditionalData.headerItems.colectivoSeleccionado)
                }
                if (documentAdditionalData.headerItems.organismoSeleccionado) {
                    setOrganismoSeleccionado(documentAdditionalData.headerItems.organismoSeleccionado)
                }
                if (documentAdditionalData.headerItems.rangoSeleccionado) {
                    setRangoSeleccionado(documentAdditionalData.headerItems.rangoSeleccionado)
                }
                if (documentAdditionalData.headerItems.seccionSeleccionada) {
                    setSeccionSeleccionada(documentAdditionalData.headerItems.seccionSeleccionada)
                }
                if (documentAdditionalData.headerItems.tematicaSeleccionada) {
                    setTematicaSeleccionada(documentAdditionalData.headerItems.tematicaSeleccionada)
                }
            }
            if (documentAdditionalData.linkedChanges && !cambiosLocales) {
                setCambiosVinculadas(documentAdditionalData.linkedChanges)
            }
        }
    }, [documentAdditionalData, htmlCode, location.state, cambiosLocales])

    const updateParrafosAModificar = () => {
        const regex = new RegExp("Artigo [0-9]+", "gi")
        let auxiliar = []
        let resultado = []

        Array.prototype.slice.call(htmlCode.getElementsByClassName('story')[0].children).forEach((parrafo) => {
            if (
                parrafo.innerText.includes('queda redactado como segue') ||
                parrafo.innerText.includes('queda redactado nos seguintes termos') ||
                parrafo.innerText.includes('queda a redacción da seguinte maneira') ||
                parrafo.innerText.includes('queda redactado da seguinte maneira') ||
                parrafo.innerText.includes('queda redactado do seguinte xeito')
            ) {
                resultado = (parrafo.innerText).match(regex)
                if (resultado !== null && resultado?.length !== 0) {
                    resultado.forEach(res => auxiliar.push(res))
                }
            }
        })
        setParrafosAModificar(auxiliar)
        setModal(true)
    }

    return <div className='flex flex-col ml-20 items-center w-full screen-min3:ml-20 z-0'>
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
        <NoteEditor
            mostrarInputNota={mostrarInputNota}
            setMostrarInputNota={setMostrarInputNota}
            notas={notas}
            setNotas={setNotas}
            setOpacity={setOpacity}
        />
        <div className={'w-full ' + opacity}>
            {
                htmlCode
                    ?
                    <>
                        <HeaderDog
                            titulo={titulo} setTitulo={setTitulo}
                            sumario={sumario} setSumario={setSumario}
                            dpub={dpub} setDpub={setDpub}
                            refpub={refpub} setRefpub={setRefpub}
                            ano={ano} version={version}
                            referencia={referencia} setReferencia={setReferencia}
                            fechaDog={fechaDog}
                            dvl_desde={dvl_desde} setDvl_desde={setDvl_desde}
                            nomfic={nomfic} setNomFic={setNomFic}
                            estadoSeleccionado={estadoSeleccionado} setEstadoSeleccionado={setEstadoSeleccionado}
                            colectivoSeleccionado={colectivoSeleccionado} setColectivoSeleccionado={setColectivoSeleccionado}
                            organismoSeleccionado={organismoSeleccionado} setOrganismoSeleccionado={setOrganismoSeleccionado}
                            rangoSeleccionado={rangoSeleccionado} setRangoSeleccionado={setRangoSeleccionado}
                            seccionSeleccionada={seccionSeleccionada} setSeccionSeleccionada={setSeccionSeleccionada}
                            tematicaSeleccionada={tematicaSeleccionada} setTematicaSeleccionada={setTematicaSeleccionada}
                            numDog={numDog}
                        />
                        {
                            !modal
                                ?
                                <main className='z-0 w-full mt-6 flex screen-min5:flex-col screen-min3:w-11/12 screen-min1:9/12 mb-24'>
                                    <LeftSideDog
                                        data={htmlCode}
                                        cambios={cambios}
                                        setParrafoACambiar={setParrafoACambiar}
                                        setParrafoCambiado={setParrafoCambiado}
                                        setMostrarInput={setMostrarInput}
                                        setOpacity={setOpacity}
                                        setAnchorPoint={setAnchorPoint}
                                        show={show} setShow={setShow}
                                        claseLeftSide={claseLeftSide}
                                    />
                                    <RightSideDog
                                        updateParrafosAModificar={updateParrafosAModificar}
                                        data={htmlCode}
                                        cambios={cambios} setCambios={setCambios}
                                        claseLeftSide={claseLeftSide} setClaseLeftSide={setClaseLeftSide}
                                        notas={notas} setNotas={setNotas}
                                        leisVinculadas={leisVinculadas} setLeisVinculadas={setLeisVinculadas}
                                        setLeiSeleccionada={setLeiSeleccionada}
                                    />
                                </main>
                                :
                                <main className='z-0 w-full mt-6 flex mb-24'>
                                    <div className='opacity-40 w-full mt-6 flex screen-min5:flex-col screen-min3:w-11/12 screen-min1:9/12 mb-24'>
                                        <LeftSideDog
                                            data={htmlCode}
                                            cambios={cambios}
                                            setParrafoACambiar={setParrafoACambiar}
                                            setParrafoCambiado={setParrafoCambiado}
                                            setMostrarInput={setMostrarInput}
                                            setOpacity={setOpacity}
                                            setAnchorPoint={setAnchorPoint}
                                            show={show} setShow={setShow}
                                            claseLeftSide={claseLeftSide}
                                        />
                                        <RightSideDog
                                            updateParrafosAModificar={updateParrafosAModificar}
                                            data={htmlCode}
                                            cambios={cambios} setCambios={setCambios}
                                            claseLeftSide={claseLeftSide} setClaseLeftSide={setClaseLeftSide}
                                            notas={notas} setNotas={setNotas}
                                            leisVinculadas={leisVinculadas} setLeisVinculadas={setLeisVinculadas}
                                            setLeiSeleccionada={setLeiSeleccionada}
                                        />
                                    </div>
                                    <div className='flex flex-col h-5/6 bg-white p-8 shadow-lg border-4 fixed top-16 left-28 w-11/12 overflow-y-scroll'>
                                        <XIcon className='fixed self-end h-5 cursor-pointer border border-black' onClick={() => { setModal(false) }} />
                                        <div className='flex'>
                                            <PrincipalLaw
                                                leiPrincipal={leiPrincipal}
                                                data={htmlCode}
                                            />
                                            <LinkedDocuments
                                                parrafosAModificar={parrafosAModificar}
                                                leiPrincipal={leiPrincipal}
                                                leiSeleccionada={leiSeleccionada} setLeiSeleccionada={setLeiSeleccionada}
                                                cambiosVinculadas={cambiosVinculadas} setCambiosVinculadas={setCambiosVinculadas}
                                                cambiosLocales={cambiosLocales} setCambiosLocales={setCambiosLocales}
                                            />
                                        </div>
                                    </div>
                                </main>
                        }
                    </>
                    :
                    <></>
            }

            <PrincipalButtons
                idDb={location.state.norma.id}
                enlace={location.state.norma.urlDog}
                notas={notas}
                cambios={cambios}
                leyes={leisVinculadas}
                cambiosVinculadas={cambiosVinculadas}
                sumario={sumario}
                publicador={publicador}
                dpub={dpub}
                refpub={refpub}
                ano={ano}
                version={version}
                referencia={referencia}
                fechaDog={fechaDog}
                dvl_desde={dvl_desde}
                nomfic={nomfic}
                estadoSeleccionado={estadoSeleccionado}
                colectivoSeleccionado={colectivoSeleccionado}
                organismoSeleccionado={organismoSeleccionado}
                rangoSeleccionado={rangoSeleccionado}
                seccionSeleccionada={seccionSeleccionada}
                tematicaSeleccionada={tematicaSeleccionada}
                numDog={numDog}
            />
        </div>

        <ContextMenu
            show={show}
            anchorPoint={anchorPoint}
            selectedText={selectedText.toString()}
            setOpacity={setOpacity}
            setMostrarInput={setMostrarInput}
            setMostrarInputNota={setMostrarInputNota}
        />
    </div>
}