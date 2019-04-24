package com.ttcnpm.g36.sharexe.payload;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ImageRequest {
    private String imageUrl;

    public ImageRequest(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
