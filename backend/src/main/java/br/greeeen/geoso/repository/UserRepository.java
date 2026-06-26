package br.greeeen.geoso.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.greeeen.geoso.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
	Optional<User> findByUsername(String username);
}
