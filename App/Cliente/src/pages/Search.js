import { React, useState } from 'react'
import { Boton } from "../components/Boton";

export default function Search() {
    const [searchInput, setSearchInput] = useState('');
    const [nota, setNota] = useState([])

    const searchItems = (searchValue) => {
        if (searchValue !== '') {
            nota.push(searchValue)
            setNota(nota)
            console.log(searchValue)
        }
    }

    return (
        <body className='flex flex-col items-center'>
            {
                nota?.map(com => <div className='my-2 w-11/12'><li className='break-words'>{com}</li></div>)
            }
            <Form searchInput={searchInput} setSearchInput={setSearchInput} searchItems={searchItems} />
            <Content />
        </body>
    );
};

function Form({ searchInput, setSearchInput, searchItems }) {
    return <section className='w-3/5 bg-black font-bitter bg-blue-lex-gal mt-5 flex flex-col rounded-xl border-2 border-solid border-inherit-700 items-center'>
        <p className='bg-gray-lex-gal text-white text-2xl py-3 rounded-xl font-bold text-center w-full'>Búsqueda de normas</p>
        <div className='m-4 w-11/12'>
            <div className='input-group relative flex items-stretch w-full mb-4'>
                <input type="search" className='form-control relative flex-auto min-w-0 block w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l transition ease-in-out m-0 py-2 px-2 leading-tight focus:outline-none focus:border-gray-500' onChange={(event) => setSearchInput(event.target.value)} placeholder="Búsqueda de normas..." aria-label="Search" aria-describedby="button-addon2" />
                <button className='btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-r shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center' type="button" id="button-addon2" onClick={(e) => searchItems(searchInput)}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className='w-4' role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                    </svg>
                </button>
            </div>
        </div>
    </section >
}

function Content() {
    return <section className='flex flex-col'>
        {
            <div className='flex'>
                <Boton color="azul" texto="Importar norma" />
                <Boton color="gris" texto="Previsualizar" />
            </div>
        }
    </section>
}