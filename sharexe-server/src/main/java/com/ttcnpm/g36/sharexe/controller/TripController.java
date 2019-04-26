package com.ttcnpm.g36.sharexe.controller;

import com.ttcnpm.g36.sharexe.exception.ResourceNotFoundException;
import com.ttcnpm.g36.sharexe.model.Trip;
import com.ttcnpm.g36.sharexe.payload.APIResponse;
import com.ttcnpm.g36.sharexe.payload.TripCreatingRequest;
import com.ttcnpm.g36.sharexe.payload.TripReplyingRequest;
import com.ttcnpm.g36.sharexe.repository.TripRepository;
import com.ttcnpm.g36.sharexe.repository.TripRequestRepository;
import com.ttcnpm.g36.sharexe.security.CurrentUser;
import com.ttcnpm.g36.sharexe.security.UserPrincipal;
import com.ttcnpm.g36.sharexe.service.TripService;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping("/api/trips")
public class TripController {
    private final TripRepository tripRepository;
    private final TripRequestRepository requestRepository;
    private final TripService tripService;

    public TripController(TripRepository tripRepository, TripRequestRepository requestRepository, TripService tripService) {
        this.tripRepository = tripRepository;
        this.requestRepository = requestRepository;
        this.tripService = tripService;
    }

    @Transactional
    @PostMapping("/create")
    public ResponseEntity<?> createNewTrip(@Valid @RequestBody TripCreatingRequest request,
                                           @CurrentUser UserPrincipal currentUser) {
        Trip newTrip = tripService.createNewTrip(request, currentUser);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest().path("/{tripId}")
                .buildAndExpand(newTrip.getId()).toUri();

        return ResponseEntity.created(location)
                .body(new APIResponse(true, "Creating new trip successfully."));
    }

    @PostMapping("/join/{tripId}")
    public ResponseEntity<?> sendJoiningRequest(@PathVariable Long tripId, @CurrentUser UserPrincipal currentUser) {
        Trip trip = tripRepository.findById(tripId)
                .orElseThrow(()-> new ResourceNotFoundException("Trip", "tripId", tripId));

        Long tripOwnerId = trip.getCreatedBy();

        tripService.createJoiningRequest(trip, tripOwnerId, currentUser.getId());

        return ResponseEntity.ok(new APIResponse(true, "The request is sent successfully."));
    }

    @Transactional
    @PutMapping("/join/{requestId}")
    public ResponseEntity<?> replyJoiningRequest(@PathVariable Long requestId,
                                                 @Valid @RequestBody TripReplyingRequest responseFromTripOwner,
                                                 @CurrentUser UserPrincipal currentUser) {
        tripService.replyJoiningRequest(requestId, currentUser, responseFromTripOwner);

        return ResponseEntity.ok(new APIResponse(true, "Response has been sent to guest."));
    }
}
