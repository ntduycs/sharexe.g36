package com.ttcnpm.g36.sharexe.model;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;

public class TripFeedbackPK implements Serializable {
    private Long ratedBy;
    private Long ratedFor;

    @Column(name = "rated_by")
    @Id
    public Long getRatedBy() {
        return ratedBy;
    }

    public void setRatedBy(Long ratedBy) {
        this.ratedBy = ratedBy;
    }

    @Column(name = "rated_for")
    @Id
    public Long getRatedFor() {
        return ratedFor;
    }

    public void setRatedFor(Long ratedFor) {
        this.ratedFor = ratedFor;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        TripFeedbackPK that = (TripFeedbackPK) o;

        if (ratedBy != null ? !ratedBy.equals(that.ratedBy) : that.ratedBy != null) return false;
        if (ratedFor != null ? !ratedFor.equals(that.ratedFor) : that.ratedFor != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = ratedBy != null ? ratedBy.hashCode() : 0;
        result = 31 * result + (ratedFor != null ? ratedFor.hashCode() : 0);
        return result;
    }
}
