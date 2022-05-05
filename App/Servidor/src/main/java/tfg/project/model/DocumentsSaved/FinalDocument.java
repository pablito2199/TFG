package tfg.project.model.DocumentsSaved;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Objects;

@Document(collection = "finalDocuments")
public class FinalDocument {
    private String id;
    private List<Note> notes;
    private List<Change> changes;
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public List<Note> getNotes() {
        return notes;
    }
    public void setNotes(List<Note> notes) {
        this.notes = notes;
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
        return Objects.equals(id, that.id) && Objects.equals(notes, that.notes) && Objects.equals(changes, that.changes);
    }
    @Override
    public int hashCode() {
        return Objects.hash(id, notes, changes);
    }
    @Override
    public String toString() {
        return "FinalDocument{" +
                "id='" + id + '\'' +
                ", notes=" + notes +
                ", changes=" + changes +
                '}';
    }
}
