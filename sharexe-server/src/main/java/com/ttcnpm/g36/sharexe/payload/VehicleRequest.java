package com.ttcnpm.g36.sharexe.payload;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
@Setter
public class VehicleRequest {
    @NotNull
    private String brand;

    @NotNull
    private String model;

    @NotNull
    private String licensePlate;

    @NotNull
    private Integer capacity;

    private List<ImageRequest> images;

    public VehicleRequest(@NotNull String brand, @NotNull String model,
                          @NotNull String licensePlate, @NotNull @Size(min = 2) Integer capacity) {
        this.brand = brand;
        this.model = model;
        this.licensePlate = licensePlate;
        this.capacity = capacity;
    }

    public VehicleRequest(@NotNull String brand, @NotNull String model,
                          @NotNull String licensePlate, @NotNull @Size(min = 2) Integer capacity,
                          List<ImageRequest> images) {
        this.brand = brand;
        this.model = model;
        this.licensePlate = licensePlate;
        this.capacity = capacity;
        this.images = images;
    }

    public VehicleRequest() {
    }
}
