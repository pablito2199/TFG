package tfg.project.model.DocumentsSaved;

import io.swagger.v3.oas.annotations.media.Schema;

import java.util.Objects;

@Schema(description = "Cambios propostos nun documento.")
public class LinkedChange {
    @Schema(description = "Id do cambio realizado. Fórmase por 'idLeiVinculada-idParágrafo'.", example = "1651758326037-1")
    private String id;
    @Schema(description = "Parágrafo co contido cambiado.", example = "Cambiado")
    private String parrafoCambiado;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getParrafoCambiado() {
        return parrafoCambiado;
    }

    public void setParrafoCambiado(String parrafoCambiado) {
        this.parrafoCambiado = parrafoCambiado;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LinkedChange that = (LinkedChange) o;
        return Objects.equals(id, that.id) && Objects.equals(parrafoCambiado, that.parrafoCambiado);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, parrafoCambiado);
    }

    @Override
    public String toString() {
        return "LinkedChange{" +
                "id='" + id + '\'' +
                ", parrafoCambiado='" + parrafoCambiado + '\'' +
                '}';
    }
}
