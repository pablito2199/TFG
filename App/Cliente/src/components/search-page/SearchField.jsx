import { React, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { SearchButton } from "./SearchButton"
import { SearchFilters } from "./SearchFilters"

export const SearchField = ({ initialText, setPagina }) => {
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
            navigate(`/search?texto=${texto}&soloTitulo=${soloTitulo}&fraseExacta=${fraseExacta}&dogDesde=${dogDesde}&dogHasta=${dogHasta}&criterioOrdenacion=${criterioOrdenacion}&listado_colectivo=${colectivo}&listado_taxorga=${organizacion}&listado_rangos=${rango}&listado_seccion=${seccion}&listado_tematica=${tematica}&pagina=1`)
        }
        if (setPagina) {
            setPagina(1)
        }
    }

    return <section className='w-11/12 font-medium mt-5 flex flex-col rounded-xl px-2 screen-min3:w-10/12 screen-min1:w-9/12'>
        <div className='w-80 p-4 bg-blue-lex-gal text-center'>
            <span className='text-white text-2xl py-3 rounded-xl'>Búsqueda de normas</span>
        </div>
        <div className='p-6 bg-blue-lex-gal'>
            <span className="font-serif ml-1 text-lg font-semibold italic">Insira o texto da búsqueda...</span>
            <input value={texto} onKeyDown={cambiarPagina} type="search" onChange={(event) => { setTexto(event.target.value) }} className=' mt-1 w-full font-normal text-gray-700 border border-solid border-gray-300 transition ease-in-out py-2 px-2 focus:outline-none focus:border-gray-500' placeholder="Búsqueda de normas..." aria-label="Search" aria-describedby="button-addon2" />
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
            <div className='w-full mt-4 flex gap-4 justify-end'>
                <button onClick={() => setTexto('')} className='px-6 py-2.5 focus:outline-none' type="button" id="button-addon2">
                    <span className="font-semibold">Limpar</span>
                </button>
                <SearchButton texto={texto} soloTitulo={soloTitulo} fraseExacta={fraseExacta} dogDesde={dogDesde} dogHasta={dogHasta} criterioOrdenacion={criterioOrdenacion} colectivo={colectivo} organizacion={organizacion} rango={rango} seccion={seccion} tematica={tematica} setPagina={setPagina} />
            </div>
        </div>
    </section >
}