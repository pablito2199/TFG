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
    @Schema(description = "Datos de cabeceira do documento.")
    private HeaderItems headerItems;
    @Schema(description = "Lista de notas escritas no documento.")
    private List<Note> notes;
    @Schema(description = "Lista de leis vinculadas co documento.")
    private List<Law> laws;
    @Schema(description = "Lista de cambios propostos no documento.")
    private List<Change> changes;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        FinalDocument that = (FinalDocument) o;
        return Objects.equals(id, that.id) && Objects.equals(headerItems, that.headerItems) && Objects.equals(notes, that.notes) && Objects.equals(laws, that.laws) && Objects.equals(changes, that.changes);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, headerItems, notes, laws, changes);
    }

    @Override
    public String toString() {
        return "FinalDocument{" +
                "id='" + id + '\'' +
                ", headerItems=" + headerItems +
                ", notes=" + notes +
                ", laws=" + laws +
                ", changes=" + changes +
                '}';
    }
}
