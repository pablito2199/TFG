package Cabecera;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlValue;

@XmlRootElement(name = "id")
public class Id {

    private Integer ano;
    private String organismo;
    private String rango;
    private String ref;
    private Integer version;
    private String id;

    public Integer getAno() {
        return ano;
    }

    @XmlAttribute
    public void setAno(Integer ano) {
        this.ano = ano;
    }

    public String getOrganismo() {
        return organismo;
    }

    @XmlAttribute
    public void setOrganismo(String organismo) {
        this.organismo = organismo;
    }

    public String getRango() {
        return rango;
    }

    @XmlAttribute
    public void setRango(String rango) {
        this.rango = rango;
    }

    public String getRef() {
        return ref;
    }

    @XmlAttribute
    public void setRef(String ref) {
        this.ref = ref;
    }

    public Integer getVersion() {
        return version;
    }

    @XmlAttribute
    public void setVersion(Integer version) {
        this.version = version;
    }

    public String getId() {
        return id;
    }

    @XmlValue
    public void setId(String id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Id{" + "ano=" + ano + ", organismo=" + organismo + ", rango=" + rango + ", ref=" + ref + ", version=" + version + ", id=" + id + '}';
    }
}
