package tfg.project.model.DocumentsSaved;

import java.util.List;
import java.util.Objects;
public class Note {
    private String id;
    private String user;
    private String date;
    private String content;
    private List<Comment> comments;
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getUser() {
        return user;
    }
    public void setUser(String user) {
        this.user = user;
    }
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }
    public List<Comment> getComments() {
        return comments;
    }
    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Note note = (Note) o;
        return Objects.equals(id, note.id) && Objects.equals(user, note.user) && Objects.equals(date, note.date) && Objects.equals(content, note.content) && Objects.equals(comments, note.comments);
    }
    @Override
    public int hashCode() {
        return Objects.hash(id, user, date, content, comments);
    }
    @Override
    public String toString() {
        return "Note{" +
                "id='" + id + '\'' +
                ", user='" + user + '\'' +
                ", date='" + date + '\'' +
                ", content='" + content + '\'' +
                ", comments=" + comments +
                '}';
    }
}
