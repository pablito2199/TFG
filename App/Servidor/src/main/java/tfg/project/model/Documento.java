package tfg.project.model;

import tfg.project.model.Cabecera.Cabecera;
import tfg.project.model.Corpo.Corpo;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "cdg")
public class Documento {

    private Cabecera cab;
    private Corpo corpo;

    public Cabecera getCab() {
        return cab;
    }

    public Documento setCab(Cabecera cab) {
        this.cab = cab;
        return this;
    }

    public Corpo getCorpo() {
        return corpo;
    }

    public Documento setCorpo(Corpo corpo) {
        this.corpo = corpo;
        return this;
    }

    @Override
    public String toString() {
        return "Documento{" +
                "cab=" + cab +
                ", corpo=" + corpo +
                '}';
    }
}