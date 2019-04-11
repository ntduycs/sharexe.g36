package com.ttcnpm.g36.sharexe.model;

import lombok.Getter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Entity(name = "passengers")
public class Passenger extends User {
    @ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE}, mappedBy = "participants")
    private Set<Trip> joinedTrips = new HashSet<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "sender")
    private List<TripRequest> sentRequests = new ArrayList<>();

    public void sendNewRequest(TripRequest request, Trip trip, Driver driver) {
        request.setSender(this);
        request.setReceiver(driver);
        request.setTrip(trip);
        sentRequests.add(request);
        driver.receiveNewRequest(request);
    }
}
