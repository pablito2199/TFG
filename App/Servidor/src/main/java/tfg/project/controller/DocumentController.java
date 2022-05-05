package tfg.project.controller;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static tfg.project.utilities.AuxMethods.convertXMLToObject;

import static org.springframework.http.MediaType.APPLICATION_XML_VALUE;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tfg.project.model.Documento;
import tfg.project.model.DocumentsSaved.FinalDocument;
import tfg.project.service.FinalDocumentService;

import java.util.Optional;

@RestController
@RequestMapping("documents")
public class DocumentController {
    private final FinalDocumentService finalDocuments;

    @Autowired
    public DocumentController(FinalDocumentService finalDocuments) {
        this.finalDocuments = finalDocuments;
    }

    @GetMapping(path = "{id}", produces = APPLICATION_XML_VALUE)
    @Operation(
            operationId = "getDocument",
            summary = "Obter un documento.",
            description = "Obter un documento a partir do seu id."
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "O documento en formato XML atopado.",
                    content = @Content(
                            mediaType = "application/xml",
                            schema = @Schema(implementation = String.class)
                    )
            ),
            @ApiResponse(
                    responseCode = "404",
                    description = "Documento non atopado.",
                    content = @Content
            )
    })
    ResponseEntity<Documento> get(
            @Parameter(description = "Id do documento a buscar")
            @PathVariable("id") Integer id
    ) {
        if (id == 1) {
            return ResponseEntity.ok().body(convertXMLToObject());
        }
        return null;
    }

    @GetMapping(path = "savedDocuments/{id}", produces = APPLICATION_JSON_VALUE)
    @Operation(
            operationId = "getDocumentData",
            summary = "Obter os datos dun documento.",
            description = "Obter os datos dun documento a partir do seu id."
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
                    responseCode = "404",
                    description = "Documento non atopado.",
                    content = @Content
            )
    })
    ResponseEntity<Optional<FinalDocument>> getSavedDocument(
            @Parameter(description = "Id do documento a buscar", example = "1651743500014")
            @PathVariable("id") String id
    ) {
        return ResponseEntity.ok().body(finalDocuments.get(id));
    }
    
    @PutMapping (path="savedDocuments", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @Operation(
            operationId = "putDocumentData",
            summary = "Gardar os datos dun documento.",
            description = "Gardar os datos dun documento (id, notas e cambios)."
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "O documento foi gardado correctamente.",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = FinalDocument.class)
                    )
            )
    })
    ResponseEntity<FinalDocument> put(
            @Parameter(description = "Datos adicionais do documento que se está a editar")
            @RequestBody FinalDocument finalDocument
    ) {
        return ResponseEntity.ok().body(finalDocuments.save(finalDocument));
    }
}