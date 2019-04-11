package com.ttcnpm.g36.sharexe.model;

import lombok.Getter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Entity(name = "drivers")
public class Driver extends User {
    @OneToMany(mappedBy = "owner", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    @Size(min = 1)
    @Fetch(FetchMode.SELECT)
    private List<Vehicle> vehicles = new ArrayList<>();

    @OneToMany(mappedBy = "receiver", fetch = FetchType.EAGER)
    private Set<TripRequest> receivedRequests = new HashSet<>();

    public void addVehicle(Vehicle vehicle) {
        vehicles.add(vehicle);
        vehicle.setOwner(this);
    }

    public void removeVehicle(Vehicle vehicle) {
        vehicles.remove(vehicle);
        vehicle.setOwner(null);
    }

    public void receiveNewRequest(TripRequest request) {
        receivedRequests.add(request);
        request.setReceiver(this);
    }
}
