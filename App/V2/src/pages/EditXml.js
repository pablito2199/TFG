import { React, useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'

import { useXmlDocument, useFinalDocument } from '../hooks'
import { HeaderXml, LeftSideXml, ParagraphEditor, PrincipalButtons, RightSideXml } from '../components/edit-page'
import { ContextMenu } from '../components/edit-page'
import { useParams } from 'react-router-dom'
import { LinkedDocuments } from '../components/edit-page/linked-documets/LinkedDocuments'
import { PrincipalLawXml } from '../components/edit-page/principal-law/PrincipalLawXml'

export default function EditXml() {
    const id = useParams().id
    let selectedText = window.getSelection()
    const data = useXmlDocument(id)
    let documentAdditionalData = useFinalDocument("norma.xml").data

    function convertirFecha(fecha) {
        if (fecha) {
            new Date(fecha)
        }
        return fecha
    }

    function convertirFechaTipoDate(fecha) {
        fecha = fecha.split('/')
        fecha = fecha[2] + '-' + fecha[1] + '-' + fecha[0]
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
    const [leiSeleccionada, setLeiSeleccionada] = useState(0)
    const [cambiosVinculadas, setCambiosVinculadas] = useState([])
    const [opacity, setOpacity] = useState('opacity-100')
    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 })
    const [show, setShow] = useState(false)
    const [claseLeftSide, setClaseLeftSide] = useState('z-0 w-7/12 ml-2 screen-min5:w-5/6')
    const [enabled, setEnabled] = useState(false)

    useEffect(() => {
        if (data.cab) {
            setTitulo(data.cab.tit_curto._text)
            setSumario(data.cab.titulo._text)
            setDpub(convertirFechaTipoDate(data.cab.dpub._text))
            setRefpub(data.cab.refpub._text)
            setReferencia(data.cab.id._attributes.ref)
            setDvl_desde(convertirFechaTipoDate(data.cab.dvl_desde._text))
            setEstadoSeleccionado(data.cab.estado._attributes.estado)
            setNomFic(data.cab.nomfic._text)
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
                setFechaDog(documentAdditionalData.headerItems.fechaDog)
                setNumDog(documentAdditionalData.headerItems.numDog)
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
            if (documentAdditionalData.linkedChanges) {
                setCambiosVinculadas(documentAdditionalData.linkedChanges)
            }
        }
        if (enabled) {
            setClaseLeftSide('z-0 w-1/2 ml-2 screen-min1:w-11/12')
        } else {
            setClaseLeftSide('z-0 w-7/12 ml-2 screen-min5:w-5/6')
        }
    }, [data, documentAdditionalData, enabled])

    return <div className='flex flex-col ml-20 items-center w-full screen-min3:ml-20'>
        <div className='flex pr-10 fixed z-10 mt-5 right-0'>
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
                data?.cab !== undefined
                    ?
                    <HeaderXml
                        titulo={titulo} setTitulo={setTitulo}
                        sumario={sumario} setSumario={setSumario}
                        dpub={dpub} setDpub={setDpub}
                        refpub={refpub} setRefpub={setRefpub}
                        ano={ano} version={version}
                        referencia={referencia} setReferencia={setReferencia}
                        fechaDog={fechaDog} setFechaDog={setFechaDog}
                        dvl_desde={dvl_desde} setDvl_desde={setDvl_desde}
                        nomfic={nomfic} setNomFic={setNomFic}
                        estadoSeleccionado={estadoSeleccionado} setEstadoSeleccionado={setEstadoSeleccionado}
                        colectivoSeleccionado={colectivoSeleccionado} setColectivoSeleccionado={setColectivoSeleccionado}
                        organismoSeleccionado={organismoSeleccionado} setOrganismoSeleccionado={setOrganismoSeleccionado}
                        rangoSeleccionado={rangoSeleccionado} setRangoSeleccionado={setRangoSeleccionado}
                        seccionSeleccionada={seccionSeleccionada} setSeccionSeleccionada={setSeccionSeleccionada}
                        tematicaSeleccionada={tematicaSeleccionada} setTematicaSeleccionada={setTematicaSeleccionada}
                        numDog={numDog} setNumDog={setNumDog}
                    />
                    :
                    <></>
            }

            {
                data?.corpo !== undefined
                    ?
                    <main className='z-0 w-full mt-6 flex screen-min5:flex-col screen-min3:w-11/12 screen-min1:9/12 mb-24'>
                        {
                            !enabled
                                ?
                                <>
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
                                        setEnabled={setEnabled}
                                        setLeiSeleccionada={setLeiSeleccionada}
                                    />
                                </>
                                :
                                <main className='z-0 w-full mt-6 flex screen-min1:flex-col mb-24'>
                                    <LinkedDocuments
                                        claseLeftSide={claseLeftSide}
                                        leiSeleccionada={leiSeleccionada} setLeiSeleccionada={setLeiSeleccionada}
                                        cambiosVinculadas={cambiosVinculadas} setCambiosVinculadas={setCambiosVinculadas}
                                    />
                                    <PrincipalLawXml data={data.corpo} />
                                </main>
                        }
                    </main>
                    :
                    <></>
            }

            <PrincipalButtons
                idDb={id}
                enlace={'https://www.xunta.gal/dog/Publicados/excepcional/2022/20220325/2925/AnuncioC3K1-240322-2_gl.html'}
                notas={notas}
                cambios={cambios}
                leyes={leisVinculadas}
                cambiosVinculadas={cambiosVinculadas}
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