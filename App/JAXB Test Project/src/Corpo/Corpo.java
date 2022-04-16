package Corpo;

import java.util.List;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementWrapper;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "corpo")
public class Corpo {

    private Nota nota;
    private List<Parrafo> intro;
    private Est_lei est_lei;
    private Anexo anexo;

    public Nota getNota() {
        return nota;
    }

    public void setNota(Nota nota) {
        this.nota = nota;
    }

    public List<Parrafo> getIntro() {
        return intro;
    }

    @XmlElementWrapper(name = "intro")
    @XmlElement(name = "p")
    public void setIntro(List<Parrafo> intro) {
        this.intro = intro;
    }

    public Est_lei getEst_lei() {
        return est_lei;
    }

    public void setEst_lei(Est_lei est_lei) {
        this.est_lei = est_lei;
    }

    public Anexo getAnexo() {
        return anexo;
    }

    public void setAnexo(Anexo anexo) {
        this.anexo = anexo;
    }

    @Override
    public String toString() {
        return "Corpo{" + "nota=" + nota + ", intro=" + intro + ", est_lei=" + est_lei + ", anexo=" + anexo + '}';
    }
}
