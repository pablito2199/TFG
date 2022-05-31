package tfg.project.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import tfg.project.model.User;

public interface UserRepository extends MongoRepository<User, String> {
}
