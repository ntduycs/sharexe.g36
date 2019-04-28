package com.ttcnpm.g36.sharexe.payload;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TripRestrictionRequest {
    private String text;

    public TripRestrictionRequest(String text) {
        this.text = text;
    }
}
