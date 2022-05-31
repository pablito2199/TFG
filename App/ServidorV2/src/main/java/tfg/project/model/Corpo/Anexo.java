package tfg.project.model.Corpo;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

@XmlRootElement(name = "art")
public class Anexo {

    private String id;
    private String titulo;
    private List<Parrafo> parrafos;

    public String getId() {
        return id;
    }

    @XmlAttribute
    public Anexo setId(String id) {
        this.id = id;
        return this;
    }

    public String getTitulo() {
        return titulo;
    }

    public Anexo setTitulo(String titulo) {
        this.titulo = titulo;
        return this;
    }

    public List<Parrafo> getParrafos() {
        return parrafos;
    }

    @XmlElement(name = "p")
    public Anexo setParrafos(List<Parrafo> parrafos) {
        this.parrafos = parrafos;
        return this;
    }

    @Override
    public String toString() {
        return "Anexo{" +
                "id='" + id + '\'' +
                ", titulo='" + titulo + '\'' +
                ", parrafos=" + parrafos +
                '}';
    }
}