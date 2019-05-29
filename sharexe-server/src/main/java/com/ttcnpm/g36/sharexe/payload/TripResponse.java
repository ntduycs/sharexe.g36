package com.ttcnpm.g36.sharexe.payload;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class TripResponse {
    private Long id;
    private String from;
    private String to;
    private Date begin;
    private Long duration;
    private Integer numOfPeople;

    public TripResponse() {
    }

    public TripResponse(Long id) {
        this.id = id;
    }

    public TripResponse(Long id, String from, String to, Date begin, Long duration, Integer numOfPeople) {
        this.id = id;
        this.from = from;
        this.to = to;
        this.begin = begin;
        this.duration = duration;
        this.numOfPeople = numOfPeople;
    }
}
