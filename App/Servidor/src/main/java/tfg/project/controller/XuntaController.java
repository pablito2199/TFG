package tfg.project.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping("xunta")
public class XuntaController {
    @GetMapping(path = "normas", produces = APPLICATION_JSON_VALUE)
    private String getNormas(
            @RequestParam(name = "texto", defaultValue = "") String texto,
            @RequestParam(name = "soloTitulo", defaultValue = "true", required = false) Boolean soloTitulo,
            @RequestParam(name = "fraseExacta", defaultValue = "true", required = false) Boolean fraseExacta,
            @RequestParam(name = "numDogDesde", defaultValue = "", required = false) String numDogDesde,
            @RequestParam(name = "numDogHasta", defaultValue = "", required = false) String numDogHasta,
            @RequestParam(name = "listado_colectivo", defaultValue = "", required = false) String listado_colectivo,
            @RequestParam(name = "listado_rangos", defaultValue = "", required = false) String listado_rangos,
            @RequestParam(name = "listado_seccion", defaultValue = "", required = false) String listado_seccion,
            @RequestParam(name = "listado_taxorga", defaultValue = "", required = false) String listado_taxorga,
            @RequestParam(name = "listado_tematica", defaultValue = "", required = false) String listado_tematica,
            @RequestParam(name = "criterioOrdenacion", defaultValue = "ORDENACION_FECHA", required = false) String criterioOrdenacion
    ) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(
                "https://www.xunta.gal/diario-oficial-galicia/buscarAnunciosPublico.do?method=listado"
                        + "&texto=" + texto
                        + "&soloTitulo=" + soloTitulo
                        + "&fraseExacta=" + fraseExacta
                        + "&numDogDesde=" + numDogDesde
                        + "&numDogHasta=" + numDogHasta
                        + "&listado_colectivo=" + listado_colectivo
                        + "&listado_rangos=" + listado_rangos
                        + "&listado_seccion=" + listado_seccion
                        + "&listado_taxorga=" + listado_taxorga
                        + "&listado_tematica=" + listado_tematica
                        + "&criterioOrdenacion=" + criterioOrdenacion
                ,
                String.class
        );
    }
}