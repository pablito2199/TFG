package tfg.project.controller;

import static tfg.project.utilities.AuxMethods.convertXMLToObject;

import static org.springframework.http.MediaType.APPLICATION_XML_VALUE;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import tfg.project.model.Documento;

@RestController
public class DocumentController {
    @GetMapping(value = "/", produces = APPLICATION_XML_VALUE)
    ResponseEntity<Documento> get(
    ) {
        return ResponseEntity.ok().body(convertXMLToObject());
    }
}
