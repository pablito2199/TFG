package Corpo;

import java.util.List;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "art")
public class Art {

    private String id;
    private String titulo;
    private List<Parrafo> parrafos;

    public String getId() {
        return id;
    }

    @XmlAttribute
    public void setId(String id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public List<Parrafo> getParrafos() {
        return parrafos;
    }

    @XmlElement(name = "p")
    public void setParrafos(List<Parrafo> parrafos) {
        this.parrafos = parrafos;
    }

    @Override
    public String toString() {
        return "Art{" + "id=" + id + ", titulo=" + titulo + ", parrafos=" + parrafos + '}';
    }
}
