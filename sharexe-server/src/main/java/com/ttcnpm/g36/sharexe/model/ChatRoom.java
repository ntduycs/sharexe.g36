package com.ttcnpm.g36.sharexe.model;

import com.ttcnpm.g36.sharexe.model.audit.TimeAudit;
import lombok.Getter;

import javax.persistence.*;

@Getter

@Entity
@Table(name = "chat_room", schema = "sharexe_new")
public class ChatRoom extends TimeAudit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    private Long id;
}
