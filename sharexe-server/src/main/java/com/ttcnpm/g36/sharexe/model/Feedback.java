package com.ttcnpm.g36.sharexe.model;

import com.ttcnpm.g36.sharexe.model.audit.TimeSetting;
import lombok.EqualsAndHashCode;
import lombok.Getter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@EqualsAndHashCode(callSuper = false)
@Getter
@Entity
@Table(name = "user_rates_user")
public class Feedback extends TimeSetting implements Serializable {
    @Id
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "sender_id", nullable = false)
    private User sender;

    @Id
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "receiver_id", nullable = false)
    private User receiver;

    @NotNull
    private String message;

    @NotNull
    private Float point;

    public void setSender(User sender) {
        this.sender = sender;
    }

    public void setReceiver(User receiver) {
        this.receiver = receiver;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setPoint(Float point) {
        this.point = point;
    }
}
