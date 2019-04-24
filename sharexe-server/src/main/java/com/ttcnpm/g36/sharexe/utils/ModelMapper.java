package com.ttcnpm.g36.sharexe.utils;

import com.ttcnpm.g36.sharexe.model.Vehicle;
import com.ttcnpm.g36.sharexe.payload.ImageResponse;
import com.ttcnpm.g36.sharexe.payload.VehicleResponse;

import java.util.List;
import java.util.stream.Collectors;

public class ModelMapper {
    public static VehicleResponse mapToVehicleResponse(Vehicle vehicle) {
        VehicleResponse response = new VehicleResponse();

        response.setBrand(vehicle.getBrand());
        response.setModel(vehicle.getModel());
        response.setCapacity(vehicle.getCapacity());
        response.setLicensePlate(vehicle.getLicensePlate());

        List<ImageResponse> images = vehicle.getImages().stream().map(image -> {
            ImageResponse imageResponse = new ImageResponse();
            imageResponse.setImageUrl(image.getImageUrl());
            return imageResponse;
        }).collect(Collectors.toList());

        response.setImages(images);

        return response;
    }
}
