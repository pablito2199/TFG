import { React, useState } from 'react'
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer';
import "./style/app.css";
import { Boton } from "./components/Boton";
import { Campo } from "./components/Campo";

const oldCode = `
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Hola
Adios
Hola que tal`
const newCode = `
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Hola hola
Hola
Hola
Hola
Hola
Hola
Hola
Hola
Hola
Hola
Hola
Hola
Hola
Hola
Hola
Hola
Hola
Hola
Hola
Hola
Hola
Hola
Hola
Hola
Hola
Hola`

export const App = () => {
    return (
        <body>
            <Header />

            <main>
                <ParteIzquierda />
                <ParteDerecha />
            </main>

            <BotonesPrincipales />
        </body >
    );
};

function Header() {
    const organismos = [
        { codigo: 1, nombre: 'Durward Reynolds' },
        { codigo: 2, nombre: 'Kenton Towne' },
        { codigo: 3, nombre: 'Therese Wunsch' },
        { codigo: 4, nombre: 'Benedict Kessler' },
        { codigo: 5, nombre: 'Katelyn Rohan' }
    ]

    const [organismoSeleccionado, setOrganismoSeleccionado] = useState(organismos[0])
    const [query, setQuery] = useState('')

    const organismosFiltrados =
        query === ''
            ? organismos
            : organismos.filter((organismo) => {
                return organismo.nombre.toLowerCase().includes(query.toLowerCase())
            })

    return <header>
        <h1>DATOS DE CABECEIRA</h1>
        <div className="metadatos">
            <div className="colIzq">
                <Campo identificador="titulo" texto="Título" tipo="text" />
                <Campo identificador="organismo" texto="Organismo" tipo="autocomplete" organismoSeleccionado={organismoSeleccionado} setOrganismoSeleccionado={setOrganismoSeleccionado} organismosFiltrados={organismosFiltrados} query={query} setQuery={setQuery} />
                <Campo identificador="sumario" texto="Sumario" tipo="textarea" />
                <Campo identificador="data_publicacion" texto="Data de publicación" tipo="date" />
                <Campo identificador="referencia_publicacion" texto="Referencia de publicación" tipo="text" />
                <Campo identificador="dvl_desde" texto="Data de entrada en vigor" tipo="date" />
            </div>

            <div className="colDer">
                <Campo identificador="estado" texto="Estado" tipo="text" />
                <Campo identificador="ano" texto="Ano" tipo="text" />
                <Campo identificador="nome_ficheiro" texto="Nome ficheiro" tipo="text" />
                <Campo identificador="version" texto="Versión" tipo="text" />
                <Campo identificador="referencia" texto="Referencia" tipo="text" />
                <Campo identificador="rango" texto="Rango" tipo="text" />
            </div>
        </div>
    </header>
}

function ParteIzquierda() {
    const newStyles = {
        diffContainer: {
            'min-height': '60em',
            'max-height': '60em',
            'overflow-y': 'scroll'
        }
    };

    const [estado, setEstado] = useState(false)

    return <section className="izquierda">
        {
            estado === false
                ?
                <nav className="navIzquierda">
                    <a className="enlace_diferenzas" style={{ backgroundColor: "#bdbdbd" }}>Diferenzas</a>
                    <a className="enlace_leisvinc" onClick={() => setEstado(true)}>Leis vinc.</a>
                </nav>
                :
                <nav className="navIzquierda">
                    <a className="enlace_diferenzas" onClick={() => setEstado(false)}>Diferenzas</a>
                    <a className="enlace_leisvinc" style={{ backgroundColor: "#bdbdbd" }}>Leis vinc.</a>
                </nav>
        }
        {
            estado === false
                ?
                <div className="diferenzas">
                    <div className="selector_texto">
                        <select>
                            <option>lex.gal</option>
                            <option>DOG</option>
                        </select>
                        <select>
                            <option>lex.gal</option>
                            <option>DOG</option>
                        </select>
                    </div>
                    <ReactDiffViewer styles={newStyles} oldValue={oldCode} newValue={newCode} showDiffOnly={false} compareMethod={DiffMethod.WORDS} />
                </div>
                :
                <div className="leis_vinculadas"></div>
        }
    </section>
}

function ParteDerecha() {
    const [estado, setEstado] = useState(false)

    return <section className="derecha">
        {
            estado === false
                ?
                <nav className="navIzquierda">
                    <a className="enlace_diferenzas" style={{ backgroundColor: "#bdbdbd" }}>Notas</a>
                    <a className="enlace_leisvinc" onClick={() => setEstado(true)}>Cambios</a>
                </nav>
                :
                <nav className="navIzquierda">
                    <a className="enlace_diferenzas" onClick={() => setEstado(false)}>Notas</a>
                    <a className="enlace_leisvinc" style={{ backgroundColor: "#bdbdbd" }}>Cambios</a>
                </nav>
        }
        {
            estado === false
                ?
                <div className="notas">
                    <div className="notas_contenido">
                        <div class="nota">
                            <p><span>Nota 1:</span>Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm</p>
                            <input type="checkbox" />
                        </div>
                        <div class="nota">
                            <p><span>Nota 2:</span>Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm</p>
                            <input type="checkbox" />
                        </div>
                    </div>
                    <div className="botones">
                        <Boton color="gris" texto="Aceptar selección" />
                        <Boton color="gris" texto="Aceptar todos" />
                        <Boton color="gris" texto="Descartar selección" />
                        <Boton color="gris" texto="Descartar todos" />
                    </div>
                </div>
                :
                <div className="cambios">
                    <div className="cambios_contenido"></div>
                    <div className="botones">
                        <Boton color="gris" texto="Aceptar selección" />
                        <Boton color="gris" texto="Aceptar todos" />
                        <Boton color="gris" texto="Descartar selección" />
                        <Boton color="gris" texto="Descartar todos" />
                    </div>
                </div>
        }
    </section>
}

function BotonesPrincipales() {
    return <div className="botones_principales">
        <Boton color="verde" texto="Validar e publicar" />
        <Boton color="gris" texto="Previsualizar" />
        <Boton color="rojo" texto="Rexeitar" />
    </div>
}