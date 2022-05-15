import { React, useState } from 'react'

import colectivos from "../../data/listadoColectivos.json"
import organismos from "../../data/listadoOrganismos.json"
import rangos from "../../data/listadoRangos.json"
import secciones from "../../data/listadoSecciones.json"
import tematicas from "../../data/listadoTematicas.json"

import { Input } from "../Input"
import { Textarea } from "../Textarea"
import { Select } from "../Select"
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@heroicons/react/solid'

export const HeaderXml = ({ data }) => {
    const [mostrar, setMostrar] = useState(false)
    const estados = [
        { id: 1, descripcion: 'En vigor' },
        { id: 2, descripcion: 'Derrogada' }
    ]

    function convertirFecha(fecha) {
        fecha = fecha.split('/')
        fecha = fecha[2] + '-' + fecha[1] + '-' + fecha[0]
        return fecha
    }

    const [titulo, setTitulo] = useState(data.tit_curto._text)
    const [sumario, setSumario] = useState(data.titulo._text)
    const [dpub, setDpub] = useState(convertirFecha(data.dpub._text))
    const [refpub, setRefpub] = useState(data.refpub._text)
    const [ano, setAno] = useState(data.id._attributes.ano)
    const [version, setVersion] = useState(data.id._attributes.version)
    const [referencia, setReferencia] = useState(data.id._attributes.ref)
    const [dvl_desde, setDvl_desde] = useState(convertirFecha(data.dvl_desde._text))
    const [estadoSeleccionado, setEstadoSeleccionado] = useState(data.estado._attributes.estado)
    const [nomfic, setNomFic] = useState(data.nomfic._text)
    const [colectivoSeleccionado, setColectivoSeleccionado] = useState('')
    const [organismoSeleccionado, setOrganismoSeleccionado] = useState('')
    const [rangoSeleccionado, setRangoSeleccionado] = useState('')
    const [seccionSeleccionada, setSeccionSeleccionada] = useState('')
    const [tematicaSeleccionada, setTematicaSeleccionada] = useState('')

    return <section className='z-0 w-full font-medium mt-5 pr-10 flex flex-col px-2 screen-min5:w-11/12 screen-min1:w-9/12'>
        {
            !mostrar
                ?
                <div className='flex w-80 p-1 bg-blue-lex-gal text-center items-center'>
                    <span className='text-white ml-4 text-2xl py-3'>Datos de cabeceira</span>
                    <ChevronDoubleDownIcon onClick={() => setMostrar(!mostrar)} className="flex-1 h-8 w-8 text-white cursor-pointer" aria-hidden="true" />
                </div>
                :
                <div>
                    <div className='flex w-80 p-1 bg-blue-lex-gal text-center items-center'>
                        <span className='text-white ml-4 text-2xl py-3'>Datos de cabeceira</span>
                        <ChevronDoubleUpIcon onClick={() => setMostrar(!mostrar)} className="flex-1 h-8 w-8 text-white cursor-pointer" aria-hidden="true" />
                    </div>
                    <div className='flex flex-row bg-blue-lex-gal font-semibold italic screen-min1:flex-col'>
                        <div className='w-1/2 screen-min1:w-full'>
                            <Input valor={titulo} setValor={setTitulo} texto="Título" tipo="text" placeholder="Título da norma..." disabled={true} />
                            <Textarea valor={sumario} setValor={setSumario} texto="Sumario" placeholder="Escriba o sumario da norma..." disabled={true} opacity="opacity-70" />
                            <Input valor={dpub} setValor={setDpub} texto="Data de publicación" tipo="date" disabled={true} />
                            <Input valor={refpub} setValor={setRefpub} texto="Referencia da publicación" tipo="text" placeholder="Referencia de publicación..." disabled={true} />
                            <Input valor={ano} setValor={setAno} texto="Ano" tipo="text" placeholder="Ano..." disabled={true} />
                            <Input valor={version} setValor={setVersion} texto="Versión" tipo="text" placeholder="Versión da norma..." disabled={true} />
                            <Input valor={referencia} setValor={setReferencia} texto="Referencia" tipo="text" placeholder="Referencia da norma..." disabled={true} />
                        </div>
                        <div className='w-1/2 screen-min1:w-full'>
                            <Input valor={dvl_desde} setValor={setDvl_desde} texto="Data de entrada en vigor" tipo="date" disabled={true} />
                            <Select texto="Estado" elements={estados} element={estadoSeleccionado} setElements={setEstadoSeleccionado} opcion="-- Seleccione unha opción --" disabled={true} />
                            <Input valor={nomfic} setValor={setNomFic} texto="Nome ficheiro" tipo="text" placeholder="Ej: ficheiro.pdf" disabled={true} />
                            <Select texto="Colectivo" firstOption={false} elements={colectivos} element={colectivoSeleccionado} setElements={setColectivoSeleccionado} opcion="-- Seleccione unha opción --" />
                            <Select texto="Organización" firstOption={false} elements={organismos} element={organismoSeleccionado} setElements={setOrganismoSeleccionado} opcion="-- Seleccione unha opción --" />
                            <Select texto="Rango" firstOption={false} elements={rangos} element={rangoSeleccionado} setElements={setRangoSeleccionado} opcion="-- Seleccione unha opción --" />
                            <Select texto="Sección" firstOption={false} elements={secciones} element={seccionSeleccionada} setElements={setSeccionSeleccionada} opcion="-- Seleccione unha opción --" />
                            <Select texto="Área temática" firstOption={false} elements={tematicas} element={tematicaSeleccionada} setElements={setTematicaSeleccionada} opcion="-- Seleccione unha opción --" />
                        </div>
                    </div>
                </div>
        }
    </section >
}