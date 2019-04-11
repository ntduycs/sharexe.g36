package com.ttcnpm.g36.sharexe.model;

import javax.persistence.*;

@Entity
@Table(name = "trip_participants", schema = "sharexe_new")
@IdClass(TripParticipantsPK.class)
public class TripParticipants {
    private Long tripId;
    private Long participantId;

    @Id
    @Column(name = "trip_id")
    public Long getTripId() {
        return tripId;
    }

    public void setTripId(Long tripId) {
        this.tripId = tripId;
    }

    @Id
    @Column(name = "participant_id")
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

        TripParticipants that = (TripParticipants) o;

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
