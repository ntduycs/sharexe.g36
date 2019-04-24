package com.ttcnpm.g36.sharexe.payload;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class APIResponse {
    private Boolean success;
    private String message;

    public APIResponse(Boolean success, String message) {
        this.success = success;
        this.message = message;
    }
}
