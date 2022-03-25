import "./style/App.css";
import { ButtonAceptar, ButtonRexeitar, ButtonPrevisualizar } from "./components/Button";

export const App = () => {
    return (
        <header>
            <div className="metadatos">
                <div>
                    <label for="titulo">Título</label>
                    <input type="text" id="titulo" name="titulo" /><br />
                    <label for="organismo">Organismo</label>
                    <input type="text" id="organismo" name="organismo" /><br />
                    <label for="sumario">Sumario</label>
                    <input type="text" id="sumario" name="sumario" /><br />
                    <label for="data_publicacion">Data de publicación</label>
                    <input type="date" id="data_publicacion" name="data_publicacion" /><br />
                    <label for="referencia_publicacion">Referencia de publicación</label>
                    <input type="text" id="referencia_publicacion" name="referencia_publicacion" /><br />
                    <label for="dvl_desde">DVL desde</label>
                    <input type="date" id="dvl_desde" name="dvl_desde" /><br />
                </div>

                <div>
                    <label for="estado">Estado</label>
                    <input type="date" id="estado" name="estado" /><br />
                    <label for="entrada_vigor">Establecer data de entrada en vigor</label>
                    <input type="date" id="entrada_vigor" name="entrada_vigor" /><br />
                    <label for="ano">Ano</label>
                    <input type="text" id="ano" name="ano" /><br />
                    <label for="nome_ficheiro">Nome ficheiro</label>
                    <input type="text" id="nome_ficheiro" name="nome_ficheiro" /><br />
                    <label for="version">Versión</label>
                    <input type="text" id="version" name="version" /><br />
                    <label for="referencia">Referencia</label>
                    <input type="text" id="referencia" name="referencia" /><br />
                    <label for="rango">Rango</label>
                    <input type="text" id="rango" name="rango   " /><br />
                </div>
            </div>
            <div className="botones">
                <ButtonAceptar text="Validar e publicar" />
                <ButtonPrevisualizar text="Previsualizar" />
                <ButtonRexeitar text="Rexeitar" />
            </div>
        </header>
    );
};
