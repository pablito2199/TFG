package tfg.project.model.DocumentsSaved;

import io.swagger.v3.oas.annotations.media.Schema;

import java.util.Objects;

@Schema(description = "Cambios propostos nun documento.")
public class HeaderItems {
    private String dpub;
    private String refpub;
    private String ano;
    private String version;
    private String referencia;
    private String fechaDog;
    private String dvl_desde;
    private String estadoSeleccionado;
    private String nomfic;
    private String colectivoSeleccionado;
    private String organismoSeleccionado;
    private String rangoSeleccionado;
    private String seccionSeleccionada;
    private String tematicaSeleccionada;
    private String numDog;

    public String getDpub() {
        return dpub;
    }

    public void setDpub(String dpub) {
        this.dpub = dpub;
    }

    public String getRefpub() {
        return refpub;
    }

    public void setRefpub(String refpub) {
        this.refpub = refpub;
    }

    public String getAno() {
        return ano;
    }

    public void setAno(String ano) {
        this.ano = ano;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public String getReferencia() {
        return referencia;
    }

    public void setReferencia(String referencia) {
        this.referencia = referencia;
    }

    public String getFechaDog() {
        return fechaDog;
    }

    public void setFechaDog(String fechaDog) {
        this.fechaDog = fechaDog;
    }

    public String getDvl_desde() {
        return dvl_desde;
    }

    public void setDvl_desde(String dvl_desde) {
        this.dvl_desde = dvl_desde;
    }

    public String getEstadoSeleccionado() {
        return estadoSeleccionado;
    }

    public void setEstadoSeleccionado(String estadoSeleccionado) {
        this.estadoSeleccionado = estadoSeleccionado;
    }

    public String getNomfic() {
        return nomfic;
    }

    public void setNomfic(String nomfic) {
        this.nomfic = nomfic;
    }

    public String getColectivoSeleccionado() {
        return colectivoSeleccionado;
    }

    public void setColectivoSeleccionado(String colectivoSeleccionado) {
        this.colectivoSeleccionado = colectivoSeleccionado;
    }

    public String getOrganismoSeleccionado() {
        return organismoSeleccionado;
    }

    public void setOrganismoSeleccionado(String organismoSeleccionado) {
        this.organismoSeleccionado = organismoSeleccionado;
    }

    public String getRangoSeleccionado() {
        return rangoSeleccionado;
    }

    public void setRangoSeleccionado(String rangoSeleccionado) {
        this.rangoSeleccionado = rangoSeleccionado;
    }

    public String getSeccionSeleccionada() {
        return seccionSeleccionada;
    }

    public void setSeccionSeleccionada(String seccionSeleccionada) {
        this.seccionSeleccionada = seccionSeleccionada;
    }

    public String getTematicaSeleccionada() {
        return tematicaSeleccionada;
    }

    public void setTematicaSeleccionada(String tematicaSeleccionada) {
        this.tematicaSeleccionada = tematicaSeleccionada;
    }

    public String getNumDog() {
        return numDog;
    }

    public void setNumDog(String numDog) {
        this.numDog = numDog;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        HeaderItems that = (HeaderItems) o;
        return Objects.equals(dpub, that.dpub) && Objects.equals(refpub, that.refpub) && Objects.equals(ano, that.ano) && Objects.equals(version, that.version) && Objects.equals(referencia, that.referencia) && Objects.equals(fechaDog, that.fechaDog) && Objects.equals(dvl_desde, that.dvl_desde) && Objects.equals(estadoSeleccionado, that.estadoSeleccionado) && Objects.equals(nomfic, that.nomfic) && Objects.equals(colectivoSeleccionado, that.colectivoSeleccionado) && Objects.equals(organismoSeleccionado, that.organismoSeleccionado) && Objects.equals(rangoSeleccionado, that.rangoSeleccionado) && Objects.equals(seccionSeleccionada, that.seccionSeleccionada) && Objects.equals(tematicaSeleccionada, that.tematicaSeleccionada) && Objects.equals(numDog, that.numDog);
    }

    @Override
    public int hashCode() {
        return Objects.hash(dpub, refpub, ano, version, referencia, fechaDog, dvl_desde, estadoSeleccionado, nomfic, colectivoSeleccionado, organismoSeleccionado, rangoSeleccionado, seccionSeleccionada, tematicaSeleccionada, numDog);
    }

    @Override
    public String toString() {
        return "HeaderItems{" +
                "dpub='" + dpub + '\'' +
                ", refpub='" + refpub + '\'' +
                ", ano='" + ano + '\'' +
                ", version='" + version + '\'' +
                ", referencia='" + referencia + '\'' +
                ", fechaDog='" + fechaDog + '\'' +
                ", dvl_desde='" + dvl_desde + '\'' +
                ", estadoSeleccionado='" + estadoSeleccionado + '\'' +
                ", nomfic='" + nomfic + '\'' +
                ", colectivoSeleccionado='" + colectivoSeleccionado + '\'' +
                ", organismoSeleccionado='" + organismoSeleccionado + '\'' +
                ", rangoSeleccionado='" + rangoSeleccionado + '\'' +
                ", seccionSeleccionada='" + seccionSeleccionada + '\'' +
                ", tematicaSeleccionada='" + tematicaSeleccionada + '\'' +
                ", numDog='" + numDog + '\'' +
                '}';
    }
}
