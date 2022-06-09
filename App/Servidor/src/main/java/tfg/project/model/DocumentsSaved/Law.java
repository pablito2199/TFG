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

    public Law setId(String id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return name;
    }

    public Law setName(String name) {
        this.name = name;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Law law = (Law) o;
        return Objects.equals(getId(), law.getId()) && Objects.equals(getName(), law.getName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getName());
    }

    @Override
    public String toString() {
        return "Law{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}
