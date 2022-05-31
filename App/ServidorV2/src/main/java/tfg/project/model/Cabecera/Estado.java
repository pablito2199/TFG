package tfg.project.model.Cabecera;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "estado")
public class Estado {

    private String estado;

    public String getEstado() {
        return estado;
    }

    @XmlAttribute
    public Estado setEstado(String estado) {
        this.estado = estado;
        return this;
    }

    @Override
    public String toString() {
        return "Estado{" +
                "estado='" + estado + '\'' +
                '}';
    }
}