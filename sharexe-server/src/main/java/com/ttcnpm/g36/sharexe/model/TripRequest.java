package com.ttcnpm.g36.sharexe.model;

import com.ttcnpm.g36.sharexe.model.audit.TimeAudit;
import lombok.Getter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Getter
@Entity
@Table(name = "trip_requests")
public class TripRequest extends TimeAudit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "receiver_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Driver receiver;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "sender_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Passenger sender;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "trip_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Trip trip;

    @Enumerated(EnumType.STRING)
    @NotBlank
    private TripRequestStatus status;

    public TripRequest(Driver receiver, Passenger sender, Trip trip) {
        this.receiver = receiver;
        this.sender = sender;
        this.trip = trip;
        this.status = TripRequestStatus.WAITING; // by default
    }

    public void setStatus(TripRequestStatus status) {
        this.status = status;
    }

    public void setReceiver(Driver receiver) {
        this.receiver = receiver;
    }

    public void setSender(Passenger sender) {
        this.sender = sender;
    }

    public void setTrip(Trip trip) {
        this.trip = trip;
    }
}
