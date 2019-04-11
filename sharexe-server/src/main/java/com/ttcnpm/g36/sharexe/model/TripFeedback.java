package com.ttcnpm.g36.sharexe.model;

import com.ttcnpm.g36.sharexe.model.audit.TimeAudit;

import javax.persistence.*;

@Entity
@Table(name = "trip_feedback", schema = "sharexe_new")
@IdClass(TripFeedbackPK.class)
public class TripFeedback extends TimeAudit {
    private Long ratedBy;
    private Long ratedFor;
    private String comment;
    private Double rating;

    @Id
    @Column(name = "rated_by")
    public Long getRatedBy() {
        return ratedBy;
    }

    public void setRatedBy(Long ratedBy) {
        this.ratedBy = ratedBy;
    }

    @Id
    @Column(name = "rated_for")
    public Long getRatedFor() {
        return ratedFor;
    }

    public void setRatedFor(Long ratedFor) {
        this.ratedFor = ratedFor;
    }

    @Basic
    @Column(name = "comment")
    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    @Basic
    @Column(name = "rating")
    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        TripFeedback that = (TripFeedback) o;

        if (ratedBy != null ? !ratedBy.equals(that.ratedBy) : that.ratedBy != null) return false;
        if (ratedFor != null ? !ratedFor.equals(that.ratedFor) : that.ratedFor != null) return false;
        if (comment != null ? !comment.equals(that.comment) : that.comment != null) return false;
        if (rating != null ? !rating.equals(that.rating) : that.rating != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = ratedBy != null ? ratedBy.hashCode() : 0;
        result = 31 * result + (ratedFor != null ? ratedFor.hashCode() : 0);
        result = 31 * result + (comment != null ? comment.hashCode() : 0);
        result = 31 * result + (rating != null ? rating.hashCode() : 0);
        return result;
    }
}
