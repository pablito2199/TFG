import { React, useState } from 'react'

import { useDocument } from '../hooks'
import { Header, LeftSide, ParagraphEditor, PrincipalButtons, RightSide } from '../components/edit-page';

export default function Edit() {
    const [parrafoACambiar, setParrafoACambiar] = useState('')
    const [parrafoCambiado, setParrafoCambiado] = useState('')
    const [mostrarInput, setMostrarInput] = useState(false)
    const [cambios, setCambios] = useState([])
    const [opacity, setOpacity] = useState('opacity-100')

    let data = useDocument(1)

    return (
        <div className='flex flex-col ml-20 items-center w-full screen-min3:ml-20'>
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
                        <Header data={data.cab} />
                        :
                        <></>
                }

                {
                    data?.corpo !== undefined
                        ?
                        <main className='z-0 w-full mt-6 flex screen-min4:flex-col screen-min3:w-11/12 screen-min1:9/12 mb-24'>
                            <LeftSide
                                data={data.corpo}
                                setParrafoACambiar={setParrafoACambiar}
                                setParrafoCambiado={setParrafoCambiado}
                                setMostrarInput={setMostrarInput}
                                setOpacity={setOpacity}
                            />
                            <RightSide cambios={cambios} setCambios={setCambios} />
                        </main>
                        :
                        <></>
                }

                <PrincipalButtons />
            </div >
        </div>
    );
};