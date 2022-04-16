import Cabecera.Cabecera;
import Corpo.Corpo;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "cdg")
public class Documento {

    private Cabecera cab;
    private Corpo corpo;

    public Cabecera getCabecera() {
        return cab;
    }

    public void setCabecera(Cabecera cabecera) {
        this.cab = cabecera;
    }

    public Cabecera getCab() {
        return cab;
    }

    public void setCab(Cabecera cab) {
        this.cab = cab;
    }

    public Corpo getCorpo() {
        return corpo;
    }

    public void setCorpo(Corpo corpo) {
        this.corpo = corpo;
    }
}
