package com.ttcnpm.g36.sharexe.payload;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
public class TripEditingRequest {
    // TODO: review which fields can be updated
    private String description;
    private List<TripRestrictionRequest> restrictions;
    private Float price;
    private Date beginAt;
    private Date endAt;
}
