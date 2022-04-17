package tfg.project.model.Corpo;

import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlValue;

@XmlRootElement(name = "p")
public class Parrafo {

    private String parrafo;

    public String getParrafo() {
        return parrafo;
    }

    @XmlValue
    public Parrafo setParrafo(String parrafo) {
        this.parrafo = parrafo;
        return this;
    }

    @Override
    public String toString() {
        return "Parrafo{" +
                "parrafo='" + parrafo + '\'' +
                '}';
    }
}
