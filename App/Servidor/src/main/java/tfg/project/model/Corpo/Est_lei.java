package tfg.project.model.Corpo;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementWrapper;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

@XmlRootElement(name = "est_lei")
public class Est_lei {

    private List<Art> art;
    private List<Parrafo> firma;

    public List<Art> getArt() {
        return art;
    }

    public Est_lei setArt(List<Art> art) {
        this.art = art;
        return this;
    }

    public List<Parrafo> getFirma() {
        return firma;
    }

    @XmlElementWrapper(name = "firma")
    @XmlElement(name = "p")
    public Est_lei setFirma(List<Parrafo> firma) {
        this.firma = firma;
        return this;
    }

    @Override
    public String toString() {
        return "Est_lei{" +
                "art=" + art +
                ", firma=" + firma +
                '}';
    }
}