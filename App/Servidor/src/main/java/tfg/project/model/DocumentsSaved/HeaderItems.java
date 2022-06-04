package tfg.project.model.DocumentsSaved;

import io.swagger.v3.oas.annotations.media.Schema;

import java.util.Objects;

@Schema(description = "Cambios propostos nun documento.")
public class HeaderItems {
    @Schema(description = "Título da norma.", example = "Título")
    private String titulo;
    @Schema(description = "Publicador da norma.", example = "Concello de Lugo")
    private String publicador;
    @Schema(description = "Data de publicación.", example = "04-04-2020")
    private String dpub;
    @Schema(description = "Referencia de publicación.", example = "DOG 190 01/10/2021")
    private String refpub;
    @Schema(description = "Ano de publicación.", example = "2022")
    private String ano;
    @Schema(description = "Versión da norma.", example = "20220224")
    private String version;
    @Schema(description = "Referencia.", example = "2909A")
    private String referencia;
    @Schema(description = "Data de publicación no DOG.", example = "04-04-2020")
    private String fechaDog;
    @Schema(description = "Data de entrada en vigor da lei.", example = "04-04-2020")
    private String dvl_desde;
    @Schema(description = "Estado da norma.", example = "En vigor")
    private String estadoSeleccionado;
    @Schema(description = "Nome do ficheiro.", example = "ord_CS-------_2909B_2021_20210929.pdf")
    private String nomfic;
    @Schema(description = "Colectivo ao que afecta a norma.", example = "21001")
    private String colectivoSeleccionado;
    @Schema(description = "Organismo ao que afecta a norma.", example = "20001")
    private String organismoSeleccionado;
    @Schema(description = "Tipo de norma.", example = "1")
    private String rangoSeleccionado;
    @Schema(description = "Sección da norma.", example = "1")
    private String seccionSeleccionada;
    @Schema(description = "Temática da norma.", example = "22001")
    private String tematicaSeleccionada;
    @Schema(description = "Número do DOG no que está publicado.", example = "86")
    private String numDog;

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getPublicador() {
        return publicador;
    }

    public void setPublicador(String publicador) {
        this.publicador = publicador;
    }

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
        return Objects.equals(titulo, that.titulo) && Objects.equals(publicador, that.publicador) && Objects.equals(dpub, that.dpub) && Objects.equals(refpub, that.refpub) && Objects.equals(ano, that.ano) && Objects.equals(version, that.version) && Objects.equals(referencia, that.referencia) && Objects.equals(fechaDog, that.fechaDog) && Objects.equals(dvl_desde, that.dvl_desde) && Objects.equals(estadoSeleccionado, that.estadoSeleccionado) && Objects.equals(nomfic, that.nomfic) && Objects.equals(colectivoSeleccionado, that.colectivoSeleccionado) && Objects.equals(organismoSeleccionado, that.organismoSeleccionado) && Objects.equals(rangoSeleccionado, that.rangoSeleccionado) && Objects.equals(seccionSeleccionada, that.seccionSeleccionada) && Objects.equals(tematicaSeleccionada, that.tematicaSeleccionada) && Objects.equals(numDog, that.numDog);
    }

    @Override
    public int hashCode() {
        return Objects.hash(titulo, publicador, dpub, refpub, ano, version, referencia, fechaDog, dvl_desde, estadoSeleccionado, nomfic, colectivoSeleccionado, organismoSeleccionado, rangoSeleccionado, seccionSeleccionada, tematicaSeleccionada, numDog);
    }

    @Override
    public String toString() {
        return "HeaderItems{" +
                "titulo='" + titulo + '\'' +
                ", publicador='" + publicador + '\'' +
                ", dpub='" + dpub + '\'' +
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
