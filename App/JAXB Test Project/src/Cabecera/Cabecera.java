package Cabecera;

import java.util.List;
import javax.xml.bind.annotation.XmlRootElement;

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

    public void setId(Id id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getTit_curto() {
        return tit_curto;
    }

    public void setTit_curto(String tit_curto) {
        this.tit_curto = tit_curto;
    }

    public Estado getEstado() {
        return estado;
    }

    public void setEstado(Estado estado) {
        this.estado = estado;
    }

    public String getRefpub() {
        return refpub;
    }

    public void setRefpub(String refpub) {
        this.refpub = refpub;
    }

    public String getDvl_desde() {
        return dvl_desde;
    }

    public void setDvl_desde(String dvl_desde) {
        this.dvl_desde = dvl_desde;
    }

    public String getDpub() {
        return dpub;
    }

    public void setDpub(String dpub) {
        this.dpub = dpub;
    }

    public String getNomfic() {
        return nomfic;
    }

    public void setNomfic(String nomfic) {
        this.nomfic = nomfic;
    }

    public List<Modif> getModif() {
        return modif;
    }

    public void setModif(List<Modif> modif) {
        this.modif = modif;
    }

    @Override
    public String toString() {
        return "Cabecera{" + "id=" + id + ", titulo=" + titulo + ", tit_curto=" + tit_curto + ", estado=" + estado + ", refpub=" + refpub + ", dvl_desde=" + dvl_desde + ", dpub=" + dpub + ", nomfic=" + nomfic + ", modif=" + modif + '}';
    }
}
