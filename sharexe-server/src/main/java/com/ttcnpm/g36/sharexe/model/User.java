package com.ttcnpm.g36.sharexe.model;

import com.ttcnpm.g36.sharexe.model.audit.TimeAudit;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * This class also extends from TimeAudit class for setting up created_at and updated_at fields in database
 * */

@Getter // generate all getter method automatically
@NoArgsConstructor
@Entity
@Table(name = "users", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"username"}),
        @UniqueConstraint(columnNames = {"email"})}
)
@Inheritance(strategy = InheritanceType.JOINED)
public class User extends TimeAudit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 50)
    private String name;

    @NotBlank
    @Size(max = 50)
    private String username;

    @NaturalId
    @NotBlank
    @Size(max = 100)
    @Email
    private String email;

    @NotBlank
    @Size(max = 100)
    private String password;

    @Temporal(TemporalType.DATE)
    @Column(name = "birthday")
    @NotBlank
    private Date birthday;

    @Enumerated(EnumType.STRING)
    @NotBlank
    private Gender sex;

    @Pattern(regexp = "\\d{10}")
    private String phoneNumber;

    private String profileImage;

    @Size(max = 5)
    private Float overallRating;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE}, mappedBy = "users")
    private Set<ChatRoom> chatRooms = new HashSet<>();

    @OneToMany(mappedBy = "from", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Rate> myFeedbacks = new HashSet<>();

    @OneToMany(mappedBy = "rated_by", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Rate> theirFeedbacks = new HashSet<>();

    // constructor with required fields
    public User(@NotBlank @Size(max = 50) String name, @NotBlank @Size(max = 50) String username,
                @NotBlank @Size(max = 100) @Email String email, @NotBlank @Size(max = 100) String password,
                @NotBlank Date birthday, @NotBlank Gender sex) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.birthday = birthday;
        this.sex = sex;
    }

    // constructor with all fields except roles
    public User(@NotBlank @Size(max = 50) String name, @NotBlank @Size(max = 50) String username,
                @NotBlank @Size(max = 100) @Email String email, @NotBlank @Size(max = 100) String password,
                @NotBlank Date birthday, @NotBlank Gender sex, @Pattern(regexp = "\\d{10}") String phoneNumber,
                String profileImage, @Size(max = 5) Float overallRating) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.birthday = birthday;
        this.sex = sex;
        this.phoneNumber = phoneNumber;
        this.profileImage = profileImage;
        this.overallRating = overallRating;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setProfileImage(String profileImage) {
        this.profileImage = profileImage;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
}
