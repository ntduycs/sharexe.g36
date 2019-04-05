package com.ttcnpm.g36.sharexe.repository;

import com.ttcnpm.g36.sharexe.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * This repository is used to persist our domain models to database and retrieve them whenever in need.
 * All methods without the custom @Query annotation are implemented automatically by JpaRepository
 * */

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Optional<User> findByUsername(String username);
    Optional<User> findByUsernameOrEmail(String username, String email);

    // select user from User when userId in userIds
    List<User> findByIdIn(List<Long> userIds);

    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
}
