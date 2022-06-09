package tfg.project.model.DocumentsSaved;

import io.swagger.v3.oas.annotations.media.Schema;

import java.util.Objects;

@Schema(description = "Comentarios realizados nunha nota.")
public class Comment {
    @Schema(description = "Data na que se escribiu o comentario.", example = "2022-05-05T09:37:56.157Z")
    private String fecha;
    @Schema(description = "Usuario que escribiu o comentario.", example = "Nome Apelido")
    private String usuario;
    @Schema(description = "Contido do comentario.", example = "Contido do comentario")
    private String contenido;

    public String getFecha() {
        return fecha;
    }

    public Comment setFecha(String fecha) {
        this.fecha = fecha;
        return this;
    }

    public String getUsuario() {
        return usuario;
    }

    public Comment setUsuario(String usuario) {
        this.usuario = usuario;
        return this;
    }

    public String getContenido() {
        return contenido;
    }

    public Comment setContenido(String contenido) {
        this.contenido = contenido;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Comment comment = (Comment) o;
        return Objects.equals(getFecha(), comment.getFecha()) && Objects.equals(getUsuario(), comment.getUsuario()) && Objects.equals(getContenido(), comment.getContenido());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getFecha(), getUsuario(), getContenido());
    }

    @Override
    public String toString() {
        return "Comment{" +
                "fecha='" + fecha + '\'' +
                ", usuario='" + usuario + '\'' +
                ", contenido='" + contenido + '\'' +
                '}';
    }
}
