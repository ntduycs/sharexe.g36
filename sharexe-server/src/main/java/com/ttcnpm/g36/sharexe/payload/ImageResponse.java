package com.ttcnpm.g36.sharexe.payload;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ImageResponse {
    private String downloadLink;

    public ImageResponse(String downloadLink) {
        this.downloadLink = downloadLink;
    }

    public ImageResponse() {
    }
}
