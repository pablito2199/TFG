package tfg.project.model.DocumentsSaved;

import java.util.Objects;

public class Change {
    private String id;
    private String oldValue;
    private String newValue;
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getOldValue() {
        return oldValue;
    }
    public void setOldValue(String oldValue) {
        this.oldValue = oldValue;
    }
    public String getNewValue() {
        return newValue;
    }
    public void setNewValue(String newValue) {
        this.newValue = newValue;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Change change = (Change) o;
        return Objects.equals(id, change.id) && Objects.equals(oldValue, change.oldValue) && Objects.equals(newValue, change.newValue);
    }
    @Override
    public int hashCode() {
        return Objects.hash(id, oldValue, newValue);
    }
    @Override
    public String toString() {
        return "Change{" +
                "id='" + id + '\'' +
                ", oldValue='" + oldValue + '\'' +
                ", newValue='" + newValue + '\'' +
                '}';
    }
}
