import { React, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Switch } from '@headlessui/react'

import { useDogDocument, useFinalDocument } from '../hooks'
import { LeftSideDog, ParagraphEditor, PrincipalButtons, RightSideDog } from '../components/edit-page'
import { ContextMenu } from '../components/edit-page'
import { HeaderDog } from '../components/edit-page/HeaderDog'

export default function EditDog() {
    const location = useLocation()
    let selectedText = window.getSelection()
    const htmlCode = useDogDocument(`https://www.xunta.gal/${location.state.norma.rutaHtml}`)
    let documentAdditionalData = useFinalDocument(location.state.norma.id).data

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
    const [cambios, setCambios] = useState([])
    const [leisVinculadas, setLeisVinculadas] = useState([])
    const [notas, setNotas] = useState([])
    const [opacity, setOpacity] = useState('opacity-100')
    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 })
    const [show, setShow] = useState(false)
    const [claseLeftSide, setClaseLeftSide] = useState('z-0 w-7/12 ml-2 screen-min5:w-5/6')
    const [enabled, setEnabled] = useState(false)

    useEffect(() => {
        if (htmlCode) {
            setTitulo(htmlCode.getElementsByClassName('dog-texto-seccion')[0].innerText)
        }
        if (location.state) {
            setSumario(location.state.norma.sumario)
            setColectivoSeleccionado(location.state.norma.taxcolectivo)
            setOrganismoSeleccionado(location.state.norma.taxorganizativa)
            setRangoSeleccionado(location.state.norma.idTipo)
            setSeccionSeleccionada(location.state.norma.idSeccion)
            setFechaDog(location.state.norma.fechaDogFormateada)
            setNumDog(location.state.norma.numeroDog)
        }
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
        }
    }, [documentAdditionalData, htmlCode, location.state])

    return <div className='flex flex-col ml-20 items-center w-full screen-min3:ml-20 z-0'>
        <div className='w-full flex justify-end pr-10 fixed z-10 mt-5 mr-20'>
            <div className='bg-white p-2 shadow-lg'>
                <div className='flex bg-black text-white py-4 px-4 items-center'>
                    <span className='mr-2 text-lg font-semibold'>Modo de edición de leis vinculadas</span>
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${enabled ? 'bg-blue-lex-gal' : 'bg-gray-200'
                            } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                        <span
                            className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transform transition ease-in-out duration-200`}
                        />
                    </Switch>
                </div>
            </div>
        </div>
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
                            enabled
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
                                        enabled={enabled} setEnabled={setEnabled}
                                    />
                                    <RightSideDog
                                        data={htmlCode}
                                        cambios={cambios}
                                        setCambios={setCambios}
                                        claseLeftSide={claseLeftSide} setClaseLeftSide={setClaseLeftSide}
                                        notas={notas} setNotas={setNotas}
                                        leisVinculadas={leisVinculadas} setLeisVinculadas={setLeisVinculadas}
                                    />
                                </main>
                                :
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
                        }
                    </>
                    :
                    <></>
            }

            <PrincipalButtons
                idDb={location.state.norma.id}
                enlace={'https://www.xunta.gal' + location.state.norma.rutaHtml}
                notas={notas}
                cambios={cambios}
                leyes={leisVinculadas}
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
        />
    </div>
}