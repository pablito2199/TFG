package tfg.project.model.Corpo;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementWrapper;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

@XmlRootElement(name = "corpo")
public class Corpo {

    private Nota nota;
    private List<Parrafo> intro;
    private Est_lei est_lei;
    private Anexo anexo;

    public Nota getNota() {
        return nota;
    }

    public Corpo setNota(Nota nota) {
        this.nota = nota;
        return this;
    }

    public List<Parrafo> getIntro() {
        return intro;
    }

    @XmlElementWrapper(name = "intro")
    @XmlElement(name = "p")
    public Corpo setIntro(List<Parrafo> intro) {
        this.intro = intro;
        return this;
    }

    public Est_lei getEst_lei() {
        return est_lei;
    }

    public Corpo setEst_lei(Est_lei est_lei) {
        this.est_lei = est_lei;
        return this;
    }

    public Anexo getAnexo() {
        return anexo;
    }

    public Corpo setAnexo(Anexo anexo) {
        this.anexo = anexo;
        return this;
    }

    @Override
    public String toString() {
        return "Corpo{" +
                "nota=" + nota +
                ", intro=" + intro +
                ", est_lei=" + est_lei +
                ", anexo=" + anexo +
                '}';
    }
}