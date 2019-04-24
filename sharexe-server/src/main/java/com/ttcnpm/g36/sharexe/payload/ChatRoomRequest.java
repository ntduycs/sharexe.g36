package com.ttcnpm.g36.sharexe.payload;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class ChatRoomRequest {
    private String partnerUsername;
}
