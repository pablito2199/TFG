package tfg.project.model.Cabecera;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlValue;

@XmlRootElement(name = "modif")
public class Modif {

    private String elemento;
    private String lei_fonte;
    private String lei_modif;
    private String tipo;
    private String modif;

    public String getElemento() {
        return elemento;
    }

    @XmlAttribute
    public Modif setElemento(String elemento) {
        this.elemento = elemento;
        return this;
    }

    public String getLei_fonte() {
        return lei_fonte;
    }

    @XmlAttribute(name = "lei_fonte")
    public Modif setLei_fonte(String lei_fonte) {
        this.lei_fonte = lei_fonte;
        return this;
    }

    public String getLei_modif() {
        return lei_modif;
    }

    @XmlAttribute(name = "lei_modif")
    public Modif setLei_modif(String lei_modif) {
        this.lei_modif = lei_modif;
        return this;
    }

    public String getTipo() {
        return tipo;
    }

    @XmlAttribute
    public Modif setTipo(String tipo) {
        this.tipo = tipo;
        return this;
    }

    public String getModif() {
        return modif;
    }

    @XmlValue
    public Modif setModif(String modif) {
        this.modif = modif;
        return this;
    }

    @Override
    public String toString() {
        return "Modif{" +
                "elemento='" + elemento + '\'' +
                ", lei_fonte='" + lei_fonte + '\'' +
                ", lei_modif='" + lei_modif + '\'' +
                ", tipo='" + tipo + '\'' +
                ", modif='" + modif + '\'' +
                '}';
    }
}