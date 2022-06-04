package tfg.project.model.DocumentsSaved;

import io.swagger.v3.oas.annotations.media.Schema;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Objects;

@Document(collection = "finalDocuments")
@Schema(description = "Datos adicionais dun documento.")
public class FinalDocument {
    @Schema(description = "Id do documento.", example = "1651743500014")
    private String id;
    @Schema(description = "Sumario da norma.", example = "Sumario.")
    private String sumario;
    @Schema(description = "Url ao documento no DOG.", example = "/dog/Publicados/2022/20220525/AnuncioL180-200522-0001_gl.html")
    private String urlDog;
    @Schema(description = "O documento é borrador ou non.", example = "true")
    private boolean borrador;
    @Schema(description = "HTML do documento a editar.", example = "<p>Documento</p>")
    private String htmlDoc;
    @Schema(description = "Datos de cabeceira do documento.")
    private HeaderItems headerItems;
    @Schema(description = "Lista de notas escritas no documento.")
    private List<Note> notes;
    @Schema(description = "Lista de leis vinculadas co documento.")
    private List<Law> laws;
    @Schema(description = "Lista de cambios propostos no documento.")
    private List<Change> changes;
    @Schema(description = "Lista de cambios realizados sobre leis vinculadas.")
    private List<LinkedChange> linkedChanges;

    public String getId() {
        return id;
    }

    public FinalDocument setId(String id) {
        this.id = id;
        return this;
    }

    public String getSumario() {
        return sumario;
    }

    public FinalDocument setSumario(String sumario) {
        this.sumario = sumario;
        return this;
    }

    public String getUrlDog() {
        return urlDog;
    }

    public FinalDocument setUrlDog(String urlDog) {
        this.urlDog = urlDog;
        return this;
    }

    public boolean isBorrador() {
        return borrador;
    }

    public FinalDocument setBorrador(boolean borrador) {
        this.borrador = borrador;
        return this;
    }

    public String getHtmlDoc() {
        return htmlDoc;
    }

    public FinalDocument setHtmlDoc(String htmlDoc) {
        this.htmlDoc = htmlDoc;
        return this;
    }

    public HeaderItems getHeaderItems() {
        return headerItems;
    }

    public FinalDocument setHeaderItems(HeaderItems headerItems) {
        this.headerItems = headerItems;
        return this;
    }

    public List<Note> getNotes() {
        return notes;
    }

    public FinalDocument setNotes(List<Note> notes) {
        this.notes = notes;
        return this;
    }

    public List<Law> getLaws() {
        return laws;
    }

    public FinalDocument setLaws(List<Law> laws) {
        this.laws = laws;
        return this;
    }

    public List<Change> getChanges() {
        return changes;
    }

    public FinalDocument setChanges(List<Change> changes) {
        this.changes = changes;
        return this;
    }

    public List<LinkedChange> getLinkedChanges() {
        return linkedChanges;
    }

    public FinalDocument setLinkedChanges(List<LinkedChange> linkedChanges) {
        this.linkedChanges = linkedChanges;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        FinalDocument that = (FinalDocument) o;
        return borrador == that.borrador && Objects.equals(id, that.id) && Objects.equals(sumario, that.sumario) && Objects.equals(urlDog, that.urlDog) && Objects.equals(htmlDoc, that.htmlDoc) && Objects.equals(headerItems, that.headerItems) && Objects.equals(notes, that.notes) && Objects.equals(laws, that.laws) && Objects.equals(changes, that.changes) && Objects.equals(linkedChanges, that.linkedChanges);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, sumario, urlDog, borrador, htmlDoc, headerItems, notes, laws, changes, linkedChanges);
    }

    @Override
    public String toString() {
        return "FinalDocument{" +
                "id='" + id + '\'' +
                ", sumario='" + sumario + '\'' +
                ", urlDog='" + urlDog + '\'' +
                ", borrador=" + borrador +
                ", htmlDoc='" + htmlDoc + '\'' +
                ", headerItems=" + headerItems +
                ", notes=" + notes +
                ", laws=" + laws +
                ", changes=" + changes +
                ", linkedChanges=" + linkedChanges +
                '}';
    }
}
