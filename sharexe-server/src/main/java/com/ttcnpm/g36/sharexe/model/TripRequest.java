package com.ttcnpm.g36.sharexe.model;

import com.ttcnpm.g36.sharexe.model.audit.TimeSetting;
import lombok.EqualsAndHashCode;
import lombok.Getter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Getter
@EqualsAndHashCode(callSuper = false)
@Entity
@Table(name = "trip_request")
public class TripRequest extends TimeSetting implements Serializable {
    @Id
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "receiver_id", nullable = false)
    private Driver receiver;

    @Id
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "sender_id", nullable = false)
    private User sender;

    @Id
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "trip_id", nullable = false)
    private Trip trip;

    @Enumerated(EnumType.STRING)
    @NotNull
    private TripRequestStatus status;

    public void setReceiver(Driver receiver) {
        this.receiver = receiver;
    }

    public void setSender(User sender) {
        this.sender = sender;
    }

    public void setTrip(Trip trip) {
        this.trip = trip;
    }

    public void setStatus(TripRequestStatus status) {
        this.status = status;
    }
}
