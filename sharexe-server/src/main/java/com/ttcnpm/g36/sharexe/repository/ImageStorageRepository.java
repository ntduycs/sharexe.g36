package com.ttcnpm.g36.sharexe.repository;

import com.ttcnpm.g36.sharexe.model.ImageStore;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageStorageRepository extends JpaRepository<ImageStore, String> {
}
