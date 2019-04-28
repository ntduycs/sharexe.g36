package com.ttcnpm.g36.sharexe.repository;

import com.ttcnpm.g36.sharexe.model.User;
import com.ttcnpm.g36.sharexe.model.Vehicle;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
    Optional<Vehicle> findById(Long vehicleId);
    Page<Vehicle> findAllByOwner(User owner, Pageable pageable);

}
