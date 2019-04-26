package com.ttcnpm.g36.sharexe.payload;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Range;

import java.util.Date;
import java.util.List;

@Getter
@Setter
public class TripCreatingRequest {
    private String from;
    private String to;

    @Range(min = 2)
    private Integer capacity;
    private Float price;
    private Date beginAt;
    private Date endAt;
    private String description;
    private List<TripRestrictionRequest> restrictions;
}
