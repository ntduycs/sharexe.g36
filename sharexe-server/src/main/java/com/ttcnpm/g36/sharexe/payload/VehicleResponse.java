package com.ttcnpm.g36.sharexe.payload;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class VehicleResponse {
    private Long id;
    private String brand;
    private String model;
    private String licensePlate;
    private Integer capacity;
    private List<ImageResponse> images;

    public VehicleResponse(Long id) {
        this.id = id;
    }

    public VehicleResponse() {
    }
}
