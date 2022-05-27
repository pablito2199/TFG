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
    @Schema(description = "Url ao documento no DOG.", example = "/dog/Publicados/2022/20220525/AnuncioL180-200522-0001_gl.html")
    private String urlDog;
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

    public void setId(String id) {
        this.id = id;
    }

    public String getUrlDog() {
        return urlDog;
    }

    public void setUrlDog(String urlDog) {
        this.urlDog = urlDog;
    }

    public String getHtmlDoc() {
        return htmlDoc;
    }

    public void setHtmlDoc(String htmlDoc) {
        this.htmlDoc = htmlDoc;
    }

    public HeaderItems getHeaderItems() {
        return headerItems;
    }

    public void setHeaderItems(HeaderItems headerItems) {
        this.headerItems = headerItems;
    }

    public List<Note> getNotes() {
        return notes;
    }

    public void setNotes(List<Note> notes) {
        this.notes = notes;
    }

    public List<Law> getLaws() {
        return laws;
    }

    public void setLaws(List<Law> laws) {
        this.laws = laws;
    }

    public List<Change> getChanges() {
        return changes;
    }

    public void setChanges(List<Change> changes) {
        this.changes = changes;
    }

    public List<LinkedChange> getLinkedChanges() {
        return linkedChanges;
    }

    public void setLinkedChanges(List<LinkedChange> linkedChanges) {
        this.linkedChanges = linkedChanges;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        FinalDocument that = (FinalDocument) o;
        return Objects.equals(id, that.id) && Objects.equals(urlDog, that.urlDog) && Objects.equals(htmlDoc, that.htmlDoc) && Objects.equals(headerItems, that.headerItems) && Objects.equals(notes, that.notes) && Objects.equals(laws, that.laws) && Objects.equals(changes, that.changes) && Objects.equals(linkedChanges, that.linkedChanges);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, urlDog, htmlDoc, headerItems, notes, laws, changes, linkedChanges);
    }

    @Override
    public String toString() {
        return "FinalDocument{" +
                "id='" + id + '\'' +
                ", urlDog='" + urlDog + '\'' +
                ", htmlDoc='" + htmlDoc + '\'' +
                ", headerItems=" + headerItems +
                ", notes=" + notes +
                ", laws=" + laws +
                ", changes=" + changes +
                ", linkedChanges=" + linkedChanges +
                '}';
    }
}
