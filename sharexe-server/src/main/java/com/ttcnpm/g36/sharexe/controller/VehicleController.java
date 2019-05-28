package com.ttcnpm.g36.sharexe.controller;

import com.ttcnpm.g36.sharexe.exception.ResourceNotFoundException;
import com.ttcnpm.g36.sharexe.model.Vehicle;
import com.ttcnpm.g36.sharexe.payload.APIResponse;
import com.ttcnpm.g36.sharexe.payload.MultiItemsResponse;
import com.ttcnpm.g36.sharexe.payload.VehicleRequest;
import com.ttcnpm.g36.sharexe.payload.VehicleResponse;
import com.ttcnpm.g36.sharexe.repository.UserRepository;
import com.ttcnpm.g36.sharexe.repository.VehicleRepository;
import com.ttcnpm.g36.sharexe.security.CurrentUser;
import com.ttcnpm.g36.sharexe.security.UserPrincipal;
import com.ttcnpm.g36.sharexe.service.VehicleService;
import com.ttcnpm.g36.sharexe.utils.AppConstants;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping("/api/vehicles")
public class VehicleController {

    private final VehicleRepository vehicleRepository;

    private final VehicleService vehicleService;

    public VehicleController(VehicleRepository vehicleRepository, UserRepository userRepository, VehicleService vehicleService) {
        this.vehicleRepository = vehicleRepository;
        this.vehicleService = vehicleService;
    }

    @PostMapping
    // TODO: only driver can add new own vehicle
    public ResponseEntity<?> addNewVehicle(@Valid @RequestBody VehicleRequest request, @CurrentUser UserPrincipal currentUser) {

        Vehicle newVehicle = vehicleService.addNewVehicle(request, currentUser);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest().path("/{vehicleId}")
                .buildAndExpand(newVehicle.getId()).toUri();

        return ResponseEntity.created(location)
                .body(new VehicleResponse(newVehicle.getId()));
    }

    @PutMapping("/{vehicleId}")
    public ResponseEntity<?> editExistingVehicle(@Valid @RequestBody VehicleRequest request,
                                                 @PathVariable Long vehicleId,
                                                 @CurrentUser UserPrincipal currentUser) {
        vehicleService.editExistingVehicle(request, vehicleId, currentUser);

        return ResponseEntity.ok()
                .body(new APIResponse(true, "The vehicle has been modified successfully."));
    }

    @GetMapping
    public MultiItemsResponse<VehicleResponse> getAllVehicles(@CurrentUser UserPrincipal currentUser,
                                                              @RequestParam(value = "page", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int page,
                                                              @RequestParam(value = "size", defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int size) {
        return vehicleService.getAllVehicles(currentUser, page, size);
    }

    @GetMapping("/{vehicleId}")
    public VehicleResponse getVehicleById(@CurrentUser UserPrincipal currentUser, @PathVariable Long vehicleId) {
        return vehicleService.getVehicleById(currentUser, vehicleId);
    }

    @DeleteMapping("/{vehicleId}")
    public ResponseEntity<?> deleteVehicle(@PathVariable Long vehicleId) {
        Vehicle vehicle = vehicleRepository.findById(vehicleId)
                .orElseThrow(() -> new ResourceNotFoundException("Vehicle", "id", vehicleId));

        vehicleRepository.delete(vehicle);

        return ResponseEntity.ok(new APIResponse(true, "Delete the vehicle successfully."));
    }
}
