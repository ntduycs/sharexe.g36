package com.ttcnpm.g36.sharexe.payload;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class ChatRoomResponse {
    private long roomId;

    private String lastMessageContent;

    private Date lastMessageCreatedAt;

    private String lastMessageFullName;

    private String lastMessageUsername;

    private String partnerUsername;

    private String partnerFullName;

    private long partnerId;

    private String profileImage;
}
