package com.ttcnpm.g36.sharexe.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@EqualsAndHashCode
@Entity
@Table(name = "driver")
public class Driver implements Serializable {
    @Id
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User userInfo;

    @OneToMany(mappedBy = "owner", fetch = FetchType.LAZY, orphanRemoval = true, cascade = CascadeType.ALL)
    private List<Vehicle> vehicles = new ArrayList<>();

    @OneToMany(mappedBy = "receiver", fetch = FetchType.LAZY, orphanRemoval = true, cascade = CascadeType.ALL)
    private Set<TripRequest> receivedRequests = new HashSet<>();

    void addVehicle(Vehicle vehicle) {
        this.vehicles.add(vehicle);
        vehicle.setOwner(this);
    }

    void removeVehicle(Vehicle vehicle) {
        vehicle.setOwner(null);
        this.vehicles.remove(vehicle);
    }

    void addNewRequest(TripRequest request) {
        this.receivedRequests.add(request);
        request.setReceiver(this);
    }

    void removeRequest(TripRequest request) {
        this.receivedRequests.remove(request);
        request.setReceiver(null);
    }

    public void setVehicles(List<Vehicle> vehicles) {
        this.vehicles = vehicles;
    }
}
