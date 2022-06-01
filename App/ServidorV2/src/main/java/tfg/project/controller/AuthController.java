package tfg.project.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/login")
@Tag(name = "Authentication API", description = "Operacións de autenticación.")
public class AuthController {
    @PostMapping(
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    @Operation(
            operationId = "login",
            summary = "Inicio de sesión.",
            description = "Login co email e contraseña para obter un JWT token que permite o inicio de sesión."
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "OK",
                    content = @Content
            ),
            @ApiResponse(
                    responseCode = "401",
                    description = "Email ou contraseña do usuario incorrectos.",
                    content = @Content
            )
    })
    public void login(
            @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Email e contraseña do usuario co que iniciar sesión.",
                    content = @Content(
                            mediaType = "application/json",
                            examples = @ExampleObject(
                                    value = "{\"email\": \"test@test.com\", \"password\": \"test\"}"
                            )
                    )
            )
            @RequestBody Map<String, String> userpass
    ) {
    }
}