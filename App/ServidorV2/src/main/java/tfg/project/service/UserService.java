package tfg.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import tfg.project.model.User;
import tfg.project.repository.UserRepository;

import java.util.*;

@Service
public class UserService {
    private final UserRepository users;
    private final PasswordEncoder encoder;

    @Autowired
    public UserService(UserRepository people, PasswordEncoder encoder) {
        this.users = people;
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
}