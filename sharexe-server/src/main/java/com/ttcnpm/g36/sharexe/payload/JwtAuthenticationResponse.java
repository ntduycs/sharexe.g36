package com.ttcnpm.g36.sharexe.payload;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JwtAuthenticationResponse {
    private String jwtAccessToken;

    private String tokenType = "Bearer";

    public JwtAuthenticationResponse(String jwtAccessToken) {
        this.jwtAccessToken = jwtAccessToken;
    }
}
