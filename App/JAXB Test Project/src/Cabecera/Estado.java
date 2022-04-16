package Cabecera;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "estado")
public class Estado {

    private String estado;

    public String getEstado() {
        return estado;
    }

    @XmlAttribute
    public void setEstado(String estado) {
        this.estado = estado;
    }

    @Override
    public String toString() {
        return "Estado{" + "estado=" + estado + '}';
    }
}
