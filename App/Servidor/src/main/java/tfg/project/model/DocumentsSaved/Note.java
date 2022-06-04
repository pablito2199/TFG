package tfg.project.model.DocumentsSaved;

import io.swagger.v3.oas.annotations.media.Schema;

import java.util.List;
import java.util.Objects;

@Schema(description = "Notas escritas nun documento.")
public class Note {
    @Schema(description = "Id da nota.", example = "1651743476158")
    private String id;
    @Schema(description = "Data en que se escribiu a nota.", example = "2022-05-05T09:37:56.157Z")
    private String fecha;
    @Schema(description = "Usuario que escribiu a nota.", example = "Nome Apelido")
    private String usuario;
    @Schema(description = "Contido da nota.", example = "Contido da nota")
    private String contenido;
    @Schema(description = "Parágrafo ao que está asociada a nota.", example = "1")
    private String parrafo;
    @Schema(description = "Lista de comentarios que recibiu a nota.")
    private List<Comment> comentarios;

    public String getId() {
        return id;
    }

    public Note setId(String id) {
        this.id = id;
        return this;
    }

    public String getFecha() {
        return fecha;
    }

    public Note setFecha(String fecha) {
        this.fecha = fecha;
        return this;
    }

    public String getUsuario() {
        return usuario;
    }

    public Note setUsuario(String usuario) {
        this.usuario = usuario;
        return this;
    }

    public String getContenido() {
        return contenido;
    }

    public Note setContenido(String contenido) {
        this.contenido = contenido;
        return this;
    }

    public String getParrafo() {
        return parrafo;
    }

    public Note setParrafo(String parrafo) {
        this.parrafo = parrafo;
        return this;
    }

    public List<Comment> getComentarios() {
        return comentarios;
    }

    public Note setComentarios(List<Comment> comentarios) {
        this.comentarios = comentarios;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Note note = (Note) o;
        return Objects.equals(id, note.id) && Objects.equals(fecha, note.fecha) && Objects.equals(usuario, note.usuario) && Objects.equals(contenido, note.contenido) && Objects.equals(parrafo, note.parrafo) && Objects.equals(comentarios, note.comentarios);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, fecha, usuario, contenido, parrafo, comentarios);
    }

    @Override
    public String toString() {
        return "Note{" +
                "id='" + id + '\'' +
                ", fecha='" + fecha + '\'' +
                ", usuario='" + usuario + '\'' +
                ", contenido='" + contenido + '\'' +
                ", parrafo='" + parrafo + '\'' +
                ", comentarios=" + comentarios +
                '}';
    }
}
