import { React, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

import listadoMeses from '../data/listadoMeses.json'
import listadoRangos from '../data/listadoRangos.json'

import { useFinalDocument } from '../hooks'
import { LeftSide, NoteEditor, ParagraphEditor, PrincipalButtons, RightSide } from '../components/edit-page'
import { ContextMenu } from '../components/edit-page'
import { Header } from '../components/edit-page/Header'
import { LinkedDocuments } from '../components/edit-page/linked-documets/LinkedDocuments'
import { PrincipalLaw } from '../components/edit-page/principal-law/PrincipalLaw'
import { XIcon } from '@heroicons/react/solid'

export default function Edit() {
    const content = useRef(null)
    const contentVinculada = useRef(null)
    const [modal, setModal] = useState(false)
    const { state } = useLocation()
    let selectedText = window.getSelection()
    const [htmlCode, setHtmlCode] = useState('')
    const [newHtmlCode, setNewHtmlCode] = useState('')
    const { data } = useFinalDocument(state.norma.sumario, 1)

    function convertirFecha(fecha) {
        if (fecha) {
            new Date(fecha)
        }
        return fecha
    }

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
    const [leiSeleccionada, setLeiSeleccionada] = useState('')
    const [cambiosVinculadas, setCambiosVinculadas] = useState([])
    const [opacity, setOpacity] = useState('opacity-100')
    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 })
    const [show, setShow] = useState(false)
    const [claseLeftSide, setClaseLeftSide] = useState('z-0 w-7/12 ml-2 screen-min5:w-5/6')
    const [parrafosAModificar, setParrafosAModificar] = useState([])
    const [cambiosLocales, setCambiosLocales] = useState(false)
    const [posicionParrafo, setPosicionParrafo] = useState(0)
    const [leiModificada, setLeiModificada] = useState('')

    useEffect(() => {
        if (data) {
            if (data.newHtmlDoc) {
                setNewHtmlCode(new DOMParser().parseFromString(data.newHtmlDoc, "text/xml"))
            }
            if (data.htmlDoc) {
                setHtmlCode(new DOMParser().parseFromString(data.htmlDoc, "text/xml"))
            }
            if (data.changes && !cambiosLocales) {
                setCambios(data.changes)
            }
            if (data.laws && !cambiosLocales) {
                setLeisVinculadas(data.laws)
            }
            if (data.notes && !cambiosLocales) {
                setNotas(data.notes)
            }
            if (data.headerItems) {
                let mesesRegex = "("
                listadoMeses.forEach(mes => mesesRegex += mes.name + "|")
                mesesRegex = mesesRegex.substring(0, mesesRegex.length - 1)
                mesesRegex += ")"
                const tituloRegex = new RegExp("Orde do [0-9]{1,2} de " + mesesRegex + " de [0-9]{4}", "gi")
                let resultado = (data.sumario).match(tituloRegex)
                if (resultado !== null && resultado?.length !== 0) {
                    setTitulo(resultado[0])
                }
                setSumario(data.sumario)
                setPublicador(data.headerItems.publicador)
                setFechaDog(data.headerItems.fechaDog)
                setNumDog(data.headerItems.numDog)
                setDpub(convertirFecha(data.headerItems.dpub))
                setRefpub(data.headerItems.refpub)
                setReferencia(data.headerItems.referencia)
                setDvl_desde(convertirFecha(data.headerItems.dvl_desde))
                setEstadoSeleccionado(data.headerItems.estadoSeleccionado)
                setNomFic(data.headerItems.nomfic)
                if (data.headerItems.colectivoSeleccionado) {
                    setColectivoSeleccionado(data.headerItems.colectivoSeleccionado)
                }
                if (data.headerItems.organismoSeleccionado) {
                    setOrganismoSeleccionado(data.headerItems.organismoSeleccionado)
                }
                if (data.headerItems.rangoSeleccionado) {
                    setRangoSeleccionado(data.headerItems.rangoSeleccionado)
                }
                if (data.headerItems.seccionSeleccionada) {
                    setSeccionSeleccionada(data.headerItems.seccionSeleccionada)
                }
                if (data.headerItems.tematicaSeleccionada) {
                    setTematicaSeleccionada(data.headerItems.tematicaSeleccionada)
                }
            }
            if (data.linkedChanges && !cambiosLocales) {
                setCambiosVinculadas(data.linkedChanges)
            }
        }

        let resultado = []
        let resultado2 = []
        let mesesRegex = "("
        listadoMeses.forEach(mes => mesesRegex += mes.name + "|")
        mesesRegex = mesesRegex.substring(0, mesesRegex.length - 1)
        mesesRegex += ")"
        let rangosRegex = "("
        listadoRangos.forEach(rango => rangosRegex += rango.descripcion + "|")
        rangosRegex = rangosRegex.substring(0, rangosRegex.length - 1)
        rangosRegex += ")"
        const regex = new RegExp(rangosRegex + " do [0-9]{1,2} de " + mesesRegex + " de [0-9]{4} pola que se modifica a ", "gi")
        const regex2 = new RegExp(rangosRegex + " do [0-9]{1,2} de " + mesesRegex + " de [0-9]{4} pola que se modifica parcialmente a ", "gi")
        resultado = (sumario).match(regex)
        resultado2 = (sumario).match(regex2)
        if (resultado) {
            setLeiModificada(sumario.replace(resultado[0], '').replace('Orde', 'ORDE'))
        } else if (resultado2) {
            setLeiModificada(sumario.replace(resultado2[0], '').replace('Orde', 'ORDE'))
        }
    }, [data, state, cambiosLocales, sumario])

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
            mostrarInput={mostrarInput} setMostrarInput={setMostrarInput}
            parrafoCambiado={parrafoCambiado} setParrafoCambiado={setParrafoCambiado}
            parrafoACambiar={parrafoACambiar} setParrafoACambiar={setParrafoACambiar}
            cambios={cambios} setCambios={setCambios}
            setOpacity={setOpacity}
            setCambiosLocales={setCambiosLocales}
            posicionParrafo={posicionParrafo}
        />
        <NoteEditor
            mostrarInputNota={mostrarInputNota} setMostrarInputNota={setMostrarInputNota}
            notas={notas} setNotas={setNotas}
            setOpacity={setOpacity}
            setCambiosLocales={setCambiosLocales}
            posicionParrafo={posicionParrafo}
        />
        <div className={'w-full ' + opacity}>
            {
                htmlCode
                    ?
                    <>
                        <Header
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
                                    <LeftSide
                                        id={state.norma.id}
                                        data={htmlCode}
                                        newData={newHtmlCode}
                                        cambios={cambios}
                                        setParrafoACambiar={setParrafoACambiar}
                                        setParrafoCambiado={setParrafoCambiado}
                                        setMostrarInput={setMostrarInput}
                                        setOpacity={setOpacity}
                                        setAnchorPoint={setAnchorPoint}
                                        show={show} setShow={setShow}
                                        claseLeftSide={claseLeftSide}
                                        setPosicionParrafo={setPosicionParrafo}
                                        content={content}
                                        notas={notas}
                                        titulo={titulo}
                                    />
                                    <RightSide
                                        updateParrafosAModificar={updateParrafosAModificar}
                                        data={htmlCode}
                                        cambios={cambios} setCambios={setCambios}
                                        claseLeftSide={claseLeftSide} setClaseLeftSide={setClaseLeftSide}
                                        notas={notas} setNotas={setNotas}
                                        leisVinculadas={leisVinculadas} setLeisVinculadas={setLeisVinculadas}
                                        setLeiSeleccionada={setLeiSeleccionada}
                                        setCambiosLocales={setCambiosLocales}
                                        content={content}
                                        leiModificada={leiModificada}
                                    />
                                </main>
                                :
                                <main className='z-0 w-full mt-6 flex mb-24'>
                                    <div className='opacity-40 w-full mt-6 flex screen-min5:flex-col screen-min3:w-11/12 screen-min1:9/12 mb-24'>
                                        <LeftSide
                                            id={state.norma.id}
                                            data={htmlCode}
                                            cambios={cambios}
                                            setParrafoACambiar={setParrafoACambiar}
                                            setParrafoCambiado={setParrafoCambiado}
                                            setMostrarInput={setMostrarInput}
                                            setOpacity={setOpacity}
                                            setAnchorPoint={setAnchorPoint}
                                            show={show} setShow={setShow}
                                            claseLeftSide={claseLeftSide}
                                            setPosicionParrafo={setPosicionParrafo}
                                            content={content}
                                            notas={notas}
                                        />
                                        <RightSide
                                            updateParrafosAModificar={updateParrafosAModificar}
                                            data={htmlCode}
                                            cambios={cambios} setCambios={setCambios}
                                            claseLeftSide={claseLeftSide} setClaseLeftSide={setClaseLeftSide}
                                            notas={notas} setNotas={setNotas}
                                            leisVinculadas={leisVinculadas} setLeisVinculadas={setLeisVinculadas}
                                            setLeiSeleccionada={setLeiSeleccionada}
                                            content={content}
                                            leiModificada={leiModificada}
                                        />
                                    </div>
                                    <div className='flex flex-col h-5/6 bg-white p-8 shadow-lg border-4 fixed top-16 left-28 w-11/12 overflow-y-scroll'>
                                        <XIcon className='fixed self-end h-5 cursor-pointer border border-black' onClick={() => { setModal(false) }} />
                                        <div className='flex'>
                                            <PrincipalLaw
                                                nome={titulo}
                                                data={htmlCode}
                                                contentVinculada={contentVinculada}
                                            />
                                            <LinkedDocuments
                                                sumario={leiModificada}
                                                parrafosAModificar={parrafosAModificar}
                                                leiSeleccionada={leiSeleccionada} setLeiSeleccionada={setLeiSeleccionada}
                                                cambiosVinculadas={cambiosVinculadas} setCambiosVinculadas={setCambiosVinculadas}
                                                setCambiosLocales={setCambiosLocales}
                                                contentVinculada={contentVinculada}
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
                idDb={state.norma.id}
                htmlDoc={data.htmlDoc}
                newHtmlDoc={new DOMParser().parseFromString(data.newHtmlDoc, "text/xml")}
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
                leiModificada={leiModificada}
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