package com.ttcnpm.g36.sharexe.controller;

import com.ttcnpm.g36.sharexe.payload.APIResponse;
import com.ttcnpm.g36.sharexe.payload.UserInfoRequest;
import com.ttcnpm.g36.sharexe.payload.UserResponse;
import com.ttcnpm.g36.sharexe.repository.UserRepository;
import com.ttcnpm.g36.sharexe.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

/// localhost:5000/api/users/abc
@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserRepository userRepository;

    private final UserService userService;

    public UserController(UserRepository userRepository, UserService userService) {
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @GetMapping("/{username}")
    public UserResponse getUserInfo(@PathVariable String username) {
        return new UserResponse(userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found")));
    }

    @GetMapping("/byid/{userid}")
    public UserResponse getUserInfoById(@PathVariable Long userid) {
        return new UserResponse(userRepository.findById(userid)
                .orElseThrow(() -> new UsernameNotFoundException("User not found")));
    }

    @Transactional
    @PutMapping("/{userId}")
    public ResponseEntity<?> updateUserInfo(@PathVariable Long userId,
                                            @Valid @RequestBody UserInfoRequest request) {
        userService.updateUserInfo(userId, request);

        return ResponseEntity.ok()
                .body(new APIResponse(true, "Update user info successfully."));
    }
}
