package com.ttcnpm.g36.sharexe.service;

import com.ttcnpm.g36.sharexe.exception.ResourceNotFoundException;
import com.ttcnpm.g36.sharexe.model.User;
import com.ttcnpm.g36.sharexe.model.Vehicle;
import com.ttcnpm.g36.sharexe.model.VehicleImage;
import com.ttcnpm.g36.sharexe.payload.MultiItemsResponse;
import com.ttcnpm.g36.sharexe.payload.VehicleRequest;
import com.ttcnpm.g36.sharexe.payload.VehicleResponse;
import com.ttcnpm.g36.sharexe.repository.UserRepository;
import com.ttcnpm.g36.sharexe.repository.VehicleRepository;
import com.ttcnpm.g36.sharexe.security.UserPrincipal;
import com.ttcnpm.g36.sharexe.utils.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class VehicleService {

    private final VehicleRepository vehicleRepository;
    private final UserRepository userRepository;

    public VehicleService(VehicleRepository vehicleRepository, UserRepository userRepository) {
        this.vehicleRepository = vehicleRepository;
        this.userRepository = userRepository;
    }

    public Vehicle addNewVehicle(VehicleRequest request, UserPrincipal currentUser) {
        Vehicle newVehicle = new Vehicle();

        User curr = userRepository.getOne(currentUser.getId());
        newVehicle.setOwner(curr);

        populate(request, newVehicle);

        return vehicleRepository.save(newVehicle);
    }

    public Vehicle editExistingVehicle(VehicleRequest request, Long vehicleId, UserPrincipal currentUser) {
        Vehicle existingVehicle = vehicleRepository.findById(vehicleId)
                .orElseThrow(() -> new ResourceNotFoundException("Vehicle", "id", vehicleId));

        populate(request, existingVehicle);

        return vehicleRepository.save(existingVehicle);
    }

    private void populate(VehicleRequest request, Vehicle recevier) {
        recevier.setBrand(request.getBrand());
        recevier.setModel(request.getModel());
        recevier.setLicensePlate(request.getLicensePlate());
        recevier.setCapacity(request.getCapacity());
        if (request.getImages() != null) {
            request.getImages().forEach(image -> recevier.addImage(new VehicleImage(image.getImageUrl())));
        }
    }

    public MultiItemsResponse<VehicleResponse> getAllVehicles(UserPrincipal currentUser, int page, int size) {
        User owner = userRepository.getOne(currentUser.getId());

        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "createdAt");
        Page<Vehicle> vehicles = vehicleRepository.findAllByOwner(owner, pageable);

        if (vehicles.getTotalElements() == 0) {
            return new MultiItemsResponse<>(Collections.emptyList(), vehicles.getNumber(),
                    vehicles.getSize(), vehicles.getTotalElements(), vehicles.getTotalPages(), vehicles.isLast());
        }

        List<VehicleResponse> responses = vehicles.map(ModelMapper::mapToVehicleResponse).getContent();

        return new MultiItemsResponse<>(responses, vehicles.getNumber(), vehicles.getSize(),
                vehicles.getTotalElements(), vehicles.getTotalPages(), vehicles.isLast());
    }

    public VehicleResponse getVehicleById(UserPrincipal currentUser, Long vehicleId) {
        Vehicle vehicle = vehicleRepository.findById(vehicleId)
                .orElseThrow(() -> new ResourceNotFoundException("Vehicle", "id", vehicleId));

        // Return empty object if the vehicle does not belong to currentUser
        if (!vehicle.getOwner().getId().equals(currentUser.getId())) {
            return new VehicleResponse();
        }

        return ModelMapper.mapToVehicleResponse(vehicle);
    }
}
