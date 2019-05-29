package com.ttcnpm.g36.sharexe.controller;

import com.ttcnpm.g36.sharexe.exception.ResourceNotFoundException;
import com.ttcnpm.g36.sharexe.model.Trip;
import com.ttcnpm.g36.sharexe.payload.*;
import com.ttcnpm.g36.sharexe.repository.TripRepository;
import com.ttcnpm.g36.sharexe.security.CurrentUser;
import com.ttcnpm.g36.sharexe.security.UserPrincipal;
import com.ttcnpm.g36.sharexe.service.TripService;
import com.ttcnpm.g36.sharexe.utils.AppConstants;
import com.ttcnpm.g36.sharexe.utils.ConvertFactory;
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
    private final TripService tripService;

    public TripController(TripRepository tripRepository, TripService tripService) {
        this.tripRepository = tripRepository;
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
                .body(new TripResponse(newTrip.getId()));
    }

    @Transactional
    @PutMapping("/trip-status/{tripId}")
    public ResponseEntity<?> updateTripStatus(@PathVariable Long tripId,
                                        @Valid @RequestBody TripStatusRequest request,
                                              @CurrentUser UserPrincipal currentUser) {
        Trip trip = tripRepository.findById(tripId)
                .orElseThrow(()-> new ResourceNotFoundException("Trip", "tripId", tripId));

        if (!currentUser.getId().equals(trip.getCreatedBy())) {
            ResponseEntity.badRequest().body("You are not the owner of this trip");
        }

        trip.setStatus(ConvertFactory.getTripStatusFromRequest(request.getContent()));
        tripRepository.save(trip);

        return ResponseEntity.ok()
                .body(new APIResponse(true, "Confirm finishing the trip successfully."));
    }

    @Transactional
    @PutMapping("/modify/{tripId}")
    public ResponseEntity<?> updateTripInfo(@PathVariable Long tripId,
                                            @Valid @RequestBody TripEditingRequest request) {
        tripService.updateExistingTrip(tripId, request);

        return ResponseEntity.ok()
                .body(new APIResponse(true, "Update trip info successfully."));
    }

    @PostMapping("/join/{tripId}")
    public ResponseEntity<?> sendJoiningRequest(@PathVariable Long tripId, @CurrentUser UserPrincipal currentUser) {
        Trip trip = tripRepository.findById(tripId)
                .orElseThrow(() -> new ResourceNotFoundException("Trip", "tripId", tripId));

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

    @Transactional
    @GetMapping("/all")
    public MultiItemsResponse<TripResponse> getAllTrips(@RequestParam(value = "page", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int page,
                                                        @RequestParam(value = "size", defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int size) {
        return tripService.getAllWaitingTrips(page, size);
    }

    @Transactional
    @GetMapping("/my-trips")
    public MultiItemsResponse<TripResponse> getAllJoinedTrips(@CurrentUser UserPrincipal currentUser,
                                                              @RequestParam(value = "page", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int page,
                                                              @RequestParam(value = "size", defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int size) {
        return tripService.getAllJoinedTrips(currentUser, page, size);
    }

    @Transactional
    @GetMapping("/{tripId}")
    public TripResponse getVehicleById(@CurrentUser UserPrincipal currentUser, @PathVariable Long tripId) {
        return tripService.getTripById(currentUser, tripId);
    }


}
