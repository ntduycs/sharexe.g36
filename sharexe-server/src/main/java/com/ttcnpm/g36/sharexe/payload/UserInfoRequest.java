package com.ttcnpm.g36.sharexe.payload;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class UserInfoRequest {
    private String firstName;
    private String lastName;
    private String password;
    private Date dof;
    private String phoneNumber;
    private String profileImage;
}
