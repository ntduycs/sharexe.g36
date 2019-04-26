package com.ttcnpm.g36.sharexe.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Getter
@EqualsAndHashCode(callSuper = false)
@Entity
@Table(name = "trip_restriction")
public class TripRestriction implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "trip_id", nullable = false)
    private Trip tripInfo;

    @NotNull
    private String name;

    public TripRestriction() {
    }

    public TripRestriction(@NotNull String name) {
        this.name = name;
    }

    public void setTripInfo(Trip tripInfo) {
        this.tripInfo = tripInfo;
    }

    public void setName(String name) {
        this.name = name;
    }
}
