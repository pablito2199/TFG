package tfg.project.model.Cabecera;

import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

@XmlRootElement(name = "cab")
public class Cabecera {

    private Id id;
    private String titulo;
    private String tit_curto;
    private Estado estado;
    private String refpub;
    private String dvl_desde;
    private String dpub;
    private String nomfic;
    private List<Modif> modif;

    public Id getId() {
        return id;
    }

    public Cabecera setId(Id id) {
        this.id = id;
        return this;
    }

    public String getTitulo() {
        return titulo;
    }

    public Cabecera setTitulo(String titulo) {
        this.titulo = titulo;
        return this;
    }

    public String getTit_curto() {
        return tit_curto;
    }

    public Cabecera setTit_curto(String tit_curto) {
        this.tit_curto = tit_curto;
        return this;
    }

    public Estado getEstado() {
        return estado;
    }

    public Cabecera setEstado(Estado estado) {
        this.estado = estado;
        return this;
    }

    public String getRefpub() {
        return refpub;
    }

    public Cabecera setRefpub(String refpub) {
        this.refpub = refpub;
        return this;
    }

    public String getDvl_desde() {
        return dvl_desde;
    }

    public Cabecera setDvl_desde(String dvl_desde) {
        this.dvl_desde = dvl_desde;
        return this;
    }

    public String getDpub() {
        return dpub;
    }

    public Cabecera setDpub(String dpub) {
        this.dpub = dpub;
        return this;
    }

    public String getNomfic() {
        return nomfic;
    }

    public Cabecera setNomfic(String nomfic) {
        this.nomfic = nomfic;
        return this;
    }

    public List<Modif> getModif() {
        return modif;
    }

    public Cabecera setModif(List<Modif> modif) {
        this.modif = modif;
        return this;
    }

    @Override
    public String toString() {
        return "Cabecera{" +
                "id=" + id +
                ", titulo='" + titulo + '\'' +
                ", tit_curto='" + tit_curto + '\'' +
                ", estado=" + estado +
                ", refpub='" + refpub + '\'' +
                ", dvl_desde='" + dvl_desde + '\'' +
                ", dpub='" + dpub + '\'' +
                ", nomfic='" + nomfic + '\'' +
                ", modif=" + modif +
                '}';
    }
}