package tfg.project.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.v3.oas.annotations.media.Schema;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.List;
import java.util.Objects;

@Document(collection = "users")
@JsonInclude(JsonInclude.Include.NON_NULL)
@Schema(
        name = "User",
        description = "A complete user representation"
)
public class User {
    @Id
    @NotBlank(message = "O campo de email non pode estar vacío.")
    @Email
    @Schema(required = true, description = "Email do usuario.", example = "test@test.com")
    private String email;
    @NotBlank(message = "O campo de nome non pode estar vacío.")
    @Schema(description = "Nome do usuario.", example = "Pepe")
    private String nome;
    @Schema(description = "Apelidos do usuario.", example = "Pérez Castro")
    private String apelidos;
    @Schema(description = "Contraseña do usuario.", example = "Abc123.@")
    private String password;
    @Schema(description = "Rol do usuario.", example = "[\"ROLE_USER\"]")
    private List<String> roles;

    public String getEmail() {
        return email;
    }

    public User setEmail(String email) {
        this.email = email;
        return this;
    }

    public String getNome() {
        return nome;
    }

    public User setNome(String nome) {
        this.nome = nome;
        return this;
    }

    public String getApelidos() {
        return apelidos;
    }

    public User setApelidos(String apelidos) {
        this.apelidos = apelidos;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public User setPassword(String password) {
        this.password = password;
        return this;
    }

    public List<String> getRoles() {
        return roles;
    }

    public User setRoles(List<String> roles) {
        this.roles = roles;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(email, user.email) && Objects.equals(nome, user.nome) && Objects.equals(apelidos, user.apelidos) && Objects.equals(password, user.password) && Objects.equals(roles, user.roles);
    }

    @Override
    public int hashCode() {
        return Objects.hash(email, nome, apelidos, password, roles);
    }

    @Override
    public String toString() {
        return "User{" +
                "email='" + email + '\'' +
                ", nome='" + nome + '\'' +
                ", apelidos='" + apelidos + '\'' +
                ", password='" + password + '\'' +
                ", roles=" + roles +
                '}';
    }
}