package Cabecera;

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
    public void setElemento(String elemento) {
        this.elemento = elemento;
    }

    public String getLei_fonte() {
        return lei_fonte;
    }

    @XmlAttribute(name = "lei_fonte")
    public void setLei_fonte(String lei_fonte) {
        this.lei_fonte = lei_fonte;
    }

    public String getLei_modif() {
        return lei_modif;
    }

    @XmlAttribute(name = "lei_modif")
    public void setLei_modif(String lei_modif) {
        this.lei_modif = lei_modif;
    }

    public String getTipo() {
        return tipo;
    }

    @XmlAttribute
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getModif() {
        return modif;
    }

    @XmlValue
    public void setModif(String modif) {
        this.modif = modif;
    }

    @Override
    public String toString() {
        return "Modif{" + "elemento=" + elemento + ", lei_fonte=" + lei_fonte + ", lei_modif=" + lei_modif + ", tipo=" + tipo + ", modif=" + modif + '}';
    }
}
