package com.ttcnpm.g36.sharexe.model;

import com.ttcnpm.g36.sharexe.model.audit.TimeSetting;
import lombok.Getter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
@Table(name = "chat_room")
public class ChatRoom extends TimeSetting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(fetch = FetchType.EAGER, orphanRemoval = true, cascade = CascadeType.ALL)
    @JoinColumn(name = "room_id")
    @Fetch(FetchMode.SELECT)
    private List<Message> messageList = new ArrayList<>();

    @ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(name = "users_in_room",
            joinColumns = {@JoinColumn(name = "room_id")},
            inverseJoinColumns = {@JoinColumn(name = "user_id")})
    private List<User> users = new ArrayList<>();

    public void addMessage(Message message) {
        this.messageList.add(message);
        message.setRoom(this);
    }

    public void removeMessage(Message message) {
        message.setRoom(null);
        this.messageList.remove(message);
    }

    public void setMessageList(List<Message> messageList) {
        this.messageList = messageList;
    }

    public void addUser(User user) {
        users.add(user);
    }

    public User getPartner(User user) {
        if (!users.get(0).getId().equals(user.getId())) {
            return users.get(0);
        } else {
            return users.get(1);
        }
    }
}
