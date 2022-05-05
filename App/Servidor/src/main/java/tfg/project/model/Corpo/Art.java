package tfg.project.model.Corpo;


import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

@XmlRootElement(name = "art")
public class Art {

    private String id;
    private String titulo;
    private List<Parrafo> parrafos;

    public String getId() {
        return id;
    }

    @XmlAttribute
    public Art setId(String id) {
        this.id = id;
        return this;
    }

    public String getTitulo() {
        return titulo;
    }

    public Art setTitulo(String titulo) {
        this.titulo = titulo;
        return this;
    }

    public List<Parrafo> getParrafos() {
        return parrafos;
    }

    @XmlElement(name = "p")
    public Art setParrafos(List<Parrafo> parrafos) {
        this.parrafos = parrafos;
        return this;
    }

    @Override
    public String toString() {
        return "Art{" +
                "id='" + id + '\'' +
                ", titulo='" + titulo + '\'' +
                ", parrafos=" + parrafos +
                '}';
    }
}