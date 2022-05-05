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

    @PostMapping(consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    ResponseEntity<FinalDocument> post(
            @Parameter(description = "Id do documento a buscar")
            @RequestBody FinalDocument finalDocument
    ) {
        return ResponseEntity.ok().body(finalDocuments.save(finalDocument));
    }
}