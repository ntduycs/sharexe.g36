package com.ttcnpm.g36.sharexe.controller;

import com.ttcnpm.g36.sharexe.payload.APIResponse;
import com.ttcnpm.g36.sharexe.payload.FeedbackRequest;
import com.ttcnpm.g36.sharexe.repository.FeedbackRepository;
import com.ttcnpm.g36.sharexe.repository.UserRepository;
import com.ttcnpm.g36.sharexe.security.CurrentUser;
import com.ttcnpm.g36.sharexe.security.UserPrincipal;
import com.ttcnpm.g36.sharexe.service.FeedbackService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/rates")
public class FeedbackController {
    private final UserRepository userRepository;
    private final FeedbackRepository feedbackRepository;

    private final FeedbackService feedbackService;

    public FeedbackController(UserRepository userRepository, FeedbackRepository feedbackRepository, FeedbackService feedbackService) {
        this.userRepository = userRepository;
        this.feedbackRepository = feedbackRepository;
        this.feedbackService = feedbackService;
    }

    @PostMapping("/{userId}")
    public ResponseEntity<?> rateUser(@PathVariable(name = "userId") Long voteeId,
                                            @CurrentUser UserPrincipal voter,
                                            @Valid @RequestBody FeedbackRequest request) {
        String comment = request.getComment();
        Float star = request.getStar();

        if (!feedbackService.isValidFeedback(comment, star) || feedbackService.isSelfFeedback(voteeId, voter.getId())) {
            return ResponseEntity.badRequest()
                    .body(new APIResponse(false, "You cannot do it. Stupid face !!!"));
        }

        feedbackService.createNewFeedback(voteeId, voter.getId(), request);

        feedbackService.updateOverallRating(voteeId);

        return ResponseEntity.ok()
                .body(new APIResponse(true, "Rating successfully"));
    }
}
