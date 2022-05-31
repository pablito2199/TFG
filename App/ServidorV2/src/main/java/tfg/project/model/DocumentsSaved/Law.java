package tfg.project.model.DocumentsSaved;

import io.swagger.v3.oas.annotations.media.Schema;

import java.util.Objects;

public class Law {
    @Schema(description = "Id da lei vinculada.", example = "1651758326037")
    private String id;
    @Schema(description = "Nome da lei vinculada.", example = "Orde do 20 de agosto de 2021")
    private String name;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }


    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Law law = (Law) o;
        return Objects.equals(id, law.id) && Objects.equals(name, law.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }

    @Override
    public String toString() {
        return "Law{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}
