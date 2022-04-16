package Corpo;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlValue;

@XmlRootElement(name = "nota")
public class Nota {

    private String tipo;
    private String nota;

    public String getTipo() {
        return tipo;
    }

    @XmlAttribute
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getNota() {
        return nota;
    }

    @XmlValue
    public void setNota(String nota) {
        this.nota = nota;
    }

    @Override
    public String toString() {
        return "Nota{" + "tipo=" + tipo + ", nota=" + nota + '}';
    }
}
