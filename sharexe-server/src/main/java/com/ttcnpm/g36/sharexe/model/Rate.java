package com.ttcnpm.g36.sharexe.model;

import com.ttcnpm.g36.sharexe.model.audit.TimeAudit;
import lombok.Builder;
import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;

@Getter
@Entity
@Builder
public class Rate extends TimeAudit implements Serializable {
    @Id
    @ManyToOne(optional = false)
    @JoinColumn(name = "rate_by")
    private User from;

    @Id
    @ManyToOne(optional = false)
    @JoinColumn(name = "rate_for")
    private User to;

    @NotBlank
    private String message;

    @NotBlank
    private Float rating;

    public Rate(User from, User to, @NotBlank String message, @NotBlank Float rating) {
        this.from = from;
        this.to = to;
        this.message = message;
        this.rating = rating;
    }
}
