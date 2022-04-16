package Corpo;

import java.util.List;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementWrapper;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "est_lei")
public class Est_lei {

    private List<Art> art;
    private List<Parrafo> firma;

    public List<Art> getArt() {
        return art;
    }

    public void setArt(List<Art> art) {
        this.art = art;
    }

    public List<Parrafo> getFirma() {
        return firma;
    }

    @XmlElementWrapper(name = "firma")
    @XmlElement(name = "p")
    public void setFirma(List<Parrafo> firma) {
        this.firma = firma;
    }

    @Override
    public String toString() {
        return "Est_lei{" + "art=" + art + ", firma=" + firma + '}';
    }
}
