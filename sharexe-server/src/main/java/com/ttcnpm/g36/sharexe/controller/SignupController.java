package com.ttcnpm.g36.sharexe.controller;

import com.ttcnpm.g36.sharexe.exception.AppException;
import com.ttcnpm.g36.sharexe.model.Gender;
import com.ttcnpm.g36.sharexe.model.Role;
import com.ttcnpm.g36.sharexe.model.RoleName;
import com.ttcnpm.g36.sharexe.model.User;
import com.ttcnpm.g36.sharexe.payload.ApiResponse;
import com.ttcnpm.g36.sharexe.payload.SignupRequest;
import com.ttcnpm.g36.sharexe.repository.RoleRepository;
import com.ttcnpm.g36.sharexe.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.Collections;

@RestController
@RequestMapping("/api/auth/signup")
public class SignupController {
    private final UserRepository userRepository;

    private final RoleRepository roleRepository;

    private final PasswordEncoder passwordEncoder;

    public SignupController(UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if(userRepository.existsByUsername(signUpRequest.getUsername())) {
            return new ResponseEntity<>(new ApiResponse(false, "Username is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }

        if(userRepository.existsByEmail(signUpRequest.getEmail())) {
            return new ResponseEntity<>(new ApiResponse(false, "Email Address already in use!"),
                    HttpStatus.BAD_REQUEST);
        }

        // Creating user's account
        User user = new User(signUpRequest.getName(), signUpRequest.getUsername(),
                signUpRequest.getEmail(), signUpRequest.getPassword(), Gender.MALE);

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        Role userRole = roleRepository.findByName(RoleName.PASSENGER)
                .orElseThrow(() -> new AppException("User Role not set."));

        user.setRoles(Collections.singleton(userRole));

        User result = userRepository.save(user);

        // After a user is created in the server, we're getting the API path
        // which can be used to fetch the details of the new user (/api/users/{usernameOfNewlyCreatedUser})
        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/api/users/{username}")
                .buildAndExpand(result.getUsername()).toUri();
        // and including it in the location header
        return ResponseEntity.created(location).body(new ApiResponse(true, "User registered successfully"));
    }
}
