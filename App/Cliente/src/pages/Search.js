import { React, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useNormas } from '../hooks';
import normas from './data.json'

import { Button } from "../components/Button";
import { SearchField } from '../components/Search';
import { Pages, SelectNumberPages } from '../components/Pagination';

export default function Search() {
    const query = useLocation().search.replace('?', '');

    //const [data, setData] = useState(useNormas(query))
    const [data, setData] = useState(normas)
    const [actualPage, setActualPage] = useState(0)
    const [numeroNormasPagina, setNumeroNormasPagina] = useState(3)

    return (
        <div className='flex flex-col items-center'>
            <SearchField />
            <SelectNumberPages text="Número de normas por página" posibilities={[3, 5, 10, 20]} setNumberElementsPerPage={setNumeroNormasPagina} setActualPage={setActualPage} />
            <Content data={data.response.listas.datos_informe} actualPage={actualPage} numberElementsPerPage={numeroNormasPagina} />
            <Pages actualPage={actualPage} setActualPage={setActualPage} elements={data.response.listas.datos_informe.length} numberElementsPerPage={numeroNormasPagina} />
        </div>
    );
};

function Content({ data, actualPage, numberElementsPerPage }) {
    return <section className='mt-4 flex flex-col w-11/12'>
        {
            data?.map((norma, index) =>
                (index >= numberElementsPerPage * actualPage && index < actualPage * numberElementsPerPage + numberElementsPerPage)
                    ?
                    <div key={index} className=' border-b-2 border-gray-300' >
                        <div className='flex m-4 items-center'>
                            <div className='font-serif w-9/12 mt-0 mb-auto'>
                                <div className='flex'>
                                    <span className='font-bold'>Norma {norma.id}</span>
                                    <span className='ml-auto mr-0 italic text-gray-500'>Diario nº <span className='font-bold text-blue-400'>{norma.numeroDog}</span> da data <span className='font-bold'>{norma.fechaDogFormateada}</span></span>
                                </div>
                                <p className='mt-2'>{norma.sumario}</p>
                            </div>
                            <div className='flex flex-col ml-4 mr-0 flex-auto gap-2 text-center items-center'>
                                <Button color="bg-gray-500" colorHover="bg-gray-600" anchura="60" texto="Importar norma" />
                                <Button color="bg-gray-500" colorHover="bg-gray-600" anchura="60" texto="Previsualizar" url={`https://www.xunta.gal/${norma.rutaHtml}`} />
                            </div>
                        </div>
                    </div>
                    :
                    <div key={index}></div>
            )
        }
    </section >
}