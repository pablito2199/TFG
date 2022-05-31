package tfg.project.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(
        info = @Info(
                title = "TFG Pablo Tarrío Otero",
                description = "API do TFG de Pablo Tarrío Otero",
                version = "1.0",
                contact = @Contact(
                        name = "Pablo Tarrío Otero",
                        url = "https://github.com/pablito2199",
                        email = "pablo.tarrio.otero@rai.usc.es"
                ),
                license = @License(
                        name = "MIT Licence",
                        url = "https://opensource.org/licenses/MIT")),
        servers = {
                @Server(url = "/", description = "General use server")
        }
        )
public class OpenAPIConfiguration {
}