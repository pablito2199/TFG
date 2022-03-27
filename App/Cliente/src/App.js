import "./style/app.css";
import { Boton } from "./components/Boton";
import { Campo } from "./components/Campo";

export const App = () => {
    return (
        <body>
            <header>
                <h1>DATOS DE CABECEIRA</h1>
                <div className="metadatos">
                    <div className="colIzq">
                        <Campo identificador="titulo" texto="Título" tipo="text" />
                        <Campo identificador="organismo" texto="Organismo" tipo="text" />
                        <Campo identificador="sumario" texto="Sumario" tipo="textarea" />
                        <Campo identificador="data_publicacion" texto="Data de publicación" tipo="date" />
                        <Campo identificador="referencia_publicacion" texto="Referencia de publicación" tipo="text" />
                        <Campo identificador="dvl_desde" texto="DVL desde" tipo="date" />
                    </div>

                    <div className="colDer">
                        <Campo identificador="estado" texto="Estado" tipo="text" />
                        <Campo identificador="entrada_vigor" texto="Establecer data de entrada en vigor" tipo="date" />
                        <Campo identificador="ano" texto="Ano" tipo="text" />
                        <Campo identificador="nome_ficheiro" texto="Nome ficheiro" tipo="text" />
                        <Campo identificador="version" texto="Versión" tipo="text" />
                        <Campo identificador="referencia" texto="Referencia" tipo="text" />
                        <Campo identificador="rango" texto="Rango" tipo="text" />
                    </div>
                </div>
            </header>

            <main>
                <section className="izquierda">
                    <nav>
                        <a>Diferenzas</a>
                        <a>Leis vinc.</a>
                    </nav>
                    <div className="diferenzas">
                        <div className="textoIzquierda">
                            <select>
                                <option>lex.gal</option>
                                <option>DOG</option>
                            </select>
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                                asdasdsadasdsa
                            </p>
                        </div>
                        <div className="textoDerecha">
                            <select>
                                <option>lex.gal</option>
                                <option>DOG</option>
                            </select>
                            <p>
                                asdasdsadasdsa
                            </p>
                        </div>
                    </div>
                    <div className="leis_vinculadas"></div>
                </section>
                <section className="derecha">
                    <nav>
                        <a>Notas</a>
                        <a>Cambios</a>
                    </nav>
                    <div className="contenido">
                        <p>
                        </p>
                        <div className="botones">
                            <Boton color="gris" texto="Aceptar selección" />
                            <Boton color="gris" texto="Aceptar todos" />
                            <Boton color="gris" texto="Descartar selección" />
                            <Boton color="gris" texto="Descartar todos" />
                        </div>
                    </div>
                </section>
            </main>

            <div className="botones_principales">
                <Boton color="verde" texto="Validar e publicar" />
                <Boton color="gris" texto="Previsualizar" />
                <Boton color="rojo" texto="Rexeitar" />
            </div>
        </body>
    );
};
