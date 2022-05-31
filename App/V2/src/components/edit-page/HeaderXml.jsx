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

export const HeaderXml = ({ titulo, setTitulo, sumario, setSumario, dpub, setDpub, refpub, setRefpub, ano, version, referencia, setReferencia, fechaDog, setFechaDog, dvl_desde, setDvl_desde, estadoSeleccionado, setEstadoSeleccionado, nomfic, setNomFic, colectivoSeleccionado, setColectivoSeleccionado, organismoSeleccionado, setOrganismoSeleccionado, rangoSeleccionado, setRangoSeleccionado, seccionSeleccionada, setSeccionSeleccionada, tematicaSeleccionada, setTematicaSeleccionada, numDog, setNumDog }) => {
    const [mostrar, setMostrar] = useState(false)
    const estados = [
        { id: 1, descripcion: 'En vigor' },
        { id: 2, descripcion: 'Derrogada' }
    ]

    return <section className='z-0 w-full font-medium mt-5 pr-10 flex flex-col px-2 screen-min5:w-11/12 screen-min1:w-9/12'>
        {
            !mostrar
                ?
                <div className='flex w-80 p-1 py-4 bg-blue-lex-gal text-center items-center'>
                    <span className='text-white ml-4 text-2xl py-3'>Datos de cabeceira</span>
                    <ChevronDoubleDownIcon onClick={() => setMostrar(!mostrar)} className="flex-1 h-8 w-8 text-white cursor-pointer" aria-hidden="true" />
                </div>
                :
                <div>
                    <div className='flex w-80 p-1 py-4 bg-blue-lex-gal text-center items-center'>
                        <span className='text-white ml-4 text-2xl py-3'>Datos de cabeceira</span>
                        <ChevronDoubleUpIcon onClick={() => setMostrar(!mostrar)} className="flex-1 h-8 w-8 text-white cursor-pointer" aria-hidden="true" />
                    </div>
                    <div className='flex flex-row bg-blue-lex-gal font-semibold italic screen-min1:flex-col'>
                        <div className='w-1/2 screen-min1:w-full'>
                            <Input valor={titulo} setValor={setTitulo} texto="Título" tipo="text" placeholder="Título da norma..." disabled={true} opacity="opacity-70" />
                            <Textarea valor={sumario} setValor={setSumario} texto="Sumario" placeholder="Escriba o sumario da norma..." disabled={true} opacity="opacity-70" />
                            <Input valor={dpub} setValor={setDpub} texto="Data de publicación" tipo="date" disabled={true} opacity="opacity-70" />
                            <Input valor={refpub} setValor={setRefpub} texto="Referencia da publicación" tipo="text" placeholder="Referencia de publicación..." disabled={true} opacity="opacity-70" />
                            <Input valor={ano} texto="Ano" tipo="text" placeholder="Ano..." disabled={true} opacity="opacity-70" />
                            <Input valor={version} texto="Versión" tipo="text" placeholder="Versión da norma..." disabled={true} opacity="opacity-70" />
                            <Input valor={referencia} setValor={setReferencia} texto="Referencia" tipo="text" placeholder="Referencia da norma..." disabled={true} opacity="opacity-70" />
                            <Input valor={fechaDog} setValor={setFechaDog} texto="Data do DOG" tipo="date" placeholder="Data do DOG..." />
                        </div>
                        <div className='w-1/2 screen-min1:w-full'>
                            <Input valor={dvl_desde} setValor={setDvl_desde} texto="Data de entrada en vigor" tipo="date" />
                            <Select texto="Estado" elements={estados} element={estadoSeleccionado} setElements={setEstadoSeleccionado} opcion="-- Seleccione unha opción --" />
                            <Input valor={nomfic} setValor={setNomFic} texto="Nome ficheiro" tipo="text" placeholder="Ej: ficheiro.pdf" disabled={true} opacity="opacity-70" />
                            <Select texto="Colectivo" firstOption={false} elements={colectivos} element={colectivoSeleccionado} setElements={setColectivoSeleccionado} opcion="-- Seleccione unha opción --" />
                            <Select texto="Organización" firstOption={false} elements={organismos} element={organismoSeleccionado} setElements={setOrganismoSeleccionado} opcion="-- Seleccione unha opción --" />
                            <Select texto="Rango" firstOption={false} elements={rangos} element={rangoSeleccionado} setElements={setRangoSeleccionado} opcion="-- Seleccione unha opción --" />
                            <Select texto="Sección" firstOption={false} elements={secciones} element={seccionSeleccionada} setElements={setSeccionSeleccionada} opcion="-- Seleccione unha opción --" />
                            <Select texto="Área temática" firstOption={false} elements={tematicas} element={tematicaSeleccionada} setElements={setTematicaSeleccionada} opcion="-- Seleccione unha opción --" />
                            <Input valor={numDog} setValor={setNumDog} texto="Número do DOG" tipo="number" placeholder="Número do DOG..." min="1" />
                        </div>
                    </div>
                </div>
        }
    </section >
}