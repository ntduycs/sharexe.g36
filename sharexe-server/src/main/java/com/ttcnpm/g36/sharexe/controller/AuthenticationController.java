package com.ttcnpm.g36.sharexe.controller;

import com.ttcnpm.g36.sharexe.repository.RoleRepository;
import com.ttcnpm.g36.sharexe.repository.UserRepository;
import com.ttcnpm.g36.sharexe.exception.ServerException;
import com.ttcnpm.g36.sharexe.model.Role;
import com.ttcnpm.g36.sharexe.model.User;
import com.ttcnpm.g36.sharexe.model.UserRole;
import com.ttcnpm.g36.sharexe.payload.APIResponse;
import com.ttcnpm.g36.sharexe.payload.AuthenticationResponse;
import com.ttcnpm.g36.sharexe.payload.LoginRequest;
import com.ttcnpm.g36.sharexe.payload.SignupRequest;
import com.ttcnpm.g36.sharexe.utils.JwtTokenProvider;
import com.ttcnpm.g36.sharexe.utils.UserGenderConverter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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
@RequestMapping("/api/auth")
public class AuthenticationController {
    private final AuthenticationManager authManager;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider tokenProvider;

    public AuthenticationController(AuthenticationManager authManager, UserRepository userRepository,
                                    RoleRepository roleRepository, PasswordEncoder passwordEncoder,
                                    JwtTokenProvider tokenProvider) {
        this.authManager = authManager;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.tokenProvider = tokenProvider;
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest request) {
        Authentication authentication = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsernameOrEmail(), request.getPassword())
        );

        // Once the user's credentials are validated, setting the Authentication object in Spring security
        // to let spring security know that we have an authenticated user now.
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String accessToken = tokenProvider.generateToken(authentication);

        return ResponseEntity.ok(new AuthenticationResponse(accessToken));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest request) {
        if (userRepository.existsByUsername(request.getUsername())) {
            return new ResponseEntity<>(new APIResponse(false, "Username is already taken!!!"),
                    HttpStatus.BAD_REQUEST);
        }

        if (userRepository.existsByEmail(request.getEmail())) {
            return new ResponseEntity<>(new APIResponse(false, "Email Address already in use!"),
                    HttpStatus.BAD_REQUEST);
        }

        // Ok, create a new account
        User user = new User(request.getFullName(), request.getEmail(), request.getUsername(),
                request.getPassword(), request.getDateOfBirth(), UserGenderConverter.normalize(request.getSex()));

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        Role userRole = roleRepository.findByName(UserRole.NEW_USER)
                .orElseThrow(() -> new ServerException("User Role not set."));

        user.setRoles(Collections.singleton(userRole));

        User result = userRepository.save(user);

        // After a user is created in the server, we're getting the API path
        // which can be used to fetch the details of the new user (/api/users/{usernameOfNewlyCreatedUser})
        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/api/users/{username}")
                .buildAndExpand(result.getUsername()).toUri();
        // and including it in the location header
        return ResponseEntity.created(location).body(new APIResponse(true,
                "User registered successfully"));
    }

}
