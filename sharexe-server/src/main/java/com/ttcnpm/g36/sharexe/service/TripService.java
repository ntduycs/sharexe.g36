package com.ttcnpm.g36.sharexe.service;

import com.ttcnpm.g36.sharexe.exception.BadRequestException;
import com.ttcnpm.g36.sharexe.exception.ResourceNotFoundException;
import com.ttcnpm.g36.sharexe.model.*;
import com.ttcnpm.g36.sharexe.payload.*;
import com.ttcnpm.g36.sharexe.repository.TripRepository;
import com.ttcnpm.g36.sharexe.repository.TripRequestRepository;
import com.ttcnpm.g36.sharexe.repository.UserRepository;
import com.ttcnpm.g36.sharexe.security.UserPrincipal;
import com.ttcnpm.g36.sharexe.utils.ModelMapper;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.servlet.http.Part;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

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

    public MultiItemsResponse<TripResponse> getAllWaitingTrips(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "beginAt");
        Page<Trip> trips = tripRepository.findAllByStatus(TripStatus.WAITING, pageable);

        return getMultiItemsResponse(trips);
    }

    public MultiItemsResponse<TripResponse> getAllJoinedTrips(UserPrincipal currentUser, int page, int size) {
        User user = userRepository.getOne(currentUser.getId());
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "beginAt");
        Page<Trip> joinedTrips = tripRepository.findAllByParticipantsAndStatus(user, TripStatus.FINISHED, pageable);

        return getMultiItemsResponse(joinedTrips);
    }

    @NotNull
    private MultiItemsResponse<TripResponse> getMultiItemsResponse(Page<Trip> pagedTrip) {
        if (pagedTrip.getTotalElements() == 0) {
            return new MultiItemsResponse<>(Collections.emptyList(), pagedTrip.getNumber(),
                    pagedTrip.getSize(), pagedTrip.getTotalElements(), pagedTrip.getTotalPages(), pagedTrip.isLast());
        }

        List<TripResponse> responses = pagedTrip.map(ModelMapper::mapToTripResponse).getContent();

        return new MultiItemsResponse<>(responses, pagedTrip.getNumber(),
                pagedTrip.getSize(), pagedTrip.getTotalElements(), pagedTrip.getTotalPages(), pagedTrip.isLast());
    }

    public void updateExistingTrip(Long tripId, TripEditingRequest request) {
        Trip trip = tripRepository.findById(tripId)
                .orElseThrow(()-> new ResourceNotFoundException("Trip", "tripId", tripId));

        trip.setDescription(request.getDescription());
        trip.setBeginAt(request.getBeginAt());
        trip.setEndAt(request.getEndAt());
        trip.setPricePerPerson(request.getPrice());

        trip.getRestrictions().clear();

        request.getRestrictions().forEach(restriction -> trip.addRestriction(new TripRestriction(restriction.getText())));

        tripRepository.save(trip);
    }

    public TripResponse getTripById(UserPrincipal currentUser, Long tripId) {
        Trip trip = tripRepository.findById(tripId)
                .orElseThrow(() -> new ResourceNotFoundException("Trip", "id", tripId));

        // Return empty object if the vehicle does not belong to currentUser

        return ModelMapper.mapToTripResponse(trip);
    }

    public List<Participant> getTripsParticipants(Long tripId, Long userID) {
        List<Participant> participants = new ArrayList<>();

        List<Object[]> partners = tripRepository.getTripsParticipants(tripId, userID);
        for (Object[] tuple : partners) {
            Participant p = new Participant();
            p.setUserID(((BigInteger)tuple[0]).longValue());
            p.setFullname((String)tuple[1]);
            p.setUsername((String)tuple[2]);
            participants.add(p);
        }
        return participants;
    }
}
