package com.ttcnpm.g36.sharexe.service;

import com.ttcnpm.g36.sharexe.exception.ResourceNotFoundException;
import com.ttcnpm.g36.sharexe.model.Feedback;
import com.ttcnpm.g36.sharexe.model.User;
import com.ttcnpm.g36.sharexe.payload.APIResponse;
import com.ttcnpm.g36.sharexe.payload.FeedbackRequest;
import com.ttcnpm.g36.sharexe.repository.FeedbackRepository;
import com.ttcnpm.g36.sharexe.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackService {

    private final UserRepository userRepository;
    private final FeedbackRepository feedbackRepository;

    public FeedbackService(UserRepository userRepository, FeedbackRepository feedbackRepository) {
        this.userRepository = userRepository;
        this.feedbackRepository = feedbackRepository;
    }

    public void updateOverallRating(Long voteeId) {
        User votee = userRepository.findById(voteeId)
                .orElseThrow(()-> new ResourceNotFoundException("User", "userId", voteeId));

        List<Feedback> receivedFeedbacks = feedbackRepository.findAllByReceiver(votee);

        Float sumOfStar = 0.0f;

        for (Feedback f : receivedFeedbacks) {
            sumOfStar += f.getPoint();
        }

        votee.setOverallRating(sumOfStar/receivedFeedbacks.size());

        userRepository.save(votee);
    }

    public boolean isValidFeedback(String comment, Float star) {
        return !comment.isBlank() || !star.equals(0.0f);
    }

    public boolean isSelfFeedback(Long receiverId, Long senderId) {
        return receiverId.equals(senderId);
    }


    public void createNewFeedback(Long voteeId, Long voterId, FeedbackRequest request) {
        Feedback newFeedback = new Feedback();

        newFeedback.setSender(userRepository.getOne(voterId));
        newFeedback.setReceiver(userRepository.getOne(voteeId));
        newFeedback.setMessage(request.getComment());
        newFeedback.setPoint(request.getStar());

        feedbackRepository.save(newFeedback);
    }
}
