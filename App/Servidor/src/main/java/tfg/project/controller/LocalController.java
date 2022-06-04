package tfg.project.controller;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;
import tfg.project.model.DocumentsSaved.FinalDocument;
import tfg.project.service.FinalDocumentService;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("local")
@Tag(name = "Local API", description = "Operacións realizadas sobre documentos almacenados localmente.")
@SecurityRequirement(name = "JWT")
public class LocalController {
    private final FinalDocumentService finalDocuments;

    @Autowired
    public LocalController(FinalDocumentService finalDocuments) {
        this.finalDocuments = finalDocuments;
    }

    @GetMapping(produces = APPLICATION_JSON_VALUE)
    @Operation(
            operationId = "getNormasLexGal",
            summary = "Obter as normas importadas a lex.gal.",
            description = "Obter todas as normas importadas a lex.gal desde o DOG filtrando por texto. Esta acción pode ser realizada por calquer usuario autenticado."
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "Atopáronse normas.",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = String.class)
                    )
            ),
            @ApiResponse(
                    responseCode = "403",
                    description = "O usuario non ten os permisos suficientes para realizar a operación.",
                    content = @Content
            ),
            @ApiResponse(
                    responseCode = "404",
                    description = "Non se atopou ningunha norma.",
                    content = @Content
            )
    })
    @PreAuthorize("isAuthenticated()")
    ResponseEntity<Optional<Page<FinalDocument>>> getAll(
            @Parameter(name = "Páxina da búsqueda.")
            @RequestParam(name = "page", defaultValue = "0") int page,
            @Parameter(name = "Modo de ordenación da búsqueda.")
            @RequestParam(name = "sort", defaultValue = "") List<String> sort,
            @Parameter(description = "Texto da norma polo que filtrar.")
            @RequestParam(name = "text", defaultValue = "") String text
    ) {
        List<Sort.Order> criteria = sort.stream().map(string -> {
                    if (string.startsWith("+")) {
                        return Sort.Order.asc(string.substring(1));
                    } else if (string.startsWith("-")) {
                        return Sort.Order.desc(string.substring(1));
                    } else return null;
                })
                .filter(Objects::nonNull)
                .collect(Collectors.toList());

        Optional<Page<FinalDocument>> result = finalDocuments.getAll(page, 8, Sort.by(criteria), text);

        if (result.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Non se atoparon normas.");
        }

        return ResponseEntity.ok().body(result);
    }

    @GetMapping(path = "{sumario}", produces = APPLICATION_JSON_VALUE)
    @Operation(
            operationId = "getDocumentData",
            summary = "Obter os datos dun documento.",
            description = "Obter os datos dun documento a partir do seu id. Esta acción " +
                    "pode ser realizada por calquer usuario autenticado."
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "O documento foi atopado.",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = String.class)
                    )
            ),
            @ApiResponse(
                    responseCode = "403",
                    description = "O usuario non ten os permisos suficientes para realizar a operación.",
                    content = @Content
            ),
            @ApiResponse(
                    responseCode = "404",
                    description = "Documento non atopado.",
                    content = @Content
            )
    })
    @PreAuthorize("isAuthenticated()")
    ResponseEntity<Optional<FinalDocument>> get(
            @Parameter(description = "Id do documento a buscar", example = "1651743500014")
            @PathVariable("sumario") String sumario
    ) {
        Optional<FinalDocument> result = finalDocuments.get(sumario);

        if (result.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Documento non atopado.");
        }

        return ResponseEntity.ok().body(result);
    }

    @GetMapping(path = "{sumario}/htmlDoc", produces = APPLICATION_JSON_VALUE)
    @Operation(
            operationId = "getHtmlDoc",
            summary = "Obter o código HTML dun documento.",
            description = "Obter o código HTML dun documento a partir do seu sumario. Esta " +
                    "acción pode ser realizada por calquer usuario autenticado."
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "O documento foi atopado.",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = String.class)
                    )
            ),
            @ApiResponse(
                    responseCode = "403",
                    description = "O usuario non ten os permisos suficientes para realizar a operación.",
                    content = @Content
            ),
            @ApiResponse(
                    responseCode = "404",
                    description = "Documento non atopado.",
                    content = @Content
            )
    })
    @PreAuthorize("isAuthenticated()")
    ResponseEntity<String> getHtmlDoc(
            @Parameter(description = "Id do documento a buscar", example = "1651743500014")
            @PathVariable("sumario") String sumario
    ) {
        Optional<FinalDocument> result = finalDocuments.get(sumario);

        if (result.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Documento non atopado.");
        }

        return ResponseEntity.ok().body(result.get().getHtmlDoc());
    }

    @PatchMapping(path = "{sumario}", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @Operation(
            operationId = "patchDocumentData",
            summary = "Modificar os datos dun documento.",
            description = "Modificar os datos dun documento. Esta acción pode ser realizada " +
                    "por calquer usuario autenticado."
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "O documento foi modificado correctamente.",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = FinalDocument.class)
                    )
            ),
            @ApiResponse(
                    responseCode = "403",
                    description = "O usuario non ten os permisos suficientes para realizar a operación.",
                    content = @Content
            )
    })
    @PreAuthorize("isAuthenticated()")
    ResponseEntity<FinalDocument> patch(
            @Parameter(description = "Datos adicionais do documento que se está a editar")
            @RequestBody FinalDocument finalDocument
    ) {
        Optional<FinalDocument> auxiliar = finalDocuments.get(finalDocument.getSumario());

        if (auxiliar.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Documento non atopado.");
        }

        auxiliar.get().setBorrador(finalDocument.isBorrador());

        return ResponseEntity.ok().body(finalDocuments.save(auxiliar.get()));
    }

    @PutMapping(path = "{id}", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @Operation(
            operationId = "putDocumentData",
            summary = "Gardar os datos dun documento.",
            description = "Gardar os datos dun documento. Esta acción pode ser realizada " +
                    "por calquer usuario autenticado."
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "O documento foi gardado correctamente.",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = FinalDocument.class)
                    )
            ),
            @ApiResponse(
                    responseCode = "403",
                    description = "O usuario non ten os permisos suficientes para realizar a operación.",
                    content = @Content
            )
    })
    @PreAuthorize("isAuthenticated()")
    ResponseEntity<FinalDocument> put(
            @Parameter(description = "Datos adicionais do documento que se está a editar")
            @RequestBody FinalDocument finalDocument
    ) {
        RestTemplate restTemplate = new RestTemplate();
        finalDocument.setHtmlDoc(restTemplate.getForObject(finalDocument.getUrlDog(), String.class));

        return ResponseEntity.ok().body(finalDocuments.save(finalDocument));
    }

    @DeleteMapping(
            path = "{id}"
    )
    @Operation(
            operationId = "deleteDocumentData",
            summary = "Elimina un documento.",
            description = "Elimina un documento da base de datos. Esta acción pode ser realizada " +
                    "por calquer usuario autenticado."
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "204",
                    description = "O documento foi eliminado.",
                    content = @Content
            ),
            @ApiResponse(
                    responseCode = "403",
                    description = "O usuario non ten os permisos suficientes para realizar a operación.",
                    content = @Content
            ),
            @ApiResponse(
                    responseCode = "404",
                    description = "Documento non atopado.",
                    content = @Content
            )
    })
    @PreAuthorize("isAuthenticated()")
    ResponseEntity<FinalDocument> delete(
            @Parameter(name = "id", required = true)
            @PathVariable("id") String id
    ) {
        finalDocuments.delete(id);

        return ResponseEntity.noContent().build();
    }
}