package com.ttcnpm.g36.sharexe.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.ttcnpm.g36.sharexe.model.audit.OwnerSetting;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@Entity
@Table(name = "message")
public class Message extends OwnerSetting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;

    @NotNull
    private String text;

    @JsonIgnoreProperties
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "room_id", nullable = false)
    private ChatRoom room;

    public void setText(String text) {
        this.text = text;
    }

    public void setRoom(ChatRoom room) {
        this.room = room;
    }

    @NotNull
    private String author;

    @NotNull
    private String authorName;
}
