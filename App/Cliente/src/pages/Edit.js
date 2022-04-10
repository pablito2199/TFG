import { React, useState } from 'react'

import organismos from "../data/listadoOrganismos.json"
import rangos from "../data/listadoRangos.json"

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Textarea } from "../components/Textarea";
import { Select } from "../components/Select";

export default function Edit() {
    return (
        <body className='flex flex-col'>
            <Header />

            <main className='mt-6 flex font-serif screen-min2:flex-col'>
                <ParteIzquierda />
                <ParteDerecha />
            </main>

            <BotonesPrincipales />
        </body >
    );
};

function Header() {
    const estados = [
        { codigo: 1, nombre: 'Durward Reynolds' },
        { codigo: 2, nombre: 'Kenton Towne' },
        { codigo: 3, nombre: 'Therese Wunsch' },
        { codigo: 4, nombre: 'Benedict Kessler' },
        { codigo: 5, nombre: 'Katelyn Rohan' }
    ]

    const [organismoSeleccionado, setOrganismoSeleccionado] = useState(organismos[0])
    const [estadoSeleccionado, setEstadoSeleccionado] = useState(estados[0])
    const [rangoSeleccionado, setRangoSeleccionado] = useState(rangos[0])

    return <header className='bg-black font-bitter bg-blue-lex-gal w-11/12 self-center mt-5 flex flex-col rounded-xl border-2 border-solid border-inherit-700'>
        <p className='bg-gray-lex-gal text-white text-2xl py-3 rounded-xl font-bold text-center'>Datos de cabeceira</p>
        <div className='flex flex-row m-3 font-semibold italic screen-min1:flex-col'>
            <div className='w-1/2 screen-min1:w-full'>
                <Input identificador="titulo" texto="Título" tipo="text" placeholder="Título da norma..." />
                <Select identificador="organismo" texto="Organismo" elements={organismos} setElements={setOrganismoSeleccionado} />
                <Textarea identificador="sumario" texto="Sumario" placeholder="Escriba o sumario da norma..." />
                <Input identificador="data_publicacion" texto="Data de publicación" tipo="date" />
                <Input identificador="referencia_publicacion" texto="Referencia da publicación" tipo="text" placeholder="Referencia de publicación..." />
                <Input identificador="dvl_desde" texto="Data de entrada en vigor" tipo="date" />
            </div>

            <div className='w-1/2 screen-min1:w-full'>
                <Select identificador="estado" texto="Estado" elements={estados} setElements={setEstadoSeleccionado} />
                <Input identificador="ano" texto="Ano" tipo="text" placeholder="Ano..." />
                <Input identificador="nome_ficheiro" texto="Nome ficheiro" tipo="text" placeholder="Ej: ficheiro.pdf" />
                <Input identificador="version" texto="Versión" tipo="text" placeholder="Versión da norma..." />
                <Input identificador="referencia" texto="Referencia" tipo="text" placeholder="Referencia da norma..." />
                <Select identificador="rango" texto="Rango" elements={rangos} setElements={setRangoSeleccionado} />
            </div>
        </div>
    </header>
}

function ParteIzquierda() {
    const [estado, setEstado] = useState(false)

    const leis = [
        { id: '00000A', modificacion: 'Modificación realizada a lei A.' },
        { id: '00000B', modificacion: 'Modificación realizada a lei B.' },
        { id: '00000C', modificacion: 'Modificación realizada a lei C.' },
        { id: '00000D', modificacion: 'Modificación realizada a lei D.' },
        { id: '00000E', modificacion: 'Modificación realizada a lei E.' },
        { id: '00000F', modificacion: 'Modificación realizada a lei F.' },
        { id: '00000G', modificacion: 'Modificación realizada a lei G.' },
        { id: '00000H', modificacion: 'Modificación realizada a lei H.' },
        { id: '00000I', modificacion: 'Modificación realizada a lei I.' },
        { id: '00000I', modificacion: 'Modificación realizada a lei I.' },
        { id: '00000I', modificacion: 'Modificación realizada a lei I.' },
        { id: '00000I', modificacion: 'Modificación realizada a lei I.' },
        { id: '00000I', modificacion: 'Modificación realizada a lei I.' },
        { id: '00000I', modificacion: 'Modificación realizada a lei I.' },
        { id: '00000I', modificacion: 'Modificación realizada a lei I.' },
        { id: '00000J', modificacion: 'Modificación realizada a lei J.' }
    ]

    return <section className='flex-1 ml-10 screen-min2:w-11/12'>
        {
            estado === false
                ?
                <nav className='flex text-lg text-center'>
                    <a className='p-2 w-32 rounded-t-lg border-2 border-black hover:underline cursor-pointer' style={{ backgroundColor: "#000000", color: "white" }}>Texto</a>
                    <a className='p-2 w-32 rounded-t-lg border-2 border-black hover:underline cursor-pointer' onClick={() => setEstado(true)}>Leis vinc.</a>
                </nav>
                :
                <nav className='flex text-lg text-center'>
                    <a className='p-2 w-32 rounded-t-lg border-2 border-black hover:underline cursor-pointer' onClick={() => setEstado(false)}>Texto</a>
                    <a className='p-2 w-32 rounded-t-lg border-2 border-black hover:underline cursor-pointer' style={{ backgroundColor: "#000000", color: "white" }}>Leis vinc.</a>
                </nav>
        }
        {
            estado === false
                ?
                <div className='flex flex-col border-2 border-black min-h-texto-principal max-h-texto-principal overflow-y-scroll rounded'>
                    <div className='p-4 m-4'>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            Hola
                            Adios
                            Hola que tal
                        </p>
                    </div>
                </div>
                :
                <div className='p-4 flex flex-col border-2 border-black rounded'>
                    <div className='border-3 border-gray max-h-leis-vinculadas overflow-y-scroll'>
                        {
                            leis?.map(lei => <div className='m-4 flex flex-col border-b-2 border-gray-lex-gal w-12/13' key={lei.id}><div className='flex flex-row items-center'><span className='font-bold'>Lei {lei.id}</span><a className='mr-4 text-link underline flex-auto text-right text-sm cursor-pointer'>(eliminar)</a></div><p className='m-4'>{lei.modificacion}</p></div>)
                        }
                    </div>
                    <a className='mt-4 text-link underline'>(+) Engadir nova lei vinculada manualmente</a>
                    <div className='flex flex-row justify-center m-4 gap-x-5'>
                        <Button color="gris" texto="Aceptar todas" />
                        <Button color="gris" texto="Rexeitar todas" />
                    </div>
                </div>
        }
    </section>
}

function ParteDerecha() {
    const [estado, setEstado] = useState(false)
    const [notas, setNotas] = useState([
        { id: 1, contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [{ 'contenido': 'Bienasdasdasdasdasdasdasdasdasdasdasdasdassdasdasdasdasdasdasdasdasdasdsdadsadsdasdasdasdsasdasdas', 'fecha': '12/05/2021' }, { 'contenido': 'Mal', 'fecha': '12/05/2021' }] },
        { id: 2, contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [{ 'contenido': 'Comentario', 'fecha': '06/11/2022' }] },
        { id: 3, contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
        { id: 4, contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
        { id: 5, contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
        { id: 6, contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
        { id: 7, contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
        { id: 8, contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
    ])

    return <section className='w-1/4 mx-10 screen-min2:w-11/12 screen-min2:mt-4'>
        {
            estado === false
                ?
                <nav className='flex text-lg text-center'>
                    <a className='p-2 w-32 rounded-t-lg border-2 border-black hover:underline cursor-pointer' style={{ backgroundColor: "#000000", color: "white" }}>Notas</a>
                    <a className='p-2 w-32 rounded-t-lg border-2 border-black hover:underline cursor-pointer' onClick={() => setEstado(true)}>Cambios</a>
                </nav>
                :
                <nav className='flex text-lg text-center'>
                    <a className='p-2 w-32 rounded-t-lg border-2 border-black hover:underline cursor-pointer' onClick={() => setEstado(false)}>Notas</a>
                    <a className='p-2 w-32 rounded-t-lg border-2 border-black hover:underline cursor-pointer' style={{ backgroundColor: "#000000", color: "white" }}>Cambios</a>
                </nav>
        }
        {
            estado === false
                ?
                <div className='border-2 border-black rounded'>
                    <div className='flex flex-col border-b-2 border-black min-h-leis-vinculadas max-h-leis-vinculadas overflow-y-scroll'>
                        {
                            notas?.map((nota, i) =>
                                <div className='flex flex-col border-b-2 border-gray-300'>
                                    <div className='m-4 flex items-center border-b-2 border-gray w-11/12'><p className='m-4'><span className='font-bold min-w-fit'>Nota {i + 1}: </span>{nota.contenido}</p><input className='cursor-pointer' type="checkbox" /></div>
                                    <div className='ml-8 mb-4 flex flex-col flex-auto'>
                                        <ul>
                                            {
                                                nota.comentarios?.map(com => <div className='my-2 w-11/12'><li className='break-words'>{com.contenido}</li><p className='text-gray-400'>({com.fecha})</p></div>)
                                            }
                                        </ul>
                                        <CrearNota notas={notas} setNotas={setNotas} nota={nota} i={i} />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className='m-2 flex text-center justify-center items-center gap-4'>
                        <div className='flex flex-col gap-y-2'>
                            <Button color="bg-gray-500" colorHover="bg-gray-600" anchura="40" texto="Resolver selección" />
                            <Button color="bg-gray-500" colorHover="bg-gray-600" anchura="40" texto="Resolver todas" />
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <Button color="bg-gray-500" colorHover="bg-gray-600" anchura="40" texto="Descartar selección" />
                            <Button color="bg-gray-500" colorHover="bg-gray-600" anchura="40" texto="Descartar todas" />
                        </div>
                    </div>
                </div>
                :
                <div className='border-2 border-black rounded'>
                    <div className='border-b-2 border-black min-h-leis-vinculadas max-h-leis-vinculadas overflow-y-scroll'></div>
                    <div className='m-2 flex text-center justify-center items-center gap-4'>
                        <div className='flex flex-col gap-y-2'>
                            <Button color="bg-gray-500" colorHover="bg-gray-600" anchura="40" texto="Aceptar selección" />
                            <Button color="bg-gray-500" colorHover="bg-gray-600" anchura="40" texto="Aceptar todos" />
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <Button color="bg-gray-500" colorHover="bg-gray-600" anchura="40" texto="Descartar selección" />
                            <Button color="bg-gray-500" colorHover="bg-gray-600" anchura="40" texto="Descartar todos" />
                        </div>
                    </div>
                </div>
        }
    </section >
}


function CrearNota({ notas, setNotas, nota }) {
    const [comentario, setComentario] = useState('')

    const submit = async (event) => {
        if (comentario !== '') {
            let myObj = {
                'contenido': comentario,
                'fecha': new Date().toLocaleDateString()
            }
            setNotas(notas.map(notaAux => {
                if (nota.id == notaAux.id) {
                    notaAux.comentarios.push(myObj);
                }
                return notaAux;
            }));
            setComentario('')
        }
    }

    return <div className='mt-2 flex flex-col w-11/12'>
        <textarea value={comentario} onChange={(event) => setComentario(event.target.value)} className='mb-2 w-full h-20 p-2 border border-black rounded focus:outline-none focus:border-gray-500 resize-none' name="comment" placeholder="Novo comentario..."></textarea>
        <a onClick={submit} className='px-3 py-2 text-sm text-blue-100 bg-blue-600 hover:bg-blue-700 rounded text-center w-40 ml-auto mr-0 cursor-pointer'>Engadir comentario</a>
    </div>
}

function BotonesPrincipales() {
    return <div className='flex justify-center my-4 gap-20'>
        <Button color="bg-green-500" colorHover="bg-green-600" anchura="60" texto="Validar e publicar" />
        <Button color="bg-gray-500" colorHover="bg-gray-600" anchura="60" texto="Previsualizar" />
        <Button color="bg-red-500" colorHover="bg-red-600" anchura="60" texto="Rexeitar" />
    </div>
}