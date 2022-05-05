package tfg.project.model.DocumentsSaved;

import java.util.Objects;

public class Comment {
    private String date;
    private String user;
    private String content;
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
    public String getUser() {
        return user;
    }
    public void setUser(String user) {
        this.user = user;
    }
    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Comment comment = (Comment) o;
        return Objects.equals(date, comment.date) && Objects.equals(user, comment.user) && Objects.equals(content, comment.content);
    }
    @Override
    public int hashCode() {
        return Objects.hash(date, user, content);
    }
    @Override
    public String toString() {
        return "Comment{" +
                "date='" + date + '\'' +
                ", user='" + user + '\'' +
                ", content='" + content + '\'' +
                '}';
    }
}
