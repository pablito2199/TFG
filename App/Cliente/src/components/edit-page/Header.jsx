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

export const Header = ({ titulo, setTitulo, sumario, setSumario, dpub, setDpub, refpub, setRefpub, ano, version, referencia, setReferencia, fechaDog, dvl_desde, setDvl_desde, estadoSeleccionado, setEstadoSeleccionado, nomfic, setNomFic, colectivoSeleccionado, setColectivoSeleccionado, organismoSeleccionado, setOrganismoSeleccionado, rangoSeleccionado, setRangoSeleccionado, seccionSeleccionada, setSeccionSeleccionada, tematicaSeleccionada, setTematicaSeleccionada, numDog }) => {
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
                            <Input valor={titulo} setValor={setTitulo} texto="T??tulo" tipo="text" placeholder="T??tulo da norma..." disabled={true} opacity="opacity-75" />
                            <Textarea valor={sumario} setValor={setSumario} texto="Sumario" placeholder="Escriba o sumario da norma..." disabled={true} opacity="opacity-70" />
                            <Input valor={dpub} setValor={setDpub} texto="Data de publicaci??n" tipo="date" />
                            <Input valor={refpub} setValor={setRefpub} texto="Referencia da publicaci??n" tipo="text" placeholder="Referencia de publicaci??n..." />
                            <Input valor={ano} texto="Ano" tipo="text" placeholder="Ano..." disabled={true} opacity="opacity-75" />
                            <Input valor={version} texto="Versi??n" tipo="text" placeholder="Versi??n da norma..." disabled={true} opacity="opacity-75" />
                            <Input valor={referencia} setValor={setReferencia} texto="Referencia" tipo="text" placeholder="Referencia da norma..." />
                            <Input valor={fechaDog} texto="Data do DOG" tipo="text" placeholder="Data do DOG..." disabled={true} opacity="opacity-70" />
                        </div>
                        <div className='w-1/2 screen-min1:w-full'>
                            <Input valor={dvl_desde} setValor={setDvl_desde} texto="Data de entrada en vigor" tipo="date" />
                            <Select texto="Estado" elements={estados} element={estadoSeleccionado} setElements={setEstadoSeleccionado} opcion="-- Seleccione unha opci??n --" />
                            <Input valor={nomfic} setValor={setNomFic} texto="Nome ficheiro" tipo="text" placeholder="Ej: ficheiro.pdf" />
                            <Select texto="Colectivo" firstOption={false} elements={colectivos} element={colectivoSeleccionado} setElements={setColectivoSeleccionado} opcion="-- Seleccione unha opci??n --" />
                            <Select texto="Organizaci??n" firstOption={false} elements={organismos} element={organismoSeleccionado} setElements={setOrganismoSeleccionado} opcion="-- Seleccione unha opci??n --" />
                            <Select texto="Rango" firstOption={false} elements={rangos} element={rangoSeleccionado} setElements={setRangoSeleccionado} opcion="-- Seleccione unha opci??n --" />
                            <Select texto="Secci??n" firstOption={false} elements={secciones} element={seccionSeleccionada} setElements={setSeccionSeleccionada} opcion="-- Seleccione unha opci??n --" />
                            <Select texto="??rea tem??tica" firstOption={false} elements={tematicas} element={tematicaSeleccionada} setElements={setTematicaSeleccionada} opcion="-- Seleccione unha opci??n --" />
                            <Input valor={numDog} texto="N??mero do DOG" tipo="text" placeholder="N??mero do DOG..." disabled={true} opacity="opacity-70" />
                        </div>
                    </div>
                </div>
        }
    </section >
}