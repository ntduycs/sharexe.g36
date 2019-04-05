package com.ttcnpm.g36.sharexe.controller;

import com.ttcnpm.g36.sharexe.payload.JwtAuthenticationResponse;
import com.ttcnpm.g36.sharexe.payload.SigninRequest;
import com.ttcnpm.g36.sharexe.security.JwtTokenProvider;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/auth/signin")
public class SigninController {
    private final AuthenticationManager authenticationManager;

    private final JwtTokenProvider tokenProvider;

    public SigninController(AuthenticationManager authenticationManager, JwtTokenProvider tokenProvider) {
        this.authenticationManager = authenticationManager;
        this.tokenProvider = tokenProvider;
    }

    @PostMapping
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody SigninRequest signinRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        signinRequest.getUsernameOrEmail(),
                        signinRequest.getPassword()
                )
        );

        // let Spring Security know that the user has been authenticated
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String accessToken = tokenProvider.generateToken(authentication);

        // return a ResponseEntity with the accessToken in body and the status set to OK
        return ResponseEntity.ok(new JwtAuthenticationResponse(accessToken));
    }
}
