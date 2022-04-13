import { React, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { SearchButton } from "./SearchButton";
import { SearchFilters } from "./SearchFilters";

export const SearchField = ({ initialText, pagina }) => {
    initialText === undefined ? initialText = '' : initialText = initialText + ''
    const [texto, setTexto] = useState(initialText)
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
    const navigate = useNavigate()

    const cambiarPagina = (e) => {
        if (e.key === 'Enter') {
            pagina === undefined ? pagina = '' : pagina = pagina + ''
            navigate(`/search?texto=${texto}&soloTitulo=${soloTitulo}&fraseExacta=${fraseExacta}&dogDesde=${dogDesde}&dogHasta=${dogHasta}&criterioOrdenacion=${criterioOrdenacion}&listado_colectivo=${colectivo}&listado_taxorga=${organizacion}&listado_rangos=${rango}&listado_seccion=${seccion}&listado_tematica=${tematica}&pagina=`)
        }
    }

    return <section className='w-4/5 mr-20 bg-black font-bitter bg-blue-lex-gal mt-5 flex flex-col rounded-xl border-2 border-solid border-inherit-700 items-center'>
        <p className='bg-gray-lex-gal text-white text-2xl py-3 rounded-xl font-bold text-center w-full'>Búsqueda de normas</p>
        <div className='m-4 w-11/12'>
            <div className='input-group relative flex items-stretch w-full mb-4'>
                <input value={texto} onKeyDown={cambiarPagina} type="search" onChange={(event) => { setTexto(event.target.value) }} className='form-control relative flex-auto min-w-0 block w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l transition ease-in-out m-0 py-2 px-2 leading-tight focus:outline-none focus:border-gray-500' placeholder="Búsqueda de normas..." aria-label="Search" aria-describedby="button-addon2" />
                <SearchButton texto={texto} soloTitulo={soloTitulo} fraseExacta={fraseExacta} dogDesde={dogDesde} dogHasta={dogHasta} criterioOrdenacion={criterioOrdenacion} colectivo={colectivo} organizacion={organizacion} rango={rango} seccion={seccion} tematica={tematica} />
            </div>
            <SearchFilters
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
        </div>
    </section >
};
