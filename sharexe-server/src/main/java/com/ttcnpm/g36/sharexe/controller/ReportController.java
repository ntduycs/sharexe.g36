package com.ttcnpm.g36.sharexe.controller;

import com.ttcnpm.g36.sharexe.model.User;
import com.ttcnpm.g36.sharexe.payload.ReportRequest;
import com.ttcnpm.g36.sharexe.repository.UserRepository;
import com.ttcnpm.g36.sharexe.security.CurrentUser;
import com.ttcnpm.g36.sharexe.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/reports")
public class ReportController {

    private UserRepository userRepository;
    @PostMapping
    public ResponseEntity<?> sendReport(@CurrentUser UserPrincipal currentUser, Long receiverId, @Valid @RequestBody ReportRequest report) {
        User sender = userRepository.getOne(currentUser.getId());

        return (ResponseEntity<?>) ResponseEntity.ok();
    }
}
