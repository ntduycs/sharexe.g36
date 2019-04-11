package com.ttcnpm.g36.sharexe.model;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;

public class TripParticipantsPK implements Serializable {
    private Long tripId;
    private Long participantId;

    @Column(name = "trip_id")
    @Id
    public Long getTripId() {
        return tripId;
    }

    public void setTripId(Long tripId) {
        this.tripId = tripId;
    }

    @Column(name = "participant_id")
    @Id
    public Long getParticipantId() {
        return participantId;
    }

    public void setParticipantId(Long participantId) {
        this.participantId = participantId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        TripParticipantsPK that = (TripParticipantsPK) o;

        if (tripId != null ? !tripId.equals(that.tripId) : that.tripId != null) return false;
        if (participantId != null ? !participantId.equals(that.participantId) : that.participantId != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = tripId != null ? tripId.hashCode() : 0;
        result = 31 * result + (participantId != null ? participantId.hashCode() : 0);
        return result;
    }
}
