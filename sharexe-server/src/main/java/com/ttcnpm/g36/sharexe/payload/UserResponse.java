package com.ttcnpm.g36.sharexe.payload;

import com.ttcnpm.g36.sharexe.model.User;
import com.ttcnpm.g36.sharexe.model.UserGender;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class UserResponse {
    private Long id;

    private String fullName;

    private String email;

    private String username;

    private String password;

    private Date dateOfBirth;

    private UserGender sex;

    private String phoneNumber;

    private Float overallRating;

    private String profileImage;

    public UserResponse(User user) {
        this.id = user.getId();
        this.fullName = user.getFullName();
        this.email = user.getEmail();
        this.username = user.getUsername();
        this.password = user.getPassword();
        this.dateOfBirth = user.getDateOfBirth();
        this.sex = user.getSex();
        this.phoneNumber = user.getPhoneNumber();
        this.overallRating = user.getOverallRating();
        this.profileImage = user.getProfileImage();
    }
}
