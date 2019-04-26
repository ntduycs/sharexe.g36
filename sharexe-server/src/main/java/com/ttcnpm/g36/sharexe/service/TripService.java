package com.ttcnpm.g36.sharexe.service;

import com.ttcnpm.g36.sharexe.exception.BadRequestException;
import com.ttcnpm.g36.sharexe.model.*;
import com.ttcnpm.g36.sharexe.payload.TripCreatingRequest;
import com.ttcnpm.g36.sharexe.payload.TripReplyingRequest;
import com.ttcnpm.g36.sharexe.repository.TripRepository;
import com.ttcnpm.g36.sharexe.repository.TripRequestRepository;
import com.ttcnpm.g36.sharexe.repository.UserRepository;
import com.ttcnpm.g36.sharexe.security.UserPrincipal;
import org.springframework.stereotype.Service;

@Service
public class TripService {
    private final UserRepository userRepository;
    private final TripRepository tripRepository;
    private final TripRequestRepository requestRepository;

    public TripService(UserRepository userRepository, TripRepository tripRepository, TripRequestRepository requestRepository) {
        this.userRepository = userRepository;
        this.tripRepository = tripRepository;
        this.requestRepository = requestRepository;
    }

    public Trip createNewTrip(TripCreatingRequest request, UserPrincipal currentUser) {
        Trip newTrip = new Trip();

        User tripOwner = userRepository.getOne(currentUser.getId());
        newTrip.setCreatedBy(tripOwner.getId());

        populate(request, newTrip);

        newTrip.addParticipant(tripOwner);

        return tripRepository.save(newTrip);
    }

    private void populate(TripCreatingRequest request, Trip newTrip) {
        newTrip.setStartingPoint(request.getFrom());
        newTrip.setDestination(request.getTo());
        newTrip.setMaxCapacity(request.getCapacity());
        newTrip.setPricePerPerson(request.getPrice());
        newTrip.setBeginAt(request.getBeginAt());
        newTrip.setEndAt(request.getEndAt());
        newTrip.setDescription(request.getDescription());
        newTrip.setStatus(TripStatus.WAITING); // by default

        request.getRestrictions().forEach(restriction -> newTrip.addRestriction(new TripRestriction(restriction.getText())));
    }

    public void createJoiningRequest(Trip trip, Long tripOwnerId, Long senderId) {
        TripRequest newRequest = new TripRequest();

        User receiver = userRepository.getOne(tripOwnerId);
        User sender = userRepository.getOne(senderId);

        newRequest.setTrip(trip);
        newRequest.setReceiver(receiver);
        newRequest.setSender(sender);
        newRequest.setStatus(TripRequestStatus.WAITING_TO_RESPONSE); // by default

        requestRepository.save(newRequest);
    }

    public void replyJoiningRequest(Long requestId, UserPrincipal currentUser, TripReplyingRequest responseFromTripOwner) {
        TripRequest request = requestRepository.getOne(requestId);

        User tripOwner = request.getReceiver();
        User sender = request.getSender();

        if (!tripOwner.getId().equals(currentUser.getId())) {
            throw new BadRequestException("Permission denied!!!");
        }

        if (responseFromTripOwner.isAccept()) {
            request.setStatus(TripRequestStatus.ACCEPTED);
            request.getTrip().addParticipant(sender);
        } else {
            request.setStatus(TripRequestStatus.DECLINED);
        }

        requestRepository.save(request);
    }
}
