package br.greeeen.geoso.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.greeeen.geoso.model.User;
import br.greeeen.geoso.repository.UserRepository;

@Service
public class UserService {
	private final UserRepository userRepository;
	private final BCryptPasswordEncoder passwordEnconder;
	
	@Autowired
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
		this.passwordEnconder = new BCryptPasswordEncoder();
	}
	
	public User registerUser(User user) {
		user.setPassword(passwordEnconder.encode(user.getPassword()));
		return userRepository.save(user);
	} 
	
	public Optional<User> loginUser(String username, String password) {
		Optional<User> user = userRepository.findByUsername(username);
		if (user.isPresent() && passwordEnconder.matches(password, user.get().getPassword())) {
			return user;
		}
		return Optional.empty();
	}
	
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}
}
