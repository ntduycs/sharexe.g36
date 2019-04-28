package com.ttcnpm.g36.sharexe.service;

import com.ttcnpm.g36.sharexe.exception.ResourceNotFoundException;
import com.ttcnpm.g36.sharexe.model.User;
import com.ttcnpm.g36.sharexe.payload.UserInfoRequest;
import com.ttcnpm.g36.sharexe.repository.UserRepository;
import com.ttcnpm.g36.sharexe.utils.ConvertFactory;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void updateUserInfo(Long userId, UserInfoRequest request) {
        User me = userRepository.findById(userId)
                .orElseThrow(()->new ResourceNotFoundException("User","userId", userId));

        me.setFullName(ConvertFactory.getFullNameFrom(request.getFirstName(),
                request.getLastName()));

        me.setPassword(passwordEncoder.encode(request.getPassword()));
        me.setDateOfBirth(request.getDof());
        me.setPhoneNumber(request.getPhoneNumber());
        me.setProfileImage(request.getProfileImage());

        userRepository.save(me);
    }
}
