package com.ttcnpm.g36.sharexe.model;

import javax.persistence.*;

@Entity
@Table(name = "trip_restriction", schema = "sharexe_new")
public class TripRestriction {
    private Long id;
    private Long tripId;
    private String restriction;

    @Id
    @Column(name = "id")
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Basic
    @Column(name = "trip_id")
    public Long getTripId() {
        return tripId;
    }

    public void setTripId(Long tripId) {
        this.tripId = tripId;
    }

    @Basic
    @Column(name = "restriction")
    public String getRestriction() {
        return restriction;
    }

    public void setRestriction(String restriction) {
        this.restriction = restriction;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        TripRestriction that = (TripRestriction) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (tripId != null ? !tripId.equals(that.tripId) : that.tripId != null) return false;
        if (restriction != null ? !restriction.equals(that.restriction) : that.restriction != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (tripId != null ? tripId.hashCode() : 0);
        result = 31 * result + (restriction != null ? restriction.hashCode() : 0);
        return result;
    }
}
