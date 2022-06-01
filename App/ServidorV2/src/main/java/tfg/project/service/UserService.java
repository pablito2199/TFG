package tfg.project.service;

import com.github.fge.jsonpatch.JsonPatchException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import tfg.project.model.User;
import tfg.project.repository.UserRepository;

import java.util.*;

@Service
public class UserService {
    private final UserRepository users;
    private final PatchMethod patchMethod;
    private final PasswordEncoder encoder;

    @Autowired
    public UserService(UserRepository people, PatchMethod patchMethod, PasswordEncoder encoder) {
        this.users = people;
        this.patchMethod = patchMethod;
        this.encoder = encoder;
    }

    public Optional<User> get(String email) {
        Optional<User> user = users.findById(email);
        if (user.isPresent()) {
            user.get().setPassword(null);
            return user;
        }
        return Optional.empty();
    }

    public User insert(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        user = users.insert(user);
        user.setPassword(null);
        return user;
    }

    public User patch(String id, List<Map<String, Object>> updates) throws JsonPatchException {
        if (users.findById(id).isPresent()) {
            User user = users.findById(id).get();
            user = patchMethod.patch(user, updates);
            for (Map<String, Object> update : updates) {
                if (update.containsValue("replace") && update.containsValue("/password")) {
                    user.setPassword(encoder.encode(user.getPassword()));
                }
            }
            user = users.save(user);
            user.setPassword(null);
            return user;
        }
        return null;
    }

    public void delete(String email) {
        users.deleteById(email);
    }
}