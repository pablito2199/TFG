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

    public HeaderItems setTitulo(String titulo) {
        this.titulo = titulo;
        return this;
    }

    public String getPublicador() {
        return publicador;
    }

    public HeaderItems setPublicador(String publicador) {
        this.publicador = publicador;
        return this;
    }

    public String getDpub() {
        return dpub;
    }

    public HeaderItems setDpub(String dpub) {
        this.dpub = dpub;
        return this;
    }

    public String getRefpub() {
        return refpub;
    }

    public HeaderItems setRefpub(String refpub) {
        this.refpub = refpub;
        return this;
    }

    public String getAno() {
        return ano;
    }

    public HeaderItems setAno(String ano) {
        this.ano = ano;
        return this;
    }

    public String getVersion() {
        return version;
    }

    public HeaderItems setVersion(String version) {
        this.version = version;
        return this;
    }

    public String getReferencia() {
        return referencia;
    }

    public HeaderItems setReferencia(String referencia) {
        this.referencia = referencia;
        return this;
    }

    public String getFechaDog() {
        return fechaDog;
    }

    public HeaderItems setFechaDog(String fechaDog) {
        this.fechaDog = fechaDog;
        return this;
    }

    public String getDvl_desde() {
        return dvl_desde;
    }

    public HeaderItems setDvl_desde(String dvl_desde) {
        this.dvl_desde = dvl_desde;
        return this;
    }

    public String getEstadoSeleccionado() {
        return estadoSeleccionado;
    }

    public HeaderItems setEstadoSeleccionado(String estadoSeleccionado) {
        this.estadoSeleccionado = estadoSeleccionado;
        return this;
    }

    public String getNomfic() {
        return nomfic;
    }

    public HeaderItems setNomfic(String nomfic) {
        this.nomfic = nomfic;
        return this;
    }

    public String getColectivoSeleccionado() {
        return colectivoSeleccionado;
    }

    public HeaderItems setColectivoSeleccionado(String colectivoSeleccionado) {
        this.colectivoSeleccionado = colectivoSeleccionado;
        return this;
    }

    public String getOrganismoSeleccionado() {
        return organismoSeleccionado;
    }

    public HeaderItems setOrganismoSeleccionado(String organismoSeleccionado) {
        this.organismoSeleccionado = organismoSeleccionado;
        return this;
    }

    public String getRangoSeleccionado() {
        return rangoSeleccionado;
    }

    public HeaderItems setRangoSeleccionado(String rangoSeleccionado) {
        this.rangoSeleccionado = rangoSeleccionado;
        return this;
    }

    public String getSeccionSeleccionada() {
        return seccionSeleccionada;
    }

    public HeaderItems setSeccionSeleccionada(String seccionSeleccionada) {
        this.seccionSeleccionada = seccionSeleccionada;
        return this;
    }

    public String getTematicaSeleccionada() {
        return tematicaSeleccionada;
    }

    public HeaderItems setTematicaSeleccionada(String tematicaSeleccionada) {
        this.tematicaSeleccionada = tematicaSeleccionada;
        return this;
    }

    public String getNumDog() {
        return numDog;
    }

    public HeaderItems setNumDog(String numDog) {
        this.numDog = numDog;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        HeaderItems that = (HeaderItems) o;
        return Objects.equals(getTitulo(), that.getTitulo()) && Objects.equals(getPublicador(), that.getPublicador()) && Objects.equals(getDpub(), that.getDpub()) && Objects.equals(getRefpub(), that.getRefpub()) && Objects.equals(getAno(), that.getAno()) && Objects.equals(getVersion(), that.getVersion()) && Objects.equals(getReferencia(), that.getReferencia()) && Objects.equals(getFechaDog(), that.getFechaDog()) && Objects.equals(getDvl_desde(), that.getDvl_desde()) && Objects.equals(getEstadoSeleccionado(), that.getEstadoSeleccionado()) && Objects.equals(getNomfic(), that.getNomfic()) && Objects.equals(getColectivoSeleccionado(), that.getColectivoSeleccionado()) && Objects.equals(getOrganismoSeleccionado(), that.getOrganismoSeleccionado()) && Objects.equals(getRangoSeleccionado(), that.getRangoSeleccionado()) && Objects.equals(getSeccionSeleccionada(), that.getSeccionSeleccionada()) && Objects.equals(getTematicaSeleccionada(), that.getTematicaSeleccionada()) && Objects.equals(getNumDog(), that.getNumDog());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getTitulo(), getPublicador(), getDpub(), getRefpub(), getAno(), getVersion(), getReferencia(), getFechaDog(), getDvl_desde(), getEstadoSeleccionado(), getNomfic(), getColectivoSeleccionado(), getOrganismoSeleccionado(), getRangoSeleccionado(), getSeccionSeleccionada(), getTematicaSeleccionada(), getNumDog());
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
