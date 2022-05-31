package tfg.project.model.Cabecera;

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
    public Id setAno(Integer ano) {
        this.ano = ano;
        return this;
    }

    public String getOrganismo() {
        return organismo;
    }

    @XmlAttribute
    public Id setOrganismo(String organismo) {
        this.organismo = organismo;
        return this;
    }

    public String getRango() {
        return rango;
    }

    @XmlAttribute
    public Id setRango(String rango) {
        this.rango = rango;
        return this;
    }

    public String getRef() {
        return ref;
    }

    @XmlAttribute
    public Id setRef(String ref) {
        this.ref = ref;
        return this;
    }

    public Integer getVersion() {
        return version;
    }

    @XmlAttribute
    public Id setVersion(Integer version) {
        this.version = version;
        return this;
    }

    public String getId() {
        return id;
    }

    @XmlValue
    public Id setId(String id) {
        this.id = id;
        return this;
    }

    @Override
    public String toString() {
        return "Id{" +
                "ano=" + ano +
                ", organismo='" + organismo + '\'' +
                ", rango='" + rango + '\'' +
                ", ref='" + ref + '\'' +
                ", version=" + version +
                ", id='" + id + '\'' +
                '}';
    }
}