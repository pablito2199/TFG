package tfg.project.model.Corpo;

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
    public Nota setTipo(String tipo) {
        this.tipo = tipo;
        return this;
    }

    public String getNota() {
        return nota;
    }

    @XmlValue
    public Nota setNota(String nota) {
        this.nota = nota;
        return this;
    }

    @Override
    public String toString() {
        return "Nota{" +
                "tipo='" + tipo + '\'' +
                ", nota='" + nota + '\'' +
                '}';
    }
}