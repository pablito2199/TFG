package tfg.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tfg.project.model.DocumentsSaved.FinalDocument;
import tfg.project.repository.FinalDocumentRepository;

import java.util.Optional;

@Service
public class FinalDocumentService {
    private final FinalDocumentRepository finalDocuments;

    @Autowired
    public FinalDocumentService(FinalDocumentRepository finalDocuments) {
        this.finalDocuments = finalDocuments;
    }
    
    public Optional<FinalDocument> get(String id) {
        return finalDocuments.findById(id);
    }
    
    public FinalDocument save(FinalDocument finalDocument) {
        return finalDocuments.save(finalDocument);
    }
}
