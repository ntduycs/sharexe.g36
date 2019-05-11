package com.ttcnpm.g36.sharexe.repository;

import com.ttcnpm.g36.sharexe.model.Feedback;
import com.ttcnpm.g36.sharexe.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    List<Feedback> findAllByReceiver(User receiver);
}
