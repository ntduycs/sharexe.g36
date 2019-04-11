package com.ttcnpm.g36.sharexe.model;

import com.ttcnpm.g36.sharexe.model.audit.TimeAudit;
import lombok.Getter;
import org.hibernate.annotations.BatchSize;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * This class also extends from TimeAudit class for setting up created_at and updated_at fields in database
 */

@Getter
@Entity
@Table(name = "chat_rooms")
public class ChatRoom extends TimeAudit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "room", fetch = FetchType.EAGER, orphanRemoval = true)
    @Fetch(FetchMode.SELECT)
    @BatchSize(size = 10)
    private List<Message> messages = new ArrayList<>();

    // this entity is the owning side of relationship
    @ManyToMany(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(name = "users_in_room",
            joinColumns = {@JoinColumn(name = "room_id")},
            inverseJoinColumns = {@JoinColumn(name = "user_id")})
    private Set<User> users = new HashSet<>();

    public void addMessage(Message message) {
        messages.add(message);
        message.setRoom(this);
    }

    public void removeMessage(Message message) {
        messages.remove(message);
        message.setRoom(null);
    }
}
