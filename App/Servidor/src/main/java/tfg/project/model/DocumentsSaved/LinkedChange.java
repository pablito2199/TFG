package tfg.project.model.DocumentsSaved;

import io.swagger.v3.oas.annotations.media.Schema;

import java.util.Objects;

@Schema(description = "Cambios propostos nun documento.")
public class LinkedChange {
    @Schema(description = "Id do cambio realizado. Fórmase por 'idLeiVinculada-idParágrafo'.", example = "1651758326037-1")
    private String id;
    @Schema(description = "Posición do parágrafo cambiado.", example = "1")
    private String posicion;
    @Schema(description = "Parágrafo co contido cambiado.", example = "Cambiado")
    private String parrafoCambiado;

    public String getId() {
        return id;
    }

    public LinkedChange setId(String id) {
        this.id = id;
        return this;
    }

    public String getPosicion() {
        return posicion;
    }

    public LinkedChange setPosicion(String posicion) {
        this.posicion = posicion;
        return this;
    }

    public String getParrafoCambiado() {
        return parrafoCambiado;
    }

    public LinkedChange setParrafoCambiado(String parrafoCambiado) {
        this.parrafoCambiado = parrafoCambiado;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LinkedChange that = (LinkedChange) o;
        return Objects.equals(id, that.id) && Objects.equals(posicion, that.posicion) && Objects.equals(parrafoCambiado, that.parrafoCambiado);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, posicion, parrafoCambiado);
    }

    @Override
    public String toString() {
        return "LinkedChange{" +
                "id='" + id + '\'' +
                ", posicion='" + posicion + '\'' +
                ", parrafoCambiado='" + parrafoCambiado + '\'' +
                '}';
    }
}
