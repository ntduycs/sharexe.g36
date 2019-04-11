package com.ttcnpm.g36.sharexe.model;

import com.ttcnpm.g36.sharexe.model.audit.UserAudit;
import lombok.Getter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Entity
@Table(name = "trips")
public class Trip extends UserAudit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(name = "from")
    private String startingPoint;

    @NotBlank
    @Column(name = "to")
    private String destinationPoint;

    @NotBlank
    @Size(min = 2)
    private Integer maxSeat;

    @NotBlank
    private Integer price;

    @NotBlank
    private Date startDate;

    @NotBlank
    private Date endDate;

    @ElementCollection
    @CollectionTable(name = "trip_restrictions", joinColumns = @JoinColumn(name = "trip_id"))
    private List<Restriction> restrictions;

    @Enumerated(EnumType.STRING)
    @NotBlank
    private TripStatus status;

    private String description;

    @ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(name = "trip_participants",
            joinColumns = {@JoinColumn(name = "trip_id")},
            inverseJoinColumns = {@JoinColumn(name = "user_id")})
    private List<Passenger> participants = new ArrayList<>();

    public Trip(@NotBlank String startingPoint, @NotBlank String destinationPoint,
                @NotBlank @Size(min = 2) Integer maxSeat, @NotBlank Integer price,
                @NotBlank Date startDate, @NotBlank Date endDate) {
        this.startingPoint = startingPoint;
        this.destinationPoint = destinationPoint;
        this.maxSeat = maxSeat;
        this.price = price;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = TripStatus.WAITING; // by default, a new trip has WAITING status
    }

    public void setStartingPoint(String startingPoint) {
        this.startingPoint = startingPoint;
    }

    public void setDestinationPoint(String destinationPoint) {
        this.destinationPoint = destinationPoint;
    }

    public void setMaxSeat(Integer maxSeat) {
        this.maxSeat = maxSeat;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public void setRestrictions(List<Restriction> restrictions) {
        this.restrictions = restrictions;
    }

    public void setStatus(TripStatus status) {
        this.status = status;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
