package com.ttcnpm.g36.sharexe.payload;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FeedbackRequest {
    private String comment;
    private Float star;
}
