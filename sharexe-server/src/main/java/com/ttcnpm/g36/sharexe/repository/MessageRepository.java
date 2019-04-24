package com.ttcnpm.g36.sharexe.repository;

import com.ttcnpm.g36.sharexe.model.Message;
import com.ttcnpm.g36.sharexe.payload.ChatRoomResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {

}
