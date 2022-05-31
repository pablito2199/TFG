package tfg.project.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import tfg.project.model.CriterioOrdenacion;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.http.MediaType.APPLICATION_XML_VALUE;

@RestController
@RequestMapping("xunta")
public class XuntaController {
    @GetMapping(produces = APPLICATION_JSON_VALUE)
    @Operation(
            operationId = "getNormas",
            summary = "Obter a lista de normas dunha búsqueda no DOG.",
            description = "Obter a lista de normas buscadas no DOG, filtrando por texto, soloTitulo, fraseExacta, numDogDesde, " +
                    "numdogHasta, listado_colectivo, listado_rangos, listado_seccion, listado_taxorga, " +
                    "listado_tematica, criterioOrdenacion e pagina."
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "A lista de normas atopadas.",
                    content = @Content(
                            mediaType = "application/json",
                            schema = @Schema(implementation = String.class)
                    )
            ),
            @ApiResponse(
                    responseCode = "404",
                    description = "Non se atoparon normas.",
                    content = @Content
            )
    })
    private String getNormas(
            @Parameter(description = "Texto da búsqueda", required = true)
            @RequestParam(name = "texto", defaultValue = "") String texto,
            @Parameter(description = "Incluír a búsqueda só no título")
            @RequestParam(name = "soloTitulo", defaultValue = "true", required = false) Boolean soloTitulo,
            @Parameter(description = "Buscar por frase exacta")
            @RequestParam(name = "fraseExacta", defaultValue = "true", required = false) Boolean fraseExacta,
            @Parameter(description = "Número do DOG dende o que se busca")
            @RequestParam(name = "numDogDesde", defaultValue = "", required = false) String numDogDesde,
            @Parameter(description = "Número do DOG ata o que se busca")
            @RequestParam(name = "numDogHasta", defaultValue = "", required = false) String numDogHasta,
            @Parameter(description = "Filtrar por colectivo")
            @RequestParam(name = "listado_colectivo", defaultValue = "", required = false) String listado_colectivo,
            @Parameter(description = "Filtrar por rango")
            @RequestParam(name = "listado_rangos", defaultValue = "", required = false) String listado_rangos,
            @Parameter(description = "Filtrar por sección")
            @RequestParam(name = "listado_seccion", defaultValue = "", required = false) String listado_seccion,
            @Parameter(description = "Filtrar por organización")
            @RequestParam(name = "listado_taxorga", defaultValue = "", required = false) String listado_taxorga,
            @Parameter(description = "Filtrar por temática")
            @RequestParam(name = "listado_tematica", defaultValue = "", required = false) String listado_tematica,
            @Parameter(description = "Criterio polo que se ordena a búsqueda")
            @RequestParam(name = "criterioOrdenacion", defaultValue = "ORDENACION_FECHA", required = false) CriterioOrdenacion criterioOrdenacion,
            @Parameter(description = "Páxina onde realizar a búsqueda")
            @RequestParam(name = "pagina", defaultValue = "1", required = false) String pagina
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
                        + "&pagina=" + pagina
                ,
                String.class
        );
    }
}