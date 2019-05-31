package com.ttcnpm.g36.sharexe.utils;

import com.ttcnpm.g36.sharexe.model.Trip;
import com.ttcnpm.g36.sharexe.model.Vehicle;
import com.ttcnpm.g36.sharexe.payload.ImageResponse;
import com.ttcnpm.g36.sharexe.payload.TripResponse;
import com.ttcnpm.g36.sharexe.payload.VehicleResponse;

import java.util.List;
import java.util.stream.Collectors;

public class ModelMapper {
    public static VehicleResponse mapToVehicleResponse(Vehicle vehicle) {
        VehicleResponse response = new VehicleResponse();
        response.setId(vehicle.getId());
        response.setBrand(vehicle.getBrand());
        response.setModel(vehicle.getModel());
        response.setCapacity(vehicle.getCapacity());
        response.setLicensePlate(vehicle.getLicensePlate());

//        List<ImageResponse> images = vehicle.getImages().stream().map(image -> {
//            ImageResponse imageResponse = new ImageResponse();
//            imageResponse.setImageUrl(image.getImageUrl());
//            return imageResponse;
//        }).collect(Collectors.toList());

//        response.setImages(images);

        return response;
    }

    public static TripResponse mapToTripResponse(Trip trip) {
        TripResponse response = new TripResponse();
        response.setId(trip.getId());
        response.setFrom(trip.getStartingPoint());
        response.setTo(trip.getDestination());
        response.setBegin(trip.getBeginAt());
        response.setNumOfPeople(trip.getParticipants().size());
        response.setDuration(Calculator.betweenDates(trip.getEndAt(), trip.getBeginAt()));
        response.setCreatedBy(trip.getCreatedBy());

        return response;
    }
}
