import { React, useState } from 'react'
import "../style/edit.css";
import { Boton } from "../components/Boton";
import { Campo } from "../components/Campo";

export default function Edit() {
    return (
        <body className='bg-red'>
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
    const estados = [
        { codigo: 1, nombre: 'Durward Reynolds' },
        { codigo: 2, nombre: 'Kenton Towne' },
        { codigo: 3, nombre: 'Therese Wunsch' },
        { codigo: 4, nombre: 'Benedict Kessler' },
        { codigo: 5, nombre: 'Katelyn Rohan' }
    ]

    const [organismoSeleccionado, setOrganismoSeleccionado] = useState(organismos[0])
    const [estadoSeleccionado, setEstadoSeleccionado] = useState(estados[0])

    return <header className="edit-page">
        <h1>Datos de cabeceira</h1>
        <div className="metadatos">
            <div className="colIzq">
                <Campo identificador="titulo" texto="Título" tipo="text" />
                <Campo identificador="organismo" texto="Organismo" tipo="autocomplete" organismos={organismos} setOrganismoSeleccionado={setOrganismoSeleccionado} />
                <Campo identificador="sumario" texto="Sumario" tipo="textarea" />
                <Campo identificador="data_publicacion" texto="Data de publicación" tipo="date" />
                <Campo identificador="referencia_publicacion" texto="Referencia de publicación" tipo="text" />
                <Campo identificador="dvl_desde" texto="Data de entrada en vigor" tipo="date" />
            </div>

            <div className="colDer">
                <Campo identificador="estado" texto="Estado" tipo="autocomplete" estados={estados} setEstadoSeleccionado={setEstadoSeleccionado} />
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
        { id: '00000J', modificacion: 'Modificación realizada a lei J.' }
    ]

    return <section className="izquierda">
        {
            estado === false
                ?
                <nav className="navIzquierda">
                    <a className="enlace_texto" style={{ backgroundColor: "#000000", color: "white" }}>Texto</a>
                    <a className="enlace_leisvinc" onClick={() => setEstado(true)}>Leis vinc.</a>
                </nav>
                :
                <nav className="navIzquierda">
                    <a className="enlace_diferenzas" onClick={() => setEstado(false)}>Texto</a>
                    <a className="enlace_leisvinc" style={{ backgroundColor: "#000000", color: "white" }}>Leis vinc.</a>
                </nav>
        }
        {
            estado === false
                ?
                <div className="texto">
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        Hola
                        Adios
                        Hola que tal
                    </p>
                </div>
                :
                <div className="leis_vinculadas">
                    <div className="conxunto_leis_vinculadas">
                        {
                            leis?.map(lei => <div className="lei_vinc" key={lei.id}><div><span>Lei {lei.id}</span><a>(eliminar)</a></div><p>{lei.modificacion}</p></div>)
                        }
                    </div>
                    <a>(+) Engadir nova lei vinculada manualmente</a>
                    <div className="botones_vinc">
                        <Boton color="gris" texto="Aceptar todas" />
                        <Boton color="gris" texto="Rexeitar todas" />
                    </div>
                </div>
        }
    </section>
}

function ParteDerecha() {
    const [estado, setEstado] = useState(false)

    const notas = [
        { contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: ['Bien', 'Mal'] },
        { contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: ['Comentario'] },
        { contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
        { contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
        { contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
        { contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
        { contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
        { contenido: 'Lorem ipsum dolor situm Lorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situmLorem ipsum dolor situm', comentarios: [] },
    ]

    return <section className="derecha">
        {
            estado === false
                ?
                <nav className="navIzquierda">
                    <a className="enlace_diferenzas" style={{ backgroundColor: "#000000", color: "white" }}>Notas</a>
                    <a className="enlace_leisvinc" onClick={() => setEstado(true)}>Cambios</a>
                </nav>
                :
                <nav className="navIzquierda">
                    <a className="enlace_diferenzas" onClick={() => setEstado(false)}>Notas</a>
                    <a className="enlace_leisvinc" style={{ backgroundColor: "#000000", color: "white" }}>Cambios</a>
                </nav>
        }
        {
            estado === false
                ?
                <div className="notas">
                    <div className="notas_contenido">
                        {
                            notas?.map((nota, i) =>
                                <div className="nota" key={i}>
                                    <div className="nota_contenido"><p><span>Nota {i + 1}:</span>{nota.contenido}</p><input type="checkbox" /></div>
                                    <div className="notas_comentarios">
                                        <ul>
                                            {
                                                nota.comentarios?.map(com => <li>{com}</li>)
                                            }
                                        </ul>
                                        <input type="text" placeholder="Añadir comentario..."></input>
                                    </div>
                                </div>)
                        }
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