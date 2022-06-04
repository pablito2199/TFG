package tfg.project.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import tfg.project.model.DocumentsSaved.FinalDocument;

import java.util.Optional;

public interface FinalDocumentRepository extends MongoRepository<FinalDocument, String> {
    Optional<FinalDocument> getBySumario(String sumario);
}
