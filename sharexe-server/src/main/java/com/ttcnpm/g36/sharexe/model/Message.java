package com.ttcnpm.g36.sharexe.model;

import com.ttcnpm.g36.sharexe.model.audit.UserAudit;
import lombok.Getter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Getter
@Entity
@Table(name = "messages")
public class Message extends UserAudit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Lob
    private String content;

    // removes all related entities association with this setting when the owning entity is deleted.
    @ManyToOne(fetch = FetchType.EAGER, optional = false, cascade = CascadeType.REMOVE)
    @JoinColumn(name = "room_id", nullable = false)
    private ChatRoom room;

    public Message(@NotBlank String content) {
        this.content = content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setRoom(ChatRoom room) {
        this.room = room;
    }
}
