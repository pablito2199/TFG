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
                </section>
                <section className="derecha">
                    <nav>
                        <a>Notas</a>
                        <a>Cambios</a>
                    </nav>
                    <div className="botones">
                        <Boton color="gris" texto="Aceptar selección" />
                        <Boton color="gris" texto="Aceptar todos" />
                        <Boton color="gris" texto="Descartar selección" />
                        <Boton color="gris" texto="Descartar todos" />
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
