package tfg.project.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import tfg.project.model.DocumentsSaved.FinalDocument;

public interface FinalDocumentRepository extends MongoRepository<FinalDocument, String> {
}
