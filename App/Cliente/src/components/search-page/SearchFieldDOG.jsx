import { React, useState } from "react"

import { Pages } from "../Pagination-DOG"
import { ContentDOG } from "./ContentDOG"

import { SearchButton } from "./SearchButton"
import { SearchFilters } from "./SearchFilters"

export const SearchFieldDOG = () => {
    const token = localStorage.getItem('token') || null

    const [mostrar, setMostrar] = useState(false)
    const [data, setData] = useState('')
    const [texto, setTexto] = useState('')
    const [soloTitulo, setSoloTitulo] = useState(true)
    const [fraseExacta, setFraseExacta] = useState(true)
    const [dogDesde, setDogDesde] = useState(1)
    const [dogHasta, setDogHasta] = useState(100000)
    const [criterioOrdenacion, setCriterioOrdenacion] = useState('ORDENACION_FECHA')
    const [colectivo, setColectivo] = useState('')
    const [organizacion, setOrganizacion] = useState('')
    const [rango, setRango] = useState('')
    const [seccion, setSeccion] = useState('')
    const [tematica, setTematica] = useState('')
    const [actualPage, setActualPage] = useState(1)
    const [textoBuscado, setTextoBuscado] = useState('')

    const cambiarPagina = async (e) => {
        if (e.key === 'Enter') {
            const requestOptions = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            }

            const url = `/xunta?texto=${texto}&soloTitulo=${soloTitulo}&fraseExacta=${fraseExacta}&dogDesde=${dogDesde}&dogHasta=${dogHasta}&criterioOrdenacion=${criterioOrdenacion}&listado_colectivo=${colectivo}&listado_taxorga=${organizacion}&listado_rangos=${rango}&listado_seccion=${seccion}&listado_tematica=${tematica}&pagina=1`
            const response = await fetch(url, requestOptions)
            const jsonData = await response.json()
            setData(jsonData)
            setTextoBuscado(texto)
            setActualPage(1)
            setMostrar(false)
        }
    }

    return <section className='font-medium mt-5 flex flex-col rounded-xl screen-min3:w-10/12 screen-min1:w-9/12'>
        <div className='w-80 p-4 bg-blue-lex-gal text-center'>
            <span className='text-white text-2xl py-3 rounded-xl'>Importar do DOG</span>
        </div>
        <div className='p-6 bg-blue-lex-gal'>
            <span className="font-serif ml-1 text-lg font-semibold italic">Insira o texto da búsqueda...</span>
            <input value={texto} onKeyDown={cambiarPagina} type="search" onChange={(event) => { setTexto(event.target.value) }} className=' mt-1 w-full font-normal text-gray-700 border border-solid border-gray-300 transition ease-in-out py-2 px-2 focus:outline-none focus:border-gray-500' placeholder="Búsqueda de normas..." aria-label="Search" aria-describedby="button-addon2" />
            <SearchFilters
                mostrar={mostrar} setMostrar={setMostrar}
                soloTitulo={soloTitulo} setSoloTitulo={setSoloTitulo}
                fraseExacta={fraseExacta} setFraseExacta={setFraseExacta}
                dogDesde={dogDesde} setDogDesde={setDogDesde}
                dogHasta={dogHasta} setDogHasta={setDogHasta}
                criterioOrdenacion={criterioOrdenacion} setCriterioOrdenacion={setCriterioOrdenacion}
                colectivo={colectivo} setColectivo={setColectivo}
                organizacion={organizacion} setOrganizacion={setOrganizacion}
                rango={rango} setRango={setRango}
                seccion={seccion} setSeccion={setSeccion}
                tematica={tematica} setTematica={setTematica}
            />
            <div className='w-full mt-4 flex gap-4 justify-end'>
                <button onClick={() => setTexto('')} className='px-6 py-2.5 focus:outline-none' type="button" id="button-addon2">
                    <span className="font-semibold">Limpar</span>
                </button>
                <SearchButton
                    setMostrar={setMostrar}
                    setPagina={setActualPage}
                    setTextoBuscado={setTextoBuscado}
                    setData={setData}
                    modal={true}
                    texto={texto}
                    soloTitulo={soloTitulo}
                    fraseExacta={fraseExacta}
                    dogDesde={dogDesde}
                    dogHasta={dogHasta}
                    criterioOrdenacion={criterioOrdenacion}
                    colectivo={colectivo} organizacion={organizacion}
                    rango={rango}
                    seccion={seccion}
                    tematica={tematica}
                />
            </div>
        </div>
        {
            data
                ?
                <div className='flex flex-col items-center w-full screen-min5:ml-10'>
                    {
                        data.response?.listas.datos_informe
                            ?
                            data.response?.listas.datos_informe.length !== 0
                                ?
                                <>
                                    <p className='self-end mt-8 mr-28 text-gray-600 text-lg font-semibold italic'>Atopáronse <span className='text-black font-bold'>{data?.response.resultSize}</span> resultados para <span className='text-blue-green font-bold'>"{textoBuscado}"</span></p>
                                    <Pages initialText={texto} setData={setData} query={`?texto=${texto}&soloTitulo=${soloTitulo}&fraseExacta=${fraseExacta}&dogDesde=${dogDesde}&dogHasta=${dogHasta}&criterioOrdenacion=${criterioOrdenacion}&listado_colectivo=${colectivo}&listado_taxorga=${organizacion}&listado_rangos=${rango}&listado_seccion=${seccion}&listado_tematica=${tematica}&`} actualPage={actualPage} setActualPage={setActualPage} elements={data.response?.resultSize} numberElementsPerPage={8} />
                                    <ContentDOG data={data.response?.listas.datos_informe} />
                                    <div className='m-4' />
                                    <Pages initialText={texto} setData={setData} query={`?texto=${texto}&soloTitulo=${soloTitulo}&fraseExacta=${fraseExacta}&dogDesde=${dogDesde}&dogHasta=${dogHasta}&criterioOrdenacion=${criterioOrdenacion}&listado_colectivo=${colectivo}&listado_taxorga=${organizacion}&listado_rangos=${rango}&listado_seccion=${seccion}&listado_tematica=${tematica}&`} actualPage={actualPage} setActualPage={setActualPage} elements={data.response?.resultSize} numberElementsPerPage={8} />
                                    <div className='m-4' />
                                </>
                                :
                                <p className='py-4 text-red-600 font-semibold italic'>Non se atoparon resultados para "{textoBuscado}". Por favor, inténteo de novo.</p>
                            :
                            <p className='py-4 text-gray-600 font-semibold italic'>Por favor, insire algún texto para realizar a búsqueda...</p>
                    }
                </div>
                :
                <></>
        }
    </section >
}