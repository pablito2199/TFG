package tfg.project.model.DocumentsSaved;

import io.swagger.v3.oas.annotations.media.Schema;

import java.util.Objects;

@Schema(description = "Cambios propostos nun documento.")
public class Change {
    @Schema(description = "Id do cambio.", example = "1651746730145")
    private String id;
    @Schema(description = "Data en que se propuxo o cambio.", example = "2022-05-05T09:37:56.157Z")
    private String fecha;
    @Schema(description = "Usuario que propuxo o cambio.", example = "Nome Apelido")
    private String usuario;
    @Schema(description = "Parágrafo ao que está asociado o cambio.", example = "1")
    private String parrafo;
    @Schema(description = "Parágrafo antigo do documento.", example = "Cambiar")
    private String parrafoAntiguo;
    @Schema(description = "Parágrafo novo do documento.", example = "Cambiado")
    private String parrafoNuevo;

    public String getId() {
        return id;
    }

    public Change setId(String id) {
        this.id = id;
        return this;
    }

    public String getFecha() {
        return fecha;
    }

    public Change setFecha(String fecha) {
        this.fecha = fecha;
        return this;
    }

    public String getUsuario() {
        return usuario;
    }

    public Change setUsuario(String usuario) {
        this.usuario = usuario;
        return this;
    }

    public String getParrafo() {
        return parrafo;
    }

    public Change setParrafo(String parrafo) {
        this.parrafo = parrafo;
        return this;
    }

    public String getParrafoAntiguo() {
        return parrafoAntiguo;
    }

    public Change setParrafoAntiguo(String parrafoAntiguo) {
        this.parrafoAntiguo = parrafoAntiguo;
        return this;
    }

    public String getParrafoNuevo() {
        return parrafoNuevo;
    }

    public Change setParrafoNuevo(String parrafoNuevo) {
        this.parrafoNuevo = parrafoNuevo;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Change change = (Change) o;
        return Objects.equals(id, change.id) && Objects.equals(fecha, change.fecha) && Objects.equals(usuario, change.usuario) && Objects.equals(parrafo, change.parrafo) && Objects.equals(parrafoAntiguo, change.parrafoAntiguo) && Objects.equals(parrafoNuevo, change.parrafoNuevo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, fecha, usuario, parrafo, parrafoAntiguo, parrafoNuevo);
    }

    @Override
    public String toString() {
        return "Change{" +
                "id='" + id + '\'' +
                ", fecha='" + fecha + '\'' +
                ", usuario='" + usuario + '\'' +
                ", parrafo='" + parrafo + '\'' +
                ", parrafoAntiguo='" + parrafoAntiguo + '\'' +
                ", parrafoNuevo='" + parrafoNuevo + '\'' +
                '}';
    }
}
