package tfg.project.model.DocumentsSaved;

import java.util.List;
import java.util.Objects;

public class Note {
    private String id;
    private String usuario;
    private String fecha;
    private String contenido;
    private List<Comment> comentarios;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public String getContenido() {
        return contenido;
    }

    public void setContenido(String contenido) {
        this.contenido = contenido;
    }

    public List<Comment> getComentarios() {
        return comentarios;
    }

    public void setComentarios(List<Comment> comentarios) {
        this.comentarios = comentarios;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Note note = (Note) o;
        return Objects.equals(id, note.id) && Objects.equals(usuario, note.usuario) && Objects.equals(fecha, note.fecha) && Objects.equals(contenido, note.contenido) && Objects.equals(comentarios, note.comentarios);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, usuario, fecha, contenido, comentarios);
    }

    @Override
    public String toString() {
        return "Note{" +
                "id='" + id + '\'' +
                ", usuario='" + usuario + '\'' +
                ", fecha='" + fecha + '\'' +
                ", contenido='" + contenido + '\'' +
                ", comentarios=" + comentarios +
                '}';
    }
}
