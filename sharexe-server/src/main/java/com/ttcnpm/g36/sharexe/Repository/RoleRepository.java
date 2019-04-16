package com.ttcnpm.g36.sharexe.Repository;

import com.ttcnpm.g36.sharexe.model.Role;
import com.ttcnpm.g36.sharexe.model.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(UserRole roleName);
}
