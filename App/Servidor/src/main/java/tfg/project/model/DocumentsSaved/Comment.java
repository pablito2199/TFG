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

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getContenido() {
        return contenido;
    }

    public void setContenido(String contenido) {
        this.contenido = contenido;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Comment comment = (Comment) o;
        return Objects.equals(fecha, comment.fecha) && Objects.equals(usuario, comment.usuario) && Objects.equals(contenido, comment.contenido);
    }

    @Override
    public int hashCode() {
        return Objects.hash(fecha, usuario, contenido);
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
