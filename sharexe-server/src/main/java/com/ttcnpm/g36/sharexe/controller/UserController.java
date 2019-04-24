package com.ttcnpm.g36.sharexe.controller;

import com.ttcnpm.g36.sharexe.payload.UserResponse;
import com.ttcnpm.g36.sharexe.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/{username}")
    public UserResponse getUser(@PathVariable String username) {
        return new UserResponse(userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found")));
    }
}
