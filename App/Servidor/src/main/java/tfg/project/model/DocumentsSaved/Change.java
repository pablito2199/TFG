package tfg.project.model.DocumentsSaved;

import java.util.Objects;

public class Change {
    private String id;
    private String parrafoAntiguo;
    private String parrafoNuevo;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getParrafoAntiguo() {
        return parrafoAntiguo;
    }

    public void setParrafoAntiguo(String parrafoAntiguo) {
        this.parrafoAntiguo = parrafoAntiguo;
    }

    public String getParrafoNuevo() {
        return parrafoNuevo;
    }

    public void setParrafoNuevo(String parrafoNuevo) {
        this.parrafoNuevo = parrafoNuevo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Change change = (Change) o;
        return Objects.equals(id, change.id) && Objects.equals(parrafoAntiguo, change.parrafoAntiguo) && Objects.equals(parrafoNuevo, change.parrafoNuevo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, parrafoAntiguo, parrafoNuevo);
    }

    @Override
    public String toString() {
        return "Change{" +
                "id='" + id + '\'' +
                ", parrafoAntiguo='" + parrafoAntiguo + '\'' +
                ", parrafoNuevo='" + parrafoNuevo + '\'' +
                '}';
    }
}
