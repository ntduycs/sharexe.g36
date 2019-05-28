package com.ttcnpm.g36.sharexe.payload;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReportRequest {
    private String message;
    private Long from;
    private Long to;
}
