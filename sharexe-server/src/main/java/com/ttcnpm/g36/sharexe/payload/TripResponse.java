package com.ttcnpm.g36.sharexe.payload;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class TripResponse {
    private String from;
    private String to;
    private Date begin;
    private Long duration;
    private Integer numOfPeople;
}
