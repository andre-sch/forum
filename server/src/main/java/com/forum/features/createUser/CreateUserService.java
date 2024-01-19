package com.forum.features.createUser;

import java.util.*;
import com.forum.entities.User;
import com.forum.repositories.Repository;
import com.forum.security.HashGenerator;

class CreateUserService {
  private HashGenerator hashGenerator;
  private Repository<User> usersRepository;

  public CreateUserService(
    HashGenerator hashGenerator,
    Repository<User> usersRepository
  ) {
    this.hashGenerator = hashGenerator;
    this.usersRepository = usersRepository;
  }

  public User execute(UserCreationRequest creationRequest) {
    List<User> usersWithSameEmail = this.usersRepository.list(
      (user) -> Objects.equals(user.getEmail(), creationRequest.email)
    );

    if (usersWithSameEmail.size() > 0) {
      throw new Error("email already registered");
    }

    String passwordHash = this.hashGenerator.generate(creationRequest.password);

    User user = new User();
    user.setName(creationRequest.name);
    user.setEmail(creationRequest.email);
    user.setPassword(passwordHash);
    user.setAvatarUrl(creationRequest.avatarUrl);

    this.usersRepository.save(user);

    return user;
  }
}
