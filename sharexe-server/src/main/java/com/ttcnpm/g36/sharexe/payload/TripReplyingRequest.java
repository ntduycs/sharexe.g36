package com.ttcnpm.g36.sharexe.payload;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TripReplyingRequest {
    @JsonProperty
    private boolean accept;
}
