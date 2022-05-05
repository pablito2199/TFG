package tfg.project.model.DocumentsSaved;

import java.util.Objects;

public class Comment {
    private String fecha;
    private String usuario;
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
