package com.ttcnpm.g36.sharexe.model;

import com.ttcnpm.g36.sharexe.model.audit.TimeSetting;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.*;

@Getter
@Setter

@Entity
@Table(name = "user", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"username"}),
        @UniqueConstraint(columnNames = {"email"})}
)
public class User extends TimeSetting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String fullName;

    @NotNull
    @NaturalId
    @Email
    private String email;

    @NotNull
    private String username;

    @NotNull
    @Size(max = 100)
    private String password;

    @Temporal(TemporalType.DATE)
    @NotNull
    @Column(name = "dof")
    private Date dateOfBirth;

    @Enumerated(EnumType.STRING)
    @NotNull
    private UserGender sex;

    private String phoneNumber;

    private Float overallRating;

    private String profileImage;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "user_has_role",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE}, mappedBy = "users")
    private Set<ChatRoom> chatRooms = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE}, mappedBy = "participants")
    private Set<Trip> joinedTrips = new HashSet<>();

    @OneToMany(mappedBy = "sender", fetch = FetchType.LAZY, orphanRemoval = true, cascade = CascadeType.ALL)
    private List<Feedback> sentFeedbacks = new ArrayList<>();

    @OneToMany(mappedBy = "receiver", fetch = FetchType.LAZY, orphanRemoval = true, cascade = CascadeType.ALL)
    private List<Feedback> receivedFeedbacks = new ArrayList<>();

    @OneToMany(mappedBy = "sender", fetch = FetchType.LAZY, orphanRemoval = true, cascade = CascadeType.ALL)
    private Set<TripRequest> sentRequests = new HashSet<>();

    public void joinChatRoom(ChatRoom room) {
        this.chatRooms.add(room);
        room.getUsers().add(this);
    }

    public void leaveChatRoom(ChatRoom room) {
        this.chatRooms.remove(room);
        room.getUsers().remove(this);
    }

    public void addJoinedTrip(Trip trip) {
        this.joinedTrips.add(trip);
        trip.getParticipants().add(this);
    } // no removeJoinedTrip() here, because we don't allow user delete his/her joined trips themselves

    public void sendNewFeedback(Feedback feedback) {
        this.sentFeedbacks.add(feedback);
        feedback.setSender(this);
    }

    public void receiveNewFeedback(Feedback feedback) {
        this.receivedFeedbacks.add(feedback);
        feedback.setReceiver(this);
    }

    public void addNewRequest(TripRequest request) {
        this.sentRequests.add(request);
        request.setSender(this);
    }

    public void cancelRequest(TripRequest request) {
        this.sentRequests.remove(request);
        request.setSender(null);
    }

    public User(@NotNull String fullName, @NotNull @Email String email,
                @NotNull String username, @NotNull String password,
                @NotNull Date dateOfBirth, @NotNull UserGender sex) {
        this.fullName = fullName;
        this.email = email;
        this.username = username;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.sex = sex;
    }

    public User() {
    }
}
