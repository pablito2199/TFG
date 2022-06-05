package tfg.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.support.PageableExecutionUtils;
import org.springframework.stereotype.Service;
import tfg.project.model.DocumentsSaved.FinalDocument;
import tfg.project.repository.FinalDocumentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class FinalDocumentService {
    private final FinalDocumentRepository finalDocuments;
    private final MongoTemplate mongo;

    @Autowired
    public FinalDocumentService(FinalDocumentRepository finalDocuments, MongoTemplate mongo) {
        this.finalDocuments = finalDocuments;
        this.mongo = mongo;
    }

    public Optional<FinalDocument> get(String sumario) {
        return finalDocuments.getBySumario(sumario);
    }

    public Optional<FinalDocument> getById(String id) {
        return finalDocuments.findById(id);
    }

    public Optional<Page<FinalDocument>> getAll(int page, int size, Sort sort, String text) {
        Pageable request = PageRequest.of(page, size, sort);
        Criteria criteria = Criteria.where("_id").exists(true);
        if (text != null) {
            criteria.and("sumario").regex(text, "i");
        }
        Query query = Query.query(criteria).with(request);
        List<FinalDocument> result = mongo.find(query, FinalDocument.class);

        if (result.isEmpty())
            return Optional.empty();
        else
            return Optional.of(PageableExecutionUtils.getPage(result, request,
                    () -> mongo.count(Query.query(criteria), FinalDocument.class)));
    }

    public FinalDocument save(FinalDocument finalDocument) {
        return finalDocuments.save(finalDocument);
    }

    public void delete(String id) {
        finalDocuments.deleteById(id);
    }
}
