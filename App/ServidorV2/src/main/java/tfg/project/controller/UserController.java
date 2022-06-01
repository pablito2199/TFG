package tfg.project.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import tfg.project.model.User;
import tfg.project.service.UserService;

import javax.validation.Valid;
import java.util.*;

@RestController
@RequestMapping("users")
@Tag(name = "User API", description = "Operacións realizadas sobre usuarios.")
@SecurityRequirement(name = "JWT")
public class UserController {
    private final UserService users;

    @Autowired
    public UserController(UserService users) {
        this.users = users;
    }

    @GetMapping(
            path = "{id}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    @Operation(
            operationId = "obter",
            summary = "Obtén os datos dun usuario",
            description = "Obtén os datos dun usuario. Para ver estos detalles é necesario ser " +
                    "o propio usuario que ten iniciada a sesión ou un usuario administrador."
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "Os datos do usuario.",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = User.class)
                    )
            ),
            @ApiResponse(
                    responseCode = "403",
                    description = "O usuario non ten os permisos suficientes para recuperar os datos.",
                    content = @Content
            ),
            @ApiResponse(
                    responseCode = "404",
                    description = "Usuario non atopado.",
                    content = @Content
            )
    })
    @PreAuthorize("hasRole('ADMIN') or #email == principal")
    public ResponseEntity<User> get(
            @Parameter(description = "Email do usuario a buscar", required = true)
            @PathVariable("id") String email
    ) {
        Optional<User> result = users.get(email);

        if (result.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuario non atopado.");
        }

        return ResponseEntity.ok().body(result.get());
    }

    @PostMapping(
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    @Operation(
            operationId = "insertar",
            summary = "Rexistrar un usuario.",
            description = "Rexistra un novo usuario na base de datos. É preciso ser un usuario administrador " +
                    "                    para poder insertar un usuario."
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "O usuario foi insertado.",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = User.class)
                    )
            ),
            @ApiResponse(
                    responseCode = "400",
                    description = "Parámetros do usuario inválidos.",
                    content = @Content
            ),
            @ApiResponse(
                    responseCode = "403",
                    description = "O usuario non ten os permisos suficientes para realizar a operación.",
                    content = @Content
            ),
            @ApiResponse(
                    responseCode = "409",
                    description = "O usuario xa existe.",
                    content = @Content
            )
    })
    @PreAuthorize("hasRole('ADMIN')")
    ResponseEntity<User> insert(
            @Parameter(description = "Corpo do usuario a insertar", required = true)
            @RequestBody @Valid User user
    ) {
        if (users.get(user.getEmail()).isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "O usuario xa existe.");
        }
        User result = users.insert(user);

        return ResponseEntity.ok().body(result);
    }

    @PatchMapping(
            path = "{id}",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    @Operation(
            operationId = "modificar",
            summary = "Modifica un usuario",
            description = "Modifica un usuario na base de datos. É preciso ser un usuario administrador " +
                    "para poder modificar un usuario."
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "O usuario foi modificado",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = User.class)
                    )
            ),
            @ApiResponse(
                    responseCode = "403",
                    description = "O usuario non ten os permisos suficientes para realizar a operación.",
                    content = @Content
            ),
            @ApiResponse(
                    responseCode = "404",
                    description = "Usuario non atopado.",
                    content = @Content
            ),
            @ApiResponse(
                    responseCode = "422",
                    description = "A operación non se pode aplicar sobre o obxecto.",
                    content = @Content
            )
    })
    @PreAuthorize("hasRole('ADMIN')")
    ResponseEntity<User> patch(
            @Parameter(description = "Email do usuario a modificar", required = true)
            @PathVariable("id") String email,
            @Parameter(description = "Modificacións realizadas sobre o usuario", required = true)
            @RequestBody List<Map<String, Object>> updates
    ) {
        if (users.get(email).isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuario non atopado.");
        }
        System.out.println(updates);
        try {
            User result = users.patch(email, updates);

            return ResponseEntity.ok().body(result);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "A operación non se pode aplicar sobre o obxecto.");
        }
    }

    @DeleteMapping(
            path = "{id}"
    )
    @Operation(
            operationId = "eliminar",
            summary = "Elimina un usuario",
            description = "Elimina un usuario da base de datos. É preciso ser un usuario administrador " +
                    "para poder eliminar un usuario."
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "204",
                    description = "O usuario foi eliminado.",
                    content = @Content
            ),
            @ApiResponse(
                    responseCode = "403",
                    description = "O usuario non ten os permisos suficientes para realizar a operación.",
                    content = @Content
            ),
            @ApiResponse(
                    responseCode = "404",
                    description = "Usuario non atopado.",
                    content = @Content
            )
    })
    @PreAuthorize("hasRole('ADMIN')")
    ResponseEntity<User> delete(
            @Parameter(description = "Email do usuario a eliminar", required = true)
            @PathVariable("id") String email
    ) {
        if (users.get(email).isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuario non atopado.");
        }
        users.delete(email);

        return ResponseEntity.noContent().build();
    }
}