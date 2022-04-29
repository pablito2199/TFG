package tfg.project.controller;

import static tfg.project.utilities.AuxMethods.convertXMLToObject;

import static org.springframework.http.MediaType.APPLICATION_XML_VALUE;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tfg.project.model.Documento;

@RestController
@RequestMapping("documents")
public class DocumentController {
    @GetMapping(path = "{id}", produces = APPLICATION_XML_VALUE)
    ResponseEntity<Documento> get(
            @PathVariable("id") Integer id
    ) {
        if (id == 1) {
            return ResponseEntity.ok().body(convertXMLToObject());
        }
        return null;
    }
}